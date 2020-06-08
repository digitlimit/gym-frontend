<template>
  <div class="index-page">
    <welcome-area></welcome-area>
    <about-area></about-area>
    <how-it-works></how-it-works>
    <get-started></get-started>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data(){
      return {
        title: 'Welcome to Gym'
      }
    },

    asyncData (context) {
      return { project: 'nuxt' }
    },

    layout(context){
      return 'landing';
    },

    head () {
      return {
        title: this.title
      }
    }
  }
</script>
