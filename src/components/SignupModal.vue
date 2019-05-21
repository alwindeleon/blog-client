<template>
	<Modal @close="$emit('close')" >
		<h2 slot='header'>
			Sign Up
		</h2>
		<form slot='body'>
		  <div class="form-group">
		    <label for="exampleInputEmail1">Username</label>
		    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username">
		  </div>
		  <div class="form-group">
		    <label for="exampleInputEmail1">Password</label>
		    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username">
		  </div>
		  <div class="form-group">
		    <label for="exampleInputEmail1">Descibe yourself in less than 10 words</label>
		    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username">
		  </div>
		  <div class="form-group">
		    <label for="exampleFormControlFile1">Profile Picture</label>
		    <input type="file" class="form-control-file" id="exampleFormControlFile1">
		  </div>
		  <button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</Modal>
	
</template>

<script>
	import Modal from '@/components/Modal.vue'

	export default {
		name: 'login-modal',
		components: {
			Modal
		}
	}
</script>