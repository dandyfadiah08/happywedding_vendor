<template>
  <div class="xl:mt-4">
    <AppCard :item="item" theme="detail-card">
      <template #category>
        <p class="text-sm text-hw-teal">
          {{ item.service_category }}
        </p>
      </template>
      <template #sub>
        <p class="font-poppins text-xs text-gray-600">
          Online 12 hours ago | Jakarta, ID
        </p>
      </template>
      <template v-if="$device.isDesktop" #action>
        <div class="flex mt-8 font-crete">
          <AppButton class="mr-4" :to="`/vendors/${item.slug}`"
            >Message</AppButton
          >
          <AppButton :to="`/vendors/${item.slug}`">Info</AppButton>
        </div>
      </template>
    </AppCard>
  </div>
</template>

<script>
export default {
  name: 'VendorDetailCard',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
