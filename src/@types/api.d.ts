declare namespace Http {
  type Response<T> = Promise<{
    data?: T
  }>
}

declare namespace GetTest {
  interface params {
    a: number
  }
  interface data {
    name: string
    age: number
  }
}

declare namespace PostTest {
  interface params {
    a: number
  }
  interface data {
    val: string
  }
}
