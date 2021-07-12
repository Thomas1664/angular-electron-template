![CI](https://github.com/Thomas1664/angular-electron-template/actions/workflows/app.yml/badge.svg)

# Information
This template uses the following setup:

- Package Manager: yarn
- Angular 12
- Styles: SCSS
- Electron 13
- GitHub Actions
- Dependabot

# Installation

## Use npm as package manager
To use npm instead of yarn change the following lines:

- In `angular.json` change `packageManager` to `npm`
- In `.github/workflows/app.yml` change lines 

## Change Angular Project Name
Replace `angular-electron-template` with your desired project name (a simple find-and-replace will do the job):

- `package.json` line 2
- `angular.json` lines 9, 26, 78, 81, 89, 113
- `electron/main.ts` line 15
- `karma.conf.js` line 28