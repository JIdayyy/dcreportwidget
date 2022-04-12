import { RoutePayload } from './enum'

type TRoute = {
  path: string
  component: () => JSX.Element
  name: string
}

type TRoutes = {
  [key in RoutePayload]: TRoute
}
