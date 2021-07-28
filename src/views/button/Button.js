import Canvas from '../../template/canvas'
import Component from 'vue-class-component'
import md from './button.md'
@Component
class Button extends Canvas {
  value = md
  constructor(p) {
    super(p)
  }
}

export default Button