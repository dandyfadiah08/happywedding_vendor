<template>
  <div>
    <section class="container mx-auto w-screen h-auto p-6 column">
      <figure
        v-for="(image, index) in data"
        :key="index"
        class="h-auto mb-3 overflow-hidden rounded-md"
      >
        <img class="w-full" :src="image.download_url" :alt="image.author" />
      </figure>
    </section>
  </div>
</template>

<script>
export default {
  name: 'InspirationList',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.column {
  column-count: 2;
}

@media (min-width: 640px) {
  .column {
    column-count: 3;
  }
}

@media (min-width: 768px) {
  .column {
    column-count: 4;
  }
}

@media (min-width: 1024px) {
  .column {
    column-count: 6;
  }
}
</style>
