const express = require("express");
const app = express();
const cors = require("cors");
const querystring = require("node:querystring");
const request = require("request");

app.use(cors());

const client_id = "424f0f59b7a34503a24321669589c6b5";
const client_secret = "2f705170a4754a3984f6a01cdd377b20";
const redirect_uri = "http://localhost:8888/callback";
const FRONTEND_URI = "http://localhost:5173";

const generateRandomString = (length) => {
    const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
};

app.get("/login", function (req, res) {
    var state = generateRandomString(16);
    var scope = "user-top-read user-read-private";
    res.clearCookie("access_token");
    res.clearCookie("refresh_token");
    res.redirect(
        "https://accounts.spotify.com/authorize?" +
            querystring.stringify({
                response_type: "code",
                client_id,
                scope,
                redirect_uri,
                state,
                show_dialog: true,
            }),
    );
});

app.get("/callback", function (req, res) {
    var code = req.query.code || null;
    var state = req.query.state || null;

    if (state === null) {
        res.redirect(
            "/#" +
                querystring.stringify({
                    error: "state_mismatch",
                }),
        );
    } else {
        var authOptions = {
            url: "https://accounts.spotify.com/api/token",
            form: {
                code,
                redirect_uri,
                grant_type: "authorization_code",
            },
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                Authorization:
                    "Basic " +
                    new Buffer.from(client_id + ":" + client_secret).toString(
                        "base64",
                    ),
            },
            json: true,
        };
        request.post(authOptions, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                var access_token = body.access_token,
                    refresh_token = body.refresh_token;
                res.cookie("access_token", access_token, {
                    maxAge: body.expires_in * 1000,
                })
                    .cookie("refresh_token", refresh_token, {
                        maxAge: 24 * 60 * 60 * 1000,
                    })
                    .redirect(`${FRONTEND_URI}`);
            } else {
                res.redirect(
                    `${FRONTEND_URI}/#${querystring.stringify({
                        error: "invalid_token",
                    })}`,
                );
            }
        });
    }
});

app.get("/refresh_token", function (req, res) {
    var refresh_token = req.query.refresh_token;
    var authOptions = {
        url: "https://accounts.spotify.com/api/token",
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            Authorization:
                "Basic " +
                new Buffer.from(client_id + ":" + client_secret).toString(
                    "base64",
                ),
        },
        form: {
            grant_type: "refresh_token",
            refresh_token: refresh_token,
        },
        json: true,
    };

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var access_token = body.access_token,
                refresh_token = body.refresh_token;
            res.send({
                access_token: access_token,
                refresh_token: refresh_token,
            });
        }
    });
});

app.get("/logout", function (req, res) {
    res.clearCookie("access_token");
    res.clearCookie("refresh_token");
    res.redirect(`${FRONTEND_URI}`);
});

app.listen(8888, () => {
    console.log("server listening on port 8888");
});
