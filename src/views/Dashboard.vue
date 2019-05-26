<template>
  <div class="dashboard container">
  	<div class="row">
  		<div class="col-md-4 offset-md-4">
  			<h1 class="center">My Posts</h1>
        <button @click="showCreateArticleModal = true">Create Article</button>
  			<ArticleList v-if="articles.length != 0" :articleList="articles" :isEdit="true" @edit="edit" ></ArticleList>
        <CreateArticleModal 
          v-if="showCreateArticleModal"
          :article="currentArticle"
          @close="showCreateArticleModal = false"
          @articleCreated="setArticles()"
        >
        </CreateArticleModal>
        <EditArticleModal 
          v-if="showEditArticleModal"
          :article="currentArticle"
          @close="showEditArticleModal = false" 
          @articleEdited="setArticles()"
        >
        </EditArticleModal>

  		</div>
  	</div>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'
import CreateArticleModal from '@/components/CreateArticleModal.vue'
import EditArticleModal from '@/components/EditArticleModal.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'dashboard',
  components: {
  	ArticleList,
    CreateArticleModal,
    EditArticleModal
  },
  data() {
    return {
      showCreateArticleModal: false,
      showEditArticleModal: false,
      articles: []
    }
  },
  mounted() {
    this.getAllArticlesByUser().then( data => {
      this.articles = data.data.data;
    })
    .catch( err => {
      console.log(err);
    })
  },
  methods: {
    ...mapActions([
      'getAllArticlesByUser'
    ]),
    setArticles() {
      this.articles = [];
      this.getAllArticlesByUser().then( data => {
        this.articles = data.data.data;
      })
    },
    edit(article) {
      this.currentArticle = article;
      this.showEditArticleModal = true;
    }
  }
}
</script>

<style>
	.center {
		text-align: center;
	}
</style>
