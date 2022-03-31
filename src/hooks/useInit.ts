import { parseUrl } from '@/utils/shared'

export function useInit() {
  const pages = getCurrentPages()
  const page: any = pages[pages.length - 1]
  const { fullPath } = page.$page
  const { name: pageName, path: pagePath, query: pageQuery } = parseUrl(fullPath)

  return {
    pageName,
    pagePath,
    pageQuery,
  }
}
