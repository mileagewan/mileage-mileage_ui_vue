import Vue from 'vue'
import Component from 'vue-class-component'
import routes from '../../components'
@Component
class Layout extends Vue {
  menu = routes
  render () {
    return (
      <el-container style="border: 1px solid #eee" class="wlc-layout">
        <el-header style={{color: '#1a2c3f'}}>跨境公共组件库</el-header>
        {/*<el-header >WLC-UI</el-header>*/}
        <el-container>
          <el-aside width="200px" style="height: 100%;border-right: 1px solid rgb(238, 241, 246)">
            <el-menu default-openeds={['1']} onSelect={this.select.bind(this)} default-active="0">
              {
                this.menu && this.menu.map((m, index) => {
                  if (m.children?.length) {
                    return (<el-submenu index={index.toString()}>
                      <template slot="title"><i class="el-icon-message"></i>
                        {
                          m.title
                        }
                      </template>
                      {
                        m.children.map((child, i) => {
                          return (
                            !child.hide && (<el-menu-item index={`${index}-${i}`}>
                              <span slot="title">{child.title}</span>
                            </el-menu-item>)
                          )
                        })
                      }
                    </el-submenu>)
                  } else {
                    return (<el-menu-item index={index.toString()}>
                      <template slot="title"><i class="el-icon-message"></i>
                        {
                          m.title
                        }
                      </template>
                    </el-menu-item>)
                  }


                })
              }
            </el-menu>
          </el-aside>

          <el-main class="demo-content">
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    )
  }

  select (item) {
    const [p, c] = item.split('-')
    let routerItem = this.menu[p]
    if (c) {
      routerItem = routerItem.children[c]
    }
    this.$router.push(routerItem.path)
  }
}

export default Layout
