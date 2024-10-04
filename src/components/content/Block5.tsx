import CrossTop from "./CrossTop"

const Block5 = () =>{
  return(
  <div className="h-block5 flex relative border-t border-b">
      <CrossTop />
      <div className="w-1/2 h-full flex flex-col justify-evenly items-center">
        <div className="w-full h-1/3 flex flex-col justify-center">
        <div className="flex pr-12 pl-12 mb-2">
          <svg className="m-1" data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 8C13.5 4.96643 11.0257 2.5 7.96452 2.5C5.42843 2.5 3.29365 4.19393 2.63724 6.5H5.25H6V8H5.25H0.75C0.335787 8 0 7.66421 0 7.25V2.75V2H1.5V2.75V5.23347C2.57851 2.74164 5.06835 1 7.96452 1C11.8461 1 15 4.13001 15 8C15 11.87 11.8461 15 7.96452 15C5.62368 15 3.54872 13.8617 2.27046 12.1122L1.828 11.5066L3.03915 10.6217L3.48161 11.2273C4.48831 12.6051 6.12055 13.5 7.96452 13.5C11.0257 13.5 13.5 11.0336 13.5 8Z" fill="currentColor"></path></svg>
          <p className="text-grayc">Instant Rollbacks</p>
        </div>
        <p className="text-xl text-grayc mt-2 pl-12 pr-12"><strong className="text-black">Go ahead, deploy on Friday.</strong> Instantly rollback to a working deployment.</p>
        </div>
        <div className="h-2/3 w-full flex flex-col pb-10 items-center">
          <div className="h-1/5 w-3/5 flex items-center border relative right-rrel rounded-xl bg-white">
            <div className="h-4/5 w-4/5 flex flex-col">
              <div className="h-1/2 w-full flex items-center justify-between p-2">
              <span className="text-sm text-grayc font-medium">vercel-site/<strong className="text-black font-semibold">jvjb4ynna</strong></span><span className="text-sm">1day ago</span>
              </div>
              <div className="p-2 h-1/2 w-full flex justify-between items-center">
              <svg className="text-grayc" data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5ZM8 12C9.95279 12 11.5787 10.6006 11.9298 8.75H15.25H16V7.25H15.25H11.9298C11.5787 5.39935 9.95279 4 8 4C6.04721 4 4.42125 5.39935 4.0702 7.25H0.75H0V8.75H0.75H4.0702C4.42125 10.6006 6.04721 12 8 12Z" fill="currentColor"></path></svg>
              <span className="text-xs">ba5f55f</span><span className="text-sm">Update bento box design</span>  
              </div>
            </div>
            <div className='h-full w-1/5 flex justify-center items-center'>
            <svg className="rotate-265" fill="none" height="32" stroke-width="4" viewBox="0 0 100 100" width="32"><circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" className="stroke-graycir opacity-0 --stroke-percent: -2;"></circle><circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="100" stroke-dasharray="350" stroke-linecap="round" stroke-linejoin="round" data-geist-progress-circle-fg="" className="stroke-tealcir opacity-1"></circle></svg></div>
            <p className="text-xs absolute left-labs">95</p>
          </div>
          <div className="flex justify-center items-center">
            <svg data-size="large" fill="none" height="152" viewBox="0 0 117 152" width="117"><path d="M3.99999 4L3.99999 60C3.99999 66.6274 9.37258 72 16 72L104 72C110.627 72 116 77.3726 116 84L116 152" stroke="url(#paint0_linear_1364_100888)" stroke-width="2"></path><path d="M3.99999 4L3.99999 60C3.99999 66.6274 9.37258 72 16 72L104 72C110.627 72 116 77.3726 116 84L116 152" stroke="url(#paint1_linear_1364_100888)" stroke-width="2"></path><g clip-path="url(#clip0_1364_100888)"><path clip-rule="evenodd" d="M4 0.5L8 7.5H0L4 0.5Z" fill="#45DEC4" fill-rule="evenodd"></path></g><defs><linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1364_100888" x1="116" x2="4" y1="72" y2="72"><stop stop-color="#E5484D"></stop><stop offset="0.5" stop-color="#FFC634"></stop><stop offset="1" stop-color="#45DEC4"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1364_100888" x1="116" x2="116" y1="152" y2="1.56712e-05"><stop stop-color="var(--ds-background-200)"></stop><stop offset="0.322368" stop-color="var(--ds-background-200)" stop-opacity="0"></stop></linearGradient><clipPath id="clip0_1364_100888"><rect fill="white" height="8" width="8"></rect></clipPath></defs></svg>
            <svg data-testid="geist-icon" height="30" stroke-linejoin="round" viewBox="0 0 16 16" width="30"className="relative bottom-br7 right-rr7 border bg-white text-grayc rounded-full p-1.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.96452 2.5C11.0257 2.5 13.5 4.96643 13.5 8C13.5 11.0336 11.0257 13.5 7.96452 13.5C6.12055 13.5 4.48831 12.6051 3.48161 11.2273L3.03915 10.6217L1.828 11.5066L2.27046 12.1122C3.54872 13.8617 5.62368 15 7.96452 15C11.8461 15 15 11.87 15 8C15 4.13001 11.8461 1 7.96452 1C5.06835 1 2.57851 2.74164 1.5 5.23347V3.75V3H0V3.75V7.25C0 7.66421 0.335786 8 0.75 8H3.75H4.5V6.5H3.75H2.63724C3.29365 4.19393 5.42843 2.5 7.96452 2.5ZM8.75 5.25V4.5H7.25V5.25V7.8662C7.25 8.20056 7.4171 8.51279 7.6953 8.69825L9.08397 9.62404L9.70801 10.0401L10.5401 8.79199L9.91603 8.37596L8.75 7.59861V5.25Z" fill="currentColor"></path></svg>
          </div>
          <div className="h-1/5 w-3/5 border border-dashed relative left-rrel flex items-center bg-white rounded-xl">
            <div className="h-4/5 w-4/5 flex flex-col">
              <div className="h-1/2 w-full flex items-center justify-between p-2">
              <span className="text-sm text-grayc font-medium">vercel-site/<strong className="text-black font-semibold">gigj178pv</strong></span><span className="text-sm">10m ago</span>
              </div>
              <div className="p-2 h-1/2 w-full flex justify-between items-center">
              <svg className="text-grayc" data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5ZM8 12C9.95279 12 11.5787 10.6006 11.9298 8.75H15.25H16V7.25H15.25H11.9298C11.5787 5.39935 9.95279 4 8 4C6.04721 4 4.42125 5.39935 4.0702 7.25H0.75H0V8.75H0.75H4.0702C4.42125 10.6006 6.04721 12 8 12Z" fill="currentColor"></path></svg>
              <span className="text-xs">bx012mm</span><span className="text-sm">Fix ESlint error on query</span>  
              </div>
            </div>
            <div className='h-full w-1/5 flex justify-center items-center'>
            <svg className="rotate-65" fill="none" height="32" stroke-width="4" viewBox="0 0 100 100" width="32"><circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="263" stroke-dasharray="80" stroke-linecap="round" stroke-linejoin="round" className="stroke-graycir opacity-1"></circle><circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="330" stroke-dasharray="122" stroke-linecap="round" stroke-linejoin="round" data-geist-progress-circle-fg="" className="stroke-redcir opacity-1"></circle></svg></div>
            <p className="text-xs absolute left-labs">55</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-evenly items-center border-l">
      <div className="w-full h-1/3 flex flex-col justify-center">
        <div className="flex pr-12 pl-11 mb-2 items-center">
            <svg className="m-1" data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1.5H5C4.44772 1.5 4 1.94772 4 2.5V13.4732L7.16201 11.7485C7.68434 11.4635 8.31566 11.4635 8.83799 11.7485L12 13.4732V2.5C12 1.94772 11.5523 1.5 11 1.5ZM13.5 14.2914V2.5C13.5 1.11929 12.3807 0 11 0H5C3.61929 0 2.5 1.11929 2.5 2.5V14.2914V16L4 15.1818L7.88029 13.0653C7.95491 13.0246 8.04509 13.0246 8.11971 13.0653L12 15.1818L13.5 16V14.2914Z" fill="currentColor"></path></svg>
            <p className="text-grayc">Conformance</p>
        </div>
        <p className="text-xl text-grayc mt-2 pl-12 pr-12"><strong className="text-black">Move fast, don’t break things.</strong> Keep quality high while maintaining velocity with Enterprise Monorepos.</p>
      </div>
      <div className='mb-10 h-1/2 w-4/5 bg-white before:content[""] before:w-430 before:h-full before:rounded-2xl before:bottom-a1 before:absolute before:-z-10 z-10 before:bg-gradient-to-b before:from-gray-200 before:to-primary relative flex justify-evenly bg-gradient-to-b from-white to-primary rounded-2xl border border-transparent'>
        <div className="h-full w-1/2 border-r border-r-transparent flex flex-col items-center bg-gradient-to-b from-white to-primary rounded-l-2xl z-10 ">
          <div className="w-full pr-6 pl-6 pb-3 pt-3">Conformance</div>
            <div className="text-xs text-grayc w-4/5 h-4/6 flex flex-col justify-around">
              <div className="w-full h-1/4 flex items-center justify-between pl-2 pr-2 bg-primary rounded-lg">Excellent<div className="flex w-14 justify-evenly items-center"><svg className="rotate-265" fill="none" height="20" stroke-width="8" viewBox="0 0 100 100" width="20"><circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" className="stroke-graycir opacity-0 --stroke-percent: -2;"></circle><circle cx="50" cy="50" r="45" stroke-width="15" stroke-dashoffset="100" stroke-dasharray="350" stroke-linecap="round" stroke-linejoin="round" data-geist-progress-circle-fg="" className="stroke-tealcir opacity-1"></circle></svg>
<strong className="text-base">9.5</strong></div></div>
              <div className="w-full h-1/4 flex items-center justify-between pl-2 pr-2 bg-primary rounded-lg">Total Issues<strong>34</strong></div>
              <div className="w-full h-1/4 flex items-center justify-between pl-2 pr-2 bg-primary rounded-lg">Major Issues<strong>12</strong></div>
            </div>
        </div>
        <div className="h-full w-1/2 flex flex-col items-center bg-gradient-to-b from-white to-primary rounded-r-2xl">
            <div className="w-full pr-6 pl-6 pb-3 pt-3">Code Owners</div>
            <div className="text-xs text-grayc w-4/5 h-4/6 flex flex-col justify-around">
              <div className="w-full h-1/4 flex items-center justify-between pl-2 pr-2 bg-primary rounded-lg">@vercel/design
                <div>
                  <span className="relative top-r18 right-r18"><span aria-label="Avatar for rauno" data-geist-avatar="" data-version="v1" role="img"><img className="rounded-full" data-version="v1" alt="Avatar for rauno" title="Avatar for rauno" loading="eager" width="18" height="18" decoding="sync" data-nimg="1" src="https://vercel.com/api/www/avatar?u=rauno&s=44"></img></span></span>
                  <span className="relative right-r9"><span aria-label="Avatar for gennydee" data-geist-avatar="" data-version="v1" role="img"><img className="rounded-full" data-version="v1" alt="Avatar for gennydee" title="Avatar for gennydee" loading="eager" width="18" height="18" decoding="sync" data-nimg="1" src="https://vercel.com/api/www/avatar?u=gennydee&amp&s=44"></img></span></span> 
                  <span className="relative bottom-r18"><span aria-label="Avatar for gln" data-geist-avatar="" data-version="v1" role="img"><img className="rounded-full" data-version="v1" alt="Avatar for gln" title="Avatar for gln" loading="eager" width="18" height="18" decoding="sync" data-nimg="1" src="https://vercel.com/api/www/avatar?u=gln&amp&s=44"></img></span></span>
                </div>
              </div>
              <div className="w-full h-1/4 flex items-center justify-between pl-2 pr-2 bg-primary rounded-lg">@vercel/eng
                <div>
                <span className="relative top-9 right-9"><span aria-label="Avatar for timer" data-geist-avatar="" data-version="v1" role="img"><img className="rounded-full" data-version="v1" alt="Avatar for timer" title="Avatar for timer" loading="eager" width="18" height="18" decoding="sync" data-nimg="1" src="https://vercel.com/api/www/avatar?u=timer&amp&s=44"></img></span></span>
                <span className="relative top-r18 right-r27"><span aria-label="Avatar for jared" data-geist-avatar="" data-version="v1" role="img"><img className="rounded-full" data-version="v1" alt="Avatar for jared" title="Avatar for jared" loading="eager" width="18" height="18" decoding="sync" data-nimg="1" src="https://vercel.com/api/www/avatar?u=jared&amp&s=44"></img></span></span>
                <span className="relative right-r18"><span aria-label="Avatar for cramforce" data-geist-avatar="" data-version="v1" role="img"><img className="rounded-full" data-version="v1" alt="Avatar for cramforce" title="Avatar for cramforce" loading="eager" width="18" height="18" decoding="sync" data-nimg="1" src="https://vercel.com/api/www/avatar?u=cramforce&amp&s=44"></img></span></span>
                <span className="relative bottom-r18 right-r9"><span aria-label="Avatar for gkaragkiaouris" data-geist-avatar="" data-version="v1" role="img"><img className="rounded-full" data-version="v1" alt="Avatar for gkaragkiaouris" title="Avatar for gkaragkiaouris" loading="eager" width="18" height="18" decoding="sync" data-nimg="1" src="https:vercel.com/api/www/avatar?u=gkaragkiaouris&amp&s=44"></img></span></span>
                <span className="relative bottom-9"><span aria-label="Avatar for tomocchino" data-geist-avatar="" data-version="v1" role="img"><img className="rounded-full" data-version="v1" alt="Avatar for tomocchino" title="Avatar for tomocchino" loading="eager" width="18" height="18" decoding="sync" data-nimg="1" src="https://vercel.com/api/www/avatar?u=tomocchino&amp$s=44"></img></span></span></div>
              </div>
              <div className="w-full h-1/4 flex items-center justify-between pl-2 pr-2 bg-primary rounded-lg">@vercel/marketing
                <div>
                <span className="relative top-r18 right-r18"><span aria-label="Avatar for greetah" data-geist-avatar="" data-version="v1" role="img"><img className="rounded-full" data-version="v1" alt="Avatar for greetah" title="Avatar for greetah" loading="eager" width="18" height="18" decoding="sync" data-nimg="1" src="https://vercel.com/api/www/avatar?u=greetah&amp&s=44"></img></span></span>
                <span className="relative right-r9"><span aria-label="Avatar for m0rgane" data-geist-avatar="" data-version="v1" role="img"><img className="rounded-full" data-version="v1" alt="Avatar for m0rgane" title="Avatar for m0rgane" loading="eager" width="18" height="18" decoding="sync" data-nimg="1" src="https://vercel.com/api/www/avatar?u=m0rgane&amp&s=44"></img></span></span>
                <span className="relative bottom-r18"><span aria-label="Avatar for lindsaygilson" data-geist-avatar="" data-version="v1" role="img"><img className="rounded-full" data-version="v1" alt="Avatar for lindsaygilson" title="Avatar for lindsaygilson" loading="eager" width="18" height="18" decoding="sync" data-nimg="1" src="https://vercel.com/api/www/avatar?u=lindsaygilson&amp&s=44"></img></span></span>
                </div>
            </div>
          </div>
      </div>
      </div>
  </div>
</div>
)
}

export default Block5
