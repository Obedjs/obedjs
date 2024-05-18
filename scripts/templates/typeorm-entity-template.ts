export const typeormEntityTemplate = (name: string) => `
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ${name} {
  @PrimaryGeneratedColumn()
  id: number;

  // Define your columns here
}
`;