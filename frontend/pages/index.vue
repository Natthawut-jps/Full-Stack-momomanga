<script setup lang="ts">
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
    <div class="grid grid-cols-6 gap-4">
      <div class="col-span-6 lg:col-span-4">
        <div>
          <div>
            <p class="tezt-lg font-semibold">มังงะประจำสัปดาห์</p>
            <div
              class="py-4 box-border grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2"
            >
              <div v-for="(item, index) in 10" :key="index">
                <div>
                  <div>
                    <NuxtImg
                      class="w-full object-cover"
                      src="/img/360297.jpg"
                      alt=""
                    />
                  </div>
                  <div class="text-base">
                    <div>title</div>
                    <div>chapter</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="tezt-lg font-semibold">มังงะสุดฮิต</p>
            <div
              class="py-4 box-border grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2"
            >
              <div v-for="(item, index) in 20" :key="index">
                <div>
                  <div>
                    <NuxtImg
                      class="w-full object-cover"
                      src="/img/360297.jpg"
                      alt=""
                    />
                  </div>
                  <div class="text-base">
                    <div>title</div>
                    <div>chapter</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="pt-4 px-4 box-border flex flex-row justify-center items-center"
            >
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
        </div>
      </div>
      <div
        class="rounded-sm col-span-6 lg:col-span-2 border-5 border-gray-700/40 border-solid h-fit"
      >
        <div class="container mx-auto p-4 box-border flex flex-col gap-2">
          <div class="font-semibold text-lg">Tag:</div>
          <div class="grid grid-cols-2">
            <div v-for="(item, index) in 30" :key="index">
              <NuxtLink :to="{ name: `manga` }">{{
                "tagName - " + item
              }}</NuxtLink>
            </div>
          </div>
        </div>
        <div class="container mx-auto p-4 box-border flex flex-col gap-2">
          <div class="font-semibold text-lg">อัพเดตใหม่</div>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2">
            <div v-for="(item, index) in 12" :key="index">
              <div>
                <NuxtImg src="/img/360297.jpg" class="object-cover w-full" />
              </div>
              <div class="text-base">
                <div>title</div>
                <div>chapter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
