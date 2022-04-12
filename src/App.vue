<script setup lang="ts">
import env from '@/config/env'
import { useAppStore } from './store/app'
onLaunch(() => {
  console.log('App Launch')
  console.log(env.apiEnv, 'apiEnv')
  const appStore = useAppStore()
  const systemInfo = appStore.getSystemInfo()
  console.log(systemInfo, 'systemInfo')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style lang="scss">
@import 'static/css/index.scss';
</style>
