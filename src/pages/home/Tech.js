import React from "react"
import { DiAndroid, DiAppstore, DiCss3, DiHtml5, DiJavascript, DiNodejs, DiPython, DiReact } from "react-icons/di"


const Tech = () => {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-semibold text-center">Technologies I use</h1>

      <div className="dev-icons grid grid-cols-4 justify-items-center gap-y-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
        <DiAndroid size={200} className="animate-bounce"/>
        <DiPython size={200}/>
        <DiCss3 size={200}/>
        <DiReact size={200}/>
        <DiHtml5 size={200}/>
        <DiJavascript size={200}/>
        <DiNodejs size={200}/>
        <DiAppstore size={200}/>


      </div>



    </div>
  )
}
export default Tech