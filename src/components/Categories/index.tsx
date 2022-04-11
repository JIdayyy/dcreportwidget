import React from 'react'
import { useGetAllCategoriesQuery } from '../../generated/graphql'
import CategoryCard from './Category.card'

export default function Categories(): JSX.Element {
  const { data } = useGetAllCategoriesQuery()
  return (
    <div className="h-full w-full overflow-y-auto flex flex-col align-middle justify-start p-2">
      {data?.categories.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </div>
  )
}
