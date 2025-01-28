interface box {
  bg : string | null,
  bghover : string,
  border : string | null,
  children : React.ReactNode,
  product : string,
}

export default function ProductCard({ bg, bghover, border, children, product } : box ) {
  return (
    <>
      <div className="mt-8 relative left-px w-11/12 h-1/4 flex flex-col border">
        <div className= {`h-2/3 w-full ${bg} ${bghover} hover:cursor-pointer`}>
          <div className="h-full w-full flex flex-col justify-evenly"> 
            <hr className={`border-dashed ${border}`}></hr>
            <hr className={`border-dashed ${border}`}></hr>
          </div>
          <div className="h-96 w-height-div flex flex-col justify-evenly rotate-90 relative bottom-reB left-reL z-20">
            <hr className={`border-dashed ${border}`}></hr>
            <hr className={`border-dashed ${border}`}></hr>
            <hr className={`border-dashed ${border}`}></hr>
            <hr className={`border-dashed ${border}`}></hr>
          </div>
          <div className="group relative bottom-logoPos h-templatedim z-20">
            <div className='transition-transform transform duration-200 z-30 group-hover:scale-110 ease-in-out h-height-div w-full flex items-center justify-center'>
            {children}
            </div>
          </div>
        <div className="flex justify-center items-center relative bottom-reborder h-height-div w-full">
          <div className='h-16 w-16 border border-dashed rounded-full'>
          </div>
        </div>
      </div>
      <div className="h-1/3 w-full bg-white font-semibold text-base p-4">{product}</div>
      </div>
    </>
  )
}

