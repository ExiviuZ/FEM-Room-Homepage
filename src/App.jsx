import { useState } from "react";
import { useWindowSize } from "react-use";
import Navbar from "./components/Navbar";

const data = [
  {
    title: "Discover innovative ways to decorate",
    description: `We provide unmatched quality, comfort, and style for property owners
  across the country. Our experts combine form and function in
  bringing your vision to life. Create a room in your own style with
  our collection and make your property a reflection of you and what
  you love.`,
    "mobile-img": "images/mobile-image-hero-1.jpg",
    "desktop-img": "images/desktop-image-hero-1.jpg",
  },
  {
    title: "We are available all across the globe",
    description: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.`,
    "mobile-img": "images/mobile-image-hero-2.jpg",
    "desktop-img": "images/desktop-image-hero-2.jpg",
  },
  {
    title: "Manufactured with the best materials",
    description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`,
    "mobile-img": "images/mobile-image-hero-3.jpg",
    "desktop-img": "images/desktop-image-hero-3.jpg",
  },
];

function App() {
  const { width: windowWidth } = useWindowSize();

  console.log(windowWidth);

  const [active, setActive] = useState(0);

  const handleDecrease = () => {
    setActive((prevNumber) => (prevNumber === 0 ? 2 : prevNumber - 1));
  };

  const handleIncrease = () => {
    setActive((prevNumber) => (prevNumber === 2 ? 0 : prevNumber + 1));
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      setActive((prevNumber) => (prevNumber === 0 ? 2 : prevNumber - 1));
      // Perform your actions here
    } else if (event.key === "ArrowRight") {
      setActive((prevNumber) => (prevNumber === 2 ? 0 : prevNumber + 1));
      // Perform your actions here
    }
  };

  return (
    <div
      className="min-h-[100vh] relative outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <Navbar />
      <main className="z-[0]">
        <div className="lg:grid md:grid-cols-12">
          <div className="relative col-span-7">
            <img
              src={
                windowWidth < 640
                  ? data[active]["mobile-img"]
                  : data[active]["desktop-img"]
              }
              className="w-[100%] h-[100%] object-cover"
              alt=""
            />
            <div className="absolute bottom-0 right-0 bg-black flex w-[127px] h-[50px] lg:right-[-127px]">
              <button
                onClick={handleDecrease}
                className="block hover:bg-app-very-dark-gray transition-colors flex-grow-[1]"
              >
                <img
                  width={"10px"}
                  className="mx-auto"
                  src="images/icon-angle-left.svg"
                  alt=""
                />
              </button>
              <button
                onClick={handleIncrease}
                className="block hover:bg-app-very-dark-gray transition-colors flex-grow-[1]"
              >
                <img
                  width={"10px"}
                  className="mx-auto"
                  src="images/icon-angle-right.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="p-[2rem] lg:px-desktop-x md:py-[4rem] lg:py-[4rem] col-span-5 md:flex md:flex-col justify-center">
            <h1 className="text-[2.2rem] font-[700] leading-[1] mb-[1rem] lg:text-[3rem] ">
              {data[active].title}
            </h1>
            <p className="text-app-dark-gray mb-[1rem]">
              {data[active].description}
            </p>
            <a
              href="#"
              className="uppercase tracking-[10px] hover:text-app-very-dark-gray transition-colors font-[700]"
            >
              Shop now{" "}
              <img
                src="images/icon-arrow.svg"
                className="inline-block "
                alt=""
              />
            </a>
          </div>
        </div>

        <section className="md:grid grid-cols-bottom-gallery">
          <img
            src="images/image-about-dark.jpg"
            className="w-[100%] h-[100%]  object-cover"
            alt=""
          />
          <div className="p-[2rem] md:flex flex-col justify-center">
            <h2 className="uppercase font-[600] tracking-[4px] mb-[1rem]">
              About our Furniture
            </h2>
            <p className="text-app-dark-gray ">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
          <img
            src="images/image-about-light.jpg"
            className="w-[100%] h-[100%]  object-cover"
            alt=""
          />
        </section>
      </main>
    </div>
  );
}

export default App;
