<template>
  <div class="my-4 space-y-4 w-full">
    <article
      v-for="blog in data"
      :key="blog.id"
      class="card p-4 lg:p-8 bg-white md:rounded md:shadow-lg"
    >
      <div class="card__header mb-1 lg:mb-2">
        <figure
          class="card__figure lg:h-80 md:h-36 w-full rounded-md bg-gray-500"
        >
          <img
            :src="blog.image"
            alt=""
            class="card__image lg:h-full md:h-36 w-full rounded-md object-cover object-center"
          />
        </figure>
      </div>
      <div class="card__body">
        <div class="flex items-center flex-wrap">
          <h2
            class="card__category font-crete text-sm lg:text-base text-hw-brown inline-flex items-center"
          >
            Honeymoon Destination
          </h2>
          <span
            class="text-gray-400 mr-2 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-2 py-1 border-r-2 border-gray-200"
          >
            <svg
              class="w-4 h-4 mr-1"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle></svg
            >1.2K
          </span>
          <span
            class="text-gray-400 inline-flex items-center leading-none text-sm"
          >
            <svg
              class="w-4 h-4 mr-1"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path
                d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
              ></path></svg
            >6
          </span>
        </div>
        <h3 class="card__subtitle text-gray-600 text-xs mb-3">20 Sept, 2020</h3>
        <nuxt-link
          :to="`/blogs/${blog.slug}`"
          class="card__title font-calistoga lg:text-2xl capitalize"
        >
          {{ blog.title }}
        </nuxt-link>
        <p
          class="card__copy text-gray-500 text-sm lg:text-lg line-clamp-4 lg:line-clamp-3"
        >
          {{ blog.content ? blog.content : 'Lorem ipsum' }}
        </p>
      </div>
      <footer class="card__footer hidden lg:block">
        <div class="card__actions text-right pt-4 px-4">
          <nuxt-link :to="`/blogs/${blog.slug}`">
            <button class="button">Read more...</button>
          </nuxt-link>
        </div>
      </footer>
    </article>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
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
  column-count: 1;
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
