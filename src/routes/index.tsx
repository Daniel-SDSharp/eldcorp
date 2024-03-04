import { QwikIntrinsicElements, component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Hero from '~/components/starter/hero/hero';

const Steps = component$(() => {
  return(
    <div class="flex items-center">
      <div class="border-b cursor-pointer border-b-[#E29D21] tex-[18px] pb-10 text-[#E29D21] w-[60px] text-center font-bold">01</div>
      <div class="border-b cursor-pointer border-b-white tex-[18px] pb-10 text-white w-[60px] text-center font-bold">02</div>
      <div class="border-b cursor-pointer border-b-white tex-[18px] pb-10 text-white w-[60px] text-center font-bold">03</div>
    </div>
  )
})

export const TitleComponent = component$(({name, isLong}: {name: string, isLong: boolean}) => {
  return(
    <div class="flex items-center">
      <div class={`h-[3px] mr-6 !bg-[#E29D21] ${isLong ? " w-[305px]" : " w-[72px]"}`}></div>
      <p class="uppercase text-[#E29D21] text-[18px] font-bold tracking-[6px]">{name}</p>
    </div>
  )
})


export function MdiLeaf(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="90px" height="90px" viewBox="0 0 24 24" {...props} key={key}><path fill="currentColor" d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8"></path></svg>
  )
}

export function MdiTools(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="90px" height="90px" viewBox="0 0 24 24" {...props} key={key}><path fill="currentColor" d="m21.71 20.29l-1.42 1.42a1 1 0 0 1-1.41 0L7 9.85A3.81 3.81 0 0 1 6 10a4 4 0 0 1-3.78-5.3l2.54 2.54l.53-.53l1.42-1.42l.53-.53L4.7 2.22A4 4 0 0 1 10 6a3.81 3.81 0 0 1-.15 1l11.86 11.88a1 1 0 0 1 0 1.41M2.29 18.88a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 0 0 1.41 0l5.47-5.46l-2.83-2.83M20 2l-4 2v2l-2.17 2.17l2 2L18 8h2l2-4Z"></path></svg>
  )
}

export function MdiHours24(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="90px" height="90px" viewBox="0 0 24 24" {...props} key={key}><path fill="currentColor" d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93c0 3.21-1.92 6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95M11 2c-1.95.2-3.8.96-5.32 2.21L7.1 5.63A8.195 8.195 0 0 1 11 4zM4.2 5.68C2.96 7.2 2.2 9.05 2 11h2c.19-1.42.75-2.77 1.63-3.9zM6 8v2h3v1H8c-1.1 0-2 .9-2 2v3h5v-2H8v-1h1c1.11 0 2-.89 2-2v-1a2 2 0 0 0-2-2zm6 0v5h3v3h2v-3h1v-2h-1V8h-2v3h-1V8zM2 13c.2 1.95.97 3.8 2.22 5.32l1.42-1.42A8.21 8.21 0 0 1 4 13zm5.11 5.37l-1.43 1.42A10.04 10.04 0 0 0 11 22v-2a8.063 8.063 0 0 1-3.89-1.63"></path></svg>
  )
}

