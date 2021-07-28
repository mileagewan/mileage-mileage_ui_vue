import Vue from 'vue'
import Component from 'vue-class-component'

@Component
class Button extends Vue {
  static name = 'WlcButton'
  render () {
    return (
      <button class="wlc-button" onClick={this.click.bind(this)}>{this.$slots.default}</button>
    )
  }

  click () {
    this.$emit('click')
  }
}

export default Button