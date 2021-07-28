export default [
  {
    path: '/',
    redirect: '/doc/installation',
    title: '开发指南',
  },
  {
    path: '/doc',
    title: '组件列表',
    component: () => import('./views/index/Layout'),
    children: [
      {
        title: '按钮  installation',
        path: '/doc/installation',
        hide: true,
        component: () => import('./views/installation/Installation')
      },
      {
        title: '按钮  Button',
        path: '/doc/button',
        component: () => import('./views/button/Button')
      },
      {
        title: '测试  test',
        path: '/doc/test',
        component: () => import('./views/test/Test')
      }
    ]
  }
]
