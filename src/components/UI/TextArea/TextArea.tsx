/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

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
      className="w-full h-32 px-2 py-1 rounded-md border-blue-base border"
      {...register(name)}
      placeholder={placeholder}
    />
  )
}
