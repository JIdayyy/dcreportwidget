import React, { useContext } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { ActionType } from '../../context/Actions'
import { AppContext } from '../../context/AppContext'
import {
  BugSeverity,
  BugStatus,
  useCreateCustomBugMutation,
} from '../../generated/graphql'
import Input from '../UI/Input/Input'
import Loader from '../UI/Loader'
import TextArea from '../UI/TextArea/TextArea'
import './createbug.form.css'

const websiteId = import.meta.env.VITE_WEBSITE_ID

export default function CreateReport(): JSX.Element {
  const { state, dispatch } = useContext(AppContext)
  const { handleSubmit, register } = useForm()
  const [mutateCreateBug, { loading }] = useCreateCustomBugMutation({
    onCompleted: () => {
      dispatch({ type: ActionType.SetSection, payload: '' })
    },
  })

  const onSubmit = (formData: FieldValues) => {
    mutateCreateBug({
      variables: {
        data: {
          title: formData.title,
          description: formData.description,
          Website: {
            connect: {
              id: websiteId as string,
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
              email: 'guest@metashop.fr',
            },
          },
        },
      },
    })
  }

  return (
    <form
      className="createbug-form-container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input placeholder="Title" name="title" register={register} />
      <TextArea
        placeholder="description"
        name="description"
        register={register}
      />
      <button className="submit-button" type="submit">
        {loading ? <Loader /> : 'Submit'}
      </button>
    </form>
  )
}
