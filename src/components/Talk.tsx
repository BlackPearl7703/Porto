import Coffee from "./Coffee";
import { Contact } from "./Contact";

export const ContactForm = () => {
  return (
    <>
      <div className=" flex justify-evenly items-center  h-full w-full">
        <Coffee />
        <Contact />
      </div>
    </>
  );
};
