export const serviceTemplate = (name: string) => `
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
`;
