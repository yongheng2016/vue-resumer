<template>
  <div id="Topbar">
      <div class="wrapper">
          <span class="logo">Resumer</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar'
}
</script>

<style>
    #Topbar>.wrapper {
        min-width: 1024px;
        max-width: 1440px;
        margin: 0 auto;
        height: 64px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #Topbar .logo {
        font-size: 24px;
        color: #000;
    }
</style>


