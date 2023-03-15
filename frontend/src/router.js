
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import ProductManager from "./components/listers/ProductCards"
import ProductDetail from "./components/listers/ProductDetail"

import DeliveryManager from "./components/listers/DeliveryCards"
import DeliveryDetail from "./components/listers/DeliveryDetail"

import OrderManager from "./components/listers/OrderCards"
import OrderDetail from "./components/listers/OrderDetail"



import MypageView from "./components/MypageView"
import MypageViewDetail from "./components/MypageViewDetail"

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/products',
                name: 'ProductManager',
                component: ProductManager
            },
            {
                path: '/products/:id',
                name: 'ProductDetail',
                component: ProductDetail
            },

            {
                path: '/deliveries',
                name: 'DeliveryManager',
                component: DeliveryManager
            },
            {
                path: '/deliveries/:id',
                name: 'DeliveryDetail',
                component: DeliveryDetail
            },

            {
                path: '/orders',
                name: 'OrderManager',
                component: OrderManager
            },
            {
                path: '/orders/:id',
                name: 'OrderDetail',
                component: OrderDetail
            },



            {
                path: '/mypages',
                name: 'MypageView',
                component: MypageView
            },
            {
                path: '/mypages/:id',
                name: 'MypageViewDetail',
                component: MypageViewDetail
            },


    ]
})
