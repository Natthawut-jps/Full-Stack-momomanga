<script setup lang="ts">
const isActive_star = ref<boolean>(true);
</script>
<template>
  <div class="container mx-auto p-4 box-border">
    <div
      class="bg-gray-800/30 rounded-xs py-1 px-3 w-fit text-white text-base flex flex-row items-end"
    >
      <NuxtLink>momomanga</NuxtLink
      ><UIcon
        name="i-tabler:chevron-right"
        class="size-4.5 text-gray-600 px-1"
      /><NuxtLink>{{ $route.params.series }}</NuxtLink>
    </div>
    <div class="grid grid-cols-4 gap-6 p-4 box-border">
      <div
        class="lg:col-span-1 sm:col-span-2 col-span-4 flex flex-col gap-2 items-center"
      >
        <NuxtImg
          src="/img/360297.jpg"
          class="object-cover w-full sm:max-w-full max-w-[350px]"
        />
        <div class="w-full max-w-[350px]">
          <button
            class="px-2 py-1 bg-pink-600 w-full rounded-sm cursor-pointer text-sm"
          >
            Bookmark
          </button>
        </div>
        <div>
          <div class="flex items-center">
            <svg
              class="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
            <svg
              :class="[
                isActive_star === false
                  ? 'w-4 h-4 text-yellow-300 me-1'
                  : 'w-4 h-4 text-gray-300 me-1 dark:text-gray-500',
              ]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
            <p
              class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400"
            >
              4
            </p>
            <p
              class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400"
            >
              out of
            </p>
            <p
              class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400"
            >
              5
            </p>
          </div>
        </div>
      </div>
      <div
        class="lg:col-span-3 sm:col-span-2 col-span-4 flex flex-col gap-4 rounded-xs w-full p-4 bg-white/1 drop-shadow-xl shadow-xl box-border"
      >
        <div>title</div>
        <div>genres</div>
        <div>description</div>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div class="">รายชื่อตอน</div>
      <div class="grid grid-cols-2 gap-2">
        <div
          class="bg-pink-600 w-full flex flex-col justify-center items-center px-3.5 py-2 box-border rounded-md"
        >
          <div class="text-sm">ตอนแรก</div>
          <div class="text-base font-semibold">ตอนที่&nbsp;1</div>
        </div>
        <div
          class="bg-pink-600 w-full flex flex-col justify-center items-center px-3.5 py-2 box-border rounded-md"
        >
          <div class="text-sm">ตอนใหม่</div>
          <div class="text-base font-semibold">ตอนที่&nbsp;27</div>
        </div>
      </div>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 max-h-[300px] overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-pink-600"
      >
        <div v-for="(item, index) in 27" :key="index">
          <div class="border-[1px] border-solid rounded-md p-1 box-border mr-2">
            <div class="text-base font-medium">ตอนที่ &nbsp;{{ item }}</div>
            <div class="text-xs text-gray-500">19 ตุลาคม, 2022</div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4 box-border">
      <div class="bg-white/5 rounded-sm drop-shadow-xl shadow-xl">
        <div class="p-4 pb-2 box-border font-semibold text-lg">
          Related Series
        </div>
        <div
          class="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4 p-4 pt-2 box-border"
        >
          <div v-for="(item, index) in 10" :key="index">
            <NuxtLink>
              <div>
                <NuxtImg src="/img/360297.jpg" class="object-cover w-full" />
              </div>
              <div>title</div>
              <div>chapter</div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
