<template>
  <div class="container mx-auto">
    <!-- <LazyMobileTab v-if="$device.isMobile" /> -->
    <VendorFilter theme="blog">Artikel</VendorFilter>
    <div class="md:flex">
      <BlogList :data="images" />
      <div class="md:mt-4 md:ml-4">
        <AppCard theme="featured" :item="images" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // async asyncData({
  //   isDev,
  //   route,
  //   store,
  //   env,
  //   params,
  //   query,
  //   req,
  //   res,
  //   redirect,
  //   error,
  //   $axios,
  // }) {
  //   const images = await $axios.$get(`https://picsum.photos/v2/list`)
  //   return { images }
  // },

  computed: {
    images() {
      return this.$store.state.inspiration.images
    },
  },

  created() {
    this.$store.dispatch('inspiration/getBlogList')
  },
}
</script>
