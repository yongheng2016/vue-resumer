<template>
	<div class="page">
		<header>
		  <Topbar v-on:aloneView="aloneView" v-on:quitAloneView="quitAloneView" />
		</header>
		<div class="main">
      <Editor v-show="aloneViewMode"/>
      <Preview v-bind:class="{aloneViewMode: !aloneViewMode }"/>
		</div>
	</div>
</template>

<script>
import 'normalize.css/normalize.css'
import './assets/reset.css'

import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
import icons from './assets/icons'

import store from './store/index'
import AV from './lib/leancloud'
import getAVUser from './lib/getAVUser'

export default {
	name: 'app',
    store,
    data(){
      return {
        aloneViewMode: true
      }
    },
		components: {Topbar, Editor, Preview},
		created(){
      document.body.insertAdjacentHTML('afterbegin', icons)
      let state = localStorage.getItem('state')
      if (state){
        state = JSON.parse(state)
      }
      this.$store.commit('initState', state)
      this.$store.commit('setUser', getAVUser())
    },
    methods: {
      aloneView(){
        this.aloneViewMode = false
      },
      quitAloneView(){
        this.aloneViewMode = true
      }
    }
	}
</script>

<style lang="scss">
  body {
    background: rgb(2, 175, 95);
  }
  .page{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: rgb(2, 175, 95);
    > .main {
      flex-grow: 1;
    }
    > .main {
      min-width: 1024px;
      max-width: 1440px;
      margin: 24px auto;
      display: flex;
      justify-content: space-between;
      padding: 8 16px;
      width: 100%;
    }
  }
  #Topbar {
    background: gold;
    box-shadow: 0 1px 5px rgba(0,0,0,.25);
    height: 64px;
  }
  #Editor{
    min-width: 35%;
    background: #444;
  }
  #Preview{
    flex-grow: 1;
    margin-left: 16px;
  }
  #Preview.aloneViewMode {
    max-width: 900px;
    margin: 0 auto;
    overflow: initial;
    height: 1%;
 
  }
  svg.icon {
    height: 1em;
    width: 1em;
    fill: currentColor;
    vertical-align: -0.1em;
    font-size: 16px;
  }

    ::-webkit-scrollbar
      {
        width: 2px;  /* for vertical scrollbars */
        height: 8px; /* for horizontal scrollbars */
        margin-right: 10px;
      }
    ::-webkit-scrollbar-track
      {
        background: #fff;
        box-shadow: inset 1px 0 1px 0 rgba(0,0,0,.3)
      }

    ::-webkit-scrollbar-thumb
      {
        background: rgba(32, 57, 80, .6);
        border-radius: 2px;
      }

</style>
