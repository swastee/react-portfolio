import React from "react"

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="info h-[200px] w-[200px] animate-bounce">
      <img src="images/notFound.svg" alt="" />
      </div>
      <h1 className="text-2xl animate-bounce">Page not Found</h1>
    </div>
  )
}
export default NotFound