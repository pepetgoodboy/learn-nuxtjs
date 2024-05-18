<template>
  <!-- <header class="w-full border-b border-slate-200 py-6">
    <div class="container">
      <div class="flex justify-between items-center px-8">
        <div>
          <NuxtLink to="/" class="text-xl font-bold">Mamae</NuxtLink>
        </div>
        <nav class="flex items-center gap-6">
          <NuxtLink to="/" class="text-base">Home</NuxtLink>
          <NuxtLink to="/product" class="text-base">Products</NuxtLink>
          <NuxtLink to="/cart" class="text-base">Cart</NuxtLink>
        </nav>
      </div>
    </div>
  </header> -->

  <header class="w-full h-16 bg-black px-8 py-5 lg:py-3">
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center gap-x-2">
        <img
          class="h-5 lg:h-7"
          src="../public/images/tailwind/logo-text.png"
          alt="logo"
        />
        <p class="text-white/80">|</p>
        <h3 class="text-white/80">Help Center</h3>
      </div>
      <div class="flex items-center gap-x-2 lg:hidden">
        <i class="ri-search-line text-white"></i>
        <i class="ri-menu-line text-white"></i>
      </div>
      <!-- Button Right -->
      <div class="hidden lg:block">
        <div class="flex gap-x-4">
          <button
            class="px-6 bg-black border border-white rounded-md text-white font-medium"
          >
            Submit a request
          </button>
          <button
            class="px-6 py-2 bg-primary1 rounded-md text-white font-semibold"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
