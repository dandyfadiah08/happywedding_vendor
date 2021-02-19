<template>
  <component :is="type" :slide="slide">
    <article
      :class="[
        {
          'flex w-full card__image': isDetailCard,
          card: !isDetailCard,
          'card pt-2': isProjectCard && $device.isMobile,
          'xl:shadow-md': !isProjectCard,
          'bg-white': !isProjectCard,
        },
        'p-5',
      ]"
    >
      <div
        :class="[
          {
            'flex-col': isStoreCard || isVendorCard || isProjectCard,
            'lg:flex-1 lg:max-w-2xl': isDetailCard,
          },
          'flex h-full',
        ]"
      >
        <div :class="[{ 'mr-4': isDetailCard }, 'relative']">
          <figure class="card__figure grid place-items-center">
            <img
              :src="
                item.image
                  ? item.image
                  : 'https://images.unsplash.com/photo-1553102674-af685bb5fe40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
              "
              :alt="item.name"
              :class="[
                {
                  'w-56 h-32': isProjectCard,
                  card__image: !isProjectCard,
                  'transition duration-500 ease-in-out transform shadow-lg cursor-pointer select-none hover:shadow-hw-shadow opacity-75 hover:opacity-100':
                    isProjectCard && !$device.isMobile,
                },
                'object-cover card__image',
              ]"
              @click="$emit('click', item.key)"
            />
          </figure>
          <div
            v-if="isProjectCard && !$device.isMobile"
            class="absolute w-full h-8 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-500 border__lb__rb"
          >
            <div class="absolute flex justify-between w-10/12 pos">
              <slot name="caption"></slot>
            </div>
          </div>
        </div>
        <div
          :class="[
            { 'flex flex-col justify-between': isStoreCard },
            'xl:flex-1 xl:max-w-lg',
          ]"
        >
          <div
            :class="[
              { 'xl:mr-8 xl:flex self-center': isDetailCard },
              'card__body flex-col justify-between flex-1',
            ]"
          >
            <h2
              :title="item.name"
              :class="[
                {
                  'lg:text-3xl lg:mt-0': isDetailCard,
                  'text-center':
                    isVendorCard || (isProjectCard && !$device.isMobile),
                  'line-clamp-1':
                    isProjectCard || (isStoreCard && !$device.isMobile),
                  'lg:text-lg': isStoreCard && !$device.isMobile,
                },
                'card__title mt-1 lg:mt-2',
              ]"
            >
              {{ $capitalize(item.name ? item.name : 'hahaha') }}
            </h2>
            <slot name="category"></slot>
            <slot name="sub">
              <div
                v-if="isVendorCard"
                class="flex xl:flex-col xl:items-center items-end justify-center"
              >
                <client-only>
                  <star-rating
                    class="mb-1 xl:mb-0 -ml-1"
                    :increment="0.01"
                    inactive-color="#858720"
                    :rating="item.rating ? item.rating : 3"
                    :glow="10"
                    :star-size="16"
                    :show-rating="false"
                    :rounded-corners="true"
                    :read-only="true"
                    :star-points="star"
                  ></star-rating>
                </client-only>
                <p class="ml-4 xl:ml-0 text-sm text-gray-600">
                  {{ item.reviews ? item.reviews : 5 }} reviews
                </p>
              </div>
            </slot>
          </div>
          <slot name="action"></slot>
        </div>
      </div>
      <div v-if="isDetailCard && $device.isDesktop" class="self-center h-20">
        <div class="text-center px-24 font-calistoga">
          <p class="text-lg mb-2">Projects</p>
          <p class="text-4xl">{{ item.projects.length }}</p>
        </div>
      </div>
      <div v-if="isDetailCard && $device.isDesktop" class="self-center h-20">
        <div class="text-center px-24 font-calistoga">
          <p class="text-lg">Ratings</p>
          <div class="text-2xl flex items-center">
            <p>{{ item.rating }}</p>
            <client-only>
              <star-rating
                class="mb-3 ml-1"
                :increment="0.01"
                inactive-color="#858720"
                :rating="item.rating"
                :glow="10"
                :star-size="18"
                :show-rating="false"
                :rounded-corners="true"
                :read-only="true"
                :star-points="star"
              ></star-rating>
            </client-only>
          </div>
          <p class="font-poppins text-sm text-gray-600 -mt-3">
            {{ item.reviews.length }} reviews
          </p>
        </div>
      </div>
    </article>
  </component>
</template>

<script>
import StarRating from 'vue-star-rating'
// import { SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Card',
  components: {
    StarRating,
    //   SwiperSlide,
  },
  props: {
    theme: {
      type: String,
      default: 'vendor',
      validator(value) {
        return [
          'vendor',
          'featured',
          'detail-card',
          'project',
          'store',
        ].includes(value)
      },
    },
    slide: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      star: [
        23,
        2,
        14,
        17,
        0,
        19,
        10,
        34,
        7,
        50,
        23,
        43,
        38,
        50,
        36,
        34,
        46,
        19,
        31,
        17,
      ],
    }
  },

  computed: {
    type() {
      return this.slide ? 'swiper-slide' : 'div'
    },
    isDetailCard() {
      return this.theme === 'detail-card'
    },
    isProjectCard() {
      return this.theme === 'project'
    },
    isStoreCard() {
      return this.theme === 'store'
    },
    isVendorCard() {
      return this.theme === 'vendor'
    },
  },
}
</script>

<style scoped>
.swiper-slide {
  width: 16rem;
}

.card__image {
  border-radius: 30px 10px;
}

.card__title {
  @apply font-calistoga tracking-wide;
}

.pos {
  bottom: 6px;
  left: 16px;
  color: white;
}

.border__lb__rb {
  border-radius: 0 0 30px 10px;
}

/* .overlay span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-image: linear-gradient(black, black, black);
  opacity: 0.7;
} */

@media (min-width: 768px) {
  .swiper-slide {
    width: 20rem;
  }

  .card {
    border-radius: 30px 10px;
    width: 297px;
    height: 364px;
  }

  figure .card__image {
    width: 257px;
    height: 183px;
  }
}
</style>
