/* eslint-disable import/no-cycle */
import React, { useContext } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { WidgetConfigContext } from '../../App'
import { NavigateActionType } from '../../context/Actions'
import { AppContext } from '../../context/AppContext'
import { RoutesContext } from '../../context/RoutesContext'
import {
  BugSeverity,
  BugStatus,
  useCreateCustomBugMutation,
} from '../../generated/graphql'
import { RoutePayload } from '../../interfaces/enums'
import Input from '../UI/Input/Input'
import Loader from '../UI/Loader'
import TextArea from '../UI/TextArea/TextArea'

export default function CreateReport(): JSX.Element {
  const { state } = useContext(AppContext)
  const { dispatch: navigate } = useContext(RoutesContext)
  const { websiteId } = useContext(WidgetConfigContext)
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
          severity: BugSeverity.Low,
          priority: formData.priority,
          status: BugStatus.Open,
          Category: {
            connect: {
              id: state.category,
            },
          },
          Website: {
            connect: {
              id: websiteId,
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
      className="flex flex-col align-middle   justify-between items-center w-full h-full p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className="w-full text-left text-blue-base font-semibold">
        Please name this report
      </span>
      <Input placeholder="Title" name="title" register={register} />
      <span className="w-full text-left text-blue-base font-semibold">
        Now describe it precisely
      </span>
      <TextArea
        placeholder="description"
        name="description"
        register={register}
      />
      <button
        style={{ backgroundColor: 'rgb(36 50 63 )' }}
        className="bg-blue-base my-1 flex align-middle justify-center items-center text-white h-6 w-20 font-semibold text-base px-2 py-1 rounded-sm"
        type="submit"
      >
        {loading ? <Loader /> : 'Submit'}
      </button>
    </form>
  )
}
