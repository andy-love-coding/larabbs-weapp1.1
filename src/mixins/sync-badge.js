export default {
  onShow() {
    this.updateUnreadCount()
    if (!this.unreadCount) {
      wx.removeTabBarBadge({
        index: 1
      })
    }
  },
  watch: {
    unreadCount() {
      this.updateUnreadCount()
    }
  },
  methods: {
    updateUnreadCount() {
      if (this.unreadCount) {
        wx.setTabBarBadge({
          index: 1,
          text: this.unreadCount.toString()
        })
      }
    }
  }
}