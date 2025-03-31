<script setup lang="ts">
import { ref } from "vue";
import type { BreadcrumbItem } from "@nuxt/ui";
const route = useRoute();
const items = ref<BreadcrumbItem[]>([
  {
    label: "momomanga",
    to: "/",
  },
  {
    label: route.params.chapter.toString().trim(),
    to: route.params.chapter.toString().trim(),
  },
]);
</script>
<template>
  <div class="flex flex-col gap-2 max-w-[1100px] w-full justify-self-center">
    <div class="container mx-auto p-4 box-border">
      {{ $route.params.chapter }}
    </div>
    <div
      class="bg-gray-800/30 rounded-xs py-1 px-3 text-white text-base flex flex-row flex-wrap items-end gap-1"
    >
      <NuxtLink>momomanga</NuxtLink
      ><UIcon
        name="i-tabler:chevron-right"
        class="size-4.5 text-gray-600 px-1"
      /><NuxtLink>{{ $route.params.chapter }}</NuxtLink>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex flex-row justify-between">
        <div
          class="px-1.5 py-0.5 bg-gray-800/90 rounded-xl flex flex-row justify-center gap-1"
        >
          <select
            name=""
            id=""
            class="cursor-pointer appearance-none focus:outline-none font-medium"
          >
            <option
              value=""
              v-for="(item, index) in 18"
              :key="index"
              class="bg-gray-800 focus:outline-none text-base"
            >
              ตอนที่&nbsp;{{ item }}
            </option>
          </select>
          <div class="flex flex-col items-center justify-center">
            <UIcon name="i-tabler:caret-up-down-filled" class="size-3" />
          </div>
        </div>
        <div class="flex flex-row gap-3">
          <div
            class="px-1.5 py-0.5 bg-gray-800/90 rounded-xl cursor-pointer font-medium text-sm flex flex-row items-center justify-center"
          >
            <UIcon name="i-tabler:chevron-left" class="size-3.5" /> Prev
          </div>
          <div
            class="px-1.5 py-0.5 bg-gray-800/90 rounded-xl cursor-pointer font-medium text-sm flex flex-row items-center justify-center"
          >
            Next <UIcon name="i-tabler:chevron-right" class="size-3.5" />
          </div>
        </div>
      </div>
      <div>
        <div v-for="(index, item) in 30" :key="index">
          <div class="flex flex-row justify-center">
            <NuxtImg
              src="/img/67951773ecddcme6bg.jpg"
              class="object-cover w-full max-w-[1000px]"
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
