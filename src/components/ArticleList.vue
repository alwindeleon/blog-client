<template>
  <div class="article-list">
    <ArticleItem></ArticleItem>
    <ArticleItem></ArticleItem>
    <ArticleItem></ArticleItem>
    <ArticleItem></ArticleItem>
    <ArticleItem></ArticleItem>
    <ArticleItem></ArticleItem>
  </div>
  
</template>


<script>
  import ArticleItem from '@/components/ArticleItem.vue';

  export default {
    name: 'article-list',
    components: {
      ArticleItem
    }
  }
</script>