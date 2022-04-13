import React from 'react'
import './close.button.css'

type Props = { setIsOpen: (value: boolean) => void }

export default function CloseButton({ setIsOpen }: Props): JSX.Element {
  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <button type="button" onClick={() => setIsOpen(false)} className="close" />
  )
}
