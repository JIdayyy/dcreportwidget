/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import './textarea.css'

type Props = {
  register: UseFormRegister<FieldValues>
  name: string
  placeholder: string
}

export default function TextArea({
  register,
  name,
  placeholder,
}: Props): JSX.Element {
  return (
    <textarea
      className="text-area"
      {...register(name)}
      placeholder={placeholder}
    />
  )
}
