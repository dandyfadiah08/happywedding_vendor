<template>
  <div class="my-4 space-y-4 lg:space-y-0 lg:grid grid-cols-2 gap-4">
    <article
      v-for="blog in 3"
      :key="blog"
      class="card p-4 bg-white md:rounded md:shadow-lg lg:flex lg:max-w-3xl"
    >
      <div class="card__header mb-1 md:mb-0 md:mr-6">
        <figure
          class="card__figure lg:h-96 md:h-36 w-full lg:w-72 rounded-md bg-gray-500"
        >
          <img
            src="https://picsum.photos/700/400"
            alt="image"
            class="card__image lg:h-full md:h-36 w-full rounded-md object-cover object-center"
          />
        </figure>
      </div>
      <div class="flex flex-col">
        <div class="card__body flex flex-col flex-1">
          <div class="lg:flex items-center flex-wrap hidden lg:order-2">
            <h2
              class="card__category text-xs ml-auto text-gray-400 inline-flex items-center lg:order-last"
            >
              18-20 Okt '20
            </h2>
            <span
              class="text-hw-teal mr-2 inline-flex items-center md:ml-0 ml-auto leading-none text-xs pr-2 py-1 mt-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-map-pin w-4 h-4 mr-1"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle></svg
              >Grand Wijaya Center
            </span>
            <span
              class="text-gray-400 inline-flex items-center leading-none text-sm lg:hidden"
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
          <h3 class="card__subtitle text-gray-600 text-xs mb-1 lg:hidden">
            20 Sept, 2020
          </h3>
          <nuxt-link
            :to="`/events/haha`"
            class="card__title font-calistoga lg:text-2xl lg:leading-7 capitalize"
          >
            Pharetra ipsum velit odio quis 2020
          </nuxt-link>
          <p
            class="card__copy text-gray-500 text-sm lg:text-lg line-clamp-4 lg:line-clamp-3 lg:mt-3 lg:order-1"
          >
            {{
              blog.content
                ? blog.content
                : 'Condimentum feugiat felis urna dolor, tincidunt elementum, at enim, consequat. Diam consequat integer eget venenatis, viverra ...'
            }}
          </p>
        </div>
        <footer class="card__footer hidden lg:block mt-6">
          <div class="card__actions py-3 px-4 bg-hw-teal rounded-md text-white">
            <nuxt-link :to="`/blogs/${blog.slug}`">
              <button class="button w-full">Read more...</button>
            </nuxt-link>
          </div>
        </footer>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'EventList',
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
