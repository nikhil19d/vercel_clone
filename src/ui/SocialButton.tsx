interface type {
  text : string,
  children : React.ReactNode
}

export const SocialButton = ({ text, children } : type ) => {
  return (
    <>
      <li className='py-1.5'>
        <a className="hover:text-black cursor-pointer flex items-center">
        {children}
        {text}
        </a>
      </li>
    </>
  )
}
