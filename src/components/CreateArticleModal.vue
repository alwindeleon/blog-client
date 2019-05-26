<template>
	<Modal @close="$emit('close')" >
		<h2 slot='header'>
			Create an Article!
		</h2>

		<form slot='body'>
		  <div class="form-group">
			<label >Title</label>
			<input  class="form-control" v-model="title"   placeholder="Enter Title">
		  </div>
		  <div class="form-group">
			<label for="exampleInputPassword1">Body</label>
			<textarea rows="10" v-model="content"></textarea> 
		  </div>
		  <button type="button" class="btn btn-primary" @click="attempt_create_article(title, content)" >Create!</button>
		</form>
	</Modal>
	
</template>

<script>
import Modal from '@/components/Modal.vue'
import { EventBus } from '../eventbus.js'

import { mapActions } from 'vuex';

export default {
	name: 'create-article-modal',
	data() {
		return {
			title: '',
			content: '',
			rawList: null
		}
	},
	components: {
		Modal
	},
	methods: {
		...mapActions([
			'create_article',
			'getAllArticles',
			'storeArticles'
		]),
		attempt_create_article(title, content) {
			this.create_article({title: title, content: content}).then( data => {
				this.$emit('articleCreated');
				this.$emit("close");
			})
			.catch( err => {
				console.log(err);
			})
		}
  	}
}
</script>

<style scoped="">
	textarea {
		width: -webkit-fill-available;
	}
</style>