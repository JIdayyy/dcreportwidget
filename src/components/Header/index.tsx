import React, { useContext } from 'react'
import { RoutesContext } from '../../context/RoutesContext'
import CloseButton from '../UI/Buttons/Close.button'

export default function Header({
  setIsOpen,
}: {
  setIsOpen: (value: boolean) => void
}): JSX.Element {
  const { state } = useContext(RoutesContext)
  return (
    <div className="bg-blue-base h-60 flex flex-col justify-between align-middle items-start z-10 w-full text-white font-bold p-5">
      <p className="w-1/2">Welcome to DCReports 🐛</p>
      <CloseButton setIsOpen={setIsOpen} />
      {state.name === 'HOME' && (
        <p className="w-full text-sm font-medium">
          Here’s a few ways to connect with us
        </p>
      )}
    </div>
  )
}
