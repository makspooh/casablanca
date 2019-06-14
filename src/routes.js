import home from './components/Work.vue'
import branding from './components/Branding.vue'
import design from './components/Webdesign.vue'
import mobile from './components/MobileUI.vue'
import illustrations from './components/Illustrations.vue'
import item from './components/Item.vue'

export default [
    {
        path: '/',
        component: home
    },
    {
        path: '/branding',
        component: branding
    },
    {
        path: '/design',
        component: design
    },
    {
        path: '/mobile',
        component: mobile
    },
    {
        path: '/illustrations',
        component: illustrations
    },
    {
        path: '/item',
        component: item
    }
]