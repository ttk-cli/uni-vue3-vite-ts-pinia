export const useTitle = () => {
  let oldValue = 'Hello'
  let newValue = 'Word'
  const title = ref(oldValue)
  function changeTitle() {
    oldValue = title.value
    title.value = newValue
    newValue = oldValue
  }
  return {
    title,
    changeTitle,
  }
}
