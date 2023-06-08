// import React from 'react'

import Input from "./components/Input"
import Tabb from "./components/Tabs"

const App = () => {
  return (
    <div className=" bg-purple-500 max-h-auto max-w-[100%] md:py-20 md:px-52 px-8 py-5">
      <div className="py-10">

        <h1 className=" text-white text-4xl font-semibold drop-shadow-lg text-center">Todo App</h1>
      </div>


      <Input />

      <Tabb/>

    </div>
  )
}

export default App
