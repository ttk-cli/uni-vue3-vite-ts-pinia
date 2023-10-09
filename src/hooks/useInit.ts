import { parseUrl } from '@/utils/shared';

export function useInit<T>() {
  const pageName = ref<string>("");
  const pagePath = ref<string>("");
  const pageQuery = ref<T>({});

  onLoad(() => {
    const pages = getCurrentPages();
    const page = pages[pages.length - 1];
    // @ts-expect-error
    const { fullPath } = page.$page;
    const { name, path, query } = parseUrl(fullPath);
    pageName.value = name;
    pagePath.value = path;
    pageQuery.value = query;

    console.log("onLoad", pageName.value, pagePath.value, pageQuery.value);

  })
  onShow(() => {
    console.log('Page Show');
  });
  onHide(() => {
    console.log('Page Hide');
  });


  return {
    pageName,
    pagePath,
    pageQuery
  };
}
