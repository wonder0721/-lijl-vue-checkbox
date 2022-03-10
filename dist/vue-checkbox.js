!(function (e, t) {
  if ('object' == typeof exports && 'object' == typeof module) module.exports = t()
  else if ('function' == typeof define && define.amd) define([], t)
  else {
    var n = t()
    for (var o in n) ('object' == typeof exports ? exports : e)[o] = n[o]
  }
})(window, function () {
  return (function (e) {
    var t = {}
    function n(o) {
      if (t[o]) return t[o].exports
      var r = (t[o] = { i: o, l: !1, exports: {} })
      return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o })
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var o = Object.create(null)
        if ((n.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var r in e)
            n.d(
              o,
              r,
              function (t) {
                return e[t]
              }.bind(null, r)
            )
        return o
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default
              }
            : function () {
                return e
              }
        return n.d(t, 'a', t), t
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (n.p = '/dist/'),
      n((n.s = 0))
    )
  })([
    function (e, t, n) {
      'use strict'
      n.r(t)
      var o = (function (e, t, n, o, r, i, c, s) {
        var u,
          a = 'function' == typeof e ? e.options : e
        if (
          (t && ((a.render = t), (a.staticRenderFns = n), (a._compiled = !0)),
          o && (a.functional = !0),
          i && (a._scopeId = 'data-v-' + i),
          c
            ? ((u = function (e) {
                ;(e = e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  r && r.call(this, e),
                  e && e._registeredComponents && e._registeredComponents.add(c)
              }),
              (a._ssrRegister = u))
            : r &&
              (u = s
                ? function () {
                    r.call(this, (a.functional ? this.parent : this).$root.$options.shadowRoot)
                  }
                : r),
          u)
        )
          if (a.functional) {
            a._injectStyles = u
            var d = a.render
            a.render = function (e, t) {
              return u.call(t), d(e, t)
            }
          } else {
            var f = a.beforeCreate
            a.beforeCreate = f ? [].concat(f, u) : [u]
          }
        return { exports: e, options: a }
      })(
        {
          props: { checked: { type: Boolean, default: () => !1 }, indeterminate: { type: Boolean, default: () => !1 } },
          render(e) {
            return e('input', { ref: 'checkbox', type: 'checkbox', props: { checked: this.checked }, on: { change: () => this.onChange(this.checked) } })
          },
          computed: {
            showIndeterminate() {
              return !this.checked && this.indeterminate
            }
          },
          watch: {
            showIndeterminate: {
              handler(e) {
                this.$nextTick(() => {
                  this.$refs.checkbox.indeterminate = e
                })
              },
              immediate: !0
            }
          },
          methods: {
            onChange(e) {
              this.$emit('change', e)
            }
          }
        },
        void 0,
        void 0,
        !1,
        null,
        null,
        null
      )
      o.options.__file = 'src/checkbox.vue'
      var r = o.exports
      Vue.component('vue-checkbox', r)
    }
  ])
})
