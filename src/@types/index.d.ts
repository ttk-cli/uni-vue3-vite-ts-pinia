declare namespace Types {
  type Page = {
    $page: { fullPath: string; [propName: string]: any }
  } & Page.PageInstance<AnyObject, {}>

  type Query = {
    replace?: boolean
    [propName: string]: any
  }
}
