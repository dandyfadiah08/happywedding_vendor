<template>
  <nav>
    <ul class="mt-6 -mb-px space-x-8 text-sm lg:mt-0 main-nav__list">
      <slot></slot>
    </ul>
  </nav>
</template>

<style scoped>
.main-nav__list {
  @apply flex items-center;
}
</style>
