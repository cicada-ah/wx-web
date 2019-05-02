export var hack = Behavior({
  methods: {
    // hack $emit~~
    $emit: function $emit() {
      this.triggerEvent.apply(this, arguments);
    },
    // hack getRect~~
    getRect: function getRect(selector, all) {
      var _this2 = this;

      return new Promise(function (resolve) {
        wx.createSelectorQuery().in(_this2)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }

          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    }
  }
});