import emailjs from "emailjs-com";

export function Contact() {
  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", e.target);
    console.log("Sending email...");

    emailjs
      .sendForm(
        "service_f1uc7jl",
        "template_lmnrgkr",
        e.target,
        "sy1Am56HSY47jWkLM"
      )
      .then(
        () => alert("Message sent!"),
        (error) => alert("Error: " + error.text)
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      className=" animate-float z-1 space-y-4 max-w-md  border-2 p-4
    shadow-lg rounded-lg backdrop-blur-md "
    >
      <h3 className="text-lg text-black font-semibold">Contact Me</h3>
      <input
        name="name"
        placeholder="Name"
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </form>
  );
}
