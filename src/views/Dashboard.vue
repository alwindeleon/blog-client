<template>
  <div class="dashboard container">
  	<div class="row">
  		<div class="col-md-4 offset-md-4">
  			<h1 class="center">My Posts</h1>
  			<ArticleList></ArticleList>
  		</div>
  	</div>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'

export default {
  name: 'dashboard',
  components: {
  	ArticleList
  }
}
</script>

<style>
	.center {
		text-align: center;
	}
</style>
