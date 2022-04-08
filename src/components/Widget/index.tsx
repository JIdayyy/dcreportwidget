import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header/index'
import Reports from '../Report/index'
import Footer from '../Footer/index'
import { useMutateLoginMutation } from '../../generated/graphql'
import { AppContext } from '../../context/AppContext'
import { ActionType } from '../../context/Actions'
import './widget.css'

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
    <div className="widget-container">
      <Header setIsOpen={setIsOpen} />

      {!state.section && (
        <div className="first-body">
          <button
            onClick={() =>
              dispatch({ type: ActionType.SetSection, payload: 'bugreport' })
            }
            type="button"
            className="first-body-button"
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
