import React, { Dispatch, SetStateAction } from 'react'
import WidgetButton from '../../static/widget_button.png'

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function ClosedWidgetButton({ setIsOpen }: Props) {
  return (
    <button
      className="absolute bottom-10 right-10"
      onClick={() => setIsOpen(true)}
    >
      <img src={WidgetButton} width={50} height={50} />
    </button>
  )
}
