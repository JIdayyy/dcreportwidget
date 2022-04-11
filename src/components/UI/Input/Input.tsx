/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

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
    <input
      className="w-full rounded-sm px-2 py-1 border-blue-base border"
      {...register(name)}
      placeholder={placeholder}
    />
  )
}
