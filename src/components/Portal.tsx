import React from 'react'
import ReactDOM from 'react-dom'

interface IProps {
  children: React.ReactNode
}

export default function WidgetPortal({ children }: IProps): JSX.Element {
  return ReactDOM.createPortal(children, document.body)
}
