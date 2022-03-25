import React, { useContext } from 'react'
import { ActionType } from '../../context/Actions'
import { AppContext } from '../../context/AppContext'
import { GetAllCategoriesQuery } from '../../generated/graphql'

type IProps = {
  category: GetAllCategoriesQuery['categories'][number]
}

export default function CategoryCard({ category }: IProps): JSX.Element {
  const { dispatch } = useContext(AppContext)

  return (
    <button
      onClick={() =>
        dispatch({ type: ActionType.SetSelectedCategory, payload: category.id })
      }
      type="button"
      className="my-1 text-white rounded-md px-2 py-1 w-full text-xl font-bold"
      style={{ backgroundColor: category.backgroundColor }}
    >
      {category.name}
    </button>
  )
}
