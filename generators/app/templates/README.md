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
```

### Running the application

To run the application locally, execute:

```sh
npm run dev
```

This command first compiles the application, and starts the `lite-server`.
The TypeScript compiler, Gulp and lite-server watches for future file changes.

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

Following are the steps for Heroku deployment(If you haven't created a Heroku app from  Dashboard & also haven't initiated git locally):
1. Initiate GIT in your project using `git init`
2. Create a Heroku App using `heroku create` from the root of the project.
3. Once created, verify the remote in your git configuration using `git remote -v`
4. Deploy using `git push heroku master`

Following are the steps for Heroku deployment(If you have created the Heroku app from Dashboard & have already initiated git in your local project):
1. Run `heroku git:remote -a [YOUR-APP-NAME]`, to add heroku remote in your git configuration.
2. Deploy using `git push heroku master`

## Testing

This repo adds both karma/jasmine unit test and protractor end-to-end testing support.

These tools are configured for specific conventions described below.

*It is unwise and rarely possible to run the application, the unit tests, and the e2e tests at the same time.
We recommend that you shut down one before starting another.*

### End-to-end (E2E) Tests

**BEFORE RUNNING THE FIRST TEST** you must update the Selenium webdriver. Run

```sh
npm run webdriver:update
```

E2E tests are usually at the project root, above the `app` folder.
Their filenames must end in `e2e-spec.js`.
E2E tests must be written in JavaScript(as ).

Look for the example `e2e-spec.ts` in the root folder.
Add more `e2e-spec.js` files as you wish (although one usually suffices for small projects);
we configured protractor to find them.

Thereafter, run them with:

```sh
npm run e2e
```

If you get an error while running it, create a directory named `_test_output` in the project root.

### Unit Tests

The official [Angular2 quickstart project](https://github.com/angular/quickstart) doesn't support Unit testing for now. I will update this post once there is some updates on this front.
