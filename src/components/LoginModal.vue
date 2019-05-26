<template>
	<Modal @close="$emit('close')" >
		<h2 slot='header'>
			Login
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
			'auth_success',
			'logout'
		]),
		loginAttempt(username, password) {
		  	if(username != '' && password != '') {
		  		this.login({username, password}).then( data => {
		  			let token = data.data.data.token
		  			let payload = {
		  				token: token,
		  				user: {
		  					username: data.data.data.username,
		  					user_id: data.data.data.user_id
		  				}
		  			}
		  			localStorage.setItem('token', token)
		  			localStorage.setItem('user', JSON.stringify(payload.user))
        			this.auth_success(payload);
        			this.$router.push('dashboard');
			  	}).catch( err => {
			  		this.message = 'Invalid Credentials';
				})

			}
  		}
  	}
}
</script>