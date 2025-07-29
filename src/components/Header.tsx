import HoverText from "./HoverText";

const Header = () => {
  return (
    <>
    
    {/* bg-linear-to-r from-gray-300 via-gray-500 to-gray-700 */}
      <div className="
      bg-black z-25
       text-white px-8 py-2 flex justify-between items-center shadow-md
      border-2 rounded-full absolute w-full ">
        {/* logo */}
        <div>
          <span className="text-3xl font-bold select-none ">BlackPearl</span>
        </div>
        {/* navigation */}
        <div>
          <nav className="mt-2 flex flex-row gap-4 justify-center items-center">
            <ul className="flex flex-row space-x-18">
              <li>{<HoverText text="Home" />}</li>
              <li>{<HoverText text="Education" />}</li>
              <li>{<HoverText text="Experience" />}</li>
              <li>{<HoverText text="Expertise" />}</li>
              <li>{<HoverText text="Projects" />}</li>
              {/* <li>{<HoverText text="Talk" />}</li> */}
            </ul>
          </nav>
        </div>
        {/* lets talk */}
        <div>
          <button onClick={() => window.location.href='/talk'}
           className="bg-white text-red-400 px-4 py-2 rounded hover:bg-gray-200">
            Let's Talk
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;


