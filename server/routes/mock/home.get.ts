// 写获取服务端接口的处理逻辑
// mock数据
import data from 'public/json/data.json'
import picData from 'public/json/picData.json'

const bg = '/assets/images/bg.png'

export function getImage(num: number) {
  return data
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, num)
    .map((item: any) => ({
      image: '/downloads/' + picData.find((o: any) => o.url === item.img)?.name,
      title: item.title,
      subTitle: '',
      url: 'https://www.imooc.com'
    }))
}

export default defineEventHandler(() => {
  // env dev: api-> mock
  // env prod: api -> 正常请求
  return {
    code: 200,
    data: {
      swipers: [
        {
          image: bg,
          title: '传播技术的种子',
          subTitle: '让技术没有门槛，让沟通没有障碍',
          url: 'https://www.imooc.com'
        },
        {
          image: bg,
          title: '传播技术的种子',
          subTitle: '让技术没有门槛，让沟通没有障碍',
          url: 'https://www.imooc.com'
        },
        {
          image: bg,
          title: '传播技术的种子',
          subTitle: '让技术没有门槛，让沟通没有障碍',
          url: 'https://www.imooc.com'
        }
      ],
      'swiper-projects': [
        {
          image: bg,
          title: '传播技术的种子',
          subTitle: '让技术没有门槛，让沟通没有障碍',
          url: 'https://www.imooc.com'
        },
        {
          image: bg,
          title: '传播技术的种子',
          subTitle: '让技术没有门槛，让沟通没有障碍',
          url: 'https://www.imooc.com'
        },
        {
          image: bg,
          title: '传播技术的种子',
          subTitle: '让技术没有门槛，让沟通没有障碍',
          url: 'https://www.imooc.com'
        }
      ],
      projects: [
        {
          title: '前端高级工程师（大前端）',
          subTitle: '“技术成长&职业破局”双高体系,深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
          url: 'https://class.imooc.com/sale/fesenior',
          icon: 'i-mdi:web'
        },
        {
          title: '前端高级工程师（大前端）',
          subTitle: '“技术成长&职业破局”双高体系,深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
          url: 'https://class.imooc.com/sale/fesenior',
          icon: 'i-mdi:web'
        },
        {
          title: '前端高级工程师（大前端）',
          subTitle: '“技术成长&职业破局”双高体系,深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
          url: 'https://class.imooc.com/sale/fesenior',
          icon: 'i-mdi:web'
        },
        {
          title: '前端高级工程师（大前端）',
          subTitle: '“技术成长&职业破局”双高体系,深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
          url: 'https://class.imooc.com/sale/fesenior',
          icon: 'i-mdi:web'
        },
        {
          title: '前端高级工程师（大前端）',
          subTitle: '“技术成长&职业破局”双高体系,深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
          url: 'https://class.imooc.com/sale/fesenior',
          icon: 'i-mdi:web'
        },
        {
          title: '前端高级工程师（大前端）',
          subTitle: '“技术成长&职业破局”双高体系,深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
          url: 'https://class.imooc.com/sale/fesenior',
          icon: 'i-mdi:web'
        },
        {
          title: '前端高级工程师（大前端）',
          subTitle: '“技术成长&职业破局”双高体系,深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
          url: 'https://class.imooc.com/sale/fesenior',
          icon: 'i-mdi:web'
        },
        {
          title: '前端高级工程师（大前端）',
          subTitle: '“技术成长&职业破局”双高体系,深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
          url: 'https://class.imooc.com/sale/fesenior',
          icon: 'i-mdi:web'
        }
      ],
      courses: getImage(6)
    }
  }
})
