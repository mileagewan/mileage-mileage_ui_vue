import Vue from 'vue'
import Component from 'vue-class-component'
import CodeEitor from './codeViews'
HTMLElement.prototype.$empty = function () {
  this.innerHTML = ''
  return this
}

@Component({
  props: {
    md: {
      type: String,
      default: ''
    }
  }
})
class CodeRun extends Vue {
  html = `<template></template>`
  js = `export default {
    
  }`
  p = 1
  created () {
    this.formaterCode(this.md)
    this.createStyle()
  }
  handleClick (p) {
    if (p === 4) {
      this.$root.$emit('goBack', false)
    } else if (p !== 3) {
      this.p = p;
    } else {
      const template = this.$refs.html.getValue();
      const el = document.createElement("div");
      this.$el
        .querySelector("#running-views")
        .$empty()
        .appendChild(el);
      const str = this.$refs.js.getValue();
      const code = str
        .replace(/export default\s+/, "return")
        .replace(/^<script>\s+/, "")
        .replace(/\s+<\/script>$/, "")
        .replace(";", "");
      var data = new Function(code)();
      const components = {};

      const Option = Vue.extend(Object.assign(
        {},
        {
          template: `<div>${template}</div>`,
          components
        },
        data
      ));
      new Option().$mount(el);
    }

  }

  formaterCode (md) {
    if (/[^]*<template>([^]+)<\/template>/.test(md)) {
      this.html = RegExp.$1

    }
    if (/[^]*<script>([^]+)<\/script>/.test(md)) {
      this.js = RegExp.$1
    }
  }

  createStyle () {
    let editorStyle = document.querySelector('#editor-style')
    if (!editorStyle) {
      editorStyle = document.createElement('style')
      editorStyle.setAttribute('id', 'editor-style')
      editorStyle.innerHTML = `
      .editor-run {
        border: 1px solid #d8d8d8;
        box-sizing: border-box;
        position: fixed;
        width: 100vw;
        height: 100vh;
        left: 0;
        background: #f9f9f9;
        z-index: 9999;
        top: 0;
      }
      
      .editor-run .editor-left {
        float: left;
        width: 40%;
        height: 100%;
      }
      
      .editor-run .editor-left button {
        height: 32px;
        border: none;
        background: #f0f0f0;
        border-radius: 5px;
        cursor: pointer;
        min-width: 72px;
      }
      
      .editor-run .editor-left .toRun {
        float: right;
        margin-right: 10px;
        background: #06c;
        color: #fff;
      }
      
      .editor-run .editor-right {
        float: right;
        width: 55%;
        height: 100%;
        border: 1px solid #d8d8d8;
      }
      
      .editor-run button + button {
        margin-left: 16px;
      }
      `
      document.querySelector('head').appendChild(editorStyle)
    }
  }

  render () {
    return (
      <div class="editor-run">
        <div class="editor-left">
          <div style="margin-top: 10px">
            <button onClick={this.handleClick.bind(this, 1)}>Html</button>
            <button onClick={this.handleClick.bind(this, 2)}>javaScript</button>
            <button class="toRun" onClick={this.handleClick.bind(this, 3)}>运行</button>
            <button class="toRun" onClick={this.handleClick.bind(this, 4)}>返回</button>

          </div>
          <div style="width: 100%; height: calc(100% - 42px)">
            <CodeEitor ref="html"
              v-show={this.p === 1}
              type="html"
              value={this.html} />
            <CodeEitor
              ref="js"
              v-show={this.p === 2}
              type="javascript"
              value={this.js}
            />
          </div>
        </div>
        <div class="editor-right">
          <div id="running-views"></div>
        </div>
      </div>
    )
  }
}

export default CodeRun