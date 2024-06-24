<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">Fun Spotify App</h3>

  <p align="center">
    Want to see what your Spotify Wrapped would look like today?!
    <br />
    <a href="https://github.com/ahuisinga/fun-spotify-app"><strong>Explore the docs »</strong></a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This simple site was created using Express and React, styled with basic TailwindCSS. It takes advantage of the Spotify API and OAuth flow to display your top artists, tracks, and genres. You can also adjust the timeline to view - 1 month, 6 months, 12 months.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

-   [![React][React.js]][React-url]
-   [![Express][Express]][Express-url]
-   [![Node.js][Node.js]][Node-url]
-   [![TailwindCSS][TailwindCSS.com]][TailwindCSS-url]
-   [![Chart.js][Chart.js]][Chartjs-url]
-   [![Vite][Vite]][Vite-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Set up your Spotify Developer App at [https://developer.spotify.com](https://developer.spotify.com). Add the following Redirect URLs. Please note that these may need to be updated for your local copy, especially the ports depending on your setup.
    - http://localhost:8888/login
    - http://localhost:8888/callback
    - http://localhost:5173
2. Clone the repo
    ```sh
    git clone https://github.com/ahuisinga/fun-spotify-app.git
    ```
3. Install NPM packages in both the `client` and `server` folders
    ```sh
    cd client
    npm install
    cd ../server
    npm install
    ```
4. Create a copy of the `.env.example` file in the `server` folder, name it `.env`. Update the variables with your Spotify app details. Ex:
    ```js
    const CLIENT_ID = "ENTER YOUR CLIENT ID";
    ```
5. Start the project from both the `server` and `client` folders
    ```sh
    cd server
    node index.js
    ```
    ```sh
    cd client
    npm run dev
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Once the app is running, you can connect your Spotify account. This will allow you to see your top tracks, artists, and genres.

You can also toggle the timeframe to view your top tracks, artists, and genres.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

-   [ ] Maybe not storing the access and refresh token as a cookie?
-   [ ] Allow users to create a playlist from the top tracks
-   [ ] Actually deploy this if I feel confident enought

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

-   Inspo to start this project --> [https://github.com/bchiang7/spotify-profile](https://github.com/bchiang7/spotify-profile)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/ahuisinga/fun-spotify-app.svg?style=for-the-badge
[contributors-url]: https://github.com/ahuisinga/fun-spotify-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ahuisinga/fun-spotify-app.svg?style=for-the-badge
[forks-url]: https://github.com/ahuisinga/fun-spotify-app/network/members
[stars-shield]: https://img.shields.io/github/stars/ahuisinga/fun-spotify-app.svg?style=for-the-badge
[stars-url]: https://github.com/ahuisinga/fun-spotify-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/ahuisinga/fun-spotify-app.svg?style=for-the-badge
[issues-url]: https://github.com/ahuisinga/fun-spotify-app/issues
[license-shield]: https://img.shields.io/github/license/ahuisinga/fun-spotify-app.svg?style=for-the-badge
[license-url]: https://github.com/ahuisinga/fun-spotify-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/annahuisinga
[product-screenshot]: images/spotify_screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Express]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express
[Express-url]: https://expressjs.com/
[Node.js]: https://img.shields.io/badge/Node.js-white?style=for-the-badge&logo=nodedotjs
[Node-url]: https://nodejs.org/en
[TailwindCSS.com]: https://img.shields.io/badge/tailwindcss-white?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4
[TailwindCSS-url]: https://tailwindcss.com
[TypeScript.com]: https://img.shields.io/badge/typescript-%233178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[HeadlessUI]: https://img.shields.io/badge/headless_ui-%2366E3FF?style=for-the-badge&logo=headlessui&logoColor=white
[HeadlessUI-url]: https://headlessui.com/v1
[Axios]: https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios
[Axios-url]: https://axios-http.com/docs/intro
[Chart.js]: https://img.shields.io/badge/Chart.js-white?style=for-the-badge&logo=chartdotjs&logoColor=FF6384
[Chartjs-url]: https://www.chartjs.org/
[Vite]: https://img.shields.io/badge/Vite-white?style=for-the-badge&logo=vite&logoColor=646CFF
[Vite-url]: https://vitejs.dev/guide/
