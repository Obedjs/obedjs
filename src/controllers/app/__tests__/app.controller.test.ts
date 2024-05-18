
import { AppController } from '../../app/app.controller';
import { AppService } from '../../../services/app/app.service';

describe('App controller', () => {
  it('should be defined', () => {
    const service = new AppService();
    const instance = new AppController(service);
    expect(instance).toBeDefined();
  });

  // Add more tests here
});
