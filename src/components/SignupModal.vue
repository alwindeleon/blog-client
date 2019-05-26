<template>
	<Modal @close="$emit('close')" >
		<h2 slot='header'>
			Sign Up
		</h2>
		<form slot='body'>
		  <div class="form-group">
		    <label for="exampleInputEmail1" >Username</label>
		    <input type="text" class="form-control" v-model="username" placeholder="Enter username">
		  </div>
		  <div class="form-group">
		    <label for="exampleInputEmail1">Password</label>
		    <input type="text"  class="form-control" placeholder="Enter password" v-model="password">
		  </div>
		  <div class="form-group">
		    <label for="exampleInputEmail1">Descibe yourself in less than 10 words</label>
		    <input type="text" class="form-control" v-model="description" placeholder="Enter Description">
		  </div>
		  <button type="button" class="btn btn-primary" @click="createAttempt()">Register!</button>
		</form>
	</Modal>
	
</template>

<script>
	import Modal from '@/components/Modal.vue'

	import { mapActions } from 'vuex';

	export default {
		name: 'signup-modal',
		data() {
			return {
				username: '',
				password: '',
				description: ''
			}
		},
		components: {
			Modal
		},
		methods: {
			...mapActions([
				'create_user'
			]),
			createAttempt() {
				if( !!this.username && !!this.password && !!this.description) {
					let payload = {
						username: this.username,
						password: this.password,
						description: this.description
					}
					this.create_user(payload).then( data => {
						alert("Account Created! Please login");
						this.$emit('close');
					})
					.catch( err => {
						console.log(err);
					})
				}
			}

		}
	}
</script>