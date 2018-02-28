// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  config: {
    name: 'Coin Market Cap API',
    maxCoinsDataCountDB: 5, // maximum number of coins data entry in db
    mockedData: false, // if true use import hardcoded data else use real api

    importCoinsDataUrl: '/importCoinsData',
    getCoinsDataAPIUrl: '/api/getCoinsDataAPI',
    postCoinsDataDBUrl: '/postCoinsDataDB',
    getCoinsDataDBUrl: '/getCoinsDataDB',
    removeCoinDataByIdUrl: '/removeCoinDataById/',
    removeAllCoinsDataUrl: '/removeAllCoinsData'
  }
};
