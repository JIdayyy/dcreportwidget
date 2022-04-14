import React from 'react'
import { useGetAllCategoriesQuery } from '../../generated/graphql'
import CategoryCard from './Category.card'
import './scrollbar.css'

export default function Categories(): JSX.Element {
  const { data } = useGetAllCategoriesQuery()
  return (
    <div
      style={{ height: '500px' }}
      className=" relative z-40 transform overflow-hidden scrollbar rounded-md -translate-y-8 w-11/12 overflow-y-auto flex flex-col align-middle justify-start py-2 px-2 bg-white"
    >
      <span className="w-full text-left text-blue-base font-bold">
        Please select a category
      </span>

      {data?.categories.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </div>
  )
}
