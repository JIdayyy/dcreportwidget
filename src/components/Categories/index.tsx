import React from 'react'
import { useGetAllCategoriesQuery } from '../../generated/graphql'
import CategoryCard from './Category.card'

export default function Categories(): JSX.Element {
  const { data } = useGetAllCategoriesQuery()
  return (
    <div className="h-full relative z-40 transform scrollbar-thin scrollbar scrollbar-track:rounded scrollbar-thumb-gray-300 scrollbar-track-gray-100 rounded-md -translate-y-8 w-11/12 overflow-y-auto flex flex-col align-middle justify-start py-2 px-4 bg-white">
      <span className="w-full text-left text-blue-base font-bold">
        Please select a category
      </span>
      {data?.categories.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </div>
  )
}
