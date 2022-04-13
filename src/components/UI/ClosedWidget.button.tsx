import React, { Dispatch, SetStateAction } from 'react'
import WidgetButton from '../../static/Headset.png'

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function ClosedWidgetButton({ setIsOpen }: Props): JSX.Element {
  return (
    <button
      type="button"
      className="absolute bottom-10 right-10 flex items-center justify-around text-white bg-blue-base border-3 font-bold border rounded-md px-2 py-1 border-white"
      onClick={() => setIsOpen(true)}
    >
      <span>SUPPORT</span>
      <img width={30} height={30} src={WidgetButton} alt="widget button" />
    </button>
  )
}
