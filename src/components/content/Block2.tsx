const Block2 = () =>{
  return(
  <div className="h-block2 border-border-w justify-center items-center font-semibold pt-24 text-3xl">
    <div className='flex justify-center items-center'>
      Develop with your favorite tools
      <svg className="h-8 w-8 ml-2 mr-2" data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.53035 12.7804L1.00002 13.3108L-0.0606384 12.2501L0.469692 11.7198L4.18936 8.00011L0.469692 4.28044L-0.0606384 3.75011L1.00002 2.68945L1.53035 3.21978L5.60358 7.29301C5.9941 7.68353 5.9941 8.3167 5.60357 8.70722L1.53035 12.7804ZM8.75002 12.5001H8.00002V14.0001H8.75002H15.25H16V12.5001H15.25H8.75002Z" fill="currentColor"></path>
      </svg>
    </div>
    <div className='flex justify-center items-center'>
       Launch globally, instantly
      <svg className="h-8 w-8 ml-2 mr-2" data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.268 14.0934C11.9051 13.4838 13.2303 12.2333 13.9384 10.6469C13.1192 10.7941 12.2138 10.9111 11.2469 10.9925C11.0336 12.2005 10.695 13.2621 10.268 14.0934ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.48347 14.4823C8.32384 14.494 8.16262 14.5 8 14.5C7.83738 14.5 7.67616 14.494 7.51654 14.4823C7.5132 14.4791 7.50984 14.4759 7.50647 14.4726C7.2415 14.2165 6.94578 13.7854 6.67032 13.1558C6.41594 12.5744 6.19979 11.8714 6.04101 11.0778C6.67605 11.1088 7.33104 11.125 8 11.125C8.66896 11.125 9.32395 11.1088 9.95899 11.0778C9.80021 11.8714 9.58406 12.5744 9.32968 13.1558C9.05422 13.7854 8.7585 14.2165 8.49353 14.4726C8.49016 14.4759 8.4868 14.4791 8.48347 14.4823ZM11.4187 9.72246C12.5137 9.62096 13.5116 9.47245 14.3724 9.28806C14.4561 8.87172 14.5 8.44099 14.5 8C14.5 7.55901 14.4561 7.12828 14.3724 6.71194C13.5116 6.52755 12.5137 6.37904 11.4187 6.27753C11.4719 6.83232 11.5 7.40867 11.5 8C11.5 8.59133 11.4719 9.16768 11.4187 9.72246ZM10.1525 6.18401C10.2157 6.75982 10.25 7.36805 10.25 8C10.25 8.63195 10.2157 9.24018 10.1525 9.81598C9.46123 9.85455 8.7409 9.875 8 9.875C7.25909 9.875 6.53877 9.85455 5.84749 9.81598C5.7843 9.24018 5.75 8.63195 5.75 8C5.75 7.36805 5.7843 6.75982 5.84749 6.18401C6.53877 6.14545 7.25909 6.125 8 6.125C8.74091 6.125 9.46123 6.14545 10.1525 6.18401ZM11.2469 5.00748C12.2138 5.08891 13.1191 5.20593 13.9384 5.35306C13.2303 3.7667 11.9051 2.51622 10.268 1.90662C10.695 2.73788 11.0336 3.79953 11.2469 5.00748ZM8.48347 1.51771C8.4868 1.52089 8.49016 1.52411 8.49353 1.52737C8.7585 1.78353 9.05422 2.21456 9.32968 2.84417C9.58406 3.42562 9.80021 4.12856 9.95899 4.92219C9.32395 4.89118 8.66896 4.875 8 4.875C7.33104 4.875 6.67605 4.89118 6.04101 4.92219C6.19978 4.12856 6.41594 3.42562 6.67032 2.84417C6.94578 2.21456 7.2415 1.78353 7.50647 1.52737C7.50984 1.52411 7.51319 1.52089 7.51653 1.51771C7.67615 1.50597 7.83738 1.5 8 1.5C8.16262 1.5 8.32384 1.50597 8.48347 1.51771ZM5.73202 1.90663C4.0949 2.51622 2.76975 3.7667 2.06159 5.35306C2.88085 5.20593 3.78617 5.08891 4.75309 5.00748C4.96639 3.79953 5.30497 2.73788 5.73202 1.90663ZM4.58133 6.27753C3.48633 6.37904 2.48837 6.52755 1.62761 6.71194C1.54392 7.12828 1.5 7.55901 1.5 8C1.5 8.44099 1.54392 8.87172 1.62761 9.28806C2.48837 9.47245 3.48633 9.62096 4.58133 9.72246C4.52807 9.16768 4.5 8.59133 4.5 8C4.5 7.40867 4.52807 6.83232 4.58133 6.27753ZM4.75309 10.9925C3.78617 10.9111 2.88085 10.7941 2.06159 10.6469C2.76975 12.2333 4.0949 13.4838 5.73202 14.0934C5.30497 13.2621 4.96639 12.2005 4.75309 10.9925Z" fill="currentColor"></path>
      </svg>
       Keep pushing
      <svg className="h-8 w-8 ml-2 mr-2" data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path d="M4 6.25V14.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12ZM9.079 12.6869C9.38957 14.0127 10.5795 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.6293 9 9.47333 9.91924 9.1149 11.1749C8.05096 10.9929 7.0611 10.4857 6.28769 9.71231C5.51428 8.9389 5.0071 7.94904 4.82513 6.8851C6.08076 6.52667 7 5.37069 7 4C7 2.34315 5.65685 1 4 1C2.34315 0.999999 1 2.34315 1 4C1 5.42051 1.98728 6.61042 3.3131 6.921C3.51279 8.37102 4.18025 9.72619 5.22703 10.773C6.2738 11.8197 7.62898 12.4872 9.079 12.6869ZM2.5 4C2.5 4.82843 3.17157 5.5 4 5.5C4.82843 5.5 5.5 4.82843 5.5 4C5.5 3.17157 4.82843 2.5 4 2.5C3.17157 2.5 2.5 3.17157 2.5 4Z" fill="currentColor"></path>
      </svg>
    </div>
  </div>
  );
}

export default Block2
