const fs = require('fs')

const pagesStr = fs.readFileSync('./src/pages.json', 'utf-8');
const pagesJson = JSON.parse(pagesStr);
// tabBar页面
const tabBarPages = pagesJson.pages.map((i) => {
  return {
    type: 'tabBarPage',
    name: i.name,
    path: `/${i.path}`,
    title: i.style.navigationBarTitleText
  };
});
// 二级页面
const subPages = pagesJson.subPackages.flatMap((i) => {
  return i.pages.map((x) => {
    return {
      type: 'subPage',
      name: x.name,
      path: `/${i.root}/${x.path}`,
      title: x.style.navigationBarTitleText
    };
  });
});
// 当前已有页面
const pages = [...tabBarPages, ...subPages];
// 当前已创建文件
const filesList = fs.readdirSync('./src/pages');
// 获取需要新增的页面  =>取差集
const newPages = pages.filter((i) => !filesList.includes(i.name));
// 添加新路由
function addPages(pages) {
  for (const page of pages) {
    const { name, title } = page;
    const dirPath = `./src/pages/${name}`;
    fs.mkdirSync(dirPath);
    const filePath = `${dirPath}/${name}.vue`;
    const createStream = fs.createWriteStream(filePath);

    const template = `<template>
  <view>${title}</view>
</template>

<script setup lang="ts" name="${name}"></script>

<style scoped></style>
`;
    createStream.write(template);
    createStream.end();
    console.log('\x1B[34m', `pages ${name} created successfully.`);
  }
  console.log('\x1B[32m%s\x1B[39m', '\n All files are created successfully.\n');
}

addPages(newPages);
