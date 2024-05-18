#!/usr/bin/env ts-node

import * as fs from 'fs';
import * as path from 'path';

// Colors for console output
const colors = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  reset: "\x1b[0m"
};

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error(`${colors.red}Usage: generate <type> <name>${colors.reset}`);
  process.exit(1);
}

const [type, name] = args;
const lowerCaseName = name.toLowerCase();

const templates = {
  controller: (name: string) => `
import { Request, Response } from 'express';

export class ${name}Controller {
  public async get(req: Request, res: Response): Promise<void> {
    // Your logic here
  }

  public async create(req: Request, res: Response): Promise<void> {
    // Your logic here
  }

  public async update(req: Request, res: Response): Promise<void> {
    // Your logic here
  }

  public async delete(req: Request, res: Response): Promise<void> {
    // Your logic here
  }
}
  `,
  service: (name: string) => `
export class ${name}Service {
  public async find(): Promise<void> {
    // Your logic here
  }

  public async create(): Promise<void> {
    // Your logic here
  }

  public async update(): Promise<void> {
    // Your logic here
  }

  public async delete(): Promise<void> {
    // Your logic here
  }
}
  `,
  route: (name: string) => `
import { Router } from 'express';
import { ${name}Controller } from '../../controllers/${lowerCaseName}/${lowerCaseName}.controller';

const router = Router();
const controller = new ${name}Controller();

router.get('/', controller.get);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;
  `,
  test: (name: string, type: string) => `
import { ${name}${type.charAt(0).toUpperCase() + type.slice(1)} } from '../../${type === 'route' ? 'routes' : type + 's'}/${lowerCaseName}/${lowerCaseName}.${type}';

describe('${name} ${type}', () => {
  it('should be defined', () => {
    const instance = new ${name}${type.charAt(0).toUpperCase() + type.slice(1)}();
    expect(instance).toBeDefined();
  });

  // Add more tests here
});
  `,
  e2e: (name: string) => `
import request from 'supertest';
import app from '../../app'; // Adjust the import according to your app's entry point

describe('${name} E2E', () => {
  it('should GET /${lowerCaseName}', async () => {
    const res = await request(app).get('/${lowerCaseName}');
    expect(res.statusCode).toEqual(200);
    // Add more assertions here
  });

  it('should POST /${lowerCaseName}', async () => {
    const res = await request(app).post('/${lowerCaseName}').send({
      // Add payload here
    });
    expect(res.statusCode).toEqual(201);
    // Add more assertions here
  });

  // Add more E2E tests here
});
  `,
};

const generateFile = (type: string, name: string) => {
  const template = templates[type as keyof typeof templates];
  if (!template) {
    console.error(`${colors.red}Unknown type: ${type}${colors.reset}`);
    process.exit(1);
  }

  const dirMap: { [key: string]: string } = {
    controller: `controllers/${lowerCaseName}`,
    service: `services/${lowerCaseName}`,
    route: `routes/${lowerCaseName}`,
    test: `controllers/${lowerCaseName}/__tests__`,
    e2e: `tests/e2e`,
  };

  const dirPath = path.join(__dirname, 'src', dirMap[type]);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const filePath = path.join(dirPath, `${lowerCaseName}.${type}.ts`);

  if (fs.existsSync(filePath)) {
    console.error(`${colors.red}${type.charAt(0).toUpperCase() + type.slice(1)} already exists at ${filePath}.${colors.reset}`);
    process.exit(1);
  }

  const content = template(name, type);

  fs.writeFileSync(filePath, content, { encoding: 'utf8' });

  console.log(`${colors.green}Generated ${type} at ${filePath}${colors.reset}`);
};

const generateTestFile = (type: string, name: string) => {
  const content = templates.test(name, type);
  const dirPath = path.join(__dirname, 'src', `controllers/${lowerCaseName}/__tests__`);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const filePath = path.join(dirPath, `${lowerCaseName}.${type}.test.ts`);

  fs.writeFileSync(filePath, content, { encoding: 'utf8' });

  console.log(`${colors.green}Generated test for ${type} at ${filePath}${colors.reset}`);
};

const generateE2ETestFile = (name: string) => {
  const content = templates.e2e(name);
  const dirPath = path.join(__dirname, 'src', 'tests', 'e2e');

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const filePath = path.join(dirPath, `${lowerCaseName}.e2e.test.ts`);

  fs.writeFileSync(filePath, content, { encoding: 'utf8' });

  console.log(`${colors.green}Generated E2E test at ${filePath}${colors.reset}`);
};

generateFile(type, name);
if (type !== 'e2e') {
  generateTestFile(type, name);
}
if (type === 'route') {
  generateE2ETestFile(name);
}
