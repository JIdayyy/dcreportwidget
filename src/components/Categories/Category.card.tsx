import React, { useContext } from 'react'
import { ActionType } from '../../context/Actions'
import { AppContext } from '../../context/AppContext'
import { GetAllCategoriesQuery } from '../../generated/graphql'
import './category.card.css'

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
      className="card"
      style={{ backgroundColor: category.backgroundColor }}
    >
      {category.name}
    </button>
  )
}
