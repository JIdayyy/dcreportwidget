import React, { Dispatch, SetStateAction } from 'react'
import './close.button.css'

type Props = { setIsOpen: (value: boolean) => void }

export default function CloseButton({ setIsOpen }: Props) {
  return (
    <button
      onClick={() => setIsOpen(false)}
      className="cursor-pointer absolute right-10 top-6 w-1 h-1 opacity-30 hover:opacity-100"
    />
  )
}
