import logo from './assets/logo.png';
import frame from './assets/Frame 1.png';
import './App.css';


function App() {
  return (
    <div className="App min-h-screen">
      {/* class header */}
      <header className="max-w-screen-xl px-24 mx-auto py-7 my-0.5">
        <nav className="grid grid-flow-col grid-cols-12 gap-7 items-center">
          <img src={logo} alt="logo calorilin" className="col-span-3" />
          <ul className="mx-2 col-span-6 col-start-4 flex justify-between text-black">
            <li className="text-primary cursor-pointer pb-3 border-b-2 border-primary hover:border-primary">Beranda</li>
            <li className="text-primary cursor-pointer pb-3 border-b-2 border-white hover:border-primary">Tentang</li>
            <li className="text-primary cursor-pointer pb-3 border-b-2 border-white hover:border-primary">Fitur</li>
            <li className="text-primary cursor-pointer pb-3 border-b-2 border-white hover:border-primary">Pengembang</li>
            <li className="text-primary cursor-pointer pb-3 border-b-2 border-white hover:border-primary">Kontak</li>
          </ul>
          <div className="col-span-3 col-start-10 flex">
            <button className="py-3 rounded-lg text-center capitalize bg-primary text-white ml-12 flex-grow">Unduh Aplikasi</button>
          </div>
        </nav>

        {/* class beranda */}
        <div className="grid grid-flow-col grid-cols-12 gap-12 my-24 py-1">
          <div className="flex flex-col my-3 py-20 col-span-5 text-left">
            <h1 className="font-semibold text-secondary text-7xl ">Calorilin</h1>
            <h2 className="font-medium text-primary text-3xl mt-2 leading-snug">Awali harimu dengan pola hidup sehat</h2>
            <p className="font-light text-primary text-lg mt-2">Calorilin membantu dalam perencaan jadwal makan, hitung kalori makanan, dan memberikan resep makanan sehat</p>
            <div className="flex mt-4">
              <button className="bg-primary py-3 rounded-lg px-14 capitalize text-white">unduh Aplikasi</button>
              <button className="ml-10 rounded-full border border-primary flex justify-center items-center p-3">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                <path 
                  d="M12 0.75V23.25" 
                  stroke="#19191B" 
                  stroke-width="1.5"
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                />
                <path 
                  d="M1.5 12.75L12 23.25L22.5 12.75" 
                  stroke="#19191B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /> 
                </svg>
              </button>
            </div>
          </div>

          <div className="relative col-span-5 col-start-9 ">
            <img src={frame} alt="Frame PNG" />
          </div>
        </div>

        {/* class tentang kami */}
          <h2 className="">Tentang</h2>

      </header>
    </div>
  );
}

export default App;
