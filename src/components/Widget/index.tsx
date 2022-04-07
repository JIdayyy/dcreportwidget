import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header/index'
import Reports from '../Report/index'
import Footer from '../Footer/index'
import { useMutateLoginMutation } from '../../generated/graphql'
import { AppContext } from '../../context/AppContext'
import { ActionType } from '../../context/Actions'

export default function Widget({
  setIsOpen,
}: {
  setIsOpen: (value: boolean) => void
}): JSX.Element {
  const [section, setSection] = useState<string | null>(null)
  const { state, dispatch } = useContext(AppContext)

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
    <div className="absolute bottom-10 flex flex-col items-center overflow-hidden shadow-md justify-start align-top right-10 bg-almost-white rounded-xl h-96 w-72">
      <Header setIsOpen={setIsOpen} />

      {!state.section && (
        <div className="w-full p-4 h-full">
          <button
            onClick={() =>
              dispatch({ type: ActionType.SetSection, payload: 'bugreport' })
            }
            type="button"
            className="bg-white text-left rounded-md shadow-sm px-2 py-1 text-base font-bold text-blue-base w-full"
          >
            Report a bug
          </button>
        </div>
      )}

      {state.section === 'bugreport' && <Reports />}

      <Footer />
    </div>
  )
}
