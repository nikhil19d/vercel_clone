export default function GridSmall() {
  const horizontal : number[] = [1,2,3,4]
  const vertical : number[] = [1,2,3,4,5,6,7,8,9,10,11]
  return (
    <>
<div className="w-full flex flex-col justify-evenly h-full">
{
horizontal.map((index)=>(<hr key={index} className='w-full'/>))
}
{/* <hr className="w-full"/> */}
                {/* <hr className="w-full"/> */}
                {/* <hr className="w-full"/> */}
                {/* <hr className="w-full"/> */}
              </div>
              <div className="h-315 rotate-90 flex flex-col justify-evenly relative bottom-223 left-92 w-131">
{
vertical.map((index)=>(<hr key={index} className='w-full'/>))
}
{/* <hr className="w-full"/> */}
{/*                 <hr className="w-full"/> */}
{/*                 <hr className="w-full"/> */}
{/*                 <hr className="w-full"/> */}
{/*                 <hr className="w-full"/> */}
{/*                 <hr className="w-full"/> */}
{/*                 <hr className="w-full"/> */}
{/*                 <hr className="w-full"/> */}
{/*                 <hr className="w-full"/> */}
{/*                 <hr className="w-full"/> */}
{/*                 <hr className="w-full"/> */}
            </div>
</>
  )
}

