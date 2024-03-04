# Redesign of the Kasa website interface

Graphic redesign of the front end of the Kasa website for renting flats between individuals

## Getting started

Local installation of the project

### Requirements

- [![Node](https://img.shields.io/badge/Node-gray?style=flat-square&logo=nodedotjs&logoColor=339933&link=https://nodejs.org/en)](https://nodejs.org/en)
- [![NPM](https://img.shields.io/badge/NPM-gray?style=flat-square&logo=npm&logoColor=CB3837&link=https://www.npmjs.com/)](https://www.npmjs.com/) ou [![Yarn](https://img.shields.io/badge/Yarn-gray?style=flat-square&logo=yarn&logoColor=2C8EBB&link=https://classic.yarnpkg.com/en/)](https://classic.yarnpkg.com/en/)

### Installation

Clone the repository

```
git clone https://github.com/faabfab/OC-P11-kasa.git P11-kasa
```

Install dependencies

```nodejs
cd P11-kasa
npm install
```

Folders and files installed

```plaintext
|   .eslintrc
|   .gitignore
|   .prettierrc
|   netlify.toml
|   package-lock.json
|   package.json
|   README.md
|
+---build
|   |   asset-manifest.json
|
+---node_modules
|
+---public
|       favicon.ico
|       index.html
|       logo192.png
|       logo512.png
|       manifest.json
|       robots.txt
|
\---src
    |   App.test.js
    |   index.js
    |   netlify.toml
    |   reportWebVitals.js
    |   Router.jsx
    |   setupTests.js
    |
    +---assets
    |       about_header.png
    |       arrow.png
    |       arrow_back.png
    |       arrow_forward.png
    |       home_header.png
    |       kasa.png
    |       kasa_white.png
    |       logo.svg
    |       star.svg
    |
    +---components
    |       Banner.jsx
    |       Card.jsx
    |       Dropdown.jsx
    |       DropdownArrow.jsx
    |       DropdownText.1.jsx
    |       DropdownText.jsx
    |       Footer.jsx
    |       Header.jsx
    |       Host.jsx
    |       Rating.jsx
    |       Slider.jsx
    |       Tags.jsx
    |
    +---data
    |   |   about.json
    |   |   logements.json
    |   |   React App.html
    |   |
    |   \---React App_files
    |           accommodation-1-1.jpg
    |           bundle.js.t‚l‚chargement
    |           profile-picture-1.jpg
    |
    +---layouts
    |       Layout.jsx
    |
    +---pages
    |       About.jsx
    |       Accommodation.jsx
    |       Error.jsx
    |       Home.jsx
    |
    \---style
            accommodation.scss
            card.scss
            dropdown.scss
            error.scss
            footer.scss
            header.scss
            home.scss
            index.scss
            slider.scss
            tags.scss
            _variables.scss


```

## Startup

Run the command

`npm run start`

or

`yarn start`

Open the browser

`http://localhost:3000/`

## Made with

- [![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-gray?style=flat-square&logo=visualstudiocode&logoColor=007ACC&link=https://code.visualstudio.com/)](https://code.visualstudio.com/) - Text editor
- [![React](https://img.shields.io/badge/React-gray?style=flat-square&logo=react&logoColor=61DAFB&link=https://fr.legacy.reactjs.org/)](https://fr.legacy.reactjs.org/) - JavaScript library
- [![Sass](https://img.shields.io/badge/Sass-gray?style=flat-square&logo=sass&logoColor=CC6699&link=https://sass-lang.com/)](https://sass-lang.com/) - css extension language

## Versions

**Latest stable version :** 0.1

## Author

- **Escobar Fabrice** _alias_ [@faabfab](https://github.com/faabfab)
