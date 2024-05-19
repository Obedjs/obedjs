#!/usr/bin/env ts-node

import * as path from 'path';
import { createDirectory, writeFile } from './utils/fileHelpers';
import { templates } from './utils/templates';
import { colors } from './utils/colors';
import * as fs from 'fs';
import { dockerfileTemplate } from './templates/docker.template';

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error(`${colors.red}Usage: generate <type> <name>${colors.reset}`);
  process.exit(1);
}

const [type, name] = args;
const lowerCaseName = name.toLowerCase();

const dirMap: { [key: string]: string } = {
  controller: `controllers/${lowerCaseName}`,
  service: `services/${lowerCaseName}`,
  route: `routes/${lowerCaseName}`,
  model: `models/${lowerCaseName}`,
  middleware: `middlewares/${lowerCaseName}`,
  config: `configs/${lowerCaseName}`,
  test: `controllers/${lowerCaseName}/__tests__`,
  e2e: `tests/e2e`,
  dto:  `dtos/${lowerCaseName}`,
  docker: `${dockerfileTemplate}`
};


const fileExists = (filePath: string) => {
  return fs.existsSync(filePath);
};

const generateFile = async (type: string, name: string) => {
  let template = templates[type as keyof typeof templates];
  if (!template) {
    console.error(`${colors.red}Unknown type: ${type}${colors.reset}`);
    process.exit(1);
  }

  const dirPath = path.join('src', dirMap[type]);
  const filePath = path.join(dirPath, `${lowerCaseName}.${type}.ts`);

  if (fileExists(filePath)) {
    console.error(`${colors.red}File ${filePath} already exists.${colors.reset}`);
    process.exit(1);
  }

  createDirectory(dirPath);

  const content = template(name, type === 'test' || type === 'e2e' ? type : '');
  writeFile(filePath, content);

  console.log(`${colors.green}Generated ${type} at ${filePath}${colors.reset}`);
};

const generateTestFile = (type: string, name: string) => {
  const template = templates.test;
  const dirPath = path.join('src', type === 'controller' ? `controllers/${lowerCaseName}/__tests__` : `services/${lowerCaseName}/__tests__`);
  createDirectory(dirPath);

  const filePath = path.join(dirPath, `${lowerCaseName}.${type}.test.ts`);
  const content = template(name, type);

if (type === 'controller' || type === 'service' || type === 'e2e') {
  writeFile(filePath, content);
}};

const writeDockerfile = (content: string) => {
  const filePath = path.join(process.cwd(), 'Dockerfile');
  fs.writeFileSync(filePath, content);
   console.log(`${colors.green}Generated ${type} at ${filePath}${colors.reset}`);
};
const generateE2ETestFile = (name: string) => {
  const template = templates.e2e;
  const dirPath = path.join('src', 'tests', 'e2e');
  createDirectory(dirPath);

  const filePath = path.join(dirPath, `${lowerCaseName}.e2e.test.ts`);
  const content = template(name);

  writeFile(filePath, content);
};

// Check if the type is "all" and generate all resources accordingly
if (type === "all") {
   generateFile("controller", name);
   generateFile("service", name);
   generateFile("route", name);
   // Generate test files for all resource types
  generateTestFile("controller", name);
  generateTestFile("service", name);
  generateTestFile("route", name);

  // Generate e2e test file for the "route" type
  generateE2ETestFile(name);
} else if(type === 'docker'){
  const dockerfileContent = dockerfileTemplate(name);
  writeDockerfile(dockerfileContent);
} else {
generateFile(type, name);
// Generate test files only if the type is not "e2e", "model", "middleware", or "config"

if (type !== 'e2e' && type !== 'model' && type !== 'middleware' && type !== 'config' && type !== 'docker') {
  generateTestFile(type, name);
}
if (type === 'route') {
  generateE2ETestFile(name);
}
  //Generate test files only if type is not 'docker'
  // if (type === 'controller' || type === 'service' || type === 'route') {
  //   generateTestFile(type, name);
  // } else if (type === 'e2e') {
  //   generateE2ETestFile(name);
  // }
}





