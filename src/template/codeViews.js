import Vue from 'vue'
import Component from 'vue-class-component'
const setAttributes = (element, p = {}) => {
  for (let k in p) {
    element.setAttribute(k, p[k]);
  }
};
const getSources = () => {
  let nt = {};
  return function getSource (t) {
    return Promise.all(t.map(t => {
      if ('string' === typeof t) {
        t = {
          url: t,
          type: t.match(/\.css$/) ? "css" : "js"
        };
        if (nt[t.url]) {
          return nt[t.url];
        }
      }
      let e = new Promise((r, j) => {
        let element;
        if (t.type === 'js') {
          element = document.createElement('script');
          setAttributes(element, {
            src: t.url,
            async: false,
          });
          element.onload = () => {
            r(true)
          };
          element.onerror = () => {
            j(false)
          }
        } else if (t.type === 'css') {
          element = document.createElement('link');
          setAttributes(element, {
            rel: 'stylesheet',
            href: t.url,

          });
          element.onload = () => {
            r(true)
          };
          element.onerror = () => {
            j(false)
          }
        } else {
          element = document.createElement('div');
        }
        document.body.appendChild(element);
      });
      nt[t.url] = e;
      return e;
    }))

  }
};

@Component({
  props: {
    type: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    readOnly: {
      type: Boolean,
      default: false
    }
  }
})
class CodeEitor extends Vue {
  aceDir = 'https://cdn.jsdelivr.net/npm/ace-builds@1.4.12/src-min-noconflict'
  editor = null
  mounted () {
    this.init()
  }
  init () {
    const getSource = getSources();
    (typeof window.ace === "undefined" ?
      getSource([`${this.aceDir}/ace.js`, `${this.aceDir}/ext-language_tools.js`])
      :
      Promise.resolve())
      .then(() => {
        window.ace.require('ace/ext/language_tools');
        this.edit = window.ace.edit(this.$el);
        this.edit.getSession().setMode(`ace/mode/${this.type}`);
        this.edit.getSession().setTabSize(2);
        this.edit.setHighlightActiveLine(false);
        this.edit.getSession().setUseWrapMode(true);
        this.edit.resize()
        this.edit.setOptions({
          enableBasicAutocompletion: !0,
          enableSnippets: !0,
          enableLiveAutocompletion: !0
        });
        this.edit.setReadOnly(this.readOnly);
        this.edit.setValue(this.value)
      });
  }
  getValue () {
    return this.edit.getValue()
  }
  render () {
    const style = {
      height: '300px'
    }
    return <div style={style} />
  }
}
export default CodeEitor