import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import Categories from '../Categories'
import CreateReport from '../Form/createReport'

export default function Reports(): JSX.Element {
  const { state } = useContext(AppContext)
  return (
    <div className="fullcontainer">
      {!state.category ? <Categories /> : <CreateReport />}
    </div>
  )
}
