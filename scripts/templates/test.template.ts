export const testTemplate = (name: string, type: string) => `
import { ${name}${type.charAt(0).toUpperCase() + type.slice(1)} } from '${type === 'controller' ? `../../${name.toLowerCase()}/${name.toLowerCase()}.${type}` : `../../../services/${name.toLowerCase()}/${name.toLowerCase()}.service` }';

describe('${name} ${type}', () => {
  it('should be defined', () => {
    const instance = new ${name}${type.charAt(0).toUpperCase() + type.slice(1)}();
    expect(instance).toBeDefined();
  });

  // Add more tests here
});
`;
