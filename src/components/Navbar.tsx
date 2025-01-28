import { ChevronDown } from '@geist-ui/react-icons'

import '../fonts/geist-font.css'
function Navbar() {
  const left : string[] = ['Products','Solutions','Resources','Enterprise','Docs','Pricing']
  const right : string[] = ['Log In','Contact','Sign Up']
  return (
    <nav className="z-50 w-full border h-16 flex justify-between bg-primary items-center sticky top-0">
      <div className="w-2/3 flex items-center align-middle">
        <svg className="ml-5 cursor-pointer" aria-label="Vercel logotype"  height="22" role="img" viewBox="0 0 283 64" width="97.28">
          <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="black">
          </path>
        </svg>
        <ul className="w-3/5 items-center font-sans text-grayc font-normal justify-between flex text-sm ml-8">
          {
            left.map((value,index)=>(
              index < 3 ? 
              (<li className='cursor-pointer hover:bg-gray-100 hover:text-black hover:rounded-full h-8 pl-2 pr-2 flex justify-center items-center'>{value}<ChevronDown size={10} strokeWidth={3} className='ml-1'/></li>) : 
              (<li className='cursor-pointer hover:bg-gray-100 hover:text-black hover:rounded-full h-8 pl-2 pr-2 flex justify-center items-center'>{value}</li>)
            ))
          }
        </ul>
      </div>
      <ul className="w-1/5 mr-6 text-sm flex font-sans font-medium justify-evenly">
        {
          right.map((value,index)=>(
            index < 2 ?
            (<li><button className='cursor-pointer border pl-2.5 pr-2.5 h-8 rounded-lg hover:bg-gray-100'>{value}</button></li>) :
            (<li><button className='cursor-pointer border pl-2.5 pr-2.5 h-8 rounded-lg text-white bg-black hover:bg-slate-800' >{value}</button></li>)
          ))
        }
      </ul>
    </nav>
  );
}

export default Navbar
