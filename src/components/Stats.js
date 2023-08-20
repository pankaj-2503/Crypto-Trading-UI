import React from 'react';
//import icons
import {HiChartBar,HiUser,HiGlobe} from 'react-icons/hi'
const Stats = () => {
  return(
  <section className='pt-24' data-aos='fade-up' data-aos-delay='1200'>
      <div className='container mx-auto'>
          <div className='flex flex-col gap-y-6 lg:flex-row lg:justify-between' >
            {/* {items} */}
            <div className='flex items-center gap-x-6'>
               {/* {items icon} */}
              <div className='bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl'>
                <HiChartBar/>
              </div>
              {/* {item text} */}
              <div>
                 <div className='font-bold text-2xl lg:text-[40px] lg:mb-2'>$5 Billion</div>
                 <div className='text-gray'>Digital Currency Exchanged</div>
              </div>
            </div>
            {/* {items} */}
            <div className='flex items-center gap-x-6'>
               {/* {items icon} */}
              <div className='bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl'>
                <HiUser/>
              </div>
              {/* {item text} */}
              <div>
                 <div className='font-bold text-2xl lg:text-[40px] lg:mb-2'>2M+</div>
                 <div className='text-gray'>Trusted Wallets Investors.</div>
              </div>
            </div>
            {/* {items} */}
            <div className='flex items-center gap-x-6'>
               {/* {items icon} */}
              <div className='bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl'>
                <HiGlobe/>
              </div>
              {/* {item text} */}
              <div>
                 <div className='font-bold text-2xl lg:text-[40px] lg:mb-2'>195</div>
                 <div className='text-gray'>Countries Supported</div>
              </div>
            </div>
          </div>
      </div>
  </section>
  );
};

export default Stats;
