<template>
  <div class="pb-15">
    <Swiper :items="homeStore.swipers" :height="36 * store.rate + 'rem'"></Swiper>
    <Container>
      <!-- 标题 -->
      <div class="py-4">
        <div class="text-2xl">“</div>
        <div class="text-2xl font-bold pb-4">我的技术学习平台 - 专业课程分享</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400 w-2/3">
            专注于现代Web开发技术分享，提供Vue3、React、Node.js等前沿技术课程。我们致力于帮助开发者提升技能，掌握最新的开发工具和最佳实践，在技术道路上不断成长！
          </div>
          <div class="flex pl-20 w-1/3 justify-end items-center">
            <div class="w-1/2 h-[1px] bg-gray-500"></div>
            <div class="text-2xl relative ml-2 top-1">”</div>
          </div>
        </div>
      </div>
    </Container>
    <Container>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full lt-sm:px-4">
        <!-- for遍历的内容：课程 -->
        <a
          v-for="(item, index) in homeStore.projects"
          :href="item.url"
          target="_blank"
          :key="index"
          class="flex group transition-all hover:(bg-sky-500 shadow-lg text-white transform-translate-y--1)"
        >
          <Card
            class="w-full rounded-0 card"
            :icon="item.icon"
            image-type="rounded"
            :title="item.title"
            :sub-title="item.subTitle"
            border
          >
            <template #default>
              <div
                class="mx-4 flex items-center justify-between text-gray-500 mb-4 group-hover:text-white"
              >
                查看更多
                <div class="i-mdi:arrow-right-thin text-3xl"></div>
              </div>
            </template>
          </Card>
        </a>
      </div>
    </Container>
    <Container class="mt-5">
      <div class="py-4">
        <div class="text-2xl font-bold pb-4">官方课程</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400">toimc官方出品，经典内容设计，匠心细致，专业讲解。</div>
        </div>
      </div>
    </Container>
    <Container>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full lt-sm:px-4">
        <a
          :href="item.url"
          target="_blank"
          v-for="(item, index) in homeStore.courses"
          :key="index"
          class="flex"
        >
          <Card
            class="w-full rounded-3 transition-all hover:(transform-translate-y--1 shadow-lg)"
            :image="item.image"
            image-type="rounded"
            :title="item.title"
            :sub-title="item.subTitle"
            border
          >
            <template #default>
              <div class="mx-4 flex items-center justify-between text-gray-500 mb-4">
                查看更多
                <div class="i-mdi:arrow-right-thin text-3xl ml-2"></div>
              </div>
            </template>
          </Card>
        </a>
      </div>
    </Container>
    <Container class="mt-5">
      <div class="py-4">
        <div class="text-2xl font-bold pb-4">课程项目展示</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400">项目及架构展示，核心主流技术</div>
        </div>
      </div>
    </Container>
    <Container class="w-full text-gray-400">
      <Swiper
        :items="homeStore.swiperProjects"
        :height="(width > 640 ? 28 : 40) * store.rate + 'rem'"
        class="w-full sm:w-2/3"
        @change="handleSwiperChange"
      ></Swiper>
      <div
        class="lt-sm:display-none sm:(w-1/3) bg-coolgray-700 self-stretch flex flex-col justify-center px-4"
      >
        <a v-if="selectItem" :href="selectItem.url" target="_blank">
          <div class="text-2xl font-bold pb-4 text-gray-100">{{ selectItem.title }}</div>
          <div class="text-sm">{{ selectItem.subTitle }}</div>
          <div class="flex items-center justify-between mb-4">查看更多</div>
          <div class="i-mdi:arrow-right-thin text-4xl"></div>
        </a>
      </div>
    </Container>
    <Container>
      <div class="text-2xl font-bold mt-8">合作伙伴</div>
    </Container>
    <Container>
      <FreeSwiper :items="partners"></FreeSwiper>
      <!-- <Swiper
        :items="partners"
        :slides-per-view="4"
        :height="'200px'"
        :freeMode="true"
        :space-between="50"
        :pagination="{ clickable: true }"
        :navigation="undefined"
        loop
        :pagination_hide="true"
      >
        <template #default="{ item }">
          <div class="px-2 lt-sm:h-20 sm:h-36 w-full bg-gray-100">
            <div
              class="h-full w-full bg-no-repeat bg-contain bg-center"
              :style="{
                'background-image': `url('${item.image}')`
              }"
            ></div>
          </div>
        </template>
        method 1 
        <template #pagination>
          <span></span>
        </template>
      </Swiper> -->
    </Container>
    <Container class="py-4">
      <div class="w-2/3 h-[300px] sm:h-[400px]">
        <div class="grid grid-cols-4 grid-rows-3 h-full gap-4 p-4">
          <div class="border col-start-1 col-span-4 row-start-1 row-span-1">1</div>
          <div class="border col-start-1 col-span-2 row-start-2 row-span-2">2</div>
          <div class="border col-start-3 col-span-2 row-start-2 row-span-1">3</div>
          <div class="border col-start-3 col-span-1 row-start-3 row-span-1">4</div>
          <div class="border col-start-4 col-span-1 row-start-3 row-span-1">5</div>
        </div>
      </div>
      <div class="w-1/3 self-stretch flex flex-col justify-center">
        <div class="text-2xl font-bold pb-4">讲师团队</div>
        <div class="text-sm text-gray-400">
          <p>一线大厂、资深技术大牛10名</p>
          <p>技术专家不定期坐镇直播间</p>
          <p>前端、Java、Python工程师对应不同用户开发需求</p>
          <p>年薪百万不是梦，加入我们!</p>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
// import type { SwiperItemType } from '@/components/types'
// import { registerSW } from 'virtual:pwa-register'
import { useThemeStore } from '~/stores/useThemeStore'
import { useHomeStore } from '~/stores/useHomeStore'
import type { Swiper as SwiperType } from 'swiper'

const store = useThemeStore()
const homeStore = useHomeStore()

const { width } = useWindowSize()
const selectItem = ref()

const partners = ref([
  'https://wayearn.static.toimc.com/partner/logo1.png',
  'https://wayearn.static.toimc.com/partner/logo2.png',
  'https://wayearn.static.toimc.com/partner/logo8.png',
  'https://wayearn.static.toimc.com/partner/logo5.png',
  'https://wayearn.static.toimc.com/partner/logo6.png',
  'https://wayearn.static.toimc.com/partner/logo7.png'
])

// 不标准的 useFetch = useAsyncDat + $fetch
// useAsyncData(async () => {
await homeStore.fetchData()
selectItem.value = homeStore.swipers[0]
//   console.log('🚀 ~ file: index.vue:192 ~ onBeforeMount ~ homeStore.swipers:', homeStore.swipers)
// })

function handleSwiperChange(e: SwiperType) {
  const index = e.activeIndex
  selectItem.value = homeStore.swipers[index]
}
</script>

<style scoped lang="scss">
:deep(.card) {
  &:hover {
    p {
      color: white;
    }
  }
}
</style>
