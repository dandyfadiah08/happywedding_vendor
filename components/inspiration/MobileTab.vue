<template>
  <div class="mt-2">
    <vue-tabs @tab-change="handleChange">
      <v-tab title="Inspirations"><InspirationList :data="images" /></v-tab>
      <v-tab title="Blogs">
        <VendorFilter theme="blog">Artikel</VendorFilter>
        <LazyBlogList :data="images" />
      </v-tab>
      <v-tab title="Events"><EventList :data="images" /></v-tab>
    </vue-tabs>
    <!-- oyy -->
  </div>
</template>

<script>
import { VueTabs, VTab } from 'vue-nav-tabs/dist/vue-tabs.js'
import 'vue-nav-tabs/themes/vue-tabs.css'
export default {
  components: {
    VueTabs,
    VTab,
  },

  computed: {
    images() {
      return this.$store.state.inspiration.images
    },
  },

  methods: {
    handleChange(tabIndex, newTab, oldTab) {
      switch (tabIndex) {
        case 0:
          return this.$store.dispatch('inspiration/getList')
        case 1:
          return this.$store.dispatch('inspiration/getBlogList')
        case 2:
          return this.$store.dispatch('inspiration/getEventList')
      }
    },
  },
}
</script>
