import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import LoginAdmin from '../views/Login-admin.vue'
import Register from '../views/Register.vue'
import index from '../views/index.vue'
import MainBox from '../views/MainBox.vue'
import UserWeb from '../views/userCenter/web-index.vue'
import UserAdmin from '../views/userCenter/admin-index.vue'
import RoutesConfig from './config'
import store from '../store/index'
import Center from '../views/center/Center.vue'
import app01 from '../views/APP/AppView/app01.vue'
import app02 from '../views/APP/AppView/app02.vue'
import app03 from '../views/APP/AppView/app03.vue'
import app04 from '../views/APP/AppView/app04.vue'
import app05 from '../views/APP/AppView/app05.vue'
import policy from '../views/policy.vue'
import policy01 from '../views/policy/policy01.vue'
import policy02 from '../views/policy/policy01.vue'
import policyRequest from '../views/policy/policyRequest.vue'
import Turn from '../views/smartTurn.vue'
import turn01 from '../views/Turn/turn01'
import overview_1 from '../views/Turn/overview_1'
import platform_2 from '../views/Turn/platform_2.vue'
import storage_3 from '../views/Turn/storage_3.vue'
import energy_4 from '../views/Turn/energy_4.vue'
import production_5 from '../views/Turn/production_5.vue'
import finance_6 from '../views/Turn/finance_6.vue'

