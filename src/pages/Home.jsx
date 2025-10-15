import React from 'react';
import { Wine, Award, Shield, ChevronDown } from 'lucide-react';


import legacy from '../assets/legacy.jpg'
import night from '../assets/Night2.jpg'
import imperialUltra1 from '../assets/imperialUltra1.png'
import queen from '../assets/queen1.png'

const LiquorHomepage = () => {
  // const products = [
  //   {
  //     name: "Reserve Whiskey",
  //     description: "Aged 12 years in oak barrels for a smooth, refined taste",
  //     image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&h=600&fit=crop",
  //     badge: "Premium"
  //   },
  //   {
  //     name: "Platinum Vodka",
  //     description: "Crystal clear, distilled five times for ultimate purity",
  //     image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=600&fit=crop",
  //     badge: "Top Rated"
  //   },
  //   {
  //     name: "Gold Rum",
  //     description: "Caribbean blend with notes of vanilla and caramel",
  //     image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=600&fit=crop",
  //     badge: "Limited"
  //   },
  //   {
  //     name: "Heritage Gin",
  //     description: "Botanical infusion with juniper and citrus notes",
  //     image: "https://images.unsplash.com/photo-1581006706150-a8a7686aa792?w=400&h=600&fit=crop",
  //     badge: "Craft"
  //   }
  // ];
  const products = [
    {
      id: 1,
      name: "Night Hub",
      subtitle: "Premium Scotch Whisky",
      tagline: "When Nights Deserve a Legacy.",
      description: "Night Hub Scotch Whisky is bold, smooth, and unforgettable — crafted for those who make the night their stage. With a refined blend of flavors, it delivers the perfect balance of strength and sophistication.",
      image: night,
      color: "from-amber-900 to-amber-950"
    },
    {
      id: 2,
      name: "Royal Legacy",
      subtitle: "Single Malt Scotch Whisky",
      tagline: "One Malt. A Thousand Stories.",
      description: "Royal Legacy is our crown jewel — a premium single malt Scotch whisky crafted with time, tradition, and expertise. Every sip reflects heritage, making it perfect for true connoisseurs.",
      image: legacy,
      color: "from-yellow-700 to-yellow-900"
    },
    {
      id: 3,
      name: "Imperial Ultra",
      subtitle: "Premium Whisky",
      tagline: "Raise the Bar. Every Time.",
      description: "Imperial Ultra is a whisky designed for those who celebrate in style. With a full-bodied profile and ultra-smooth finish, it embodies the perfect blend of tradition and modern refinement.",
      image: imperialUltra1,
      color: "from-amber-800 to-amber-950"
    },
    {
      id: 4,
      name: "Queen Special",
      subtitle: "Scotch Whisky",
      tagline: "The Elegance of Power.",
      description: "Queen Special is a premium scotch whisky that balances grace with boldness. Smooth, flavorful, and refined — it's a whisky crafted for those who live with charm and lead with elegance.",
      image: queen,
      color: "from-rose-800 to-rose-950"
    }
  ];
  return (
    <div className="bg-[#951049] min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1920&h=1080&fit=crop"
            alt="Hero Banner"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#951049]/80 via-[#951049]/60 to-[#951049]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* <div className="mb-8">
            <Wine className="w-20 h-20 mx-auto text-[#FFD700] mb-6" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-[#FFD700] mb-6 tracking-wider uppercase">
            Royal
          </h1> */}
          <p className="text-3xl md:text-4xl text-white mb-8 font-serif italic">
            Where Tradition Meets Excellence
          </p>
          <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto">
            Crafting the finest spirits. Each bottle tells a story of passion, precision, and timeless quality.
          </p>
          <button className="bg-[#FFD700] text-[#951049] px-10 py-4 rounded-full font-bold text-lg uppercase tracking-wide hover:bg-[#FFC700] transition-all transform hover:scale-105">
            Explore Collection
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#FFD700]" />
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#951049] to-[#7a0d3b]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#FFD700] mb-4 uppercase tracking-wider">
              Our Collection
            </h2>
            <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Discover our carefully curated selection of premium spirits, each crafted with uncompromising quality and heritage.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {products.map((product, index) => (
              <div 
                key={index}
                className="group relative bg-[#6b0d37] rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-[#FFD700]/20"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10 bg-[#FFD700] text-[#951049] px-3 py-1 rounded-full text-xs font-bold uppercase">
                  {product.badge}
                </div>

                {/* Product Image */}
                <div className="h-80 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6b0d37] to-transparent"></div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#FFD700] mb-3 uppercase tracking-wide">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {product.description}
                  </p>
                  <button className="w-full bg-transparent border-2 border-[#FFD700] text-[#FFD700] py-2 rounded-full font-semibold hover:bg-[#FFD700] hover:text-[#951049] transition-all uppercase tracking-wide">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="text-center mt-12">
            <button 
              onClick={() => window.location.href = '/products'}
              className="bg-[#FFD700] text-[#951049] px-12 py-4 rounded-full font-bold text-lg uppercase tracking-wide hover:bg-[#FFC700] transition-all transform hover:scale-105 shadow-xl hover:shadow-[#FFD700]/30"
            >
              Show More Products
            </button>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center p-8 bg-[#6b0d37]/50 rounded-lg backdrop-blur-sm">
              <Award className="w-16 h-16 text-[#FFD700] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#FFD700] mb-2 uppercase">Award Winning</h3>
              <p className="text-gray-300"> Recognized for excellence and quality</p>
            </div>
            <div className="text-center p-8 bg-[#6b0d37]/50 rounded-lg backdrop-blur-sm">
              <Shield className="w-16 h-16 text-[#FFD700] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#FFD700] mb-2 uppercase">Heritage Craft</h3>
              <p className="text-gray-300"> Years of distilling tradition and expertise</p>
            </div>
            <div className="text-center p-8 bg-[#6b0d37]/50 rounded-lg backdrop-blur-sm">
              <Wine className="w-16 h-16 text-[#FFD700] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#FFD700] mb-2 uppercase">Pure Quality</h3>
              <p className="text-gray-300">Only the finest ingredients and aging processes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiquorHomepage;