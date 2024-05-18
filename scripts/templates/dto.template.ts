
export const dtoTemplate = (name: string) => `
import {  IsNotEmpty } from 'class-validator';

export class ${name}Dto {    
  @IsNotEmpty()
 declare username: string;
   // Your middleware logic here
}
`;
