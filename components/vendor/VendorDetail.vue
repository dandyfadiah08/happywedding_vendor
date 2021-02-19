<template>
  <div class="w-full">
    <VendorDetailCard :item="dataFilter" />
    <VendorDetailProject
      v-if="$device.isMobile && data.projects.length > 0"
      :items="data.projects"
    />
    <VendorDetailStore
      v-if="$device.isMobile && data.products.length > 0"
      :items="data.products"
    />
    <VendorDetailReview v-if="$device.isMobile" :items="data.reviews" />

    <tabs v-if="$device.isDesktop" class="mt-4">
      <tab title="Projects">
        <VendorDetailProject :items="data.projects" />
      </tab>
      <tab title="Store">
        <VendorDetailStore :items="data.products" />
      </tab>
      <tab title="Review">
        <VendorDetailReview :items="data.reviews" />
      </tab>
    </tabs>
  </div>
</template>

<script>
import { Tabs, Tab } from 'vue-slim-tabs'

export default {
  name: 'VendorDetail',
  components: {
    Tabs,
    Tab,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  computed: {
    dataFilter() {
      const { products, ...dataReturn } = this.data

      return dataReturn
    },
  },
}
</script>
