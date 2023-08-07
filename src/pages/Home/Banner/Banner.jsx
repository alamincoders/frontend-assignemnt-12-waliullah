import './Bannar.css';

const Banner = () => {
  return (
    <div className="carousel my-2 h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={'https://img.freepik.com/free-vector/silhouette-party-crowd-bokeh-lights-background_1048-17845.jpg?w=826&t=st=1690981485~exp=1690982085~hmac=76de6891d12c93e2f7b3c15b91c192d3f2c13cfa20ecbf1b08c031e6857bf2a1'} className="w-full rounded-xl" />
        <div className="absolute flex items-center rounded-xl h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white  text-center mx-auto space-y-7 pl-12 w-[80%]">
            <h2 className="font-bold text-6xl">"Dance in Harmony: Unleash Your Rhythm and Grace!"</h2>
            <p className='w-3/4 mx-auto'>
              "Experience the Joy of Dance with Grace: Embrace the Enchanting Magic of Rhythm, Unleash Your Inner Dance Legend, and Join Our Vibrant Global Dance Community Today!"
            </p>
            <div>
              <button className="btn btn-active px-6 text-slate-200 hover:text-black mr-5 bg-transparent ">Learn More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={'https://img.freepik.com/premium-vector/abstract-banner-design-with-silhouettes-people-dancing_1048-16229.jpg?w=1060'} className="w-full rounded-xl" />
        <div className="absolute flex items-center rounded-xl  h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white text-center mx-auto space-y-7 pl-12 w-[80%]">
            <h2 className="font-bold text-6xl">"Dance in Harmony: Unleash Your Rhythm and Grace!"</h2>
            <p className='w-3/4 mx-auto'>
              "Experience the Joy of Dance with Grace: Embrace the Enchanting Magic of Rhythm, Unleash Your Inner Dance Legend, and Join Our Vibrant Global Dance Community Today!"
            </p>
            <div>
              <button className="btn btn-active text-slate-200 hover:text-black px-6 mr-5 bg-transparent">Learn More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={'https://img.freepik.com/free-vector/silhouettes-people-dancing-abstract-lights-background_1048-5893.jpg?w=740&t=st=1690983327~exp=1690983927~hmac=923beef6c9973e071f1caf2af149ba784326ee3287316b3995669264ea440125'} className="w-full rounded-xl" />
        <div className="absolute flex items-center rounded-xl h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white  text-center mx-auto space-y-7 pl-12 w-[80%]">
            <h2 className="font-bold text-6xl">"Dance in Harmony: Unleash Your Rhythm and Grace!"</h2>
            <p className='w-3/4 mx-auto'>
              "Experience the Joy of Dance with Grace: Embrace the Enchanting Magic of Rhythm, Unleash Your Inner Dance Legend, and Join Our Vibrant Global Dance Community Today!"
            </p>
            <div>
              <button className="btn btn-active px-6 text-slate-200 hover:text-black mr-5 bg-transparent">Learn More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
