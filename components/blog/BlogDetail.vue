<template>
  <div class="lg:flex">
    <section class="flex-1 max-w-4xl p-4">
      <article>
        <h1 class="font-semibold text-lg lg:text-2xl">{{ blog.title }}</h1>
        <h5 class="font-crete text-hw-brown">Honeymoon Destination</h5>
        <h6 class="text-xs">{{ blog.publish_date }}</h6>
        <div class="mt-2 blog" v-html="blog.body"></div>
      </article>
    </section>
    <section>test</section>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
.blog > p {
  margin-top: 16px;
}
</style>
