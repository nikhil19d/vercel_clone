import CrossBottom from "../../ui/CrossBottom"
import CrossTop from "../../ui/CrossTop"

const Block8 = () =>{
  return(
  <div className="h-block8 flex relative">
      <CrossTop />
      <CrossBottom />
  <div className="w-2/3 border-r flex justify-center items-center h-block8">
    <div className="w-11/12 h-3/5">
    <div>
      <p className="font-semibold text-grayc text-2xl"><span className="font-semibold text-black text-2xl">Ready to deploy?</span> Start building with a free account.</p>
      <p className="font-semibold text-grayc text-2xl">Speak to an expert for your <span className="text-txtblue">Pro </span>or <span className="text-txtpurple">Enterprise </span>needs.</p>
    </div>
    <div className="flex mt-6">
      <button className="hover:bg-slate-800 hover:rounded-full bg-black text-white pl-4 pr-4 pt-3 pb-3 flex justify-center text-sm font-semibold items-center border rounded-full">Start Deploying</button>
      <button className="hover:bg-gray-100 hover:text-black hover:rounded-full ml-4 bg-white pl-4 pr-4 pt-3 pb-3 flex justify-center text-sm font-semibold items-center border rounded-full">Contact Sales</button>
    </div>
</div>
  </div>
  <div className="w-1/3 h-block8 flex justify-center items-center">
    <div className='w-9/12 h-4/5'>
      <p className="mt-4 font-semibold text-grayc text-base"><span className="font-semibold text-black text-base">Explore Vercel Enterprise </span> with an interactive product tour, trial, or a personalized demo.</p>
      <button className="mt-4 hover:bg-gray-100 hover:text-black hover:rounded-full bg-white pl-4 pr-4 pt-2 pb-2 flex justify-center text-sm font-semibold items-center border rounded-full">Explore Enterprise</button>
    </div>
  </div>
  </div>
  );
}

export default Block8
