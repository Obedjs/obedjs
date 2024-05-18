
export class AppService {
  public async getHello(): Promise<any> {
    return {
      message: "Hello obedjs"
    }
  }
}
