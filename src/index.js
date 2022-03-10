const component = {
  props: {
    checked: {
      type: Boolean,
      default: () => false
    },
    indeterminate: {
      type: Boolean,
      default: () => false
    },
    disabled: {
      type: Boolean,
      default: () => false
    }
  },
  render(h) {
    return h('input', {
      ref: 'checkbox',
      attrs: {
        type: 'checkbox'
      },
      props: {
        checked: this.checked
      },
      on: {
        change: $event => this.onChange($event.target.value)
      }
    })
  },
  computed: {
    showIndeterminate() {
      return !this.checked && this.indeterminate
    }
  },
  watch: {
    showIndeterminate: {
      handler(val) {
        this.$nextTick(() => {
          this.$refs.checkbox.indeterminate = val
        })
      },
      immediate: true
    },
    disabled: {
      handler(val) {
        this.$nextTick(() => {
          this.$refs.checkbox.disabled = val
        })
      },
      immediate: true
    }
  },
  methods: {
    onChange(val) {
      this.$emit('change', val)
    }
  }
}

if (typeof window !== 'undefined' && 'Vue' in window) {
  window.Vue.component('checkbox', component)
}

export default component
