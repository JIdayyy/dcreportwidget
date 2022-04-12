/* eslint-disable import/no-cycle */
import React, { useCallback, useContext } from 'react'
import { RoutesContext } from '../../context/RoutesContext'
import { NavigateActionType } from '../../context/Actions'
import { RoutePayload } from '../../interfaces/enum'

export default function Choices(): JSX.Element {
  const { dispatch } = useContext(RoutesContext)

  const handleClick = useCallback(
    () =>
      dispatch({
        type: NavigateActionType.SetRoute,
        payload: RoutePayload.CATEGORIES,
      }),
    []
  )

  return (
    <div className="first-body">
      <button
        onClick={handleClick}
        type="button"
        className="first-body-button shadow-sm"
      >
        Report a bug
      </button>
    </div>
  )
}
