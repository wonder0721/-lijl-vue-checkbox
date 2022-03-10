<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: () => false
    },
    indeterminate: {
      type: Boolean,
      default: () => false
    }
  },
  render(h) {
    return h('input', {
      ref: 'checkbox',
      type: 'checkbox',
      props: {
        checked: this.checked
      },
      on: {
        change: () => this.onChange(this.checked)
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
    }
  },
  methods: {
    onChange(val) {
      this.$emit('change', val)
    }
  }
}
</script>
