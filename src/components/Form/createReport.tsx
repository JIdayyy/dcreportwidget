import React, { useContext } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { AppContext } from '../../context/AppContext'
import {
  BugSeverity,
  BugStatus,
  useCreateCustomBugMutation,
} from '../../generated/graphql'
import Input from '../UI/Input'
import TextArea from '../UI/TextArea'

export default function CreateReport(): JSX.Element {
  const { state } = useContext(AppContext)
  const { handleSubmit, register } = useForm()
  const [mutateCreateBug] = useCreateCustomBugMutation()

  const onSubmit = (formData: FieldValues) => {
    mutateCreateBug({
      variables: {
        data: {
          title: formData.title,
          description: formData.description,
          Website: {
            connect: {
              id: '729ccb1b-3c65-478a-8657-9674244a5314',
            },
          },
          severity: BugSeverity.Low,
          priority: formData.priority,
          status: BugStatus.Open,
          Category: {
            connect: {
              id: state.category,
            },
          },
          user: {
            connect: {
              id: '21a903e3-d188-4ec6-b9c0-0c7ff497e16f',
            },
          },
        },
      },
    })
  }

  return (
    <form
      className="flex flex-col items-center justify-between align-top w-full h-full p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input placeholder="Title" name="title" register={register} />
      <TextArea
        placeholder="description"
        name="description"
        register={register}
      />
      <button
        className="bg-blue-base text-white font-bold text-base px-2 py-1 rounded-sm"
        type="submit"
      >
        submit
      </button>
    </form>
  )
}
