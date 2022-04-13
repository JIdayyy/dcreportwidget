import { RoutePayload } from './enums'

type TRoute = {
  path: string
  component: () => JSX.Element
  name: string
}

type TRoutes = {
  [key in RoutePayload]: TRoute
}
