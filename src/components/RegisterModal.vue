<template>
	<Modal @close="$emit('close')" >
		<h2 slot='header'>
			Login
			<button @click="logout()">logout</button>
		</h2>

		<form slot='body'>
		  <span class="badge badge-danger" v-if="message != ''">{{message}}</span>
		  <div class="form-group">
			<label for="exampleInputEmail1">Username</label>
			<input type="email" class="form-control" v-model="username"   placeholder="Enter username">
		  </div>
		  <div class="form-group">
			<label for="exampleInputPassword1">Password</label>
			<input type="password" class="form-control" v-model="password" placeholder="Password">
		  </div>
		  <button type="button" class="btn btn-primary" @click="loginAttempt(username,password)" >Submit</button>
		</form>
	</Modal>
	
</template>

<script>
import Modal from '@/components/Modal.vue'
import { mapActions } from 'vuex';

export default {
	name: 'login-modal',
	data() {
		return {
			username: '',
			password: '',
			message: ''
		}
	},
	components: {
		Modal
	},
	methods: {
		...mapActions([
			'login',
			'save_token',
			'logout'
		]),
		loginAttempt(username, password) {
		  	if(username != '' && password != '') {
		  		this.login({username, password}).then( data => {
		  			let token = data.data.data.token
		  			localStorage.setItem('token', token)
        			// axios.defaults.headers.common['Authorization'] = token
        			this.save_token(token);
			  	}).catch( err => {
			  		this.message = 'Invalid Credentials';
				})

			}
  		}
  	}
}
</script>