import CrossBottom from "./CrossBottom"

const Block3 = () =>{
  return(
  <div className="h-block3 flex relative border-t border-b">
      <CrossBottom />
      <div className="flex justify-between flex-col h-full w-1/2 p-12">
        <div className="h-1/5 w-full flex flex-col justify-between">
          <div className="flex items-center">
            <svg className="mr-2" data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.53035 12.7804L1.00002 13.3108L-0.0606384 12.2501L0.469692 11.7198L4.18936 8.00011L0.469692 4.28044L-0.0606384 3.75011L1.00002 2.68945L1.53035 3.21978L5.60358 7.29301C5.9941 7.68353 5.9941 8.3167 5.60357 8.70722L1.53035 12.7804ZM8.75002 12.5001H8.00002V14.0001H8.75002H15.25H16V12.5001H15.25H8.75002Z" fill="currentColor"></path></svg>
            <p className="text-base text-grayc">Git-connected Deploys</p>
          </div>
          <p className="text-2xl text-grayc"><strong className="text-black">From localhost to https, in seconds. </strong>Deploy from Git or your CLI.</p>
        </div>
        <div className="h-2/3 w-full pb-6 font-mono">
          <div className="h-3/5 w-w76 rounded-xl p-2 flex flex-col border">
            <div className="flex w-full mb-2 h-h10">
              <svg data-testid="geist-icon" height="14" stroke-linejoin="round" viewBox="0 0 16 16" width="14"><path d="M13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8Z" fill="#00000014"></path></svg>
              <svg data-testid="geist-icon" height="14" stroke-linejoin="round" viewBox="0 0 16 16" width="14"><path d="M13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8Z" fill="#00000014"></path></svg>
              <svg data-testid="geist-icon" height="14" stroke-linejoin="round" viewBox="0 0 16 16" width="14"><path d="M13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8Z" fill="#00000014"></path></svg>
            </div>
            <div className="w-full h-5/6 flex flex-col justify-between before:h-full before:w-full before:absolute relative before:bg-gradient-to-r before:from-transparent before:to-primary  ">
              <div className="w-full h-h10 text-xs flex items-center"><svg className="mr-2" data-testid="geist-icon" height="8" stroke-linejoin="round" viewBox="0 0 16 16" width="8"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1L16 15H0L8 1Z" fill="black"></path></svg> ~ <span className="mr-2 ml-2 text-grayc">vercel-site/</span>git push</div>
              <div className="w-full h-h10 text-xs">Enumerating objects: 100% (1/1), done.</div>
              <div className="w-full h-h10 text-xs">Counting objects: 100% (1/1), done.</div>
              <div className="w-full h-h10 text-xs">Writing objects: 100% (1/1), 72 bytes, done.</div>
              <div className="w-full h-h10 text-xs">Total 1 (delta 0), reused 0 (delta 0).</div>
              <div className="w-full h-h10 text-xs">To github.com:vercel/vercel-site.git</div>
              <div className="w-full h-h10 text-xs ml-4">21326a9..8</div>
            </div>
          </div>
          <div className="h-3/5 w-w76 rounded-xl flex flex-col p-2 border bg-white relative left-24 bottom-9">
            <div className="flex w-full mb-2 h-h10">
              <div className="flex ">
                <svg data-testid="geist-icon" height="14" stroke-linejoin="round" viewBox="0 0 16 16" width="14"><path d="M13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8Z" fill="#52aeff"></path></svg>
                <svg data-testid="geist-icon" height="14" stroke-linejoin="round" viewBox="0 0 16 16" width="14"><path d="M13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8Z" fill="#e5484d"></path></svg>
                <svg data-testid="geist-icon" height="14" stroke-linejoin="round" viewBox="0 0 16 16" width="14"><path d="M13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8Z" fill="#45dec5"></path></svg>
              </div>
              <div className="text-xs text-grayc ml-16 flex items-center">
                <svg className="relative bottom-a1 mr-1" data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 6V7H6.5V6C6.5 5.17157 7.17157 4.5 8 4.5C8.82843 4.5 9.5 5.17157 9.5 6ZM5 7V6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6V7H12V11.5C12 12.3284 11.3284 13 10.5 13H5.5C4.67157 13 4 12.3284 4 11.5V7H5Z" fill="#666"></path></svg>
                <p>vercel.com</p>
              </div>
            </div>
            <div className="w-full h-5/6 border">
            <div className="w-full flex flex-col justify-evenly h-full">
              <hr className="w-full"/>
              <hr className="w-full"/>
              <hr className="w-full"/>
              <hr className="w-full"/>
            </div>
            <div className="h-315 rotate-90 flex flex-col justify-evenly relative bottom-223 left-92 w-131">
              <hr className="w-full"/>
              <hr className="w-full"/>
              <hr className="w-full"/>
              <hr className="w-full"/>
              <hr className="w-full"/>
              <hr className="w-full"/>
              <hr className="w-full"/>
              <hr className="w-full"/>
              <hr className="w-full"/>
              <hr className="w-full"/>
              <hr className="w-full"/>
            </div>
            <div className="w-full text-stroke relative bottom-426 text-2xl font-extrabold font-sans text-white text-center">What will you ship?</div>
            <div className="w-full flex justify-center relative bottom-405">
              <svg data-testid="geist-icon" height="58" stroke-linejoin="round" viewBox="0 0 16 16" width="58"><path fill-rule="evenodd" stroke="#efefef"  clip-rule="evenodd" d="M8 1L16 15H0L8 1Z" fill="white"></path></svg>
            </div>
            <div className="w-full relative bottom-482 bg-gradient-to-b from-transparent to-white h-3/5"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-l flex justify-between p-12 h-full w-1/2 flex-col">
        <div className="h-1/3 mb-12 w-full flex flex-col justify-between">
        <div className="flex items-center">
          <svg className="mr-2" data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.8914 10.4028L2.98327 10.6318C3.22909 11.2445 3.5 12.1045 3.5 13C3.5 13.3588 3.4564 13.7131 3.38773 14.0495C3.69637 13.9446 4.01409 13.8159 4.32918 13.6584C4.87888 13.3835 5.33961 13.0611 5.70994 12.7521L6.22471 12.3226L6.88809 12.4196C7.24851 12.4724 7.61994 12.5 8 12.5C11.7843 12.5 14.5 9.85569 14.5 7C14.5 4.14431 11.7843 1.5 8 1.5C4.21574 1.5 1.5 4.14431 1.5 7C1.5 8.18175 1.94229 9.29322 2.73103 10.2153L2.8914 10.4028ZM2.8135 15.7653C1.76096 16 1 16 1 16C1 16 1.43322 15.3097 1.72937 14.4367C1.88317 13.9834 2 13.4808 2 13C2 12.3826 1.80733 11.7292 1.59114 11.1903C0.591845 10.0221 0 8.57152 0 7C0 3.13401 3.58172 0 8 0C12.4183 0 16 3.13401 16 7C16 10.866 12.4183 14 8 14C7.54721 14 7.10321 13.9671 6.67094 13.9038C6.22579 14.2753 5.66881 14.6656 5 15C4.23366 15.3832 3.46733 15.6195 2.8135 15.7653Z" fill="currentColor"></path></svg>
          <p className="text-base text-grayc">Collaborative pre-production</p>
        </div>
        <p className="text-2xl text-grayc"><strong className="text-black">Every deploy is remarkable. </strong>Chat with your team on real, production-grade UI, not just designs.</p>
        </div>
        <div className="h-2/3 w-full flex flex-col justify-evenly">
          <div className="w-1/2 flex flex-col border justify-center items-center bg-white p-2 rounded-xl text-sm"><p>Swapped out the <span className="bg-gray-200 text-grayc pl-1 pr-1 mr-2 rounded-sm">button</span></p>for some varients we need</div>
          <div className="w-full justify-end flex items-center">
            <div className="flex items-center mr-4"><code className="h-5 flex pl-1 pr-1  text-v bg-bluebutton items-center text-white rounded-lg">Pranathi</code><svg className="relative bottom-3 " fill="#55aeff" height="18" viewBox="0 0 17 18" width="17"><path d="M15.5036 3.11002L12.5357 15.4055C12.2666 16.5204 10.7637 16.7146 10.22 15.7049L7.4763 10.6094L2.00376 8.65488C0.915938 8.26638 0.891983 6.73663 1.96711 6.31426L13.8314 1.65328C14.7729 1.28341 15.741 2.12672 15.5036 3.11002ZM7.56678 10.6417L7.56645 10.6416C7.56656 10.6416 7.56667 10.6416 7.56678 10.6417L7.65087 10.4062L7.56678 10.6417Z" stroke="white" stroke-width="2.5"></path></svg></div>
            <div className="justify-center w-41 text-sm p-2 bg-white rounded-xl border">How about this instead?</div>
          </div>
          <div className="w-fulll flex items-center">
            <div className="w-1/2 bg-white border rounded-xl text-sm inline-block p-2">I like it.Does this work with the brand tweaks <strong>@mamuso?</strong></div>
            <div className="flex items-center ml-4"><svg fill="#e5484f" height="18" viewBox="0 0 17 18" width="17"><path d="M1.4964 3.11002L4.46428 15.4055C4.73338 16.5204 6.23625 16.7146 6.77997 15.7049L9.5237 10.6094L14.9962 8.65488C16.0841 8.26638 16.108 6.73663 15.0329 6.31426L3.16856 1.65328C2.22708 1.28341 1.25905 2.12672 1.4964 3.11002ZM9.43322 10.6417L9.43355 10.6416C9.43344 10.6416 9.43333 10.6416 9.43322 10.6417L9.34913 10.4062L9.43322 10.6417Z" fill="#e5484d" stroke="white" stroke-width="2.5"></path></svg><code className="relative top-3 h-5 flex pl-1 pr-1 text-v bg-redcir items-center text-white rounded-lg">Rauno</code></div>
          </div>
          <div className="self-end bg-white rounded-xl flex justify-between items-center w-2/5 text-sm p-2 border ">This looks great!<svg className="rotate-270 h-8 w-8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" shape-rendering="geometricPrecision" viewBox="0 0 24 24" height="24" width="24"><circle cx="12" cy="12" r="10" fill="currentColor"></circle><path stroke="white" d="M12 16l4-4-4-4M8 12h8"></path></svg></div>
        </div>
      </div>
  </div>
  );
}

export default Block3
