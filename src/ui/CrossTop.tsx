const CrossTop = () => {
  return(
   <div className="h-5 w-5 absolute -left-2.5 -top-2.5">
    <div className="h-full w-full flex justify-center flex-col">
      <hr className="border-grayc w-full bg-grayc"/>
    </div>
    <div className="h-full w-full relative bottom-5 rotate-90 flex justify-center flex-col">
      <hr className="border-grayc bg-grayc w-full"/>
    </div>
  </div>
  )
}

export default CrossTop
