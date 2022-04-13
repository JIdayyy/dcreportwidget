import React, { Dispatch, SetStateAction } from 'react'
import WidgetButton from '../../static/widget_button.png'

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function ClosedWidgetButton({ setIsOpen }: Props): JSX.Element {
  return (
    <button
      type="button"
      className="absolute bottom-10 right-10"
      onClick={() => setIsOpen(true)}
    >
      <img alt="widget_button" src={WidgetButton} width={50} height={50} />
    </button>
  )
}
