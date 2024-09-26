const Block1 = () =>{
  return(
  <div className="h-block1">
  <div className="h-block1 border flex flex-col justify-evenly">
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
  </div>
  <div className="h-block1w w-block1 border border-black relative bottom-rel-b1-b left-rel-b1-l flex flex-col justify-evenly rotate-90">
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
  </div>
  <div className="w-10/12 h-2/4 bg-white flex justify-center items-center flex-col border border-black relative bottom-b1-div-b left-b1-div-l">
  <h1 className="font-bold text-5xl text-center">Your complete platform for the web.</h1>
  <p className="w-7/12 text-xl text-grayc text-center p-2">Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.</p>
  <div className="flex">
    <button className="bg-black text-white flex items-center pr-2 pl-2"><svg className="text-white" data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" ><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1L16 15H0L8 1Z" fill="currentColor"></path></svg>Start Deploying</button>
    <button>Get a Demo</button>
  </div>
  </div>
  </div>
  );
}

export default Block1
