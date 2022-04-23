<template>
  <pullList :on-scroll-to-lower="onScrollToLower">
    <template #list>
      <view>name:{{ name }}</view>
      <view>fullName:{{ fullName }}</view>
      <view @click="updateName">updateName</view>
      <view>title:{{ title }}</view>
      <view @click="changeTitle">changeTitle</view>
      <view @click="getTest">getTest</view>
      <view @click="postTest">postTest</view>
      <view @click="getCommonParam">getCommonParams</view>
      <view @click="setCommonParam">setCommonParams</view>
      <view @click="uniAsyncTest">uniAsyncTest</view>
      <view data-url="index?a=1" @click="onUrlPage">onUrlPage</view>
      <view class="unocss-test">unocss-test</view>
      <view v-for="i in 20" :key="i" class="p10">scroll Test</view>
    </template>
  </pullList>
</template>

<script lang="ts" setup name="test">
import { useTestStore } from '@/store/test'
import { storeToRefs } from 'pinia'
import { useTitle } from '@/hooks/useTitle'
import apiTest from '@/api/apiTest'
import { getCommonParams, setCommonParams } from '@/config/commonParams'
import { onUrlPage } from '@/utils/router'
import { useInit } from '@/hooks/useInit'
import uniAsync from '@/utils/uniAsync'

const { pageName, pagePath, pageQuery } = useInit()
console.log(pageName, pagePath, pageQuery, 'pageName,pagePath, pageQuery')

const { title, changeTitle } = useTitle()

const testStore = useTestStore()
const { name, fullName } = storeToRefs(testStore)

function updateName() {
  testStore.updateName('333')
}

async function getTest() {
  const getTest = await apiTest.getTest({ a: 1 })
  if (!getTest) {
    uni.showToast({
      title: '自定义异常处理',
    })
  }
  console.log(getTest, 'getTest')
}
async function postTest() {
  const postTest = await apiTest.postTest({ a: 1 })
  console.log(postTest, 'postTest')
}

function getCommonParam() {
  console.log(getCommonParams())
}
function setCommonParam() {
  setCommonParams({ channel: 'test' })
  getCommonParam()
}

async function uniAsyncTest() {
  const systemInfo = await uniAsync.getSystemInfo()
  console.log(systemInfo, 'systemInfo')
}

function onScrollToLower() {
  console.log('自定义 onScrollToLower')
}
</script>

<style lang="scss" scoped>
.unocss-test {
  padding: 10rpx;
}
</style>
