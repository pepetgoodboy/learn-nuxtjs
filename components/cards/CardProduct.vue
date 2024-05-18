<script lang="ts" setup>
import type { Products } from "~/types/products";

const props = defineProps({
  product: {
    type: Object,
    default: {},
  },
});

const oneProduct = ref(props.product);

const isShowAlertAdd = ref(false);
const isShowAlertRemove = ref(false);
const addCart = () => {
  oneProduct.value.isCart = !oneProduct.value.isCart;
  let localStorageData = localStorage.getItem("products");
  let productOfCart: Products[] = [];

  if (localStorageData) {
    productOfCart = JSON.parse(localStorageData);
  }

  if (oneProduct.value.isCart) {
    productOfCart.push(oneProduct.value);
    localStorage.setItem("products", JSON.stringify(productOfCart));
    isShowAlertAdd.value = true;
    setTimeout(() => {
      isShowAlertAdd.value = false;
    }, 2000);
  } else {
    productOfCart = productOfCart.filter(
      (item) => item.id !== oneProduct.value.id
    );
    localStorage.setItem("products", JSON.stringify(productOfCart));
    isShowAlertRemove.value = true;
    setTimeout(() => {
      isShowAlertRemove.value = false;
    }, 2000);
  }
};
</script>

<template>
  <section class="bg-white shadow-xl rounded-xl overflow-hidden">
    <div :class="`w-full h-[200px] p-5 bg-gray-300`">
      <img :src="oneProduct.image" class="w-full h-full object-contain" />
    </div>
    <div class="px-5 pb-5 pt-9 relative">
      <NuxtLink :to="`/product/${oneProduct.id}`">
        <h3
          v-if="isShowAlertAdd"
          class="p-2 text-sm rounded-lg bg-green-100 text-green-800 mb-4"
        >
          Successfully Add to cart
        </h3>
        <h3
          v-if="isShowAlertRemove"
          class="p-2 text-sm rounded-lg bg-red-100 text-red-800 mb-4"
        >
          Successfully Remove from cart
        </h3>
        <h3 class="text-lg font-bold mb-4 text-limit limit-2">
          {{ oneProduct.name }}
        </h3>
      </NuxtLink>
      <div class="flex justify-between items-center">
        <span class="text-sm font-normal">{{ oneProduct.category }}</span>
        <span class="text-sm font-normal">${{ oneProduct.price }}</span>
      </div>
      <div
        :class="`cursor-pointer absolute -top-5 right-7 w-[50px] h-[50px] ${
          oneProduct.isCart
            ? 'bg-red-600 text-white hover:bg-red-700 hover:text-white'
            : 'bg-white hover:bg-blue-600 hover:text-white'
        } shadow-xl rounded-full flex justify-center items-center transition duration-300`"
        @click="addCart"
      >
        <i v-if="oneProduct.isCart" class="ri-delete-bin-6-line"></i>
        <i v-else class="ri-shopping-cart-2-line"></i>
      </div>
    </div>
  </section>
</template>
