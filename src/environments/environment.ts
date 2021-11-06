// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyD0RI1Zxq20lVZ1x-zp0ayXzAhsy2tX8OE",
    authDomain: "angular-headless-web.firebaseapp.com",
    databaseURL: "https://angular-headless-web-default-rtdb.firebaseio.com",
    projectId: "angular-headless-web",
    storageBucket: "angular-headless-web.appspot.com",
    messagingSenderId: "1087379117522",
    appId: "1:1087379117522:web:4d723b3782c921152f240b"
    /* paste your FB config here */
  },
  apiURL : 'https://60ea38e85dd7ff0017b39750.mockapi.io/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
