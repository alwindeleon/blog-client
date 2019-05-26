<template>
  <div class="article-item" v-if="article != null">
    <div class="title-holder">
      <h3>{{article.title}}</h3>
    </div>
    <div class="read-more-holder">
      <button class="btn btn-color" v-if="!isEdit" @click="$emit('open', article)">Read More</button>
      <button class="btn btn-color" v-if="isEdit" @click="$emit('edit', article)">Edit</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'article-item',
    props: [
      'article',
      'isEdit'
    ]
  }
</script>
<style>
  .article-item {
    border: 3px #FF8357 solid;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 1rem;
    color: #555555;
    /*background-color: #FF8357;*/
  }

  .btn-color {
    background-color: #FAC172;
    color: white;
  }
</style>