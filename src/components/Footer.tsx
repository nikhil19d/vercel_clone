import { ChevronDown } from '@geist-ui/react-icons'
function Footer (){
return(
    <footer className="footer bg-primary">
      <nav className="footer-nav">
        <ul className="footer-nav-ul">
          <h2 className="font-medium text-black mb-3 mt-3">Products</h2>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">AI</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">Enterprise</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">Next.js</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">Observability</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">Previews</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">Rendering</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">Security</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">Turbo</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer items-center flex">vO<svg data-testid="geist-icon" className="w-3 ml-1" height="14" stroke-linejoin="round" viewBox="0 0 16 16" width="14"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 10.25V13.25C13.5 13.3881 13.3881 13.5 13.25 13.5H2.75C2.61193 13.5 2.5 13.3881 2.5 13.25L2.5 2.75C2.5 2.61193 2.61193 2.5 2.75 2.5H5.75H6.5V1H5.75H2.75C1.7835 1 1 1.7835 1 2.75V13.25C1 14.2165 1.7835 15 2.75 15H13.25C14.2165 15 15 14.2165 15 13.25V10.25V9.5H13.5V10.25ZM9 1H9.75H14.2495C14.6637 1 14.9995 1.33579 14.9995 1.75V6.25V7H13.4995V6.25V3.56066L8.53033 8.52978L8 9.06011L6.93934 7.99945L7.46967 7.46912L12.4388 2.5H9.75H9V1Z" fill="currentColor"></path></svg></a></li>
        </ul>
        <ul className="footer-nav-ul">
          <h2 className="font-medium text-black mb-3 mt-3">Resources</h2>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer flex items-center">Community<svg data-testid="geist-icon" className='w-3 ml-1' height="14" stroke-linejoin="round" viewBox="0 0 16 16" width="14"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 10.25V13.25C13.5 13.3881 13.3881 13.5 13.25 13.5H2.75C2.61193 13.5 2.5 13.3881 2.5 13.25L2.5 2.75C2.5 2.61193 2.61193 2.5 2.75 2.5H5.75H6.5V1H5.75H2.75C1.7835 1 1 1.7835 1 2.75V13.25C1 14.2165 1.7835 15 2.75 15H13.25C14.2165 15 15 14.2165 15 13.25V10.25V9.5H13.5V10.25ZM9 1H9.75H14.2495C14.6637 1 14.9995 1.33579 14.9995 1.75V6.25V7H13.4995V6.25V3.56066L8.53033 8.52978L8 9.06011L6.93934 7.99945L7.46967 7.46912L12.4388 2.5H9.75H9V1Z" fill="currentColor"></path></svg></a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">Docs</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">Experts</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">Guides</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">Help</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">Integrations</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">Pricing</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">Resources</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">Templates</a></li>
        </ul>
        <ul className="footer-nav-ul">
          <h2 className="font-medium text-black mb-3 mt-3">Company</h2>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">About</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">Blog</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">Careers</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">Changelog</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">Contact Us</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">Partners</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer">Privacy Policy</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer flex items-center">Legal<ChevronDown size={10} strokeWidth={3} className='ml-1' /></a></li>
        </ul>
        <ul className="footer-nav-ul">
          <h2 className="font-medium text-black mb-3 mt-3">Social</h2>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer flex items-center"><svg className='w-4 mr-1' data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><g clip-path="url(#clip0_872_3147)">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.57819 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z" fill="currentColor"></path>
  </g>
  <defs>
  <clipPath id="clip0_872_3147">
  <rect width="16" height="16" fill="white"></rect>
  </clipPath>
  </defs></svg>GitHub</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer flex items-center"><svg className='w-4 mr-1' data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M2 0C0.895431 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H14C15.1046 16 16 15.1046 16 14V2C16 0.895431 15.1046 0 14 0H2ZM5 6.75V13H3V6.75H5ZM5 4.50008C5 5.05554 4.61409 5.5 3.99408 5.5H3.98249C3.38582 5.5 3 5.05554 3 4.50008C3 3.93213 3.39765 3.5 4.00584 3.5C4.61409 3.5 4.98845 3.93213 5 4.50008ZM8.5 13H6.5C6.5 13 6.53178 7.43224 6.50007 6.75H8.5V7.78371C8.5 7.78371 9 6.75 10.5 6.75C12 6.75 13 7.59782 13 9.83107V13H11V10.1103C11 10.1103 11 8.46616 9.7361 8.46616C8.4722 8.46616 8.5 9.93972 8.5 9.93972V13Z" fill="currentColor"></path></svg>Linkedin</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer flex items-center"><svg className='w-4 mr-1' data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z" fill="currentColor"></path></svg>Twitter</a></li>
          <li className='footer-nav-ul-li'><a className="hover:text-black cursor-pointer flex items-center"><svg className='w-4 mr-1' data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4695 3.39273C14.0722 3.55407 14.5459 4.02773 14.7073 4.63046C14.9988 5.72183 15 8.00023 15 8.00023C15 8.00023 15 10.2786 14.7073 11.37C14.5459 11.9728 14.0722 12.4464 13.4695 12.6077C12.3782 12.9005 7.99998 12.9005 7.99998 12.9005C7.99998 12.9005 3.62183 12.9005 2.53045 12.6077C1.92773 12.4464 1.45407 11.9728 1.29272 11.37C1 10.2786 1 8.00023 1 8.00023C1 8.00023 1 5.72183 1.29272 4.63046C1.45407 4.02773 1.92773 3.55407 2.53045 3.39273C3.62183 3.10001 7.99998 3.10001 7.99998 3.10001C7.99998 3.10001 12.3782 3.10001 13.4695 3.39273ZM10.2362 8.00046L6.59906 10.1002V5.90068L10.2362 8.00046Z" fill="currentColor"></path></svg>YouTube</a></li>
        </ul>
        <div className="w-custom-width1 flex justify-end">
          <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" className="text-black cursor-pointer mb-3 mt-3"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1L16 15H0L8 1Z" fill="currentColor"></path></svg>
        </div>
      </nav>
      <div className="flex items-center justify-between mt-8 mb-20 w-custom-width2 h-8"> 
        <div className="flex items-center h-8 pr-1.5 hover:bg-gray-100 hover:rounded-md cursor-pointer">
          <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" className="text-blue"><path d="M13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8Z" fill="currentColor"></path></svg>
          <p className="text-sm text-blue pl-1"> All systems normal</p>
        </div>
        <div className="w-16 flex border h-6 rounded-full items-center cursor-pointer justify-evenly ">
          <svg className='mr-1' data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 3.25C0.5 1.45507 1.95507 0 3.75 0H8.25C10.0449 0 11.5 1.45507 11.5 3.25V11.25V12H10.75H1.25H0.5V11.25V3.25ZM3.75 1.5C2.7835 1.5 2 2.2835 2 3.25V10.5H10V3.25C10 2.2835 9.2165 1.5 8.25 1.5H3.75ZM3 3.5C3 2.94772 3.44772 2.5 4 2.5H8C8.55228 2.5 9 2.94772 9 3.5V7H3V3.5ZM6.5 9.5H9V8H6.5V9.5Z" fill="currentColor" transform="translate(2.5, 2)"></path> </svg>
          <svg className='text-grayc ml-1 mr-1' data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 1V0.25H6.25V1V1.25V2H7.75V1.25V1ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9ZM7 10.5C8.933 10.5 10.5 8.933 10.5 7C10.5 5.067 8.933 3.5 7 3.5C5.067 3.5 3.5 5.067 3.5 7C3.5 8.933 5.067 10.5 7 10.5ZM7.75 12V12.75V13V13.75H6.25V13V12.75V12H7.75ZM12 6.25H12.75H13H13.75V7.75H13H12.75H12V6.25ZM1 6.25H0.25V7.75H1H1.25H2V6.25H1.25H1ZM10.0052 2.93414L10.5355 2.40381L10.7123 2.22703L11.2426 1.6967L12.3033 2.75736L11.773 3.28769L11.5962 3.46447L11.0659 3.9948L10.0052 2.93414ZM2.22703 10.7123L1.6967 11.2426L2.75736 12.3033L3.28769 11.773L3.46447 11.5962L3.9948 11.0659L2.93414 10.0052L2.40381 10.5355L2.22703 10.7123ZM2.93414 3.9948L2.40381 3.46447L2.22703 3.28769L1.6967 2.75736L2.75736 1.6967L3.28769 2.22703L3.46447 2.40381L3.9948 2.93414L2.93414 3.9948ZM10.7123 11.773L11.2426 12.3033L12.3033 11.2426L11.773 10.7123L11.5962 10.5355L11.0659 10.0052L10.0052 11.0659L10.5355 11.5962L10.7123 11.773Z" fill="currentColor" transform="translate(1.25, 1.25)"></path></svg> 
          <svg className='text-grayc ml-1' data-testid="geist-icon" height="12" stroke-linejoin="round" viewBox="0 0 16 16" width="12"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 8.00005C1.5 5.53089 2.99198 3.40932 5.12349 2.48889C4.88136 3.19858 4.75 3.95936 4.75 4.7501C4.75 8.61609 7.88401 11.7501 11.75 11.7501C11.8995 11.7501 12.048 11.7454 12.1953 11.7361C11.0955 13.1164 9.40047 14.0001 7.5 14.0001C4.18629 14.0001 1.5 11.3138 1.5 8.00005ZM6.41706 0.577759C2.78784 1.1031 0 4.22536 0 8.00005C0 12.1422 3.35786 15.5001 7.5 15.5001C10.5798 15.5001 13.2244 13.6438 14.3792 10.9921L13.4588 9.9797C12.9218 10.155 12.3478 10.2501 11.75 10.2501C8.71243 10.2501 6.25 7.78767 6.25 4.7501C6.25 3.63431 6.58146 2.59823 7.15111 1.73217L6.41706 0.577759ZM13.25 1V1.75V2.75L14.25 2.75H15V4.25H14.25H13.25V5.25V6H11.75V5.25V4.25H10.75L10 4.25V2.75H10.75L11.75 2.75V1.75V1H13.25Z" fill="currentColor"></path></svg>
        </div>
      </div>
    </footer>
)}

export default Footer
