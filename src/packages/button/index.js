import Button from './main'

Button.install = function (Vue) {
  Vue.component(this.name, this)
}
export default Button