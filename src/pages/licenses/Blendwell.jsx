
import React from 'react'
import img1 from '../../assets/licenses/blendwell/bw1.jpg'
import img2 from '../../assets/licenses/blendwell/bw2.jpg'
import img3 from '../../assets/licenses/blendwell/bw3.jpg'
import img4 from '../../assets/licenses/blendwell/bw4.jpg'
import img5 from '../../assets/licenses/blendwell/bw5.jpg'
import img6 from '../../assets/licenses/blendwell/bw6.jpg'
import img7 from '../../assets/licenses/blendwell/bw7.jpg'
import img8 from '../../assets/licenses/blendwell/bw8.jpg'

const Blendwell = () => {
  return (
    <>
          <div className="min-h-screen bg-[#951049] text-white overflow-x-hidden mt-20 md:pb-20">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 pt-12 pb-8 text-center">
        {/* <div className="mb-6 animate-fade-in">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full mb-4">
            <span className="text-[#951049] font-bold text-sm tracking-widest">ROYAL SUPREME</span>
          </div>
        </div> */}
        <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4 tracking-wider uppercase animate-slide-down">
          
        </h1>
        <p className="text-xl md:text-3xl text-yellow-200 italic animate-slide-up font-serif">
          BLENDWELL BOTTLERS PVT.LTD Documents
        </p>
        <div className="mt-6 w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
      </header>

        <img src={img1} className='m-auto px-5' />
        <img src={img2} className='m-auto px-5' />
        <img src={img3} className='m-auto px-5' />
        <img src={img4} className='m-auto px-5' />
        <img src={img5} className='m-auto px-5' />
        <img src={img6} className='m-auto px-5' />
        <img src={img7} className='m-auto px-5' />
        <img src={img8} className='m-auto px-5' />
      </div>
    </>
  )
}

export default Blendwell