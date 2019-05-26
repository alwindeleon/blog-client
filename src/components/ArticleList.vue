<template>
  <div>
    <input class="form-control" type="text" placeholder="Search" v-model="keyword">
    <div class="article-list" v-if="articleList.length != 0 || articleList == null">
      <ArticleItem v-if="keyword == ''" v-for="article in currentList" :article="article" :isEdit="isEdit" @open="open" @edit="edit"></ArticleItem>
      <ArticleItem v-if="keyword != ''" v-for="article in filteredArticles" :article="article" :isEdit="isEdit" @open="open" @edit="edit"></ArticleItem>
    </div>
  </div>
  
</template>


<script>
  import ArticleItem from '@/components/ArticleItem.vue';
  import { mapState } from 'vuex';

  export default {
    name: 'article-list',
    components: {
      ArticleItem
    },
    data() {
      return {
        keyword: '',
        currentList: []
      }
    },
    mounted() {
      if(this.isEdit) {
        this.currentList = this.articleList.filter( a => {
          return a.author_id == this.user.user_id;
        })
      }
      else {
        this.currentList = this.articleList;
      }
    },
    methods: {
      open(article) {
        this.$emit('open',article)
      },
      edit(article) {
        this.$emit('edit',article)
      }
    },
    props: [
      'isEdit',
      'articleList'
    ],
    computed: {
      ...mapState(['user']),
      filteredArticles() {
        return this.currentList.filter((article) => {
          return this.keyword.toLowerCase().split(' ').every(v => article.title.toLowerCase().includes(v));
        });
      }
    }
  }
</script>