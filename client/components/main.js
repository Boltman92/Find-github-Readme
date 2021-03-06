import React, { useState } from 'react'
import { history } from '../redux'
import Head from './head'

const Main = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }
  const onClick = () => {
    history.push(`/${value}`)
  }
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800  text-black font-bold rounded-lg border shadow-lg p-12">
          <input value={value} onChange={onChange} className="mr-4" type="text" />
          <button
            className="bg-indigo-500  text-black font-bold rounded-lg shadow-lg p-2"
            type="button"
            onClick={onClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
