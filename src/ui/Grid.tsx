export default function Grid() {
  const horizontal = [1,2,3,4,5,6,7]
  const vertical = [1,2,3,4,5,6,7,8,9,10,11]
  return (
    <>
      <div className="h-block1 border-b flex flex-col justify-evenly">
        {
          horizontal.map((index)=>(<hr key={index} />))
        }
      </div>
      <div className="h-block1w w-block1 relative bottom-rel-b1-b left-rel-b1-l flex flex-col justify-evenly rotate-90">
        {
          vertical.map((index)=>(<hr key={index} />))
        }
      </div>
    </>
  )
}

