// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const server:string = 'http://localhost:8080';
export const environment = {
  production: false,
  server: server,
  user:{
    getAllUsers: () => `${server}/user/all`,
    getUserByID:(value: number) => `${server}/user/id/${value}`,
    getUserByEmail:(value:string) => `${server}/user/email/${value}`,
    getUsersByFirstname:(value:string) => `${server}/user/firstname/${value}`,
    getUsersByLaststname:(value:string) => `${server}/user/lastname/${value}`
  },
  userLogin:{
    getLoginByEmail:(value:string) => `${server}/user/email/${value}`,
    getLoginByUsername:(value:string) => `${server}/userlogin/username/${value}`,
  },
  userFamily:{
    getFamilyByUserID: (value:string) => `${server}/user/id/${value}`
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
