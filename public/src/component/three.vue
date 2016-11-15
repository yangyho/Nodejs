<template>
  <div id="secondcomponent">
    <h1>跳转到第三页</h1>
    <a> written by {{ author }} </a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        author: "yangyh",
        articles: [],
      }
    }
  }
</script>

<style>

</style>