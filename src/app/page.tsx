import Image from 'next/image'
import logo from "@/../public/Logo.png"
import illustration from "@/../public/illustration.png"
import bubble from "@/../public/bubble.png"
import drop from "@/../public/Vector.png"
import user from "@/../public/user.png"
import star from "@/../public/star.png"
import tiltBubble from "@/../public/Map0036 3.png"
import dragon from "@/../public/dragon.png"
import emoji from "@/../public/emoji.png"
import man from "@/../public/man.png"
import pink from "@/../public/pink.png"
import flowers from "@/../public/flowers.png"
import tired from "@/../public/tired.png"

export default function Home() {
  return (
    <div className=' bg-black relative overflow-hidden h-auto'>
      <Image className="w-[1023px] hidden lg:block absolute z-10 h-[300.19px] origin-top-left opacity-100 " src={bubble} alt='bubble' />
      <div className='h-16 lg:hidden p-1 flex justify-between items-center'>
        <Image src={logo} alt="logo" className='h-14 w-14' />
        <div className='headerBorder px-4 py-2 text-white text-[16px] font-normal leading-6'>Explore apps</div>
      </div>
      <div className="flex flex-col relative justify-start md:flex-row">
        <div className='my-14 lg:mt-[203px] z-10 absolute lg:mb-[175px] px-4 lg:max-w-[619px] lg:pl-[116px] flex flex-col gap-4'>
          <div className='text-[#EB3A4A] text-xs font-medium uppercase leading-normal'>Lorem ipsum dolor</div>
          <div className='text-[48px] md:hidden font-normal leading-[48px] text-[#F0F0F0]'>Empowering players & fans</div>
          <div className='text-[64px] hidden md:block font-normal leading-[64px] text-[#F0F0F0]'>Game-changing infrastructure</div>
          <div className='text-[#CACACE] md:hidden text-sm font-light leading-5'>We’re a global team on a mission to build the next-generation of gaming, where players and fans experience ownership, and governance and are rewarded for their contributions.</div>
          <div className='text-[#CACACE] hidden md:block text-sm font-light leading-5'>A decentralised, non-custodial social graph, empowering players to take full ownership of their gaming identities and enabling developers to build next-gen applications. </div>
          <div className='bg-[#EB3A4A] px-4 my-[23px] py-2 max-w-[180px] rounded-lg text-[#E4E4E6] text-lg font-normal leading-6 text-center '>
            Join Discord
          </div>
        </div>
        <div className='my-[37px] ml-auto mt-[330px] lg:mt-0'>
          <Image src={illustration} alt='illustration' className="w-[870px] mx-auto h-[489px]" />
        </div>
      </div>
      <div className='flex mt-[78px] mx-auto items-center justify-center text-[#2B2B2B] text-xs font-light leading-normal flex-col gap-[3px]'>Scroll down
        <Image src={drop} alt="drop" className='w-[15px] h-[7.7px]' />
      </div>

      <div className='flex flex-col mx-auto pt-[120px] items-center  gap-6'>
        <div className='text-[#E4E4E7] px-1 text-center text-[44px] md:text-[64px] font-normal w-[428px] md:w-[760px] leading-[44px] md:leading-[64px] '>The value network of gaming</div>
        <div className='text-[#CACACE] text-center text-sm font-light leading-5 w-[358px] '>The fundamental protocol that allows anyone to create gaming applications built on top of player identities.</div>
      </div>
      <div className='flex-col flex md:flex-row gap-6 my-[56px] mx-4 md:mx-auto justify-center items-center'>
        <div className='flex flex-col p-6 rounded-[16px] border w-[387px] border-solid border-[#343434]'>
          <div className='text-[#E4E4E7] text-2xl font-normal leading-8'>Gaming social layer</div>
          <div className='text-[#CACACE] mt-4 text-sm font-light leading-5'>Gamers take control of their data.</div>
          <Image src={user} alt="user" className='w-[72px] h-[88px] mt-10'/>
        </div>
        <div className='flex flex-col p-6 rounded-[16px] border w-[387px] border-solid border-[#343434]'>
          <div className='text-[#E4E4E7] text-2xl font-normal leading-8'>Build next-gen fat dapps</div>
          <div className='text-[#CACACE] mt-4 text-sm font-light leading-5'>Plug any apps on top of the gaming social layer.</div>
          <Image src={star} alt="star" className='w-[88px] h-[88px] mt-10'/>
        </div>
      </div>
      <Image className="w-[1095.40px] h-[484.77px] absolute -right-20 -rotate-12 opacity-100 " src={tiltBubble} alt="bubble" />
      <div className='py-20 mx-4 gap-4 lg:gap-0 items-center lg:mx-auto  max-w-[1208px] flex justify-between flex-col lg:flex-row'>
        <div className='flex-col flex gap-8 lg:w-[387px]'>
          <div className='text-[40px] text-[#F0F0F0] text-center lg:text-left leading-[48px] font-normal'>The New Gaming Web</div>
          <div className='text-[#CACACE] tex-sm font-light text-center lg:text-left leading-5'>At the core of the XBorg Data Graph Protocol lies a dynamic and interconnected network of gaming profiles. Each player's profile is represented as a unique ERC-721 NFT, complete with metadata unique to their gaming journey.</div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col md:flex-row gap-6'>
            <div className='flex items-center p-[5px] w-[284px] text-zinc-800 gap-3 rounded-[55px] bg-zinc-950 text-[16px] font-normal leading-4 border border-solid border-zinc-500 backdrop-blur-[20px]'>
              <Image src={man} alt="img" className='w-[68px] h-[68px] rounded-full' />
              <div>MonkeyIslander872</div>
            </div>
            <div className='flex items-center p-[5px] w-[284px] text-zinc-800 gap-3 rounded-[55px] bg-zinc-950 text-[16px] font-normal leading-4 border border-solid border-zinc-500 backdrop-blur-[20px]'>
              <Image src={flowers} alt="img" className='w-[68px] h-[68px] rounded-full' />
              <div>mean_deal_</div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-6'>
            <div className='flex items-center p-[5px] w-[284px] text-zinc-800 gap-3 rounded-[55px] bg-zinc-950 text-[16px] font-normal leading-4 border border-solid border-zinc-500 backdrop-blur-[20px]'>
              <Image src={emoji} alt="img" className='w-[68px] h-[68px] rounded-full' />
              <div>TennisChallenger</div>
            </div>
            <div className='flex items-center p-[5px] w-[284px] text-zinc-800 gap-3 rounded-[55px] bg-zinc-950 text-[16px] font-normal leading-4 border border-solid border-zinc-500 backdrop-blur-[20px]'>
              <Image src={pink} alt="img" className='w-[68px] h-[68px] rounded-full' />
              <div>DoozieWoozie</div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-6'>
            <div className='flex items-center p-[5px] w-[284px] text-zinc-800 gap-3 rounded-[55px] bg-zinc-950 text-[16px] font-normal leading-4 border border-solid border-zinc-500 backdrop-blur-[20px]'>
              <Image src={tired} alt="img" className='w-[68px] h-[68px] rounded-full' />
              <div>tired0fbeIngWired</div>
            </div>
            <div className='flex items-center p-[5px] w-[284px] text-zinc-800 gap-3 rounded-[55px] bg-zinc-950 text-[16px] font-normal leading-4 border border-solid border-zinc-500 backdrop-blur-[20px]'>
              <Image src={dragon} alt="img" className='w-[68px] h-[68px] rounded-full' />
              <div>Greendragon_</div>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  )
}
