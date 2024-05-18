<template>
  <footer class="bg-black text-white">
    <div
      class="container mx-auto px-2.5 py-12 lg:flex lg:justify-between lg:px-12 lg:items-end"
    >
      <div class="flex flex-wrap gap-y-5 mb-16 lg:gap-20">
        <div class="w-1/2 lg:w-auto">
          <h3 class="text-2xl font-semibold mb-2">Abstract</h3>
          <ul>
            <li><NuxtLink to="#">Start Trial</NuxtLink></li>
            <li><NuxtLink to="#">Pricing</NuxtLink></li>
            <li><NuxtLink to="#">Download</NuxtLink></li>
          </ul>
        </div>
        <div class="w-1/2 lg:w-auto">
          <h3 class="text-2xl font-semibold mb-2">Resources</h3>
          <ul>
            <li><NuxtLink to="#">Blog</NuxtLink></li>
            <li><NuxtLink to="#">Help Center</NuxtLink></li>
            <li><NuxtLink to="#">Release Notes</NuxtLink></li>
            <li><NuxtLink to="#">Status</NuxtLink></li>
          </ul>
        </div>
        <div class="w-1/2 lg:w-auto">
          <h3 class="text-2xl font-semibold mb-2">Community</h3>
          <ul>
            <li><NuxtLink to="#">Twitter</NuxtLink></li>
            <li><NuxtLink to="#">LinkedIn</NuxtLink></li>
            <li><NuxtLink to="#">Facebook</NuxtLink></li>
            <li><NuxtLink to="#">Dribble</NuxtLink></li>
            <li><NuxtLink to="#">Podcast</NuxtLink></li>
          </ul>
        </div>
        <div class="w-1/2 lg:w-auto">
          <h3 class="text-2xl font-semibold mb-2">Company</h3>
          <ul class="mb-5">
            <li><NuxtLink to="#">About Us</NuxtLink></li>
            <li><NuxtLink to="#">Careers</NuxtLink></li>
            <li><NuxtLink to="#">Legal</NuxtLink></li>
          </ul>

          <p>
            <strong>Contact Us</strong>
          </p>
          <NuxtLink to="#">info@abstract.com</NuxtLink>
        </div>
      </div>
      <div class="text-lg">
        <img
          src="../public/images/tailwind/logo.png"
          alt="logo"
          class="h-10 mb-6"
        />
        <p>&copy; Copyright 2023</p>
        <p>Abstract Studio Design, Inc.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
