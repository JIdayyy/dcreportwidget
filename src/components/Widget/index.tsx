/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-pascal-case */
import React, { useContext } from 'react'
import Header from '../Header/index'
import Footer from '../Footer/index'
import { RoutesContext } from '../../context/RoutesContext'

export default function Widget({
  setIsOpen,
}: {
  setIsOpen: (value: boolean) => void
}): JSX.Element {
  const { state: Route } = useContext(RoutesContext)

  return (
    <div
      style={{ height: '400px' }}
      className=" bottom-10 right-10  fixed w-72 bg-gray-100 flex flex-col items-center align-top overflow-hidden shadow-md justify-start rounded-xl"
    >
      <Header setIsOpen={setIsOpen} />

      <Route.component />

      <Footer />
    </div>
  )
}
