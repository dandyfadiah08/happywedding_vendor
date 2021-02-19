<template>
  <div class="container mx-auto">
    <!-- <LazyMobileTab v-if="$device.isMobile" /> -->
    <EventList :data="images" />
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
    this.$store.dispatch('inspiration/getEventList')
  },
}
</script>
