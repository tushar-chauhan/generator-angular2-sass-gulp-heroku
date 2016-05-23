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
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to ' + chalk.red('angular2-sass-gulp-heroku') + ' generator!',
      { maxLength: 25  }
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
        message: 'Github URL of this project(sets Github URL in package.json): ',
        default: ''
      }
    ];

    return this.prompt(prompts).then(function (answers) {
      this.answers = answers;
      this.appname = this.answers.appname ? _.kebabCase(this.answers.appname) : _.kebabCase(this.appname);
    }.bind(this));
  },

  writing: function () {
    this.log(chalk.green.bold("\nGenerating application...\n"));

    var statics = [
      "Procfile",
      "angular-cli-build.js",
      "gulpfile.js",
      "tslint.json",
      "typings.json",
      ".clang-format",
      ".editorconfig",
      ".gitignore",
      ".npmignore"
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

    var self = this;
    statics.forEach(function (f) {
      if (self.fs.exists(self.templatePath(f))) {
        self.fs.copy(self.templatePath(f), self.destinationPath(path.join(self.answers.appname + '/' + ((f === '.npmignore') ? '.gitignore' : f))));
      }
    });

    self.fs.copyTpl(
      self.templatePath("package.json"),
      self.destinationPath(self.answers.appname + '/package.json'),
      {
        appName: self.answers.appname,
        appDesc: self.answers.appdesc,
        gitRepo: self.answers.gitrepo
      }
    );

    self.fs.copyTpl(
      self.templatePath("README.md"),
      self.destinationPath(self.answers.appname + '/README.md'),
      {
        appName: self.answers.appname,
        gitRepo: self.answers.gitrepo
      }
    );

    self.fs.copyTpl(
      self.templatePath("angular-cli.json"),
      self.destinationPath(self.answers.appname + '/angular-cli.json'),
      {
        appName: self.answers.appname
      }
    );

    emptiyDirectories.forEach(function (f) {
      mkdirp(self.destinationPath(self.answers.appname + '/' + f), function (err) {
        if (err) {
          self.log(chalk.red('\nError while creating emty directories: ') + err);
        }
      });
    });

    directories.forEach(function (f) {
      self.fs.copy(self.templatePath(f), self.destinationPath(self.answers.appname + '/' + f));
    });
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
