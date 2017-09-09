<template>
	<div class="page">
		<header>
		  <Topbar/>
		</header>
		<div class="main">
      <Editor/>
      <Preview/>
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
		components: {Topbar, Editor, Preview},
		created(){
      document.body.insertAdjacentHTML('afterbegin', icons)
      let state = localStorage.getItem('state')
      if (state){
        state = JSON.parse(state)
      }
      this.$store.commit('initState', state)
      this.$store.commit('setUser', getAVUser())
		}
	}
</script>

<style lang="scss">
  .page{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #fff;
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
        box-shadow: inset 1px 0 3px 0 rgba(0,0,0,.5)
      }

    ::-webkit-scrollbar-thumb
      {
        background: rgba(32, 57, 80, .8);
        border-radius: 2px;
      }

</style>
