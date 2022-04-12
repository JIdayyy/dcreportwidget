import React, { useContext } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { ActionType, NavigateActionType } from '../../context/Actions'
import { AppContext } from '../../context/AppContext'
import { RoutesContext } from '../../context/RoutesContext'
import {
  BugSeverity,
  BugStatus,
  useCreateCustomBugMutation,
} from '../../generated/graphql'
import { RoutePayload } from '../../interfaces/enum'
import Input from '../UI/Input/Input'
import Loader from '../UI/Loader'
import TextArea from '../UI/TextArea/TextArea'

const websiteId = 'acc029c4-5979-40e7-b4bd-9bd9774ac773'

export default function CreateReport(): JSX.Element {
  const { state } = useContext(AppContext)
  const { dispatch: navigate } = useContext(RoutesContext)
  const { handleSubmit, register } = useForm()
  const [mutateCreateBug, { loading }] = useCreateCustomBugMutation({
    onCompleted: () => {
      navigate({
        type: NavigateActionType.SetRoute,
        payload: RoutePayload.HOME,
      })
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
      className="flex flex-col align-middle justify-between items-center w-full h-full p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input placeholder="Title" name="title" register={register} />
      <TextArea
        placeholder="description"
        name="description"
        register={register}
      />
      <button
        className="bg-blue-base flex align-middle justify-center items-center text-white h-8 w-20 font-bold text-base px-2 py-1 rounded-sm"
        type="submit"
      >
        {loading ? <Loader /> : 'Submit'}
      </button>
    </form>
  )
}
