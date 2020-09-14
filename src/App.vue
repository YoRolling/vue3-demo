<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>

<style lang="scss" scoped>
main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
}
</style>
