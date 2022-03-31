import http from '@/utils/request'

const apiTest = {
  getTest: (data) => http.get('/test', data),
  postTest: (data) => http.post('/test', data),
}

export default apiTest