export default component$(() => {
  return (
    <>
      <Hero />

        <div class="flex items-center justify-around px-[250px] counters h-[261px] w-full bg-white">
          <div class="border-l-4 pl-5 border-l-[#E29D21]">
            <p class="text-[#111827] text-[48px] font-bold">8,000</p>   
            <p class="text-[#111827] text-[24px] font-bold">Sales</p>   
          </div> 
          <div class="border-l-4 pl-5 border-l-[#E29D21]">
            <p class="text-[#111827] text-[48px] font-bold">12,000+</p>   
            <p class="text-[#111827] text-[24px] font-bold">Parts Available</p>   
          </div> 
          <div class="border-l-4 pl-5 border-l-[#E29D21]">
            <p class="text-[#111827] text-[48px] font-bold">16</p>   
            <p class="text-[#111827] text-[24px] font-bold">Years in the industry</p>   
          </div> 
          <div class="border-l-4 pl-5 border-l-[#E29D21]">
            <p class="text-[#111827] text-[48px] font-bold">10</p>   
            <p class="text-[#111827] text-[24px] font-bold">Countries</p>   
          </div> 
        </div>
      <div class="container h-[420px]">

        {/* ABOUT US SECTION  */}
        <div class="about flex space-x-10 mt-24 px-[90px]">
          <div>
            <TitleComponent name='ABOUT US' isLong={false}/>
            <div class="leading-6 mt-20 text-[16px] text-black p-14 pt-10 h-[297px] w-[370px] bg-[#E29D21]">
              Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus ultricies velit elementum ut dui sed augue ultrices phasellus ullamcorper condimentum ut suspendisse viverra ornare sit venenatis
            </div>
          </div>
          <div>
            <p class="text-[64px] font-bold">Why Us</p>
            <p class="leading-6 w-[600px] mt-6">
              Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus ultricies velit elementum ut dui sed augue ultrices phasellus ullamcorper condimentum ut suspendisse viverra ornare sit venenatis
            </p>
            <div class="flex mt-20 space-x-8">
              <div class="pt-4 why-us h-[170px] w-[170px] bg-white text-[18px] text-[#0E1B1B] font-bold text-center">
                <div class="flex justify-center">
                  <MdiLeaf/>
                </div>
                <p class="mt-4">Eco-Friendly</p>
              </div>
              <div class="pt-4 why-us h-[170px] w-[170px] bg-white text-[18px] text-[#0E1B1B] font-bold flex-col text-center">
                <div class="flex justify-center">
                  <MdiTools/> 
                </div>
                <p class="mt-4">Tools</p>
              </div>
              <div class="pt-4 why-us h-[170px] w-[170px] bg-white text-[18px] text-[#0E1B1B] font-bold text-center">
                <div class="flex justify-center">
                  <MdiHours24/>
                </div>
                <p class="mt-4">24/7 Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* OUR WORK SECTION */}
        <div class="work mt-24 px-[90px]">
            <TitleComponent name='SELECTED WORK' isLong={true}/>
            <div class="mt-10">
              <p class="text-white font-bold text-[64px]">Our Work</p>
              <p class="text-[16px] text-white w-[1171px] mt-5 leading-6">
                Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus ultricies velit elementum ut dui sed augue ultrices phasellus ullamcorper condimentum ut suspendisse viverra ornare sit venenatis
              </p>
            </div>
            <div class="flex mt-16">
              <div class=" w-[900px] h-[480px] flex">
                <div class="">
                  <p class="text-[#E29D21] text-[120px] font-bold mr-10 ml-[105px] mt-[-20px]">01</p>
                  <img src="public/photo2.png" class="absolute mt-10 h-[319px] w-[405px]" alt="" />
                </div>
                <img src="public/photo.png" class="h-[385px] w-[570px]" alt="" />
              </div>
              <div class="ml-5 h-[350px]">
                <div>
                <p class="text-[48px] font-bold">Pandiani Corp</p>
                <p class="mt-5 w-[416px] leading-6">Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus ultricies velit elementum ut dui sed augue ultrices phasellus ullamcorper condimentum ut suspendisse viverra ornare sit venenatis</p>
                </div>
                <div class="mt-32">
                  <Steps/>
                </div>
              </div>
            </div>
        </div>

        {/* EXPERTS SECTION */}
        <div class="experts px-[90px] mt-24">
          <div>
            <TitleComponent name='OUR TEAM' isLong={false}/>
          </div>
          <div class="services px-[90px] mt-10">
            <p class="text-white font-bold text-[64px] text-center">Met Our Experts</p>
            <div class="flex mt-12 space-x-10 justify-center w-full">
              <div>
                <img src="public/expert1.png" alt="" />
              </div>
              <div>
                <img src="public/expert2.png" alt="" />
              </div>
              <div>
                <img src="public/expert3.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* EXPERTS SECTION */}
        <div class="experts px-[90px] mt-24">
          <div>
            <TitleComponent name='WHAT WE OFFER' isLong={true}/>
          </div>
          <div class="services  mt-10">
            <p class="text-left text-white font-bold text-[64px]">Our Services</p>
            <p class="text-white mt-8 leading-6">Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus ultricies velit elementum ut dui sed augue ultrices phasellus ullamcorper condimentum ut suspendisse viverra ornare sit venenatis</p>
            <div class="flex mt-12 space-x-12">
              <div class="relative w-[895px] h-[385px]">
                <img src="public/service.png" alt="" class=""/>
                <div class="absolute bottom-12 left-8">
                  <Steps/>
                </div>
              </div>
              <div class="w-[444px]">
                <p class="text-[42px] font-bold">Project Management</p>
                <p class="text-white mt-8 leading-6">
                  Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus ultricies velit elementum ut dui sed augue ultrices phasellus ullamcorper condimentum ut suspendisse viverra ornare sit venenatis
                </p>
                <button class="bg-[#E29D21] w-[232px] h-[65px] rounded-none mt-24 text-black font-bold">Get In Touch</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
