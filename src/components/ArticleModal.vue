<template>
	<Modal @close="$emit('close')" >
		<h2 slot='header'>
			Title is here
		</h2>
		<p class="article-body" slot="body">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi sequi facere, similique. Ipsa molestias tempore, aut debitis expedita rem adipisci, eos officia doloremque corporis voluptas quas a dolor atque. Rem quod, quos distinctio temporibus eos inventore. Culpa autem aperiam delectus impedit sapiente, eveniet, ipsa laborum nulla nihil ut, similique iure?
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis illo totam quibusdam, quos quas ab. Soluta ut ab, ducimus et voluptatibus, ipsam, quisquam eligendi cupiditate excepturi obcaecati repellat? Odio non expedita facere delectus magni doloremque quasi accusantium provident, vel odit praesentium voluptas in explicabo perferendis, accusamus quibusdam. Consectetur, reprehenderit adipisci ullam vitae amet mollitia quas et. Fuga vero dolorem, voluptatem ad. Accusantium repudiandae eius sint perspiciatis dolore quibusdam laboriosam nihil, atque fuga deleniti! Consequuntur incidunt est tempora placeat, impedit deserunt iste mollitia. In quo minus neque, tempora, sit officia quae tenetur laborum rem, quos eaque molestiae voluptates. Molestiae, veniam, harum.
		</p>
	</Modal>
	
</template>

<script>
	import Modal from '@/components/Modal.vue'

	export default {
		name: 'article-modal',
		components: {
			Modal
		}
	}
</script>

<style scoped="">
	.article-body {
		max-height: 20rem;
		overflow-y: auto;
	}
</style>