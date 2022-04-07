import React, { Dispatch, SetStateAction } from 'react'
import './close.button.css'

type Props = { setIsOpen: (value: boolean) => void }

export default function CloseButton({ setIsOpen }: Props) {
  return <button onClick={() => setIsOpen(false)} className="close" />
}
