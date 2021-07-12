const { exit } = require('process');
const readline = require('readline');
const replace = require('replace-in-file');
const { exec } = require('node:child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Which dependency manager do you want to use (npm or yarn)?', async answer => {
  let pm = 'yarn'
  
  if (answer == 'npm') {
    pm = 'npm'
    console.info('Using npm as package manager');
    await useNpm();

    console.info('You can safely delete the file "yarn.lock"');
    await exec('git commit -a -m Change package manager to npm')
  } else {
    pm = 'yarn'
    console.info('Using yarn as package manager');
  }
  await exec(pm + ' remove replace-in-file')
  exit(0);
});

async function useNpm() {
  await replace.replaceInFile({
    files: ['.github/workflows/app.yaml', '.github/workflows/website.yaml'],
    from: /\~\/\.yarn/g,
    to: '~/.npm'
  });
  await replace.replaceInFile({
    files: ['.github/workflows/app.yaml', '.github/workflows/website.yaml'],
    from: /yarn\.lock/g,
    to: 'package-lock.json'
  });
  await replace.replaceInFile({
    files: 'angular.json',
    from: '"packageManager": "yarn"',
    to: '"packageManager": "npm"'
  });
}
