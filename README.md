# Overview

Welcome to the Tetris-Rush project, a modern take on the classic Tetris game. This project is a fully functional Tetris game that includes features such as a game loop that updates the game state, a player piece that can be moved and rotated, collision detection, and score updating. The game is built with a focus on clean, efficient code and a user-friendly interface. The game board is dynamically created and rendered on a canvas element, and the game state is constantly updated and displayed to the player.

# Technologies and Frameworks

- HTML5
- CSS3
- JavaScript (ES6)
- Vite
- Standard (for linting)

# Installation

Follow these steps to install and run the project:

## Prerequisites

1. Install Node.js or a similar JavaScript runtime environment. You can download Node.js from [here](https://nodejs.org/en/download/).
2. Ensure you have a web server to host the HTML file and serve it to clients. If you don't have one, you can use packages like [http-server](https://www.npmjs.com/package/http-server) or [live-server](https://www.npmjs.com/package/live-server) for a simple, zero-configuration command-line HTTP server.

## Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/midudev/tetris-code-interview.git
```

## Install Dependencies

Navigate to the project directory and install the required dependencies using npm (Node Package Manager):

```bash
cd yourrepository
npm tetris-code-interview
```

This will install the "standard" package version 17.1.0 and the "vite" package version 4.4.5 as development dependencies, as specified in the `package.json` file.

## Run the Project

You can now run the project using the following command:

```bash
npm run dev
```

This will start the development server. You can access the project by navigating to `http://localhost:5000` in your web browser.

## Note

Ensure your system supports the required CSS properties and fonts as specified in the `style.css` file. If not, you may need to adjust the CSS file or install the necessary fonts or browser extensions.
