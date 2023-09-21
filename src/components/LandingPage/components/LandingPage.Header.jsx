import Link from "next/link";

export const Header = () => {
  return (
    <div className="m-6 flex justify-between items-center">
      <div className="font-bold text-orange-500 tracking-tighter">
        EventMaker
      </div>
      <div className="relative">
        <input 
        type="search" 
        id="default-search" 
        className=" w-[500px] p-4 pl-10 text-sm text-gray-900 border border-none rounded-lg bg-[rgb(229,224,221)] focus:outline-none" 
        placeholder="Search Events..." />
        
        <button 
        type="submit" 
        className="absolute h-full text-white w-[60px] right-0 bg-orange-500 hover:bg-orange-300 focus:outline-none font-medium rounded-r-lg text-sm px-4 py-2"
        >
        
        <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke-width="1.5" 
        stroke="currentColor" 
        class="w-6 h-6">
            <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        </button>
      </div>

      <div 
        className="flex justify-center items-center gap-2  bg-white text-[rgb(146,143,142)] w-[180px] h-[50px] rounded-full">
        
        <Link 
          href="/login" 
          className="hover:bg-orange-500 hover:text-white rounded-full p-3">
            Log In
        </Link>
        
        <Link 
          href="/register" 
          className="hover:bg-orange-500 hover:text-white rounded-full p-3">
          Sign Up
        </Link>
      </div>
    </div>
  );
};
