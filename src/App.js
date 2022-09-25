import Vue from 'vue'
import Component from 'vue-class-component'
//\u000A alert(1)
@Component
class App extends Vue {
  render () {
    return (
      <div id="app">
        <router-view />
      </div>
    )
  }
}
export default App
