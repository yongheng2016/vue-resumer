<template>
  <div>
    <form @submit.prevent="signUp">
      <div class="row">
        <input type="text" v-model="formData.username" placeholder="用户名">
      </div>
      <div class="row">
        <input type="password" v-model="formData.password" placeholder="密码">
      </div>
      <div class="actions">
        <input type="submit" value="提交">
      </div>
    </form>
  </div>
</template>

<script>
import AV from '../lib/leancloud'
import getErrorMessage from '../lib/getErrorMessage'
import getAVUser from '../lib/getAVUser'

export default {
  name:'SignUpForm',
  data(){
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  },
  created(){
  },
  methods:{
    signUp(){
      let {username, password} = this.formData
      var user = new AV.User();
      user.setUsername(username);
      user.setPassword(password);
      user.signUp().then(( ) =>{
        this.$emit('success', getAVUser())
      }, (error)=> {
        this.errorMessage = getErrorMessage
      });
    }
  }
}
</script>
<style lang="scss" scoped>
    .row {
        >input {
            width: 100%;
            padding: 5px;
            margin-bottom: 30px;
        }
    }
    .actions {
        margin-top: 10px;
        text-align: right;
    }
</style>

