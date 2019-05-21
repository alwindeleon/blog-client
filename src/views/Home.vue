<template>
  <div class="home container">
    <div class="row">
    	<div class="col-md-6 offset-md-3">
    		<h1>Alwin's Blog</h1>
    		<button id="show-modal" @click="showLoginModal = true">Show Login Modal</button>
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
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ArticleList from '@/components/ArticleList.vue'
import Modal from '@/components/Modal.vue'
import LoginModal from '@/components/LoginModal.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    ArticleList,
    Modal,
    LoginModal
  },
  data() {
  	return {
  		showModal: false,
  		showLoginModal: false
  	}
  }
}
</script>
