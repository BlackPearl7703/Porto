const HoverText = ({ text }: { text: string }) => {
  return (
    <div className="flex h-10 w-10 flex-col items-center justify-center cursor-pointer relative group">
      <div className="z-2 text-xl">
        {/* {text} */}
        <a href={`/${text.toLowerCase()}`}>{text}</a>
        <div className=" duration-400 mt-1 bottom-0 left-0 w-0 h-1 bg-gray-200 group-hover:w-full group-hover:ease-in-out group-hover:transition-all"></div>
      </div>
    </div>
  );
};

export default HoverText;
