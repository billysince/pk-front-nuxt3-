interface ProjectType {
  title: string
  subTitle: string
  url: string
  icon: string
}

interface CourseType {
  title: string
  subTitle: string
  url: string
  image: string
}

export const useHomeStore = defineStore('home', {
  state: () => ({
    // show: true,
    swipers: [],
    projects: [] as ProjectType[],
    courses: [] as CourseType[],
    swiperProjects: []
  }),
  actions: {
    async fetchData() {
      const res = await useFetch('/api/home')
      // debugger
      if (res.status.value === 'success') {
        if (res.data.value && res.data.value.data) {
          const { data } = res.data.value
          this.swipers = data.swipers
          this.projects = data.projects
          this.courses = data.courses
          this.swiperProjects = data['swiper-projects']
        }
      } else {
        console.error('获取首页接口失败', res)
      }
    }
  }
})
