import { parseUrl } from '@/utils/shared'

export function useInit() {
  onShow(() => {
    console.log('Page Show')
  })
  onHide(() => {
    console.log('Page Hide')
  })
  const pages = getCurrentPages()
  const page = pages[pages.length - 1]
  const { fullPath } = page.$page
  const { name: pageName, path: pagePath, query: pageQuery } = parseUrl(fullPath)

  return {
    pageName,
    pagePath,
    pageQuery,
  }
}
