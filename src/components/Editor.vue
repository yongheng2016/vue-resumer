<template>
  <div id="Editor">
    <nav>
      <ol>
        <li v-for="(item, index) in resume.config" @click="selected = item.field" :class="{active: item.field === selected}">
          <svg class="icon" viewBox="0 0 200 200" preserveAspectRatio="none">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ol>
    </nav>

    <ol class="panels">
      <li v-for="item in resume.config" v-show="item.field===selected">
        <div v-if="resume[item.field] instanceof Array">
            <div class="subitem" v-for="(subitem, i) in resume[item.field]">
              <div class="resumeField" v-for="(value, key) in subitem">
                <label>
                  {{key}}
                  <input type="text" :value="value" @input="changeResumeField(`${item.field}.${i}.${key}`, $event.target.value)">
                </label>
              </div>
            </div>
        </div>
        <div v-else class="resumeField" v-for="(value, key) in resume[item.field]">
          <label>
            {{key}}
          <input type="text" :value="value" @input="changeResumeField(`${item.field}.${key}`, $event.target.value)">
          </label>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Editor',
	computed: {
		selected:{
			get() {
				return this.$store.state.selected
			},
			set(value) {
				return this.$store.commit('switchTab', value)
			}
		},
		resume(){
			return this.$store.state.resume
		}
	},
	methods: {
		add (){
			this.$store.commit('increment')
    },
    changeResumeField(path, value){
      this.$store.commit('updateResume', {
        path,
        value
      })
    }
	}
}
</script>

<style scoped lang="scss">
  #Editor{
    background:#ffffff;
    box-shadow:1px 1px 3px 0 rgba(0,0,0,0.25);
    display: flex;
    flex-direction: row;
    overflow: auto;
    > nav{
      width: 80px;
      background: rgb(32, 57, 80);
      color: white;
      >ol {
        >li {
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 16px;
          margin-bottom: 16px;
          &.active{
            background: white;
            color: black;
          }
          svg {
            width: 24px;
            height: 24px;
          }
        }
      }
    }
    >.panels {
        flex-grow: 1;
        > li {
            padding: 24px;
        }
    }

  }
  ol{
    list-style: none;
  }
    .resumeField {
        > label {
            display: block;
        }
        input[type=text] {
            margin: 16px 0;
            border: 1px solid #ddd;
            box-shadow: inset 0 5px 35px 0 rgba(31, 75, 25, 0.2), 1px 3px 8px rgba(176, 175, 175, 0.35);
            width: 100%;
            height: 40px;
            padding: 0 8px;
        }
    }
</style>


