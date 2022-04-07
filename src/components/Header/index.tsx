import React from 'react'
import CloseButton from '../UI/Buttons/Close.button'
import './header.css'

export default function Header({
  setIsOpen,
}: {
  setIsOpen: (value: boolean) => void
}): JSX.Element {
  return (
    <div className="header-container">
      <p className="header-title">Welcome to DCReports 🐛</p>
      <CloseButton setIsOpen={setIsOpen} />
      <p className="header-text">Here’s a few ways to connect with us</p>
    </div>
  )
}
