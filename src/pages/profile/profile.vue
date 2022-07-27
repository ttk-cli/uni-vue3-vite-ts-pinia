<template>profile</template>

<script lang="ts" setup>
import { useInit } from '@/hooks/useInit'

onLoad(() => {
  const { pageName, pagePath, pageQuery } = useInit()
  console.log(pageName, pagePath, pageQuery, 'pageName,pagePath, pageQuery')
})
</script>

<style lang="scss" scoped></style>
