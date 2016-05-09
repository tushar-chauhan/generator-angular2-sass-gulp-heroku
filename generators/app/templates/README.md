## <%= appName %>

## Requirements
Node.js version **4.0.0 or greater** is required.
For instructions about installing Node.js, refer [Node.js Website](https://nodejs.org/en/)

## Getting started

Clone this repo into new project folder (e.g., `angular2-app`).
```bash
git clone <%= gitRepo %> angular2-app
cd angular2-app
```

This app has [angular-cli](https://github.com/angular/angular-cli) as a dependency. So, you can use all the available commands in it.

You can also use SASS or CSS depending on what you are comfortable with. Just use appropriate extensions(.scss or .css)

## Install npm packages

Install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers:  You must run all of these commands in administrator mode**

```bash
npm install
```

### Running the application

To run the application locally, execute:

```sh
npm start
```
Shut it down manually with Ctrl-C.

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - Starts the application in development environment and also watches for file changes.
* `npm run pree2e` - ONE TIME update for protractor end-to-end (e2e) tests. **_Installs the webdriver locally for the project_**

### Angular CLI commands
you can use all the angular-cli commands within this app. Few useful commands are:

* `ng e2e`: Run end-to-end tests
* `ng test`: Start Jasmine/Karma test-suite

### Structure for 'app' directory

```sh
├── src
│   ├── app
│   │   ├── components
│   │   ├── pipes
│   │   ├── services
│   │   ├── shared
│   │   │   └── index.ts
│   │   ├── environment.ts
│   │   ├── index.ts
│   │   ├── site.component.html
│   │   ├── site.component.scss
│   │   ├── site.component.spec.ts
│   │   └── site.component.ts
```

Once you run `npm start`, a directory named `dist` will be created.

'index.html' is the entry point of the application.

As per this structure, it will be easy if you:
* keep all components in the _'components'_ folder
* keep the templates and CSS/SCSS related to components in specific component folder
* keep all pipes in the _'pipes'_ folder
* keep all services in the _'services'_ folder

In this project 'site.component' is the first component to load, but you can change it.
To create new components, services, pipes etc in their respective directories. Checkout the documentation of [angular-cli](https://github.com/angular/angular-cli). e.g. for creating a header component in this project you can run:

```sh
ng g component components/header
```

This will create the new component in the components directory itself.

Moreover, you can create any other folders to hold TypeScript files within 'app' directory, the compilation will recursively compile and create appropriate structure in the 'dist' directory.

Bootstrap SASS is already included in the application using the 'styles/main.scss' file. If you like using SASS only, you can create further SCSS files within same directory or component specific directories. SASS compilation is already enabled in this app.

## Testing

This repo adds both karma/jasmine unit test and protractor end-to-end testing support.

These tools are configured for specific conventions described below.

*It is unwise and rarely possible to run the application, the unit tests, and the e2e tests at the same time.
it is recommended that you shut down one before starting another.*

### End-to-end (E2E) Tests

**BEFORE RUNNING THE FIRST TEST** you must update the Selenium webdriver. Run

```sh
npm run pree2e
```

You will also need to start you app using

```sh
npm start
```

E2E tests are usually at the project root, in the 'e2e' folder
Their filenames must end in `e2e.ts`.

Look for the example `e2e.ts` in the root folder.
Add more `e2e.ts` files as you wish (although one usually suffices for small projects);

Thereafter, in another terminal window/tab run them with:

```sh
ng e2e
```

### Unit Tests

To initiate karma test runner, run:

```sh
ng test
```

## Deploying on Heroku
You must have an account to create an app on Heroku.

You also need to install & Log into [Heroku Toolbelt](https://toolbelt.heroku.com/) on your development machine

Following are the steps for Heroku deployment(If you haven't created a Heroku app from Dashboard & also haven't initiated git locally):

1. Initiate GIT in your project using `git init`
2. Create a Heroku App using `heroku create` from the root of the project.
3. Once created, verify the remote in your git configuration using `git remote -v`
4. Deploy using `git push heroku master`

Following are the steps for Heroku deployment(If you have created the Heroku app from Dashboard & have already initiated git in your local project):

1. Run `heroku git:remote -a [YOUR-APP-NAME]`, to add heroku remote in your git configuration.
2. Deploy using `git push heroku master`
