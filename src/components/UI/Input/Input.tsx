/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import './input.css'

type Props = {
  register: UseFormRegister<FieldValues>
  name: string
  placeholder: string
}

export default function Input({
  register,
  name,
  placeholder,
}: Props): JSX.Element {
  return (
    <input className="input" {...register(name)} placeholder={placeholder} />
  )
}
