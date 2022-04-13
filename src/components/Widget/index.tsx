/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-pascal-case */
import React, { useContext, useEffect } from 'react'
import Header from '../Header/index'
import Footer from '../Footer/index'
import { useMutateLoginMutation } from '../../generated/graphql'
import { RoutesContext } from '../../context/RoutesContext'

export default function Widget({
  setIsOpen,
}: {
  setIsOpen: (value: boolean) => void
}): JSX.Element {
  const { state: Route } = useContext(RoutesContext)

  const [login] = useMutateLoginMutation({
    variables: {
      data: {
        email: 'guest@metashop.fr',
        password: 'guest1337',
      },
    },
  })

  useEffect(() => {
    login()
  }, [])

  return (
    <div
      style={{ height: '400px' }}
      className="absolute bottom-10 right-10  w-72 bg-gray-100 flex flex-col items-center align-top overflow-hidden shadow-md justify-start rounded-xl"
    >
      <Header setIsOpen={setIsOpen} />

      <Route.component />

      <Footer />
    </div>
  )
}
