<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <button class="" v-if="isLoggedIn" @click="logout()">logout</button>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'app',
	methods: {
		...mapActions([
			'logout'
		])
	},
	computed: {
		...mapGetters([
	      'isLoggedIn'
	    ])
	}
}
</script>
<style>
#app {
	font-family: 'Baloo Bhai', cursive;
}
</style>
