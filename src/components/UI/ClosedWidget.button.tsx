import React, { Dispatch, SetStateAction } from 'react'
import WidgetButton from '../../static/widget_button.png'
import './closed.button.css'

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function ClosedWidgetButton({ setIsOpen }: Props) {
  return (
    <button className="closed-button" onClick={() => setIsOpen(true)}>
      <img src={WidgetButton} width={50} height={50} />
    </button>
  )
}
