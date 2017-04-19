import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Companies from '@/components/Company/Companies'
import Company from '@/components/Company/Company'
import CompanyProfile from '@/components/Company/Company-Profile'
import Office from '@/components/Office/Office'
import Offices from '@/components/Office/Offices'
import Person from '@/components/Person/Person'
import Persons from '@/components/Person/Persons'
import Portfolio from '@/components/Portfolio/Portfolio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/companies',
      name: 'Companies',
      component: Companies
    },
    {
      path: '/company/:id',
      name: 'Company',
      component: CompanyProfile
    },
    {
      path: '/offices',
      name: 'Offices',
      component: Offices,
        children: [
          {
            path: ':id',
            name: 'Office',
            component: Office
          }
        ]
    },
    {
      path: '/persons',
      name: 'Persons',
      component: Persons,
        children: [
          {
            path: ':id',
            name: 'Person',
            component: Person
          }
        ]
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
})
