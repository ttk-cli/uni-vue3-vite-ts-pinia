declare namespace Page {
  export interface PageInstance {
    $page: { fullPath: string; [propName: string]: any }
  }
}
