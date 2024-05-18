<script lang="ts" setup>
import { content } from "~/composables/constants/content";
</script>

<template>
  <div
    class="container mx-auto px-2.5 py-24 space-y-5 lg:flex lg:flex-wrap lg:gap-x-12 lg:gap-y-10"
  >
    <template v-for="(item, index) in content" :key="index">
      <div class="flex space-x-4 lg:max-w-lg">
        <div>
          <img
            :src="item.image"
            alt="image-content"
            class="h-20 lg:h-24 object-contain"
          />
        </div>
        <div class="flex-1">
          <h3 class="text-2xl font-semibold mb-3 lg:text-3xl">
            {{ item.title }}
          </h3>
          <p class="mb-2 lg:text-2xl">{{ item.description }}</p>
          <button
            type="button"
            class="text-primary flex items-center space-x-2"
          >
            <span>Learn More</span>
            <i class="ri-arrow-right-line text-xl"></i>
          </button>
        </div>
      </div>
    </template>
  </div>
</template>
