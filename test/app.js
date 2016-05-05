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
      "CHANGELOG.md", "Dockerfile", "LICENSE", "Procfile", "README.md", "bs-config.json", "e2e-spec.js", "favicon.ico", "gulpfile.js", "karma-test-shim.js", "karma.conf.js", "package.json", "protractor.config.js", "tsconfig.json", "tslint.json", "typings.json", "wallaby.js", ".dockerignore", ".editorconfig", ".gitignore"
    ]);
  });
});
