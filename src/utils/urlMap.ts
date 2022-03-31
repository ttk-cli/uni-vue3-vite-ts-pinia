import pagesJson from '../pages.json'

// tabBar页面
const tabBarPagesMap = pagesJson.pages.map((i) => {
  return {
    type: 'tabBarPage',
    name: i.name,
    path: `/${i.path}`,
  }
})

// 二级页面
const subPagesMap = pagesJson.subPackages.flatMap((i) => {
  return i.pages.map((x) => {
    return {
      type: 'subPage',
      name: x.name,
      path: `/${i.root}/${x.path}`,
    }
  })
})

// h5页面
export const h5HsqMap = ['member-center']

export const pagesMap = [...tabBarPagesMap, ...subPagesMap]

// 需要登录权限的页面
export const needAuthPath = ['member-center', 'service']

const types = {
  h5Hsq: /(m(\.dev|\.beta)?\.haoshiqi\.net\/v2)/i,
  topicType: /(topic(\.dev|\.beta)?\.doweidu\.com)/i,
  h5: /^(https|http):\/\//i,
}

export function getUrlType(url) {
  if (types.h5Hsq.test(url)) return 'h5Hsq'
  if (types.topicType.test(url)) return 'topic'
  if (types.h5.test(url)) return 'h5' // 暂时笼统判断都是hsq Url
  return 'other'
}
