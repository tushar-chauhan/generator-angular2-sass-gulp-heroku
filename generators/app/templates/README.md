## <%= appName %>

## Requirements
Node.js (version >= 5.0.0 or version < 6.0.0) is required for this project.
For instructions about installing Node.js, refer [Node.js Website](https://nodejs.org/en/)

## Getting started

Clone this repo into new project folder (e.g., `<%= appName %>`).
```bash
git clone <%= gitRepo %> <%= appName %>
cd <%= appName %>
```
## Install npm packages

Install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers:  You must run all of these commands in administrator mode**

```bash
npm install
npm run dev
```

The `npm run dev` command first compiles the application,
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watches for file changes.

Shut it down manually with Ctrl-C.

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm run dev` - runs the compiler and a server at the same time, both in "watch mode".

Below are the test related scripts:
* `npm run test` - compiles, runs and watches the karma unit tests
* `npm run webdriver:update` - ONE TIME update for protractor end-to-end (e2e) tests. Installs the webdriver locally for the project
* `npm run e2e` - run protractor e2e tests, written in JavaScript (**e2e-spec.js**)

### File Structure for 'app' & 'styles' directories

```sh
.
├── app
│   ├── components
│   │   └── app-component
│   │       ├── app.component.spec.ts
│   │       └── app.component.ts
│   ├── pipes
│   ├── services
│   ├── index.html
│   └── main.ts
├── styles
│   └── main.scss
```

One you run `npm run dev`, a directory named `build` will be created which will be delivered through lite-server for development.

'index.html' is the entry point of the application, and is monitored by gulp.

According to this structure, it will be easy if you:
* keep all components in the _'components'_ folder
* keep the templates related to components in specific component folder
* keep all pipes in the _'pipes'_ folder
* keep all services in the _'services'_ folder

Moreover, you can create any other folders to hold TypeScript files within 'app' directory, the compilation will recursively compile and create appropriate structure in the 'build' directory.

The 'styles' folder can hold all the SCSS files. Once you start the development server, gulp will take care of compiling and moving the CSS files in appropriate location within the generated 'build' directory.

**NOTE:** Don't forget the imports within the SCSS files, as gulp will compile them all and create a single CSS file.

## Deploying on Heroku
You must have a Heroku account to create and app on Heroku.

You also need to install & Log into [Heroku Toolbelt](https://toolbelt.heroku.com/) in your local machine

Following are the steps for Heroku deployment(If you haven't created app from Heroku Dashboard):
1. Initiate GIT in your project using `git init`
2. Create a Heroku App using `heroku create` from the root of the project.
3. Once created, verify the remote in your git configuration using `git remote -v`
4. Deploy using `git push heroku master`

Following are the steps for Heroku deployment(If you have created the app from Heroku Dashboard & have already initiated git in your local project):
1. Run `heroku git:remote -a [YOUR-APP-NAME]`, to add heroku remote in your git configuration.
2. Deploy using `git push heroku master`

## Testing

This repo adds both karma/jasmine unit test and protractor end-to-end testing support.

These tools are configured for specific conventions described below.

*It is unwise and rarely possible to run the application, the unit tests, and the e2e tests at the same time.
We recommend that you shut down one before starting another.*

### Unit Tests
TypeScript unit-tests are usually in the `app` folder. Their filenames must end in `.spec`.

Run it with `npm run test`.

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner.
Both the compiler and the karma watch for (different) file changes.

Shut it down manually with Ctrl-C.

Test-runner output appears in the terminal window.
We can update our app and our tests in real-time, keeping a weather eye on the console for broken tests.
Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (Ctrl-C) and
restart it. No worries; it's pretty quick.

The `HTML-Reporter` is also wired in. That produces a prettier output; look for it in `~_test-output/tests.html`.

### End-to-end (E2E) Tests

**BEFORE RUNNING THE FIRST TEST** you must update the Selenium webdriver. Run `npm run webdriver:update`.

E2E tests are usually at the project root, above the `app` folder.
Their filenames must end in `e2e-spec.js`.

E2E tests must be written in JavaScript (the author has not figured out how to write them in TS yet).

Look for the example `e2e-spec.ts` in the root folder.
Add more `e2e-spec.js` files as you wish (although one usually suffices for small projects);
we configured protractor to find them.


Thereafter, run them with `npm run e2e`.

That command first compiles, then simultaneously starts the Http-Server at `localhost:8080`
and launches protractor.  

The pass/fail test results appear at the bottom of the terminal window.
A custom reporter (see `protractor.config.js`) generates a  `./protractor-results.txt` file
which is easier to read; this file is excluded from source control.

Shut it down manually with Ctrl-C.
