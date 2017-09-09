<template>
  <div id="Preview">
    <section data-name="profile" v-show="resume.profile">
      <h1>
        {{resume.profile.name}}
      </h1>
      <h3>{{resume.profile.title}}</h3>
      <p>
        <small>{{resume.profile.city}}</small>
        <small>{{resume.profile.birthday}}</small>
      </p>
    </section>

        <section data-name="projects" v-show="resume.education">
      <h2>项目经历</h2>
      <ol>
        <li v-for="item in resume.projects">
          <h3>{{item.name}}</h3>
          <p v-show="item.content"> {{item.content}} </p>
        </li>
      </ol>
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

    <section data-name="awards" v-show="resume.awards">
      <h2>获奖情况</h2>
      <ol>
        <li v-for="item in resume.awards">
          <h3>{{item.name}}</h3>
          <p v-show="item.content"> {{item.content}} </p>
        </li>
      </ol>
    </section>

    <section data-name="contacts" v-show="resume.contacts">
      <h2>联系方式</h2>
      <table>
        <tr v-for="item in resume.contacts">
          <td>{{item.contact}}</td>
          <td v-show="item.content"> {{item.content}} </td>
        </tr>
      </table>
    </section>
  </div>
</template>
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
    ol,ul {
      list-style: none;
    }
    #Preview {
			background: rgba(193, 201, 193, 0.35);
      padding: 24px;
      overflow: auto;
  box-shadow:
    0 -1px 1px rgba(0,0,0,0.15),
    0 -10px 0 -5px #eee,
    0 -10px 1px -4px rgba(0,0,0,0.15),
    0 -20px 0 -10px #eee,
    0 -20px 1px -9px rgba(0,0,0,0.15),
    0 1px 3px rgba(0,0,0,.25)
    }
    section + section {
      white-space: pre-wrap;
      margin-top: 16px;
    }
    section h2 {
      display: inline-block;
      background: rgb(245, 232, 29);
      padding: 5px;
      font-weight: normal; 
      border-radius: 5px;     
    }
    section h3 {
      border-bottom: 1px solid #eee;
      padding: 8px;
    }
    section[data-name=profile] h3 {
      border: 0;
      padding: 0;
    }
</style>


