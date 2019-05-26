<template>
	<Modal @close="$emit('close')" >
		<h2 slot='header'>
			{{article.title}}
		</h2>
		<p class="article-body" slot="body">
			{{article.content}}
		</p>
	</Modal>
	
</template>

<script>
	import Modal from '@/components/Modal.vue'

	export default {
		name: 'article-modal',
		components: {
			Modal
		},
		props: [
			'article'
		]
	}
</script>

<style scoped="">
	.article-body {
		max-height: 20rem;
		overflow-y: auto;
	}
</style>