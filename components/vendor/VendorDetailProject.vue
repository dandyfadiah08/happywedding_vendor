<template>
  <div>
    <VendorDetailMobile
      v-if="$device.isMobile"
      :items="{ projects: items }"
      @show-media="index"
    />

    <div
      v-else
      class="block lg:grid place-items-center grid-cols-4 gap-y-6 mt-12 mb-12"
    >
      <AppCard
        v-for="(item, idx) in items"
        :key="item.id"
        :item="item"
        theme="project"
        @click="index(idx)"
      >
        <template #caption>
          <p class="text-xs font-bold cursor-pointer">{{ item.category }}</p>
          <div class="flex items-center">
            <ImageIcon class="mr-1" />
            <p class="text-xs font-bold cursor-default">
              +{{ item.images.length }}
            </p>
          </div>
        </template>
      </AppCard>
    </div>

    <client-only placeholder="Loading...">
      <LightBox ref="lightbox" :media="media" :show-light-box="false">
        <template v-slot:customCaption="slotProps">
          {{ slotProps.currentMedia.caption }}<br />
          {{ items[id].description }}
        </template>
      </LightBox>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      media: [],
      id: 0,
    }
  },

  updated() {
    const lightbox = this.$refs.lightbox

    if (lightbox.$refs.container) {
      lightbox.$refs.container.firstChild.onclick = this.content
    }
  },

  methods: {
    index(payload) {
      this.media.length = 0
      this.id = payload

      this.items[payload].images.forEach((item, index) => {
        const { thumb, src } = { thumb: item, src: item }
        this.media.push({ thumb, src })
      })

      this.$refs.lightbox.showImage(0)
    },

    content() {
      const children = this.$refs.lightbox.$refs.container.children
      const hideableElement = Array.from(children).filter(
        (item) => !item.classList.contains('vib-content')
      )
      const hiddenClass = this.$refs.lightbox.$refs.container.querySelectorAll(
        '.vib-hidden'
      )

      hiddenClass.forEach((item) => {
        item.classList.remove('vib-hidden')
      })

      setTimeout(function () {
        hideableElement.forEach((item) => {
          item.classList.add('vib-hidden')
        })
      }, 3000)
    },
  },
}
</script>
