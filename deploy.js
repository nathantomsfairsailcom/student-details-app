#!/usr/bin/env node

// NodeJS
const {spawn} = require('child_process');
const path = require('path');

// Directories
const rootDir = path.resolve(__dirname);
const backendDir = path.resolve(rootDir, 'functions');

const preparePath = (path, project) => {
  return new Promise((resolve, reject) => {
    console.log('\n==========/ Installing dependencies for ' + project);
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

const buildProject = () => {
  return new Promise((resolve, reject) => {
    console.log('\n==========/ Building frontend.');
    spawn(
      'ng',
      ['build'],
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

const deploy = () => {
  return new Promise((resolve, reject) => {
    console.log('\n==========/ Deploying to Firebase.');
    spawn(
      'firebase',
      ['deploy'],
      {
        cwd: rootDir,
        stdio: 'inherit',
        shell: true
      }
    ).on('exit', (code, signal) => {
      if (code === 0) {
        resolve();
      } else {
        reject(`\nDeployment failed with exit code:- ${code}.`);
      }
    });
  });
};

const main = async () => {
  try {
    await preparePath(rootDir, 'frontend');
    await preparePath(backendDir, 'backend');
    await buildProject();
    await deploy();
  } catch (err) {
    console.error(err);
  }
}

main();
