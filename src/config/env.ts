const apiEnv = 'dev'

const envMap = {
  dev: {
    baseUrl: 'http://m.dev.xxx.com',
    apiBaseUrl: 'https://m.devapi.xxx.com',
  },
  beta: {
    baseUrl: 'http://m.beta.xxx.com',
    apiBaseUrl: 'https://m.betaapi.xxx.com',
  },
  prod: {
    baseUrl: 'https://m.xxx.com',
    apiBaseUrl: 'https://m.api.xxx.com',
  },
  local: {
    baseUrl: 'http://m.dev.xxx.com',
    apiBaseUrl: 'https://m.devapi.xxx.com',
  },
}

type Env = { apiEnv: string; baseUrl: string; apiBaseUrl: string }

function createEnv(apiEnv): Env {
  return Object.assign({ apiEnv }, envMap[apiEnv])
}

export default createEnv(apiEnv)
