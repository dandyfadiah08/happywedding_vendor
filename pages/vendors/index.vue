<template>
  <div class="container justify-center mx-auto">
    <VendorFilter class="mb-4" theme="landing" @filter-vendor="$fetch" />
    <p
      v-if="$fetchState.pending"
      class="flex mt-40 w-full justify-center items-center"
    >
      <span class="loading"></span>
    </p>
    <p v-else-if="$fetchState.error">
      Something error, please try again later or please contact our costumer
      service.
    </p>
    <VendorList v-else :vendors="vendors.data" />
  </div>
</template>

<script>
export default {
  name: 'VendorPage',

  async fetch() {
    if (this.selected.category) {
      if (this.selected.city && this.selected.category) {
        this.vendors = await this.$axios.$get(
          `api/vendors?filter[location]=153&filter[category]=5`
        )
      } else
        this.vendors = await this.$axios.$get(`api/vendors?filter[category]=2`)
    } else if (this.selected.city) {
      this.vendors = await this.$axios.$get(`api/vendors?filter[location]=153`)
    } else this.vendors = await this.$axios.$get(`api/vendors`)
  },

  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
    $axios,
  }) {
    const vendors = await $axios.$get(`api/vendors`)
    return { vendors }
  },

  computed: {
    selected() {
      return this.$store.state.search.selected
    },
  },
}
</script>
