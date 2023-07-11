import React from 'react';

const TechUsed = () => (
  <section id="technologies" className="mt-6">
    <h3 className="px-4 text-lg font-bold uppercase text-neutral-700 font-poppin ">Technologies I use</h3>
    <div className="flex flex-col mt-8 space-y-6">
      <section>
        <h5 className="pb-2 mx-4 mb-4 text-lg font-medium border-b border-neutral-600/10 text-neutral-600/70">
          Development
        </h5>

        <div className="grid grid-cols-1 px-4 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2">
          {/*  */}
          <div className="bg-neutral-600/10 hover:bg-[#202020] text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden hover:bg-neutral-600/15 text-white">
            <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#2f74c0]/10">
              <i className="text-2xl bx bxl-typescript text-[#2f74c0]"></i>
            </div>
            <span className="flex-1 truncate text-neutral-500 ">Typescript</span>
          </div>
          {/*  */}
          <div className="bg-neutral-600/10 hover:bg-[#202020] text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden hover:bg-neutral-600/15 text-white">
            <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#41b883]/10">
              <i className="text-2xl bx bxl-vuejs text-[#41b883]"></i>
            </div>
            <span className="flex-1 truncate text-neutral-500 ">Vue</span>
          </div>
          {/*  */}
          <div className="bg-neutral-600/10 hover:bg-[#202020] text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden hover:bg-neutral-600/15 text-white">
            <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#61dafb]/10">
              <i className="text-2xl bx bxl-react text-[#61dafb]"></i>
            </div>
            <span className="flex-1 truncate text-neutral-500 ">React & Next</span>
          </div>
          {/*  */}
          {/*  */}
          <div className="bg-neutral-600/10 hover:bg-[#202020] text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden hover:bg-neutral-600/15 text-white">
            <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#4aafb4]/10">
              <i className="text-2xl bx bxl-tailwind-css text-[#4aafb4]"></i>
            </div>
            <span className="flex-1 truncate text-neutral-500 ">Tailwind Css</span>
          </div>
          {/*  */}
          {/*  */}
          <div className="bg-neutral-600/10 hover:bg-[#202020] text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden hover:bg-neutral-600/15 text-white">
            <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#5e8c52]/10">
              <i className="text-2xl bx bxl-nodejs text-[#5e8c52]"></i>
            </div>
            <span className="flex-1 truncate text-neutral-500 ">NodeJs</span>
          </div>
          {/*  */}
          {/*  */}
          <div className="bg-neutral-600/10 hover:bg-[#202020] text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden hover:bg-neutral-600/15 text-white">
            <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#dd4b25]/10">
              <i className="text-2xl bx bxl-html5 text-[#dd4b25]"></i>
            </div>
            <span className="flex-1 truncate text-neutral-500 ">HTML</span>
          </div>
          {/*  */}
          {/*  */}
          <div className="bg-neutral-600/10 hover:bg-[#202020] text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden hover:bg-neutral-600/15 text-white">
            <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#254bdd]/10">
              <i className="text-2xl bx bxl-css3 text-[#254bdd]"></i>
            </div>
            <span className="flex-1 truncate text-neutral-500 ">CSS</span>
          </div>
          {/*  */}
          {/*  */}
          <div className="bg-neutral-600/10 hover:bg-[#202020] text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden hover:bg-neutral-600/15 text-white">
            <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#419432]/10">
              <i className="text-2xl bx bxl-mongodb text-[#419432]"></i>
            </div>
            <span className="flex-1 truncate text-neutral-500 ">MongoDB</span>
          </div>
          {/*  */}
        </div>
      </section>

      <section>
        <h5 className="pb-2 mx-4 mb-4 text-lg font-medium border-b border-neutral-600/10 text-neutral-600/70">
          Environment
        </h5>
        <div className="grid grid-cols-1 px-4 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2">
          {/*  */}
          <div className="bg-neutral-600/10 hover:bg-[#202020] text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden hover:bg-neutral-600/15 text-white">
            <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#219de2]/10">
              <i className="text-2xl bx bxl-visual-studio text-[#219de2]"></i>
            </div>
            <span className="flex-1 truncate text-neutral-500 ">VS Code</span>
          </div>
          {/*  */}
          {/*  */}
          <div className="bg-neutral-600/10 hover:bg-[#202020] text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden hover:bg-neutral-600/15 text-white">
            <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#219de2]/10">
              <i className="text-2xl bx bxl-windows text-[#219de2]"></i>
            </div>
            <span className="flex-1 truncate text-neutral-500 ">Windows</span>
          </div>
          {/*  */}
          {/*  */}
          <div className="bg-neutral-600/10 hover:bg-[#202020] text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden hover:bg-neutral-600/15 text-white">
            <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#ffff]/10">
              <i className="text-2xl bx bxl-tux text-[#ffff]"></i>
            </div>
            <span className="flex-1 truncate text-neutral-500 ">Linux</span>
          </div>
          {/*  */}
        </div>
      </section>
      {/*  */}
      <section>
        <h5 className="pb-2 mx-4 mb-4 text-lg font-medium border-b border-neutral-600/10 text-neutral-600/70">
          Services
        </h5>
        <div className="grid grid-cols-1 px-4 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2">
          {/*  */}
          <div className="bg-neutral-600/10 hover:bg-[#202020] text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden hover:bg-neutral-600/15 text-white">
            <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#2d2d2d]">
              <i className="text-2xl bx bxl-github text-[#ffff]"></i>
            </div>
            <span className="flex-1 truncate text-neutral-500 ">Github</span>
          </div>
          {/*  */}
          {/*  */}
          <div className="bg-neutral-600/10 hover:bg-[#202020] text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden hover:bg-neutral-600/15 text-white">
            <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#fcca3f]/10">
              <i className="text-2xl bx bxl-firebase text-[#fcca3f]"></i>
            </div>
            <span className="flex-1 truncate text-neutral-500 ">Firebase</span>
          </div>
          {/*  */}
          {/*  */}
          <div className="bg-neutral-600/10 hover:bg-[#202020] text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden hover:bg-neutral-600/15 text-white">
            <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#31b9bc]/10">
              <i className="text-2xl bx bxl-netlify text-[#31b9bc]"></i>
            </div>
            <span className="flex-1 truncate text-neutral-500 ">Netlify</span>
          </div>
          {/*  */}
          {/*  */}
          <div className="bg-neutral-600/10 hover:bg-[#202020] text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden hover:bg-neutral-600/15 text-white">
            <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#ffffff]/10">
              <i className="text-2xl bx bxs-up-arrow text-[#ffffff]"></i>
            </div>
            <span className="flex-1 truncate text-neutral-500 ">Vercel</span>
          </div>
          {/*  */}
          {/*  */}
          <div className="bg-neutral-600/10 hover:bg-[#202020] text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden hover:bg-neutral-600/15 text-white">
            <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#ffffff]/10">
              <i className="text-2xl bx bxl-aws text-[#ffffff]"></i>
            </div>
            <span className="flex-1 truncate text-neutral-500 ">AWS</span>
          </div>
          {/*  */}
        </div>
      </section>
    </div>
  </section>
);

export default TechUsed;
