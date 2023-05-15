import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NProgress from 'nprogress';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
  

    {
      path: '/connect',
      name: 'Connect',
      component: () => import('../views/Connect.vue')
    },
    {
      path: '/songs',
      name: 'Songs',
      component: () => import('../views/Songs.vue')
    },
    {
      path: '/sponsor',
      name: 'Sponsor',
      component: () => import('../views/Sponsor.vue')
    },
    {
      path: '/repos',
      name: 'Repos',
      component: () => import('../views/ReposView.vue')
    }

  ],
  
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { 
        top: 0,
        behavior: 'smooth',
       }
      
    }
  }
  
})

// router.beforeEach((to, from) => {
//   document.title = `${ to.name } - WolPortal`
// })

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
   document.title = `${ to.name } - WolPortal`
  if (to.name) {
      // Start the route progress bar.
      NProgress.start()
  }
  next()
})

router.afterEach((to, from, faliure ) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
