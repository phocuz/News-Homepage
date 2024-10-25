import image1 from "../assets/image-web-3-desktop.jpg";
import mobileimg from "../assets/image-web-3-mobile.jpg";

function MainContent() {
  return (
    <div className="container mx-auto px-6 py-0">
      {/* Image Section */}
      <div className="mb-8">
        <picture>
          <source media="(min-width: 768px)" srcSet={image1} />
          <img
            src={mobileimg}
            alt="Colorful 3D shapes"
            className="w-full h-auto rounded-lg"
          />
        </picture>
      </div>

      {/* Text and Content Section */}
      <div className="md:flex md:space-x-10 flex-col  md:flex-row m-auto justify-center">
        {/* Heading */}
        <h2 className="text-6xl font-bold md:text-6xl leading-tight">
          The Bright <br /> Future of  Web 3.0?
        </h2>

        {/* Description and Button */}
        <div className="mt-6 md:mt-0 md:w-1/2">
          <p className="text-gray-600 mb-6 text-lg md:text-xl text-">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-gray-900 transition duration-300">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
