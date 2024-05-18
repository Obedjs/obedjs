export const mongodbModelTemplate = (name: string) => `
import { Schema, model } from 'mongoose';

const ${name}Schema = new Schema({
  // Define your schema here
});

export const ${name} = model('${name}', ${name}Schema);
`;
