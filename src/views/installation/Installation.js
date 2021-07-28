import Canvas from '../../template/canvas';
import Component from 'vue-class-component';
import md from './installation.md';

@Component
class Installation extends Canvas {
  value = md
  constructor(p) {
    super(p);
  }
}

export default Installation;