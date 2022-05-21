export default defineStore(
  'setup',
  () => {
    const name = ref<string>('allen')
    const token = ref<string>('token...')

    const fullName = computed(() => {
      return name.value + ' ttk'
    })

    const updateName = (val) => {
      name.value = val
    }
    return {
      name,
      token,
      fullName,
      updateName,
    }
  },
  {
    persist: {
      // 开启持久化
      enabled: true,
    },
  }
)
