/* eslint-disable import/no-cycle */
import React, { useContext } from 'react'
import { RoutesContext } from '../../context/RoutesContext'
import { NavigateActionType } from '../../context/Actions'
import { RoutePayload } from '../../interfaces/enums'
import BugIcon from '../../static/svgs/Bug'

export default function Choices(): JSX.Element {
  const { dispatch } = useContext(RoutesContext)

  const handleClick = () =>
    dispatch({
      type: NavigateActionType.SetRoute,
      payload: RoutePayload.CATEGORIES,
    })

  return (
    <div className="w-full p-4 h-full">
      <button
        onClick={handleClick}
        type="button"
        className="shadow-md flex z-40 relative transform -translate-y-8 items-center justify-start text-blue-base bg-white text-left rounded-md p-1 text-base w-full font-bold"
      >
        <BugIcon /> <span className="mx-2">Report a bug</span>
      </button>
    </div>
  )
}
