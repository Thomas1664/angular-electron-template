const { exit } = require('process');
const readline = require('readline');
const replace = require('replace-in-file')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Which dependency manager do you want to use (npm or yarn)?', async answer => {
  if (answer == "npm") {
    console.info('Using npm as package manager');
    await useNpm();
    console.info('You can safely delete the file "yarn.lock"')
  } else {
    console.info('Using yarn as package manager');
  }
  exit(0);
});

async function useNpm() {
  await replace.replaceInFile({
    files: ['.github/workflows/app.yaml', '.github/workflows/website.yaml'],
    from: /\~\/\.yarn/g,
    to: '~/.npm'
  })
  await replace.replaceInFile({
    files: ['.github/workflows/app.yaml', '.github/workflows/website.yaml'],
    from: /yarn\.lock/g,
    to: 'package-lock.json'
  })
  await replace.replaceInFile({
    files: 'angular.json',
    from: '"packageManager": "yarn"',
    to: '"packageManager": "npm"'
  })
}
