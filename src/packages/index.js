import { default as Button } from './button'
// import { default as Button } from '../../lib/button'
const components = [
  Button
]
const install = function (Vue) {
  components.map(component => {
    Vue.use(component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button
}