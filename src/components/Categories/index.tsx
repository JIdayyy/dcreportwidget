import React from 'react'

import { useGetAllCategoriesQuery } from '../../generated/graphql'
import CategoryCard from './Category.card'

export default function Categories(): JSX.Element {
  const { data } = useGetAllCategoriesQuery()
  return (
    <div className="h-full w-full overflow-y-auto flex flex-col justify-start align-middle items-center p-5">
      {data?.categories.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </div>
  )
}
