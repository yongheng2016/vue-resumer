<template>
  <div class="dialogWrapper" v-show="visible">
      <div class="dialog">
          <header>
              {{title}}
              <span class="close" @click="close">&times;</span>
          </header>
          <main>
              <slot></slot>
          </main>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MyDialog',
  props: ['title', 'visible'],
  methods: {
      close(){
          this.$emit('close')
      }
  }
}
</script>

<style scoped lang="scss">
  .dialogWrapper{
    position: fixed;
    background: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dialog{
    background: white;
    min-height: 14em;
    min-width: 20em;
    > header{
      padding: 12px;
      display: flex;
      color: #fff;
      justify-content: space-between;
      background: rgb(2, 175, 95);
      .close {
        cursor: default;
      }
    }
    > main{
      padding: 16px;
    }
  }
</style>