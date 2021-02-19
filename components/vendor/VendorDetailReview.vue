<template>
  <div class="lg:mt-10">
    <section class="text-center">
      <p class="font-bold xl:text-lg">Review this vendor</p>
      <p class="text-xs xl:text-base">
        write lovely experience of yours with this vendor
      </p>
      <div class="mt-4 px-20">
        <AppButton class="inline-block">Write a Review</AppButton>
      </div>
    </section>

    <section
      class="grid grid-flow-row-dense divide-y grid-cols-1 lg:divide-y-0 lg:grid-cols-2 bg-white lg:bg-transparent lg:gap-6 mt-12 space-y-2 lg:space-y-0"
    >
      <article
        v-for="item in items"
        :key="item.id"
        class="pt-4 pb-2 lg:py-10 lg:px-8 lg:my-0 lg:mr-0 lg:bg-white lg:shadow-lg lg:rounded-2xl"
      >
        <div class="flex">
          <figure class="flex flex-grow w-2/12 justify-center md:mr-2 xl:mr-4">
            <img
              :src="`https://ui-avatars.com/api/?background=random&color=fff&name=${item.username}`"
              :alt="item.username"
              class="w-8 h-8 md:w-16 md:h-16 xl:w-24 xl:h-24 rounded-full"
            />
          </figure>
          <section class="pr-5 flex-shrink w-10/12">
            <header class="flex justify-between mb-2">
              <div class="text-xs lg:text-lg leading-tight">
                <h1 class="font-bold capitalize">{{ item.username }}</h1>
                <p class="font-normal text-gray-500 lg:text-sm">
                  posted on {{ item.time }}
                </p>
              </div>
              <client-only>
                <star-rating
                  class="xl:mb-1 -ml-1"
                  :increment="0.01"
                  inactive-color="#858720"
                  :rating="item.rating"
                  :glow="10"
                  :star-size="16"
                  :show-rating="false"
                  :rounded-corners="true"
                  :read-only="true"
                ></star-rating>
              </client-only>
            </header>
            <div class="flex text-xs lg:block line-clamp-2">
              <p class="lg:text-sm">
                <span class="font-black capitalize">
                  {{ item.title }}&nbsp;
                </span>
                <br v-if="!$device.isMobile" /><span class="text-gray-700">{{
                  item.review
                }}</span>
              </p>
            </div>
          </section>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  components: {
    StarRating,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
