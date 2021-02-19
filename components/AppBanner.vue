<template>
  <!-- @clickSlide="onSwiperClickSlide"
        @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart" -->
  <div class="example">
    <client-only>
      <swiper ref="carousel" class="swiper" :options="swiperOptions">
        <swiper-slide v-for="test in images" :key="test">
          <figure>
            <img :src="test" :alt="test" />
          </figure>
        </swiper-slide>

        <div
          slot="button-prev"
          class="swiper-button-prev swiper-button-white"
        ></div>
        <div
          slot="button-next"
          class="swiper-button-next swiper-button-white"
        ></div>
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'BannerSlider',
  data() {
    return {
      images: [
        'https://i.pinimg.com/originals/2e/80/a2/2e80a20f658e61fe3c52aac3adbbd7a5.jpg',
        'https://s3.envato.com/files/167020412/20_Billboard.jpg',
        'https://i.pinimg.com/originals/a5/2b/ba/a52bba5296520b4b7effdcd97dbf7fee.jpg',
      ],
      swiperOptions: {
        loop: true,
        autoHeight: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 80,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: {
            slidesPerView: '2',
          },
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  // methods: {
  //   onSwiperRedied(swiper) {
  //     console.log('Swiper redied!', swiper)
  //   },
  //   onSwiperSlideChangeTransitionStart() {
  //     console.log('SwiperSlideChangeTransitionStart!')
  //   },
  //   onSwiperClickSlide(index, reallyIndex) {
  //     console.log('Swiper click slide!', reallyIndex)
  //   },
  // },
}
</script>

<style lang="scss">
.example {
  height: auto;
  margin-bottom: 2rem;

  // .swiper-button-next, .swiper-button-prev {
  //   display: none;
  // }
}

.example .swiper {
  height: auto;
  width: auto;
  // margin-top: 20px;
}

.example .swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 640px) {
  .example {
    // margin-top: 8rem;
    margin-bottom: 4.6rem;
  }

  .swiper-container-autoheight .swiper-wrapper {
    align-items: center !important;
  }
}

@media (max-width: 480px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
}
</style>
