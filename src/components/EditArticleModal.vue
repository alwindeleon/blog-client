<template>
	<Modal @close="$emit('close')" >
		<h2 slot='header'>
			Edit Article!
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
		  <button type="button" class="btn btn-primary" @click="attempt_edit_article(title, content)" >Save</button>
		</form>
	</Modal>
	
</template>

<script>
import Modal from '@/components/Modal.vue'

import { mapActions } from 'vuex';

export default {
	name: 'edit-article-modal',
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
	mounted() {
		this.title = this.article.title;
		this.content = this.article.content;
	},
	methods: {
		...mapActions([
			'edit_article',
		]),
		attempt_edit_article() {
			if( !!this.title && !!this.content ){
				let payload = {
					id: this.article._id,
					article: {
						title: this.title,
						content: this.content
					}
				}
				this.edit_article(payload).then( data => {
					this.$emit('articleEdited');
					this.$emit('close');
				})
				.catch( err => {
					console.log(err);
				});
			}
		}
  	},
  	props: [
  		'article'
  	]
}
</script>

<style scoped="">
	textarea {
		width: -webkit-fill-available;
	}
</style>