# NPM Favorites App

## Overview

This project is a web application built using React, TypeScript, and Tailwind CSS. It allows users to search for NPM packages, add their favorite packages with personalized reasons, and view, edit, or delete them later.

## Features

- **Search for NPM Packages:** Users can search for NPM packages using the [Npms.io API](https://api.npms.io/v2/search?q=packageName) by entering the package name.
- **Add to Favorites:** Users can add their favorite packages by providing a reason for each package. The package name and reason are stored in the local storage.
- **View Favorites:** Users can view all their favorite packages on the main page. Each package has options to view, edit, or delete.
- **View Option:** Users can view the reason why a particular package is their favorite.
- **Edit Option:** Users can edit the reason for their favorite package.
- **Delete Option:** Users can delete a particular package from their favorites.
- **Add Page:** Users can navigate to the add page to search for new packages, provide reasons, and add them to their favorites.

## Tech Stack

- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A superset of JavaScript that adds static types.
- **Tailwind CSS:** A utility-first CSS framework.
- **Axios:** A promise-based HTTP client for making requests to the Npms.io API.
- **LocalStorage:** Used to store user's favorite packages locally.

## How to Run

1. Clone the repository:

  ```shell
  git clone "https://github.com/anurag0x/npmpackageApp.git"
  ```
2. Install Dependencies:

  ```shell
  npm install
```
3. Run The Application:
 
  ```shell
  npm start
```
