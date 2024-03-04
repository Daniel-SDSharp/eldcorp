import { QwikIntrinsicElements, component$ } from '@builder.io/qwik';
import { TitleComponent } from '~/routes';


const HeroSteps = component$(() => {
  return(
    <div class="flex items-center">
      <div class="border-b cursor-pointer border-b-[#E29D21] tex-[18px] pb-10 text-[#E29D21] w-[60px] text-center font-bold">Start</div>
      <div class="border-b cursor-pointer border-b-white tex-[18px] pb-10 text-white w-[60px] text-center font-bold">01</div>
      <div class="border-b cursor-pointer border-b-white tex-[18px] pb-10 text-white w-[60px] text-center font-bold">02</div>
      <div class="border-b cursor-pointer border-b-white tex-[18px] pb-10 text-white w-[60px] text-center font-bold">03</div>
    </div>
  )
})

export function MdiTwitter(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 40 40" {...props} key={key}><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"></path></svg>
  )
}

export function MdiInstagram(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 40 40" {...props} key={key}><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg>
  )
}


export default component$(() => {
  return (
    <div class="">
      <img class="w-full h-[100vh]" src='public/ship.png'/>
      <div class="absolute top-[20%] pl-[70px]">
        <TitleComponent name='BEYOND BOUNDARIES' isLong={false}/>
        <div class="mt-8 mb-[180px]">
          <p class="font-bold text-[88px]">Mechanical Bridges,</p>
          <p class="font-bold text-[88px]">Global Reach</p>
          <button class="bg-[#E29D21] w-[232px] h-[65px] rounded-none mt-10 text-black font-bold">Get In Touch</button>
        </div>
        <HeroSteps/>
      </div>
        <div class="absolute right-[70px] top-[200px] space-y-2">
          <MdiInstagram/>
          <MdiTwitter/>
        </div>
    </div>
  );
});
