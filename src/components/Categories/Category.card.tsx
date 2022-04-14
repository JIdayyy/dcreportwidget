import React, { useContext } from 'react'
import { ActionType, NavigateActionType } from '../../context/Actions'
import { AppContext } from '../../context/AppContext'
import { RoutesContext } from '../../context/RoutesContext'
import { GetAllCategoriesQuery } from '../../generated/graphql'
import { RoutePayload } from '../../interfaces/enums'
import NetworkIcon from '../../static/svgs/Network'
import OtherIcon from '../../static/svgs/Other'
import ProductsIcon from '../../static/svgs/Products'
import UiuxIcon from '../../static/svgs/Uiux'

type IProps = {
  category: GetAllCategoriesQuery['categories'][number]
}

export default function CategoryCard({ category }: IProps): JSX.Element {
  const { dispatch } = useContext(AppContext)
  const { dispatch: navigate } = useContext(RoutesContext)

  const handleClick = () => {
    dispatch({ type: ActionType.SetSelectedCategory, payload: category.id })
    navigate({
      type: NavigateActionType.SetRoute,
      payload: RoutePayload.CREATE_BUG,
    })
  }

  const CategoryIcon = {
    'UI/UX': <UiuxIcon />,
    Network: <NetworkIcon />,
    OTHER: <OtherIcon />,
    PRODUCTS: <ProductsIcon />,
  }
  return (
    <button
      onClick={handleClick}
      type="button"
      className="my-1 flex items-center align-middle justify-around text-white rounded-md px-8 py-3 w-full text-base font-bold"
      style={{ backgroundColor: category.backgroundColor }}
    >
      {CategoryIcon[category.name as keyof typeof CategoryIcon]}
      <span className="w-full text-center"> {category.name}</span>
    </button>
  )
}
