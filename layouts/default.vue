<template>
  <div>
    <header class="shadow-md bg-[#353543] fixed top-0 left-0 right-0 z-10">
      <nav class="flex mx-auto justify-between px-[12%]">
        <NuxtLink to="/" class="font-bold text-lg sm:text-xl py-4 text-white">Personal</NuxtLink>
        <ul class="flex gap-5 sm:gap-10 py-5">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/certificate">Certificate</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/portfolio">Portfolio</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
  <div class="mt-[6rem]">
    <slot />
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: white;
}
</style>