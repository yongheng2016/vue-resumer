<template>
  <div id="Preview">
    <section data-name="profile" v-show="resume.profile">
      <h1>
        {{resume.profile.name}}
      </h1>
      <h2>{{resume.profile.title}}</h2>
      <p>
        <small>{{resume.profile.city}}</small>
        <small>{{resume.profile.birthday}}</small>
      </p>
    </section>

    <section data-name="workHistory" v-show="resume.workHistory">
      <h2>工作经历</h2>
      <ol>
        <li v-for="item in resume.workHistory">
          <h3>{{item.company}}</h3>
          <p v-show="item.content"> {{item.content}} </p>
        </li>
      </ol>
    </section>

    <section data-name="education" v-show="resume.education">
      <h2>毕业院校</h2>
      <ol>
        <li v-for="item in resume.education">
          <h3>{{item.school}}
            <span v-show="item.content"> - {{item.content}} </span>
          </h3>
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Preview',
  computed: {
		resume(){
			return this.$store.state.resume
		},
		created(){
			console.log(this.resume)
		}
  }
}
</script>

<style>
    #Preview {
			background: #fff;
			box-shadow: 0px 1px 3px 0 rgba(0,0,0,.25)
    }
</style>


