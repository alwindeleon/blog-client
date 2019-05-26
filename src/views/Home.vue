<template>
  <div class="home container">
    <div class="row">
    	<div class="col-md-4 offset-md-4">
    		<h1 class="mast-head">Public Space</h1>
    		<button id="show-modal" @click="showLoginModal = true">Login</button>
        <button id="show-modal" @click="showSignupModal = true">Sign Up</button>
    		<ArticleList v-if="rawList != null" :articleList="rawList" :isEdit="false" @open="open"></ArticleList>
    	</div>
    </div>
  <LoginModal  v-if="showLoginModal" @close="showLoginModal = false"></LoginModal>
  <ArticleModal  
    v-if="showArticleModal" 
    @close="showArticleModal = false"
    :article="currentArticle"
    ></ArticleModal>
  <SignupModal  v-if="showSignupModal" @close="showSignupModal = false"></SignupModal>
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleList from '@/components/ArticleList.vue'
import Modal from '@/components/Modal.vue'
import LoginModal from '@/components/LoginModal.vue'
import ArticleModal from '@/components/ArticleModal.vue'
import SignupModal from '@/components/SignupModal.vue'

import { mapActions } from 'vuex';

export default {
  name: 'home',
  components: {
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
      showSignupModal: false,
      rawList: null,
      currentArticle: null
  	}
  },
  mounted() {
    this.getAllArticles().then( data => {
      this.rawList = data.data.data.data
      this.storeArticles(this.rawList);
    })
    .catch( err => {
      console.log(err)
    })
  },
  methods: {
    ...mapActions([
        'getAllArticles',
        'storeArticles'
    ]),
    open(article) {
      this.currentArticle = article;
      this.showArticleModal = true;
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