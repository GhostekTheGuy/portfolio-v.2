import Image from "next/image";
const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative m-8">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex lg:h-full lg:w-1/2 flex-col gap-8 lg:items-left justify-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Let's connect
        </h1>
        {/* DESC */}
        <p className="md:text-xl">
          Welcome to my digital canvas, where innovation and creativity converge. With a keen eye for aesthetics and a mastery of code, my portfolio showcases a diverse collection of projects that reflect my commitment to excellence.
        </p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <button className="p-4 rounded-lg ring-1 Oring-black bg-black text-white">View My Work</button>
          <button className="p-4 rounded-lg ring-1 □ring-black">Contact Me</button>
        </div>
      </div>
    </div>
  );
};
export default Homepage;