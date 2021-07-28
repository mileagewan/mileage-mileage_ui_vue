import Canvas from '../../template/canvas'
import Component from 'vue-class-component'
import md from './test.md'
@Component
class Test extends Canvas {
  value = md
  constructor(p) {
    super(p)
  }
}

export default Test