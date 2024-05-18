<script lang="ts" setup>
import Content from "~/components/content/content.vue";
</script>

<template>
  <div class="bg-primary">
    <div
      class="container h-96 flex flex-col mx-auto items-center justify-center"
    >
      <h1 class="text-4xl lg:text-6xl mb-8 tracking-tight">How can we help?</h1>
      <label for="search" class="relative lg:w-1/2">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          class="px-4 py-3 w-72 border border-black rounded-sm lg:w-full lg:py-5"
        />
        <i class="ri-arrow-right-line text-3xl absolute top-2.5 right-2"></i>
      </label>
    </div>
  </div>
  <Content />
</template>
