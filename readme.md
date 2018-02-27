# Spike Foundation Template
w/ Semantic UI

## Setup

- make sure [node.js](http://nodejs.org) is at version >= `6`
- `npm i spike -g --save`
- clone this repo down and `cd` into the folder
- run `npm install`
- run `gulp semanticBuild` for Semantic UI
- run `spike watch` or `spike compile`

## Workflow

Sass and Foundation components process to main.css via Gulp. Main.css then processed via Spike's PostCSS implementation to `public/` directory. Semantic UI is built separately from /vendors and compiled to /assets/vendors before also being processed via PostCSS.

- Compile sass and watch for file changes with `gulp`
- Any changes to Semantic UI library can be compiled with `gulp semanticBuild`

## Testing
Tests are located in `test/**` and are powered by [ava](https://github.com/sindresorhus/ava)
- `npm install` to ensure devDeps are installed
- `npm test` to run test suite
