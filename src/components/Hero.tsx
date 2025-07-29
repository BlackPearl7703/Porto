import { DecryptedText } from "./DecryptedText";
import "./hero.css";

const Hero = () => {
  return (
    <div className=" h-screen w-full flex text-black justify-center items-center gap-9 ">
      <div className="border-2 border-white rounded-full  animate-float">
        <img
          className="h-60 rounded-full "
          src="./src/assets/image.png"
          alt="Hero"
        />
      </div>

      <div className="flex flex-col  gap-2 z-10 min-w-3/8  justify-center items-center">
        <div className="text-white text-5xl  ">
          <p>
            My name is{" "}
            <span className=" text-[#f5f5f4] bg-red-500 px-2 py-1 italic font-extrabold">
              <DecryptedText
                text="Prince."
                speed={100}
                animateOn="view"
                maxIterations={20}
                characters="ABCD1234!?@#$%^&*"
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
              />
            </span>
            
          </p>
          {/* <p>Full Stack Developer</p> */}
          <DecryptedText
            text="Full Stack Developer"
            speed={100}
            animateOn="view"
            maxIterations={20}
            characters="ABCD1234!?@#$%^&*"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </div>

        <div className="text-[#e7e5e4] text-2xl">
          <p>Interested in problem solving</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
