import CrossBottom from "../../ui/CrossBottom"
import CrossTop from "../../ui/CrossTop"
import Grid from "../../ui/Grid"
import Triangle from "../../ui/Triangle"


const Block1 = () =>{
  return(
    <div className="h-block1 relative">
      <CrossTop />
      <CrossBottom />
      <Grid />
      <div className="w-10/12 h-2/4 bg-primary flex justify-evenly items-center flex-col border-t relative bottom-b1-div-b left-b1-div-l">
        <h1 className="font-bold pt-5 text-5xl text-center">Your complete platform for the web.</h1>
        <p className="z-20 w-p text-xl pb-4 text-grayc text-center p-2">Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.</p>
        <div className="flex pb-8 w-2/5 justify-between">
          <button className="z-20 hover:bg-slate-800 hover:rounded-full text-base font-medium bg-black text-white flex items-center pr-6 pl-6 pb-3 pt-3 rounded-full"><svg className="mr-2 text-white" data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" ><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1L16 15H0L8 1Z" fill="currentColor"></path></svg>Start Deploying</button>
          <button className="z-20 pr-8 pl-8 pb-3 pt-3 rounded-full border font-medium text-base bg-white hover:bg-gray-100 hover:rounded-full">Get a Demo</button>
        </div>
      </div>
      <Triangle />
      <div className=" w-full h-th mix-blend-hard-light relative bottom-trib"></div>
    </div>
  );
}

export default Block1
