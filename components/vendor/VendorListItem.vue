<template>
  <AppCard :item="vendor">
    <template #category>
      <p class="text-sm text-hw-teal text-center lg:text-xs">
        {{ vendor.service_category }} · {{ vendor.service_location }}
      </p>
    </template>
    <template #action>
      <div class="mt-3 font-crete">
        <AppButton class="flex justify-center" :to="`/vendors/${vendor.slug}`"
          >Price List</AppButton
        >
      </div>
    </template>
  </AppCard>
</template>

<script>
export default {
  name: 'VendorListItem',
  props: {
    vendor: {
      required: true,
      type: Object,
    },
  },
}
</script>
