<script setup lang="ts">
import { NuxtImg } from "#components";

const sliover = ref<boolean>(false);
</script>
<template>
  <div>
    <header
      class="p-4 box-border flex flex-row items-center md:gap-16 shadow-[0px_5px_3px_-4px] shadow-gray-800"
    >
      <div class="md:flex-none flex-1 w-fit">
        <NuxtLink :to="{ name: 'index' }" class="flex flex-row w-fit">
          <NuxtImg
            src="/img/Logo_momo-manga.png"
            class="object-cover w-[100px] max-w-[100px]"
            alt=""
          />
        </NuxtLink>
      </div>
      <div class="hidden md:flex flex-row gap-8 items-end">
        <NuxtLink class="min-w-fit" :to="{ name: 'index' }">หน้าแรก</NuxtLink>
        <NuxtLink :to="{ name: 'manga' }">manga</NuxtLink>
        <NuxtLink :to="{ name: 'manhwa' }">manhwa</NuxtLink>
        <NuxtLink :to="{ name: 'manhua' }">manhua</NuxtLink>
      </div>
      <div class="md:flex-1 md:inline-block flex flex-row items-center gap-4">
        <div class="flex flex-row gap-2 items-end">
          <div
            class="hidden md:inline-block py-1 px-2 md:p-0 bg-black/20 md:bg-transparent rounded-full cursor-pointer md:cursor-default"
          >
            <UIcon name="i-fa-solid-search" class="opacity-60" />
          </div>
          <UModal :ui="{ header: 'min-h-14', close: 'cursor-pointer' }">
            <div
              class="inline-block md:hidden py-1 px-2 md:p-0 bg-black/20 md:bg-transparent rounded-full cursor-pointer md:cursor-default"
            >
              <UIcon name="i-fa-solid-search" class="opacity-60" />
            </div>
            <template #body>
              <div class="flex flex-row gap-2 items-center">
                <UIcon name="i-fa-solid-search" class="opacity-60" />
                <input
                  type="text"
                  placeholder="ค้นหา..."
                  class="w-full border-b border-solid border-amber-50/10 focus:outline-none text-gray-400 text-base"
                />
              </div>
            </template>
          </UModal>
          <input
            type="text"
            placeholder="ค้นหา..."
            class="w-full text-base max-w-[350px] border-b border-solid border-amber-50/10 md:block hidden focus:outline-none text-gray-400"
          />
        </div>
        <div class="inline-block md:hidden">
          <USlideover
            v-model:open="sliover"
            side="left"
            :ui="{ content: 'w-[80%]', close: 'cursor-pointer' }"
          >
            <template #title>
              <NuxtLink
                target="_top"
                :to="{ name: 'index' }"
                class="flex flex-row w-fit"
              >
                <NuxtImg
                  src="/img/Logo_momo-manga.png"
                  class="object-cover w-full max-w-[70px]"
                />
              </NuxtLink>
            </template>
            <UButton
              @click="sliover = true"
              color="neutral"
              class="cursor-pointer"
              variant="outline"
              icon="i-lucide-menu"
            />
            <template #body>
              <div class="flex flex-col gap-3">
                <NuxtLink target="_top" :to="{ name: 'index' }"
                  >หน้าแรก</NuxtLink
                >
                <NuxtLink target="_top" :to="{ name: 'manga' }">manga</NuxtLink>
                <NuxtLink target="_top" :to="{ name: 'manhwa' }"
                  >manhwa</NuxtLink
                >
                <NuxtLink target="_top" :to="{ name: 'manhua' }"
                  >manhua</NuxtLink
                >
              </div>
            </template>
          </USlideover>
        </div>
      </div>
    </header>
    <slot />
  </div>
  <footer class="shadow-[0px_-5px_4px_-4px] shadow-gray-800">
    <div class="p-4 box-border flex flex-row justify-between text-sm gap-2">
      <div class="flex flex-row flex-wrap gap-3">
        <NuxtLink :to="{ name: 'index' }">momomanga.com &nbsp;- </NuxtLink>
        <NuxtLink :to="{ name: 'manga' }">manga</NuxtLink>
        <NuxtLink :to="{ name: 'manhua' }">manhua</NuxtLink>
        <NuxtLink :to="{ name: 'manhwa' }">manhwa</NuxtLink>
      </div>
      <p>Copyright © 2025</p>
    </div>
  </footer>
</template>
