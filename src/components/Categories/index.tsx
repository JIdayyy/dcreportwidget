import React from 'react'

import { useGetAllCategoriesQuery } from '../../generated/graphql'
import CategoryCard from './Category.card'
import './categories.list.css'

export default function Categories(): JSX.Element {
  const { data } = useGetAllCategoriesQuery()
  return (
    <div className="category-list">
      {data?.categories.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </div>
  )
}
