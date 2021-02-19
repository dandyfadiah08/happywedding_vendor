<template>
  <div class="container flex justify-center mx-auto">
    <VendorDetail :data="data" />
  </div>
</template>

<script>
export default {
  name: 'VendorDetailPage',

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
    const detail = await $axios.$get(`api/vendor/${params.slug}`)
    return detail
  },
}
</script>
