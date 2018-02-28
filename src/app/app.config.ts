export class AppConfig {
  public name = '';
  public maxCoinsDataCountDB = '';
  public mockedData = false;

  public importCoinsDataUrl = '';
  public getCoinsDataAPIUrl: '';
  public postCoinsDataDBUrl: '';
  public getCoinsDataDBUrl: '';
  public removeCoinDataByIdUrl: '';
  public removeAllCoinsDataUrl: '';

  constructor(data) {
    Object.assign(this, data);
  }
}
