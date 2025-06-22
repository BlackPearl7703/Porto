export function Coffee() {
    const handleQrClick = () => {
        // Logic to show QR code can be implemented here
        // alert("QR Code functionality is not implemented yet.");
        // add logic for showing image when clicked
        const qrImage = document.querySelector(".qr-code");
        if (qrImage) {
            qrImage.classList.toggle("hidden");
        }
    };
  return (
    // buy me a coffee section
    <div className=" animate-float bg-transparent  text-black p-4 rounded-lg border-2 border-white shadow-lg max-w-md ">
      <h2 className="text-2xl font-bold mb-4">Ek Chai ho Jaaye</h2>
      <p className="mb-4">
       {/* want to meet me on chai pe charcha? */}
       Want to meet me on chai pe charcha?
      </p>
      <a
        // href="https://www.buymeacoffee.com/yourusername"
        target="_blank"
        // show qr on click
        onClick={handleQrClick}
        rel="noopener noreferrer"
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
      >
        Proceed 
      </a>
      {/* <div className="qr-code flex flex-col space-y-2" >
      <img src="./src/assets/image.png" alt="QR Code" className="mt-4 mx-auto h-20 " />
  <input
        name="email"
        placeholder="put your email here for further updates"
        className="w-full p-2 text-white rounded border-2 border-white"
        required
      />
      </div> */}
      <div className="qr-code hidden text-center space-y-4 mt-8">
  <h2 className="text-xl font-bold">Buy Me a Coffee ☕</h2>
  <img src="./src/assets/qrcode.jpeg" alt="UPI QR Code" className="w-48 mx-auto border rounded" />
  <p className="text-gray-600">or click below to pay via UPI app</p>
  <a
    href="upi://pay?pa=princekoshti7703@oksbi&pn=princeKoshti&am=50&cu=INR&tn=See+You+Soon!"
    className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
  >
    Pay ₹50 via UPI
  </a>
  {/* upi://pay?pa=princekoshti7703@oksbi&pn=princeKoshti&am=50&cu=INR&tn=Thanks+for+the+coffee!
 */}
</div>

     
    </div>
  );
};

export default Coffee;
