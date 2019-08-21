#!/usr/bin/env node

// NodeJS
const {spawn} = require('child_process');
const path = require('path');

// Directories
const rootDir = path.resolve(__dirname);
const backendDir = path.resolve(rootDir, 'functions');

const preparePath = (path, project) => {
  return new Promise((resolve, reject) => {
    console.log(`\n==========/ Installing ${project} dependencies.\n`);
    spawn(
      'npm',
      ['install'],
      {
        cwd: path,
        stdio: 'inherit',
        shell: true
      }
    ).on('exit', (code, signal) => {
      if (code === 0) {
        resolve();
      } else {
        reject(`\nnpm install failed with exit code:- ${code}.`);
      }
    });
  });
};

const buildFrontend = () => {
  return new Promise((resolve, reject) => {
    console.log('\n==========/ Building frontend.');
    spawn(
      'ng',
      ['build', '--prod'],
      {
        cwd: rootDir,
        stdio: 'inherit',
        shell: true
      }
    ).on('exit', (code, signal) => {
      if (code === 0) {
        resolve();
      } else {
        reject(`\nFrontend build failed with exit code:- ${code}.`);
      }
    });
  });
};

const deploy = (component, project) => {
  return new Promise((resolve, reject) => {
    console.log(`\n==========/ Deploying ${project} to Firebase.`);
    spawn(
      'firebase',
      ['deploy', '--only', component],
      {
        cwd: rootDir,
        stdio: 'inherit',
        shell: true
      }
    ).on('exit', (code, signal) => {
      if (code === 0) {
        resolve();
      } else {
        reject(`\nDeploying ${project} failed with exit code:- ${code}.`);
      }
    });
  });
};

const main = async () => {
  try {
    await preparePath(backendDir, 'backend');
    await deploy('functions', 'backend');
    await preparePath(rootDir, 'frontend');
    await buildFrontend();
    await deploy('hosting', 'frontend');
  } catch (err) {
    console.error(err);
  }
}

main();
