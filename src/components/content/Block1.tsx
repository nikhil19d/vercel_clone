import CrossBottom from "./CrossBottom"
import CrossTop from "./CrossTop"


const Block1 = () =>{
  return(
  <div className="h-block1 relative">
      <CrossTop />
      <CrossBottom />
 <div className="h-block1 border-b flex flex-col justify-evenly">
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
  </div>
  <div className="h-block1w w-block1 relative bottom-rel-b1-b left-rel-b1-l flex flex-col justify-evenly rotate-90">
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
  <div className="w-10/12 h-2/4 bg-primary flex justify-evenly items-center flex-col border-t relative bottom-b1-div-b left-b1-div-l">
  <h1 className="font-bold pt-5 text-5xl text-center">Your complete platform for the web.</h1>
  <p className="z-20 w-p text-xl pb-4 text-grayc text-center p-2">Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.</p>
  <div className="flex pb-8 w-2/5 justify-between">
    <button className="z-20 hover:bg-slate-800 hover:rounded-full text-base font-medium bg-black text-white flex items-center pr-6 pl-6 pb-3 pt-3 rounded-full"><svg className="mr-2 text-white" data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" ><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1L16 15H0L8 1Z" fill="currentColor"></path></svg>Start Deploying</button>
    <button className="z-20 pr-8 pl-8 pb-3 pt-3 rounded-full border font-medium text-base bg-white hover:bg-gray-100 hover:rounded-full">Get a Demo</button>
  </div>
  </div>
  <div className="w-full h-th relative top-tt z-20">
  <svg className="relative bottom-trib" aria-label="Vercel's logo, a triangle, sits in the center of a grid, surrounded by rays of light which are the colors of the rainbow." fill="none" role="img" viewBox="0 0 1200 700">
          <polygon fill="white" points="485,650.3952809568069 715,650.3952809568069 600,451.20943808638606"></polygon>
          <line opacity="1" stroke="black" x1="600" x2="715" y1="451.20943808638606" y2="650.3952809568069"></line>
          <line opacity="1" stroke="black" x1="600" x2="485" y1="451.20943808638606" y2="650.3952809568069"></line>
          <line opacity="0.9714285714285714" stroke="black" x1="600" x2="715" y1="455.5066708300659" y2="650.3952809568069"></line>
          <line opacity="0.9714285714285714" stroke="black" x1="600" x2="485" y1="455.5066708300659" y2="650.3952809568069"></line>
          <line opacity="0.9428571428571428" stroke="black" x1="600" x2="715" y1="459.8039035737458" y2="650.3952809568069"></line>
          <line opacity="0.9428571428571428" stroke="black" x1="600" x2="485" y1="459.8039035737458" y2="650.3952809568069"></line>
          <line opacity="0.9142857142857143" stroke="black" x1="600" x2="715" y1="464.10113631742564" y2="650.3952809568069"></line>
          <line opacity="0.9142857142857143" stroke="black" x1="600" x2="485" y1="464.10113631742564" y2="650.3952809568069"></line>
          <line opacity="0.8857142857142857" stroke="black" x1="600" x2="715" y1="468.39836906110554" y2="650.3952809568069"></line>
          <line opacity="0.8857142857142857" stroke="black" x1="600" x2="485" y1="468.39836906110554" y2="650.3952809568069"></line>
          <line opacity="0.8571428571428572" stroke="black" x1="600" x2="715" y1="472.6956018047854" y2="650.3952809568069"></line>
          <line opacity="0.8571428571428572" stroke="black" x1="600" x2="485" y1="472.6956018047854" y2="650.3952809568069"></line>
          <line opacity="0.8285714285714285" stroke="black" x1="600" x2="715" y1="476.9928345484653" y2="650.3952809568069"></line>
          <line opacity="0.8285714285714285" stroke="black" x1="600" x2="485" y1="476.9928345484653" y2="650.3952809568069"></line>
          <line opacity="0.8" stroke="black" x1="600" x2="715" y1="481.2900672921451" y2="650.3952809568069"></line>
          <line opacity="0.8" stroke="black" x1="600" x2="485" y1="481.2900672921451" y2="650.3952809568069"></line>
          <line opacity="0.7714285714285715" stroke="black" x1="600" x2="715" y1="485.587300035825" y2="650.3952809568069"></line>
          <line opacity="0.7714285714285715" stroke="black" x1="600" x2="485" y1="485.587300035825" y2="650.3952809568069"></line>
          <line opacity="0.7428571428571429" stroke="black" x1="600" x2="715" y1="489.88453277950487" y2="650.3952809568069"></line>
          <line opacity="0.7428571428571429" stroke="black" x1="600" x2="485" y1="489.88453277950487" y2="650.3952809568069"></line>
          <line opacity="0.7142857142857143" stroke="black" x1="600" x2="715" y1="494.1817655231847" y2="650.3952809568069"></line>
          <line opacity="0.7142857142857143" stroke="black" x1="600" x2="485" y1="494.1817655231847" y2="650.3952809568069"></line>
          <line opacity="0.6857142857142857" stroke="black" x1="600" x2="715" y1="498.4789982668646" y2="650.3952809568069"></line>
          <line opacity="0.6857142857142857" stroke="black" x1="600" x2="485" y1="498.4789982668646" y2="650.3952809568069"></line>
          <line opacity="0.6571428571428571" stroke="black" x1="600" x2="715" y1="502.77623101054445" y2="650.3952809568069"></line>
          <line opacity="0.6571428571428571" stroke="black" x1="600" x2="485" y1="502.77623101054445" y2="650.3952809568069"></line>
          <line opacity="0.6285714285714286" stroke="black" x1="600" x2="715" y1="507.07346375422435" y2="650.3952809568069"></line>
          <line opacity="0.6285714285714286" stroke="black" x1="600" x2="485" y1="507.07346375422435" y2="650.3952809568069"></line>
          <line opacity="0.6" stroke="black" x1="600" x2="715" y1="511.3706964979042" y2="650.3952809568069"></line>
          <line opacity="0.6" stroke="black" x1="600" x2="485" y1="511.3706964979042" y2="650.3952809568069"></line>
          <line opacity="0.5714285714285714" stroke="black" x1="600" x2="715" y1="515.667929241584" y2="650.3952809568069"></line>
          <line opacity="0.5714285714285714" stroke="black" x1="600" x2="485" y1="515.667929241584" y2="650.3952809568069"></line>
          <line opacity="0.5428571428571429" stroke="black" x1="600" x2="715" y1="519.9651619852639" y2="650.3952809568069"></line>
          <line opacity="0.5428571428571429" stroke="black" x1="600" x2="485" y1="519.9651619852639" y2="650.3952809568069"></line>
          <line opacity="0.5142857142857142" stroke="black" x1="600" x2="715" y1="524.2623947289438" y2="650.3952809568069"></line>
          <line opacity="0.5142857142857142" stroke="black" x1="600" x2="485" y1="524.2623947289438" y2="650.3952809568069"></line>
          <line opacity="0.48571428571428577" stroke="black" x1="600" x2="715" y1="528.5596274726237" y2="650.3952809568069"></line>
          <line opacity="0.48571428571428577" stroke="black" x1="600" x2="485" y1="528.5596274726237" y2="650.3952809568069"></line>
          <line opacity="0.4571428571428572" stroke="black" x1="600" x2="715" y1="532.8568602163035" y2="650.3952809568069"></line>
          <line opacity="0.4571428571428572" stroke="black" x1="600" x2="485" y1="532.8568602163035" y2="650.3952809568069"></line>
          <line opacity="0.4285714285714286" stroke="black" x1="600" x2="715" y1="537.1540929599834" y2="650.3952809568069"></line>
          <line opacity="0.4285714285714286" stroke="black" x1="600" x2="485" y1="537.1540929599834" y2="650.3952809568069"></line>
          <line opacity="0.4" stroke="black" x1="600" x2="715" y1="541.4513257036633" y2="650.3952809568069"></line>
          <line opacity="0.4" stroke="black" x1="600" x2="485" y1="541.4513257036633" y2="650.3952809568069"></line>
          <line opacity="0.37142857142857144" stroke="black" x1="600" x2="715" y1="545.7485584473432" y2="650.3952809568069"></line>
          <line opacity="0.37142857142857144" stroke="black" x1="600" x2="485" y1="545.7485584473432" y2="650.3952809568069"></line>
          <line opacity="0.34285714285714286" stroke="black" x1="600" x2="715" y1="550.045791191023" y2="650.3952809568069"></line>
          <line opacity="0.34285714285714286" stroke="black" x1="600" x2="485" y1="550.045791191023" y2="650.3952809568069"></line>
          <line opacity="0.3142857142857143" stroke="black" x1="600" x2="715" y1="554.3430239347028" y2="650.3952809568069"></line>
          <line opacity="0.3142857142857143" stroke="black" x1="600" x2="485" y1="554.3430239347028" y2="650.3952809568069"></line>
          <line opacity="0.2857142857142857" stroke="black" x1="600" x2="715" y1="558.6402566783827" y2="650.3952809568069"></line>
          <line opacity="0.2857142857142857" stroke="black" x1="600" x2="485" y1="558.6402566783827" y2="650.3952809568069"></line>
          <line opacity="0.2571428571428571" stroke="black" x1="600" x2="715" y1="562.9374894220626" y2="650.3952809568069"></line>
          <line opacity="0.2571428571428571" stroke="black" x1="600" x2="485" y1="562.9374894220626" y2="650.3952809568069"></line>
          <line opacity="0.22857142857142854" stroke="black" x1="600" x2="715" y1="567.2347221657425" y2="650.3952809568069"></line>
          <line opacity="0.22857142857142854" stroke="black" x1="600" x2="485" y1="567.2347221657425" y2="650.3952809568069"></line>
          <line opacity="0.19999999999999996" stroke="black" x1="600" x2="715" y1="571.5319549094223" y2="650.3952809568069"></line>
          <line opacity="0.19999999999999996" stroke="black" x1="600" x2="485" y1="571.5319549094223" y2="650.3952809568069"></line>
          <line opacity="0.17142857142857137" stroke="black" x1="600" x2="715" y1="575.8291876531022" y2="650.3952809568069"></line>
          <line opacity="0.17142857142857137" stroke="black" x1="600" x2="485" y1="575.8291876531022" y2="650.3952809568069"></line>
          <line opacity="0.1428571428571429" stroke="black" x1="600" x2="715" y1="580.1264203967821" y2="650.3952809568069"></line>
          <line opacity="0.1428571428571429" stroke="black" x1="600" x2="485" y1="580.1264203967821" y2="650.3952809568069"></line>
          <line opacity="0.11428571428571432" stroke="black" x1="600" x2="715" y1="584.423653140462" y2="650.3952809568069"></line>
          <line opacity="0.11428571428571432" stroke="black" x1="600" x2="485" y1="584.423653140462" y2="650.3952809568069"></line>
          <line opacity="0.08571428571428574" stroke="black" x1="600" x2="715" y1="588.7208858841418" y2="650.3952809568069"></line>
          <line opacity="0.08571428571428574" stroke="black" x1="600" x2="485" y1="588.7208858841418" y2="650.3952809568069"></line>
          <line opacity="0.05714285714285716" stroke="black" x1="600" x2="715" y1="593.0181186278217" y2="650.3952809568069"></line>
          <line opacity="0.05714285714285716" stroke="black" x1="600" x2="485" y1="593.0181186278217" y2="650.3952809568069"></line>
          <line opacity="0.02857142857142858" stroke="black" x1="600" x2="715" y1="597.3153513715015" y2="650.3952809568069"></line>
          <line opacity="0.02857142857142858" stroke="black" x1="600" x2="485" y1="597.3153513715015" y2="650.3952809568069"></line>
  </svg>
  </div>
    <div className=" w-full h-th mix-blend-hard-light relative bottom-trib"></div>
  </div>
  );
}

export default Block1
