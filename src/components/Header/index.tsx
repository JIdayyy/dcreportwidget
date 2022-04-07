import React from 'react'

export default function Header(): JSX.Element {
  return (
    <div className="bg-blue-base h-1/3 flex flex-col justify-between align-middle items-start z-10 w-full text-white font-bold font-sans p-5">
      <p className="w-1/2">Welcome to DCReports 🐛</p>
      <p className="w-full text-sm font-normal">
        Here’s a few ways to connect with us
      </p>
    </div>
  )
}
