// 加载vue模块 
import Vue from 'vue'
// 引入hero部分
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 路由模块


import HeroList from './views/heros/HeroList.vue'

// 引入weapon
import WeaponList from './views/weapon/WeaponList.vue'

// 引入equip部分
import EquipList from './views/equip/EquipList.vue'
// 引入英雄列表添加
import HeroAdd from './views/heros/HeroAdd.vue'
// 引入英雄列表修改
import HeroEquip from './views/heros/HeroEquip.vue'

// 引入router

// 创建路由对象 配置路由规则
const router = new VueRouter({
  linkActiveClass: "active",
  routes: [{
      path: '/',
      redirect: '/hero'
    },
    {
      name: 'hero',
      path: '/hero',
      component: HeroList
    },
    {
      name: 'weapon',
      path: '/weapon',
      component: WeaponList
    },
    {
      name: 'equip',
      path: '/equip',
      component: EquipList
    },
    {
      name: 'hero/add',
      path: '/hero/add',
      component: HeroAdd
    },
    {
      name: 'hero/equip',
      path: '/hero/equip/:id',
      component: HeroEquip,
      props: true
    }
  ]
})

export default router
