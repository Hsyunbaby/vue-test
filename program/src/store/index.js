import Vue from 'vue'
import Vuex from 'vuex'; //引入

import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'

//安装
Vue.use(Vuex);// Store 类 install方法，mapActions/mapGetters函数

export default new Vuex.Store({
  actions,mutations,state,getters
});;

