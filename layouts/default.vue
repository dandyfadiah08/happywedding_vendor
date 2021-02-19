<template>
  <div class="flex flex-col h-screen">
    <AppHeader />
    <Nuxt class="flex-1 pb-16 pt-14" />
    <AppBottomNav v-if="$device.isMobile">
      <div
        v-if="this.$route.name === 'vendors-slug'"
        class="flex px-4 my-2 w-full space-x-4"
      >
        <CallButton />
        <InfoButton />
      </div>
    </AppBottomNav>
  </div>
</template>

<style>
html {
  /* font-family: 'Poppins', sans-serif, 'Calistoga', cursive, 'Cormorant Garamond',
    'Cormorant Upright', 'Crete Round', serif; */
  font-family: 'Calistoga', cursive;
  font-family: 'Cormorant Garamond', serif;
  font-family: 'Cormorant Upright', serif;
  font-family: 'Crete Round', serif;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-image: url('../assets/bg.jpg');
  background-position: center;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
