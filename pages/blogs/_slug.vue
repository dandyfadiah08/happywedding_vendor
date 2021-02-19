<template>
  <div class="container mx-auto">
    <VendorFilter theme="blog">Artikel</VendorFilter>
    <BlogDetail :blog="detail.post" />
  </div>
</template>

<script>
export default {
  name: 'BlogDetailPage',

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
    const detail = await $axios.$get(
      `http://dev.happywedding.id/api/post/${params.slug}`
    )
    return { detail }
  },
}
</script>
