import http from '@/utils/request'

const apiTest = {
  getTest: (params: GetTest.params) => http.get<GetTest.data>('/test', params),
  postTest: (params: PostTest.params) => http.post<PostTest.data>('/test', params),
}

export default apiTest
