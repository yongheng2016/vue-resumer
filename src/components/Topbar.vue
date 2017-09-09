<template>
  <div id="Topbar">
		<div class="wrapper">
			<span class="logo">在线简历</span>
			<div class="actions">
				<div class="userAction" v-if="logined">
					<span class="welcome">你好，{{user.username}}</span>
					<button class="button" @click="signOut">登出</button>
				</div>
				<div class="userAction" v-else>
					<button class="button" @click.prevent="signUpDialogVisible = true">注册</button>
					<MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
						<SignUpForm @success="signIn($event)"/>
					</MyDialog>
					<button href="#" class="button primary" @click.prevent="signInDialogVisible = true">登陆</button>
					<MyDialog title="登陆" :visible="signInDialogVisible" @close="signInDialogVisible = false">
						<SignInForm @success="signIn($event)"/>
					</MyDialog>

				</div>
				<button>保存</button>
				<button class="primary">预览</button>
			</div>
		</div>


  </div>
</template>

<script>
import MyDialog from './MyDialog'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import AV from '../lib/leancloud'

export default {
  name: 'Topbar',
  data(){
	  return {
		  signUpDialogVisible: false,
		  signInDialogVisible: false
	  }
  },
  computed: {
	  user(){
		  return this.$store.state.user
	  },
	  logined(){
		  return this.user.id
	  }
  },
  components: {
	  MyDialog,
	  SignUpForm,
	  SignInForm
  },
  methods: {
	  	signOut(){
			  AV.User.logOut()
			  this.$store.commit('removeUser')
		  },
		signIn(user){
			this.signUpDialogVisible = false
			this.signInDialogVisible = false
			this.$store.commit('setUser', user)
		}
  }
}
</script>

<style scoped lang="scss">
	a {
		text-decoration: none;
	}
	#Topbar {
		background: #fff;
		box-shadow: 0px 1px 3px 0 rgba(0,0,0,.25);
		>.wrapper {
			min-width: 1024px;
			max-width: 1440px;
			margin: 0 auto;
			height: 64px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 16px;
			.userAction {
			display: inline;
	}
		}
		.logo {
			font-size: 24px;
			color: #000;
		}
	}
	button {
		width: 72px;
		height: 32px;
		border: none;
		border-radius: 3px;
		cursor: pointer;
		font-size: 18px;
		background: #ddd;
		color: #222;
		&:hover {
			box-shadow: 1px 1px 1px hsla(0,0,0,.5);
		}
		&.primary {
			background: #02af5f;
			color: #fff;
		}
	}

</style>


