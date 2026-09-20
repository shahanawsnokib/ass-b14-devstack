// import React, { use } from 'react';
import TechCard from './TechCard';
import Stack from './Stack';

// interface Technology {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   icon: string;
//   rating: number;
//   difficulty: string;
//   badge: string;
// }

const Technologies = () => {
    //   const tech = use(techPromise);
    //   console.log(tech);

    
    return (
       <div className='container mx-auto'>
         <div className=' flex flex-col items-center md:items-start ustify-center md:justify-start'>
        <h1 className="text-4xl  font-bold">Explore the <span className="text-4xl font-bold bg-linear-to-r from-orange-500 via-pink-600 to-purple-950 bg-clip-text text-transparent"> Technologies </span> </h1>
     
          <p className='text-xl text-gray-400 uppercase'>Pick one technology per category to build your ideal stack.</p>
              
      
        </div>
         <div>
           
           
         </div>


<div className="grid grid-cols-1 md:grid-cols-5 gap-6">
  <section className="md:col-span-4">
    <TechCard></TechCard>
  </section>

  <section className="md:col-span-1">
   <Stack ></Stack>
  </section>
</div>




       </div>
    );
};

export default Technologies;