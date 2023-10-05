# cs2-buybinds

Copyright © 2014-2018 Jesse Webb

This code is available under [the MIT License](https://github.com/jessewebb/csgo-buynds/blob/gh-pages/LICENSE).

`Version: 1.0.0`

## About cs2-buybinds

**cs2-buybinds** is a fork of [csgo-buynds](https://github.com/jessewebb/csgo-buynds).

Buy binds, also known as buy scripts, are commands for the _Counter-Strike_ PC games that allow quick, 1-button purchasing of weapons and equipment.

Visit the [CS2-BuyBinds website](https://justinknguyen.github.io/cs2-buybinds/) and try out the online Buy Binds Generator!

## Dev Info

This project uses [GitHub Pages](https://pages.github.com) to host the website. It [does not use Jekyll](https://github.com/blog/572-bypassing-jekyll-on-github-pages).

The main branch, [`gh-pages`](https://github.com/jessewebb/csgo-buynds/tree/gh-pages), is where stable releases are deployed to.

Development should be done on the [`dev`](https://github.com/jessewebb/csgo-buynds/tree/dev) branch.
[Pull requests](https://github.com/jessewebb/csgo-buynds/pulls) are welcomed!

This project is a simple, static website built with pure HTML5, CSS3, and JavaScript. There is nothing to compile.

Here is a list of which 3rd party libraries are being used:

- [jQuery](https://jquery.com) (version: 3.2.1)
- [AngularJS](https://angularjs.org) (version: 1.6.6)
- [Bootstrap](https://getbootstrap.com) (version: 3.3.7)
- [AngularUI](https://angular-ui.github.io)
    - [UI Bootstrap](https://angular-ui.github.io/bootstrap) (version 2.5.0)
    - [UI Select](https://angular-ui.github.io/ui-select) (version 0.19.8)
- [clipboard.js](https://clipboardjs.com) (version: 1.7.1)

Tests are written with [Jasmine](https://jasmine.github.io) (version: 2.5.2).
- You can [run the tests in your browser](http://csgobuynds.com/tests/SpecRunner.html).
- Or you can run them from the command line with [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com).  
  ```
  npm install
  npm test
  ```  
  (The project is configured to use [Karma](https://karma-runner.github.io) (version: 1.3.0) to run the tests.)

Jesse's preferred JavaScript IDE is [JetBrain's WebStorm](https://www.jetbrains.com/webstorm).

To start a local development server:
1. Install http-server:
    ```
    npm install -g http-server
    ```
2. Start the server:
    ```
    http-server
    ```
3. Access the local website:
    ```
    http://localhost:8080
    ```
