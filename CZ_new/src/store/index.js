import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    isGetterRouter:false,
    isCollapsed:false,
    userInfo:{},
    searchData:[],
    data: [] // 保存从后端请求的数组数据
  },
  getters: {
    // getData(state) {
    //   return state.searchData; // 获取data的值
    // },
  },
  mutations: {
    setData(state, payload) {
      state.data = payload; // 将payload数据赋值给data
    },

    chanegSearchData(state, payload) {
      state.searchData = payload; // 更新搜寻数据data的值
    },
    changeGetterRouter(state,value){
      state.isGetterRouter = value
    },
    //控制侧边栏的展开
    changeCollapsed(state){
      state.isCollapsed = !state.isCollapsed
    },
    changeUserInfo(state,value){
        state.userInfo = {
          ...state.userInfo,
          ...value
        }
    },
    clearUserInfo(state,value){
      state.userInfo = {}
    }
  },
  actions: {
  
  },
  modules: {
  },
  plugins: [createPersistedState({
    paths:["isCollapsed","userInfo"] //控制是否持久化
  })],

})
