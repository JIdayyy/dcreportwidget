import { NavigateActionType, NavigationActions } from '../Actions'
import appRoutes from '../../Config/config.routes'
import { RoutePayload } from '../../interfaces/enums'
import { TRoute } from '../../interfaces/routes'

function routeReducer(state: TRoute, action: NavigationActions): TRoute {
  switch (action.type) {
    case NavigateActionType.SetRoute: {
      return appRoutes[action.payload]
    }

    default:
      return appRoutes[RoutePayload.HOME]
  }
}
export default routeReducer
