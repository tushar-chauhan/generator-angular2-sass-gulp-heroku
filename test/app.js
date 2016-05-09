'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-angular2-sass-gulp-heroku:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({appname: 'test'})
      .withOptions({'skip-install': true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      "Procfile", "angular-cli-build.js", "gulpfile.js", "tslint.json", "README.md", "angular-cli.json", "package.json", "typings.json", ".clang-format", ".editorconfig", ".gitignore"
    ]);
  });
});
