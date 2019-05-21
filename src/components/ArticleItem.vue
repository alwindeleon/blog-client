<template>
  <div class="article-item">
    <div class="title-holder">
      <h3>Hello</h3>
    </div>
    <div class="read-more-holder">
      <button class="btn btn-color">Read More</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'article-item'
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