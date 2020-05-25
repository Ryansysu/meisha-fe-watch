// types/umd/index.d.ts
export as namespace MeishaWatch;
export default MeishaWatch;
// export = MeishaWatch;

declare function MeishaWatch(): string;
declare module MeishaWatch {
  function init (params:any):void
  function useVue ():any
}

interface Settings {
  isReport: boolean; // 是否上报信息
  reportURL: string; // 接收错误信息接口的URL
  projectId: string; // 项目id
  outTime: Number; // 超时时长
}

// declare MeishaWatch {
//   setUser(user: any): any;
//   report(async: boolean): any;
//   reportPageTime(pageName: string, pageTime: number):any;
//   useVue():any;
//   init(settings: Settings): any
// }


// export interface init {
//   setUser(user: any): any;
//   report(async: boolean): any;
//   reportPageTime(pageName: string, pageTime: number):any;
//   useVue():any;
//   init(settings: Settings): any
// }

// export default MeishaWatch;
