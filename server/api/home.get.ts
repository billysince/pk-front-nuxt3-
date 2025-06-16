export default defineEventHandler(() => {
  // env dev: api-> mock
  // env prod: api -> 正常请求
  // $fetch -> nuxt3
  return {
    code: 200,
    data: {
      swipers: [
        {
          title: "Vue3 全栈开发",
          subTitle: "从零到一掌握Vue3生态",
          url: "#",
          image: "https://picsum.photos/800/400?random=1"
        }
      ],
      'swiper-projects': [],
      projects: [
        {
          title: "前端开发",
          subTitle: "Vue3 + TypeScript + Vite",
          url: "#",
          icon: "i-mdi:web"
        },
        {
          title: "后端开发", 
          subTitle: "Node.js + Express + MongoDB",
          url: "#",
          icon: "i-mdi:server"
        },
        {
          title: "移动开发",
          subTitle: "React Native + Flutter",
          url: "#", 
          icon: "i-mdi:cellphone"
        },
        {
          title: "DevOps",
          subTitle: "Docker + K8s + CI/CD",
          url: "#",
          icon: "i-mdi:cloud"
        }
      ],
      courses: [
        {
          title: "Vue3 实战课程",
          subTitle: "企业级项目开发实战",
          url: "#",
          image: "https://picsum.photos/400/300?random=2"
        },
        {
          title: "Node.js 后端开发",
          subTitle: "RESTful API 设计与实现",
          url: "#",
          image: "https://picsum.photos/400/300?random=3"
        },
        {
          title: "TypeScript 进阶",
          subTitle: "类型系统与工程化实践",
          url: "#",
          image: "https://picsum.photos/400/300?random=4"
        }
      ]
    }
  }
})
