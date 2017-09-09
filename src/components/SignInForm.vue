<template>
  <div>
    <form @submit.prevent="signIn">
      <div class="row">
        <input type="text" required v-model="formData.username" placeholder="用户名">
      </div>
      <div class="row">
        <input type="password" required v-model="formData.password" placeholder="密码">
      </div>
      <div class="actions">
        <input type="submit" value="提交">
        <span>{{errorMessage}}</span>
      </div>
    </form>
  </div>
</template>

<script>
import AV from '../lib/leancloud'
import getErrorMessage from '../lib/getErrorMessage'
import getAVUser from '../lib/getAVUser'
export default {
  name: 'SignInForm',
  data(){
    return {
      formData: {
        username: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    signIn(){
      let {username, password} = this.formData
      AV.User.logIn(username,password).then(()=> {
        this.$emit('success', getAVUser())
      }, (error)=> {
        this.errorMessage = getErrorMessage(error)
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
