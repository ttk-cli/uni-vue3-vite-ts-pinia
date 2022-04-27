let loadingCount = 0

export function showLoading(isLoading) {
  if (isLoading) {
    uni.showLoading({
      title: '加载中',
    })
    loadingCount = loadingCount + 1
  }
}

export function hideLoading() {
  loadingCount = loadingCount - 1
  if (loadingCount === 0) {
    uni.hideLoading()
  }
}
