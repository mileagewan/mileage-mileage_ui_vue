import Vue from 'vue'
import Component from 'vue-class-component'
import TemplateView from './template'
const marked = require('marked')
@Component({
  props: {
    md: String
  }
})
class Canvas extends Vue {
  renderer = new marked.Renderer()
  value = 'test-class'
  componentViews = new Map()
  render () {
    const replace = this.getComponentViews()
    const _html = marked(replace, {
      renderer: this.renderer
    })
    return <div domPropsInnerHTML={_html}></div >
  }

  getComponentViews (md) {
    md = md || this.value
    this.componentViews.clear()
    const replace = md.split(':::demo').reduce((p, v, index) => {
      v = v.replace(/[^]*```html([^]+)```[^]*:::/, (match, p1) => {
        const id = `id_${index}`
        let template = ''
        if (/[^]*<template>([^]+)<\/template>/.test(p1)) {
          template = RegExp.$1
        }
        let code = 'return {}'
        if (/[^]*<script>([^]+)<\/script>/.test(p1)) {
          code = RegExp.$1
            .replace(/export default\s+/, "return")
            .replace(";", "");
        }
        const data = new Function(code)();
        this.componentViews.set(id, {
          componentViews: Vue.extend(Object.assign({
            template
          }, data)),
          componentCode: p1
        })
        return `<div id="${id}"></div>`
      })
      return p + v
    }, '')
    return replace
  }

  mounted () {
    this.componentViews.forEach((v, k) => {
      new Vue({
        render () {
          return <TemplateView props={v} />
        },
        el: document.querySelector(`#${k}`)
      })
    })
  }
}

export default Canvas