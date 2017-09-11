import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        selected: 'profile',
        user: {
            id: '',
            username: ''
        },
        resume: {
            config: [
                { field: 'profile', icon: 'id' },
                { field: 'workHistory', icon: 'work' },
                { field: 'education', icon: 'book' },
                { field: 'projects', icon: 'heart' },
                { field: 'awards', icon: 'cup' },
                { field: 'contacts', icon: 'phone' },
            ],
            profile: {
                name: 'name',
                city: 'city',
                title: "title"
            },
            'workHistory': [
                { company: 'A公司', content: '我的第二份工作是' },
                { company: 'B公司', content: '我的第一份工作是' },
            ],
            education: [
                { school: '教育1', content: '文字' },
                { school: '教育2', content: '文字' },
            ],
            projects: [
                { name: '在线便利贴', content: `前端：
    1. javascript组件封装\n
    2. 事件发布订阅模式
    3. webpack, npm script
后端：
    1. nodejs
    2. express, 路由跳转, MVC, sequelize` },
                { name: '在线简历编辑', content: `vue.js | leancloud` },
            ],
            awards: [
                { name: 'xxx小学三好学生', content: '由于拾金不昧，上缴国库，荣获xxx小学特等荣誉三好学生' },
                { name: 'xxx中学奥数特等奖', content: '参见全国奥数比赛，荣获国家头脑风暴特等奖' },
            ],
            contacts: [
                { contact: '手机：', content: '13812345678' },
                { contact: 'QQ：', content: '12345678' },
            ],
        }
    },
    mutations: {
        initState(state, payload) {
            Object.assign(state, payload)
        },
        switchTab(state, payload) {
            state.selected = payload
            localStorage.setItem('state', JSON.stringify(state))
        },
        updateResume(state, { path, value }) {
            objectPath.set(state.resume, path, value)
            localStorage.setItem('state', JSON.stringify(state))
        },
        setUser(state, payload) {
            Object.assign(state.user, payload)
        },
        removeUser(state) {
            state.user.id = null
        }
    }
})