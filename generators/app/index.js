'use strict';
var path = require("path");
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var mkdirp = require('mkdirp');

module.exports = yeoman.Base.extend({

  constructor: function () {
    yeoman.Base.apply(this, arguments);

    this.appname = this.appname || path.basename(process.cwd());
    this.appname = _.kebabCase(this.appname);

    this.argument('appname', {
      desc: 'The application name',
      type: String,
      optional: true,
      required: false,
      defaults: this.appname
    });
    this.appname = _.kebabCase(this.appname);

    this.option('skip-install', {
      desc: 'Skip the bower and node installations',
      type: Boolean,
      defaults: false
    });
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to ' + chalk.red('\nangular2-sass-gulp-heroku\n') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'appname',
        message: 'What is your the name of your project?:',
        default: _.kebabCase(this.appname)
      },
      {
        type: 'input',
        name: 'appdesc',
        message: 'Short description of your project(sets description in package.json): ',
        default: 'Angular2 Application'
      },
      {
        type: 'input',
        name: 'gitrepo',
        message: 'Github URL of this repo(sets Github URL in package.json): ',
        default: ''
      }
    ];

    this.prompt(prompts, function (answers) {
      this.answers = answers;
      this.appname = this.answers.appname ? _.kebabCase(this.answers.appname) : _.kebabCase(this.appname);
      done();
    }.bind(this));
  },

  writing: function () {
    this.log(chalk.green.bold("\nGenerating application...\n"));

    var statics = [
      "Procfile",
      "angular-cli-build.js",
      "gulpfile.js",
      "tslint.json",
      "README.md",
      "package.json",
      "typings.json",
      ".clang-format",
      ".editorconfig",
      ".gitignore"
    ];

    var directories = [
      "src",
      "config",
      "e2e"
    ];

    var emptiyDirectories = [
      "src/app/components",
      "src/app/pipes",
      "src/app/services",
      "public"
    ];

    statics.forEach(function (f) {
      this.fs.copy(this.templatePath(f), this.destinationPath(this.answers.appname + '/' + f));
    }.bind(this));

    this.fs.copyTpl(
      this.templatePath("package.json"),
      this.destinationPath(this.answers.appname + '/package.json'),
      {
        appName: this.answers.appname,
        appDesc: this.answers.appdesc,
        gitRepo: this.answers.gitrepo
      }
    );

    this.fs.copyTpl(
      this.templatePath("README.md"),
      this.destinationPath(this.answers.appname + '/README.md'),
      {
        appName: this.answers.appname,
        gitRepo: this.answers.gitrepo
      }
    );

    this.fs.copyTpl(
      this.templatePath("angular-cli.json"),
      this.destinationPath(this.answers.appname + '/angular-cli.json'),
      {
        appName: this.answers.appname
      }
    );

    emptiyDirectories.forEach(function (f) {
      mkdirp(this.destinationPath(this.answers.appname + '/' + f), function (err) {
        if (err) {
          this.log(chalk.red('\nError while creating emty directories: ') + err);
        }
      }.bind(this));
    }.bind(this));

    directories.forEach(function (f) {
      this.fs.copy(this.templatePath(f), this.destinationPath(this.answers.appname + '/' + f));
    }.bind(this));
  },

  install: function () {
    process.chdir(this.destinationRoot() + '/' + this.answers.appname);
    this.installDependencies({
      bower: false,
      skipInstall: this.options['skip-install']
    });
  },

  end: function () {
    this.log("Project created at: ", this.destinationRoot() + '/' + this.answers.appname);
    this.log(chalk.green.bold('\nApp generated successfully.\n'));
  }
});
