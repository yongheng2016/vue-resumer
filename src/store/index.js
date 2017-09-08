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
                { field: 'work history', icon: 'work' },
                { field: 'education', icon: 'book' },
                { field: 'projects', icon: 'heart' },
                { field: 'awards', icon: 'cup' },
                { field: 'contacts', icon: 'phone' },
            ],
            profile: {
                name: '姓名',
                city: '城市',
                title: "标题"
            },
            'work history': [
                { company: 'A公司', content: '我的第二份工作是' },
                { company: 'B公司', content: '我的第一份工作是' },
            ],
            education: [
                { school: '教育1', content: '文字' },
                { school: '教育2', content: '文字' },
            ],
            projects: [
                { name: '项目1', content: '文字' },
                { name: '项目2', content: '文字' },
            ],
            awards: [
                { name: '地址1', content: '文字' },
                { name: '地址2', content: '文字' },
            ],
            contacts: [
                { contact: 'phone', content: '13812345678' },
                { contact: 'qq', content: '12345678' },
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
            console.log(state.user)
        }
    }
})