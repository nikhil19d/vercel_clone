import Graph from './img/analytics-large-light.png'
const Block4 = () =>{
  return(
  <div className="h-block4 p-10 bg-white">
    <div className="h-full w-full relative">
    <img src={Graph} className='h-full absolute w-full bg-transparent' />
    </div>
    <div className='w-3/5 relative bottom-357 h-2/5 flex justify-between flex-col'>
      <div className='flex text-grayc items-center'>
          <svg className='mr-2' data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill="Black" fill-rule="evenodd" d="M1 1v11.75A2.25 2.25 0 0 0 3.25 15H15v-1.5H3.25a.75.75 0 0 1-.75-.75V1H1Zm13.297 5.013.513-.547-1.094-1.026-.513.547-3.22 3.434-2.276-2.275a1 1 0 0 0-1.414 0L4.22 8.22l-.53.53 1.06 1.06.53-.53L7 7.56l2.287 2.287a1 1 0 0 0 1.437-.023l3.573-3.811Z" clip-rule="evenodd"></path></svg>
          Frontend Observability</div>
      <div className='text-2xl'>
        <strong>Privacy-friendly, lightweight Analytics. </strong>
        <p className='text-grayc'>Upgrade your post-launch workflow with actionable, real-time insights.</p>
      </div>
    </div>
  </div>
  );
}

export default Block4
