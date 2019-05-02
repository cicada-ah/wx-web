// components/popup/index.js
import {
  PageComponent
} from '../compCore/component';
PageComponent({
  props: {
    show: {
      type: Boolean,
      value: true
    },
    mask: {
      type: Boolean,
      value: true
    },
    customStyle: String,
    zIndex: {
      type: Number,
      value: 100
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
    },
    // for prevent touchmove
    noop: function noop() {}
  }
})