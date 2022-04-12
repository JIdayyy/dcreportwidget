import React, { useContext } from 'react'
import { ActionType, NavigateActionType } from '../../context/Actions'
import { AppContext } from '../../context/AppContext'
import { RoutesContext } from '../../context/RoutesContext'
import { GetAllCategoriesQuery } from '../../generated/graphql'
import { RoutePayload } from '../../interfaces/enum'

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

  return (
    <button
      onClick={handleClick}
      type="button"
      className="my-1 text-white rounded-sm px-3 py-1 w-full text-base font-bold"
      style={{ backgroundColor: category.backgroundColor }}
    >
      {category.name}
    </button>
  )
}
