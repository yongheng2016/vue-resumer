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
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
export default {
  name: 'app',
  data: function(){
    return {
      text: 'good'
    }
  },
  components: {Topbar, Editor, Preview}
}
</script>

<style>
  .page{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #EAEBEC;
  }
  .page>.main{
    flex-grow: 1;  
  }
  .page>.main{
    min-width: 1024px;
    max-width: 1440px;
    margin-top: 16px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    padding: 8 16px;
    width: 100%;
    align-self: center;
  }
  #Topbar {
    background: gold;
    box-shadow: 0 1px 3px rgba(0,0,0,.25);
    height: 64px;
  }
  #Editor{
    width: 35%;
    background: #444;
  }
  #Preview{
    flex-grow: 1;
    margin-left: 16px;
    background: #777;
  }
</style>
