<script setup lang="ts">
import { ref } from 'vue';
const page = ref(5);
function to(page: number) {
  return {
    query: {
      page,
    },
  };
}
</script>
<template>
  <div class="p-4 box-border">
    <div
      class="border-b-[1px] border-solid border-gray-600 box-border m-4 pb-2 text-lg font-semibold capitalize"
    >
      {{ $route.params.genre }}
    </div>
    <div
      class="px-4 box-border grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-2"
    >
      <div v-for="(item, index) in 10" :key="index">
        <NuxtLink
          class="flex flex-col"
          :to="{ name: `manga-series`, params: { series: item } }"
        >
          <div>
            <NuxtImg src="/img/360297.jpg" class="object-cover w-full" />
          </div>
          <div>title</div>
          <div>chapter</div>
        </NuxtLink>
      </div>
    </div>
    <div class="pt-4 px-4 box-border flex flex-row justify-center items-center">
      <UPagination
        size="sm"
        v-model:page="page"
        :items-per-page="20"
        show-edges
        :sibling-count="1"
        :to="to"
        :total="100"
        active-color="neutral"
        active-variant="subtle"
        :ui="{ first: 'hidden', last: 'hidden' }"
      />
    </div>
  </div>
</template>
