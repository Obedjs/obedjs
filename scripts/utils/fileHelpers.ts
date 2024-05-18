import * as fs from 'fs';
import * as path from 'path';

export const createDirectory = (dirPath: string) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

export const writeFile = (filePath: string, content: string) => {
  fs.writeFileSync(filePath, content, { encoding: 'utf8' });
  console.log(`Generated file at ${filePath}`);
};
