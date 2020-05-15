<template>
  <div id="app">
    <p>
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
      <router-link class="link" to="/">Home</router-link> | 
      <router-link class="link" to="/add">Add offer</router-link>
    </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #339FA6;
  margin-top: 30px;
}
.link {
  color: #339FA6;
}
</style>
