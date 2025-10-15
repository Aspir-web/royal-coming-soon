import React, { useState } from 'react';
import night from '../assets/Night2.jpg'
import imperialUltra from '../assets/Imperial Ultra.jpg'
import imperialUltra1 from '../assets/imperialUltra1.png'
import queen from '../assets/queen1.png'
import lemon from '../assets/lemon.png'
import vodka from '../assets/vodka.png'
import xxrum from '../assets/rum.jpg'
import beer from '../assets/beer.png'
import legacy from '../assets/legacy.jpg'

export default function RoyalSupremeProducts() {
  const [hoveredCard, setHoveredCard] = useState(null);

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
    },
    {
      id: 5,
      name: "Royal XX Rum",
      subtitle: "Premium Rum",
      tagline: "Two Letters. Endless Warmth.",
      description: "Royal XX Rum is strong, spirited, and timeless. Known for its warmth and depth, this premium rum is perfect for traditional gatherings and evenings that call for rich flavor.",
      image: xxrum,
      color: "from-orange-900 to-orange-950"
    },
    {
      id: 6,
      name: "Royal Supreme Vodka",
      subtitle: "Triple Distilled Vodka",
      tagline: "Crystal Clear. Boldly Smooth.",
      description: "Our premium vodka is triple-distilled for absolute clarity and purity. Smooth yet bold, it's versatile enough for classic cocktails and strong enough to stand tall on its own.",
      image: vodka,
      color: "from-slate-700 to-slate-900"
    },
    {
      id: 7,
      name: "White Lemon Royal Rum",
      subtitle: "Premium White Rum",
      tagline: "The Spirit of Fresh Freedom.",
      description: "Light, crisp, and refreshing — White Lemon Royal Rum brings zest to every occasion. Perfect for cocktails and tropical mixes, it's a choice for free-spirited souls.",
      image: lemon,
      color: "from-lime-700 to-lime-900"
    },
    {
      id: 8,
      name: "Royal Extra Strong Beer",
      subtitle: "Bold Brew",
      tagline: "The King of Bold Brews.",
      description: "Strong, fearless, and full of character — Royal Extra Strong Beer is brewed for those who live larger than life. With its bold taste and unmatched energy, it's a statement.",
      image: beer,
      color: "from-yellow-600 to-yellow-800"
    }
  ];

  return (
    <div className="min-h-screen bg-[#951049] text-white overflow-x-hidden mt-20">
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
          Our Products
        </h1>
        <p className="text-xl md:text-2xl text-yellow-200 italic animate-slide-up font-serif">
          Crafted to Crown Moments
        </p>
        <div className="mt-6 w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
      </header>

      {/* Products Grid */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
               {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-[#951049]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle bottom gradient only */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div> */}
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-yellow-300 uppercase tracking-wider">
                      {product.subtitle}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-yellow-400 mb-3 tracking-wide group-hover:text-yellow-300 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <div className="relative overflow-hidden mb-3">
                    <p className="text-sm text-yellow-100/90 italic font-serif leading-relaxed">
                      "{product.tagline}"
                    </p>
                  </div>

                  <div className="relative overflow-hidden">
                    <p className="text-sm text-white/80 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Decorative Bottom Line */}
                  <div className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>

                {/* Corner Accent */}
                {/* <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-yellow-400/30 to-transparent"></div> */}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-12 mt-12 border-t border-white/10">
        <p className="text-yellow-200/80 font-serif italic">
          Every product is more than a drink — it's an experience
        </p>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-slide-down {
          animation: slideDown 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
}