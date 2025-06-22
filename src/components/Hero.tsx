import './hero.css'
const Hero = () => {
  return (
   <div className="w-screen h-screen  flex text-black justify-center items-center gap-9 ">

 <div className="border-2 border-white rounded-full p-4 animate-float">
  <img className="h-60 rounded-full" src="./src/assets/image.png" alt="Hero" />
</div>



    <div className="flex flex-col gap-2">

<div className="text-white text-5xl" >
    <p>My name is <span className=' text-black italic font-extrabold'>Prince</span>.</p>
    <p>Software Development Engineer</p>
</div>

<div className="text-black text-2xl">
    <p>Interested in problem solving</p>
</div>
    </div>
 


   </div>
  );
};

export default Hero;
