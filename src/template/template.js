import Vue from 'vue'
import Component from 'vue-class-component'
import CodeEitor from './codeViews'
import CodeRun from './codeRun'

@Component({
  props: {
    componentViews: {
      type: Object | Function,
      default () {
        return null
      }
    },
    componentCode: {
      type: String,
      default: `<template></template>`
    }
  }
})
class TemplateView extends Vue {
  show = false
  runCodeInstance = null
  mounted () {
    if (this.componentViews) {
      new this.componentViews({
        el: this.$el.querySelector('#views')
      })
    }
  }
  render () {
    return (
      <div class="template-demo" style="width: 500px;background: skyblue">
        <div class="template-views">
          <div id="views"></div>
        </div>
        <div class="template-code" v-show={this.show}>
          <CodeEitor value={this.componentCode} type="html" readOnly={true} />
        </div>
        <div style={{
          textAlign: 'center'
        }}>
          <span onClick={this.triggeCode}>{this.show ? '隐藏' : '显示'}代码</span>
          <span onClick={this.runCode.bind(this, this.componentCode)} style={{
            float: 'right'
          }}>在线运行</span>
        </div>
      </div>
    )
  }
  triggeCode () {
    this.show = !this.show
  }
  runCode (md) {
    const model = document.createElement('div')
    const el = document.createElement('div')
    model.appendChild(el)
    document.body.appendChild(model)
    this.runCodeInstance = new Vue({
      data: {
        md
      },
      render () {
        return <CodeRun md={this.md} />
      },
      el
    })
    this.runCodeInstance.$root.$on('goBack', () => {
      this.runCodeInstance = null
      document.body.removeChild(model)
    })
  }
}

export default TemplateView