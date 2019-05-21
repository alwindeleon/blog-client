<template>
  <div class="home container">
    <div class="row">
    	<div class="col-md-4 offset-md-4">
    		<h1 class="mast-head">Public Space</h1>
    		<button id="show-modal" @click="showLoginModal = true">Login</button>
        <button id="show-modal" @click="showSignupModal = true">Sign Up</button>
    		<ArticleList></ArticleList>
    	</div>
    </div>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    
  <!-- use the modal component, pass in the prop -->
  <Modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <h3 slot="header">custom header</h3>
  </Modal>
  <LoginModal  v-if="showLoginModal" @close="showLoginModal = false"></LoginModal>
  <ArticleModal  v-if="showArticleModal" @close="showArticleModal = false"></ArticleModal>
  <SignupModal  v-if="showSignupModal" @close="showSignupModal = false"></SignupModal>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ArticleList from '@/components/ArticleList.vue'
import Modal from '@/components/Modal.vue'
import LoginModal from '@/components/LoginModal.vue'
import ArticleModal from '@/components/ArticleModal.vue'
import SignupModal from '@/components/SignupModal.vue'


export default {
  name: 'home',
  components: {
    HelloWorld,
    ArticleList,
    Modal,
    LoginModal,
    ArticleModal,
    SignupModal
  },
  data() {
  	return {
  		showModal: false,
  		showLoginModal: false,
      showArticleModal: false,
      showSignupModal: false
  	}
  }
}
</script>

<style>
 .mast-head {
  margin: 2rem 0;
  text-align: center;
 }
</style>