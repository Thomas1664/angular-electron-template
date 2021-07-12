![CI](https://github.com/Thomas1664/angular-electron-template/actions/workflows/app.yml/badge.svg)

# Information
This template uses the following setup:

- Package Manager: yarn (or npm)
- Angular 12
- Styles: SCSS
- Electron 13
- GitHub Actions
- Dependabot

# Installation

## Choose package manager
After installation you are asked to choose a package manager. The default package manager is yarn. You can type either `npm` or `yarn`. Any wrong input will default to yarn. The workflow files and the package manager that Angular uses are adjusted based on this setting to use either npm or yarn.

## Install a Angular Application
This template only contains an Angular Workspace in order to give you more control to configure the application. You have to install an application by yourself using the following command:

`ng generate application --project-root=.`

This command gives you the exact same result as the default configuration of `ng new`. For more information visit the [documentation about `ng generate application`](https://angular.io/cli/generate#application).

### Angular Project Name
Replace `angular-electron-template` (`electron/main.ts`, line 15) with the name of your generated Angular application. This is required because Angular stores its compiled output file at `dist/name-of-application`. If you provided the wrong path to the html-file of your application, Electron will not work!

```typescript
	// and load the index.html of the app.
	mainWindow.loadFile('dist/angular-electron-template/index.html')
```

(`electron/main.ts`, line 15)

# After Installation
- You may delete `postinstall.js` as well as the `postinstall` script in `package.json`
- If you selected `npm` as your package manager you may delete `yarn.lock` as well

# Contribute
Contributions - espechially regarding the postinstall-process - are welcome!