// 应用商店
import yysd from '../views/yysd/yysd.vue'
import jygl from '../views/yysd/jygl.vue'
import ccy from '../views/yysd/ccy.vue'
import gyly from '../views/yysd/gyly.vue'
import fiveapply from '../views/yysd/fiveapply.vue'
import fiveapply_one from '../views/yysd/fiveapply_one.vue'
import fiveapply_two from '../views/yysd/fiveapply_two.vue'
import fiveapply_three from '../views/yysd/fiveapply_three.vue'
import fiveapply_four from '../views/yysd/fiveapply_four.vue'
const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/login-admin",
    name: "login-admin",
    component: LoginAdmin
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/",
    name: "index",
    component: index
  },
  {
    path: "/center",
    name: "center",
    component: Center
  },
  // 
 

  // 
  {
    path: "/mainbox",
    name: "mainbox",
    component: MainBox,
    redirect: '/yysd',
    children: [
      {
        path: "/app01",
        name: "app01",
        component: app01

      },
      {
        path: "/app02",
        name: "app02",
        component: app02

      },
      {
        path: "/app03",
        name: "app03",
        component: app03

      },
      {
        path: "/app04",
        name: "app04",
        component: app04

      },
      {
        path: "/app05",
        name: "app05",
        component: app05

      },
      {
        path: "/yysd",
        name: "yysd",
        component: yysd
      },
      {
        path: "/yysd/jygl",
        name: "jygl",
        component: jygl
      },
      {
        path: "/yysd/jygl/ccy",
        name: "ccy",
        component: ccy
      },
      {
        path: "/yysd/jygl/gyly",
        name: "gyly",
        component: gyly
      },
      {
        path: "/yysd/fiveapply",
        name: "fiveapply",
        component: fiveapply
      },
      {
        path: "/yysd/fiveapply/fiveapply_one",
        name: "fiveapply_one",
        component: fiveapply_one
      },      
      {
        path: "/yysd/fiveapply/fiveapply_two",
        name: "fiveapply_two",
        component: fiveapply_two
      },      
      {
        path: "/yysd/fiveapply/fiveapply_three",
        name: "fiveapply_three",
        component: fiveapply_three
      },      
      {
        path: "/yysd/fiveapply/fiveapply_four",
        name: "fiveapply_four",
        component: fiveapply_four
      },
      {
        path: '/energecontrol',
        component: () => import('../views/product-center/EnergeControl.vue')
      },
      {
        path: '/energemonitor',
        component: () => import('../views/product-center/EnergeMonitor.vue')
      },
      {
        path: '/intelligentcontrol',
        component: () => import('../views/product-center/IntelligentControl.vue')
      },
      {
        path: '/water-intelligent-control',
        component: () => import('../views/product-center/WaterIntelligentControl.vue')
      },
      {
        path: '/central-air-conditioning',
        component: () => import('../views/product-center/CentralAirConditioning.vue')
      },
      {
        path: '/slipt-air-conditioner',
        component: () => import('../views/product-center/SliptAirConditioner.vue')
      },
      {
        path: '/wisdomreassurance',
        component: () => import('../views/product-center/WisdomReassurance.vue')
      },
      {
        path: '/manufacturing',
        component: () => import('../views/product-center/Manufacturing.vue')
      },
      {
        path: '/mescloud',
        component: () => import('../views/product-center/MESCloud.vue')
      },
      {
        path: '/workorder',
        component: () => import('../views/product-center/WorkOrder.vue')
      },
      {
        path: '/equipment',
        component: () => import('../views/product-center/Equipment.vue')
      },
      {
        path: '/productmanage',
        component: () => import('../views/product-center/ProductManage.vue')
      },
      {
        path: '/predictive-maintenance',
        component: () => import('../views/product-center/PredictiveMaintenance.vue')
      },
      {
        path: '/managerial-system',
        component: () => import('../views/product-center/ManagerialSystem.vue')
      },

    ]
  },
  {
    path: "/useradmin",
    name: "useradmin",
    component: UserAdmin,
    redirect: '/enterpriseCheck',
    children: [
      {
        path: "/policyadd",
        name: "policyadd",
        component: () => import( /* webpackChunkName: "Register" */ '@/views/userCenter/useradminCenter/PolicyCenter/policyUp.vue')

      },
      {
        path: "/policyList",
        name: "policyList",
        component: () => import( /* webpackChunkName: "Register" */ '@/views/userCenter/useradminCenter/PolicyCenter/policyList.vue')

      },
      {
        path: "/policyChange",
        name: "policyChange",
        component: () => import( /* webpackChunkName: "Register" */ '@/views/userCenter/useradminCenter/PolicyCenter/policyChange.vue')


      },
      {
        path: "/enterpriseCheck",
        name: "enterpriseCheck",
        component: () => import( /* webpackChunkName: "Register" */ '@/views/userCenter/useradminCenter/enterpriseCheck.vue')


      },
      {
        path: "/infomation",
        name: "infomation",
        component: () => import( /* webpackChunkName: "Register" */ '@/views/userCenter/userCenter/infomation.vue')


      },
      {
        path: "/set-admin",
        name: "set-admin",
        component: () => import( /* webpackChunkName: "Register" */ '@/views/userCenter/userCenter/setting.vue')


      },



    ]
  },
  {
    path: "/userweb",
    name: "userweb",
    component: UserWeb,
    redirect: '/enterprise',
    children: [
      {
        path: "/info",
        name: "info",
        component: () => import( /* webpackChunkName: "Register" */ '@/views/userCenter/userwebCenter/info.vue')

      },
      {
        path: "/enterprise",
        name: "enterprise",
        component: () => import( /* webpackChunkName: "Register" */ '@/views/userCenter/userwebCenter/enterprise.vue')

      },
      {
        path: "/setting",
        name: "setting",
        component: () => import( /* webpackChunkName: "Register" */ '@/views/userCenter/userwebCenter/setting.vue')

      },



    ]
  },
  {
    path: "/policy",
    name: "policy",
    component: policy,
    redirect: '/policy01',
    children: [
      {
        path: "/policy01",
        name: "policy01",
        component: policy01,
        children: [
          {
            path: '',
            component: () => import('../views/classification/DefaultDisplay.vue')
          },
          {
            path: '/search',
            component: () => import('../views/classification/Search.vue')
          },
          {
            path: '/country',
            component: () => import('../views/classification/AppCountry.vue')
          },
          {
            path: '/province',
            component: () => import('../views/classification/AppProvince.vue')
          },
          {
            path: '/city',
            component: () => import('../views/classification/AppCity.vue')
          },
          {
            path: '/local',
            component: () => import('../views/classification/AppLocal.vue')
          },
          {
            path: '/ry-1',
            component: () => import('../views/class-rongyu/RY-1.vue')
          },
          {
            path: '/ry-2',
            component: () => import('../views/class-rongyu/RY-2.vue')
          },
          {
            path: '/ry-3',
            component: () => import('../views/class-rongyu/RY-3.vue')
          },
          {
            path: '/ry-4',
            component: () => import('../views/class-rongyu/RY-4.vue')
          },
          {
            path: '/ry-5',
            component: () => import('../views/class-rongyu/RY-5.vue')
          },
          {
            path: '/ry-6',
            component: () => import('../views/class-rongyu/RY-6.vue')
          },
          {
            path: '/ry-7',
            component: () => import('../views/class-rongyu/RY-7.vue')
          },
          {
            path: '/ry-8',
            component: () => import('../views/class-rongyu/RY-8.vue')
          },
          {
            path: '/ry-9',
            component: () => import('../views/class-rongyu/RY-9.vue')
          },
          {
            path: '/ry-10',
            component: () => import('../views/class-rongyu/RY-10.vue')
          },
          {
            path: '/ry-11',
            component: () => import('../views/class-rongyu/RY-11.vue')
          },
          {
            path: '/ry-12',
            component: () => import('../views/class-rongyu/RY-12.vue')
          },
          {
            path: '/ry-13',
            component: () => import('../views/class-rongyu/RY-13.vue')
          },
          {
            path: '/ry-14',
            component: () => import('../views/class-rongyu/RY-14.vue')
          },
          {
            path: '/ry-15',
            component: () => import('../views/class-rongyu/RY-15.vue')
          },
          {
            path: '/ry-16',
            component: () => import('../views/class-rongyu/RY-16.vue')
          },
          {
            path: '/ry-17',
            component: () => import('../views/class-rongyu/RY-17.vue')
          },
          {
            path: '/ry-18',
            component: () => import('../views/class-rongyu/RY-18.vue')
          },
          {
            path: '/ry-19',
            component: () => import('../views/class-rongyu/RY-19.vue')
          },
          {
            path: '/ry-20',
            component: () => import('../views/class-rongyu/RY-20.vue')
          },
          {
            path: '/ry-21',
            component: () => import('../views/class-rongyu/RY-21.vue')
          },
          {
            path: '/ry-22',
            component: () => import('../views/class-rongyu/RY-22.vue')
          },
          {
            path: '/ry-23',
            component: () => import('../views/class-rongyu/RY-23.vue')
          },
         
        ]
      },

      {
        path: "/Request",
        name: "policyRequest",
        component: policyRequest,


      },
      {
        path: "/policy02",
        name: "policy02",
        component: policy02,
      }
    ]
  },
  {
    path: "/turn",
    name: "turn",
    component: Turn,
    redirect: '/zgsz/overview_1',
    children: [
      {
        path: "/turn01",
        name: "turn01",
        component: turn01
      },
      {
        path: "/zgsz/overview_1",
        name: "overview_1",
        component: overview_1

      },
      {
        path: "/zgsz/platform_2",
        name: "platform_2",
        component: platform_2

      },
      {
        path: "/zgsz/storage_3",
        name: "storage_3",
        component: storage_3
      },
      {
        path: "/zgsz/energy_4",
        name: "energy_4",
        component: energy_4
      },
      {
        path: "/zgsz/production_5",
        name: "production_5",
        component: production_5
      },
      {
        path: "/zgsz/finance_6",
        name: "finance_6",
        component: finance_6
      },
    ]
  },

  //mainbox的嵌套路由, 后面根据权限动态添加
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
//每次路由跳转之前
// router.beforeEach((to, from, next) => {
//   if (to.name === "login") {
//     next()
//   } else {
//     // 如果授权(已经登录过了) next()
//     // 未授权, 重定向到login
//     if (!localStorage.getItem("token")) {
//       next({
//         path: "/login"
//       })
//     } else {
//       if (!store.state.isGetterRouter) {

//         //删除所有的嵌套路由
//         //mainbox
//         router.removeRoute("mainbox")

//         ConfigRouter()
//         next({
//           path: to.fullPath
//         })
//       }else{
//         next()
//       }
//     }
//   }
// }
// )

// const ConfigRouter = () => {

//   if(!router.hasRoute("mainbox")){
//     router.addRoute(  {
//       path: "/mainbox",
//       name: "mainbox",
//       component: MainBox
//     })
//   }

//   RoutesConfig.forEach(item => {
//     checkPermission(item) && router.addRoute("mainbox", item)
//   })

//   //改变isGetterRouter =  true

//   store.commit("changeGetterRouter",true)
// }

// const checkPermission = (item)=>{
//   if(item.requireAdmin){
//     return store.state.userInfo.role===1
//   }
//   return true
// }

export default router
