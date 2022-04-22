/* eslint-disable import/no-cycle */
import Categories from '../components/Categories'
import Choices from '../components/Choices'
import CreateReport from '../components/Form/createReport'
import { RoutePayload } from '../interfaces/enums'
import { TRoutes } from '../interfaces/routes'

const routes: TRoutes = {
  [RoutePayload.HOME]: {
    path: '/',
    name: 'HOME',
    component: Choices,
  },

  [RoutePayload.CATEGORIES]: {
    path: '/categories',
    name: 'CATEGORIES',
    component: Categories,
  },

  [RoutePayload.CREATE_BUG]: {
    path: '/create-bug',
    name: 'CREATE_BUG',
    component: CreateReport,
  },
}

export default routes
