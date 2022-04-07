import React, { useEffect, useState } from 'react'
import Header from '../Header/index'
import Reports from '../Report/index'
import Footer from '../Footer/index'
import { useMutateLoginMutation } from '../../generated/graphql'

export default function Widget(): JSX.Element {
  const [section, setSection] = useState<string | null>(null)

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
      <Header />

      {!section && (
        <div className="w-full p-4 h-full">
          <button
            onClick={() => setSection('bugreport')}
            type="button"
            className="bg-white text-left rounded-md shadow-sm px-2 py-1 text-base font-bold text-blue-base w-full"
          >
            Report a bug
          </button>
        </div>
      )}

      {section === 'bugreport' && <Reports />}

      <Footer />
    </div>
  )
}
