
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'order', component: () => import('pages/Order.vue') },
      { path: 'item', component: () => import('pages/Item.vue') },
      { path: 'item/add', component: () => import('pages/ItemAdd.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
