import { createWebHistory, createRouter } from "vue-router"


import Body from './components/Body.vue'
import Allproducts from './components/Allproducts.vue'
import Product from './components/Product.vue'
import Cart from './components/Cart.vue'
// import Payment from './components/Payment.vue'
import Success from './components/Success.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
// import Checkout from './components/Checkout.vue'
// import Shipping from './components/Shipping.vue'


const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        name: 'Body',
        path: '/home',
        component: Body
    },
    {
        name: 'Home',
        path: '/home',
        component: Body
    },
    {
        name: 'Allproducts',
        path: '/allproducts/:id?',
        component: Allproducts,
        props: true
    },
    {
        name: 'Product',
        path: '/product/:id?',
        component: Product,
        props: true
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'Signup',
        path: '/signup',
        component: Signup
    },
    // {
    //     name: 'Shipping',
    //     path: '/shipping',
    //     component: Shipping
    // },
    // {
    //     name: 'Checkout',
    //     path: '/checkout',
    //     component: Checkout
    // },
    {
        name: 'Cart',
        path: '/cart',
        component: Cart
    },
    {
        name: 'Success',
        path: '/success',
        component: Success
    },
    // {
    //     name: 'Payment',
    //     path: '/payment',
    //     component: Payment
    // },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;