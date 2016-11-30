# generator-angular2-sass-gulp-heroku

[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![NPM version][npm-image]][npm-url]

A Yeoman generator to create an Angular2 startup project with following features:
* Generate Angular2 apps based on newer Webpack support, which is now supported by default in [angular-cli](https://github.com/angular/angular-cli)
* [ng2-bootstrap](https://github.com/valor-software/ng2-bootstrap) support out of the box
* Auto-compilation support for SCSS
* Configuration for Deployment on Heroku
* Uses Express to serve from Heroku

## Installation

First, install [angular-cli](https://github.com/angular/angular-cli), [Yeoman](http://yeoman.io) and generator-angular2-sass-gulp-heroku using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g angular-cli
npm install -g yo
npm install -g generator-angular2-sass-gulp-heroku
```

Then generate your new project:

```sh
yo angular2-sass-gulp-heroku
```
This will create a new Angular2 project in the directory you executed the command listed above.

To check what all options you can pass to the generator, run:

```sh
yo angular2-sass-gulp-heroku --help
```

**NOTE:** The **README** file of the generated project contains all the details regarding how to work with it.

## License
Apache-2.0

## Author
[Tushar Chauhan](https://github.com/tushar-chauhan)


[npm-image]: https://badge.fury.io/js/generator-angular2-sass-gulp-heroku.svg
[npm-url]: https://npmjs.org/package/generator-angular2-sass-gulp-heroku
[travis-image]: https://travis-ci.org/tushar-chauhan/generator-angular2-sass-gulp-heroku.svg?branch=master
[travis-url]: https://travis-ci.org/tushar-chauhan/generator-angular2-sass-gulp-heroku
[daviddm-image]: https://david-dm.org/tushar-chauhan/generator-angular2-sass-gulp-heroku.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/tushar-chauhan/generator-angular2-sass-gulp-heroku
