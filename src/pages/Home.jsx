import React from 'react';
import { Wine, Award, Shield, ChevronDown } from 'lucide-react';

import legacy from '../assets/legacy.jpg'
import night from '../assets/Night2.jpg'
import imperialUltra1 from '../assets/imperialUltra1.png'
import imperialUltra from '../assets/imperial Ultra.jpg'
import queen from '../assets/queen1.png'
import beer from '../assets/beer.png'
import { useNavigate } from 'react-router';

const LiquorHomepage = () => {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1920&h=1080&fit=crop",
      title: "Where Tradition Meets Excellence",
      subtitle: "Crafting the finest spirits since 2018"
    },
    {
      image: night,
      title: "Night Hub Scotch Whisky",
      subtitle: "When Nights Deserve a Legacy"
    },
    {
      image: beer,
      title: "Bold Brew",
      subtitle: "The King of Bold Brews."
    },
    {
      image: imperialUltra,
      title: "Imperial Ultra Whisky",
      subtitle: "Raise the Bar. Every Time"
    },
    // {
    //   image: queen,
    //   title: "Queen Special Scotch",
    //   subtitle: "The Elegance of Power"
    // }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
    <div className="bg-[#951049] min-h-screen mt-20">
      {/* Hero Slider Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Slider Images */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#95104a5f]"></div>
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <Wine className="w-20 h-20 mx-auto text-[#FFD700] mb-6" />
          </div>
          <p className="text-3xl md:text-5xl text-white mb-8 font-serif italic">
            {heroSlides[currentSlide].title}
          </p>
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            {heroSlides[currentSlide].subtitle}
          </p>
          {/* <button className="bg-[#FFD700] text-[#951049] px-10 py-4 rounded-full font-bold text-lg uppercase tracking-wide hover:bg-[#FFC700] transition-all transform hover:scale-105">
            Explore Collection
          </button> */}
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-[#FFD700] w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#FFD700]" />
        </div>
      </section>

      {/* About Us Section - Creative Timeline */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#7a0d3b] to-[#951049] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#FFD700] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD700] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#FFD700] mb-4 uppercase tracking-wider">
              Our Legacy
            </h2>
            <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-6"></div>
            <p className="text-2xl md:text-3xl text-white font-serif italic mb-4">
              Crafting Spirits. Building Legacies. Inspiring Celebrations.
            </p>
          </div>

          {/* Story Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left: Story */}
            <div className="space-y-6">
              <div className="bg-[#6b0d37]/40 backdrop-blur-sm p-8 rounded-2xl border border-[#FFD700]/20">
                <h3 className="text-3xl font-bold text-[#FFD700] mb-4">The Beginning</h3>
                <p className="text-gray-200 leading-relaxed text-lg">
                  Established in <span className="text-[#FFD700] font-bold">2018</span> and coming into full-scale operations in <span className="text-[#FFD700] font-bold">2021</span>, Royal Supreme Distillery & Beverage Company has quickly emerged as one of the fastest-growing names in India's premium alcoholic beverage industry.
                </p>
              </div>

              <div className="bg-[#6b0d37]/40 backdrop-blur-sm p-8 rounded-2xl border border-[#FFD700]/20">
                <h3 className="text-3xl font-bold text-[#FFD700] mb-4">The Visionaries</h3>
                <p className="text-gray-200 leading-relaxed text-lg mb-4">
                  Founded by visionary entrepreneur <span className="text-[#FFD700] font-bold">Mr. Amit Kumar</span>, whose leadership and passion for quality have been the cornerstone of our success. Today, he is joined by <span className="text-[#FFD700] font-bold">Mr. Shubham Kumar</span>, who brings fresh energy and strategic innovation to carry the legacy forward.
                </p>
              </div>

              <div className="bg-[#6b0d37]/40 backdrop-blur-sm p-8 rounded-2xl border border-[#FFD700]/20">
                <h3 className="text-3xl font-bold text-[#FFD700] mb-4">Our Philosophy</h3>
                <p className="text-gray-200 leading-relaxed text-lg">
                  At Royal Supreme, we believe every bottle tells a story. Each product is crafted to perfection, blended with tradition, and refined with modern innovation. We stand for consistency, authenticity, and a promise of unparalleled taste.
                </p>
              </div>
            </div>

            {/* Right: Stats & Highlights */}
            <div className="space-y-6">
              {/* Map/Presence Card */}
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] p-8 rounded-2xl text-[#951049] shadow-2xl">
                <h3 className="text-3xl font-bold mb-6">Our Presence</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">Current Operations</span>
                    <span className="text-4xl font-bold">4</span>
                  </div>
                  <div className="text-sm">
                    <p className="font-bold mb-2">States:</p>
                    <div className="flex flex-wrap gap-2">
                      {['Uttarakhand', 'Uttar Pradesh', 'Punjab', 'Haryana'].map((state) => (
                        <span key={state} className="bg-[#951049] text-[#FFD700] px-3 py-1 rounded-full text-xs font-bold">
                          {state}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t-2 border-[#951049]/30">
                    <p className="font-bold text-sm">Expanding to:</p>
                    <span className="inline-block mt-2 bg-[#951049] text-[#FFD700] px-4 py-2 rounded-full font-bold">
                      Rajasthan - Coming Soon
                    </span>
                  </div>
                </div>
              </div>

              {/* Headquarters */}
              <div className="bg-[#6b0d37]/40 backdrop-blur-sm p-8 rounded-2xl border border-[#FFD700]/20">
                <div className="flex items-start gap-4">
                  <Shield className="w-12 h-12 text-[#FFD700] flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-[#FFD700] mb-2">Headquarters</h4>
                    <p className="text-gray-200 text-lg">Dehradun, Uttarakhand</p>
                    <p className="text-gray-400 text-sm mt-2">Where tradition meets innovation</p>
                  </div>
                </div>
              </div>

              {/* Product Range Highlight */}
              <div className="bg-[#6b0d37]/40 backdrop-blur-sm p-8 rounded-2xl border border-[#FFD700]/20">
                <div className="flex items-start gap-4">
                  <Wine className="w-12 h-12 text-[#FFD700] flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-[#FFD700] mb-2">Product Portfolio</h4>
                    <p className="text-gray-200">Whisky • Rum • Vodka • Beer</p>
                    <p className="text-gray-400 text-sm mt-2">Every product crafted to crown moments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us - Cards */}
          <div className="mt-20">
            <h3 className="text-4xl font-bold text-center text-[#FFD700] mb-12 uppercase">
              Why Royal Supreme?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { icon: Award, title: "Trusted Vision", desc: "Founded by seasoned entrepreneurs" },
                { icon: Shield, title: "Premium Quality", desc: "State-of-the-art manufacturing" },
                { icon: Wine, title: "Diverse Range", desc: "Catering to every palate" },
                { icon: Award, title: "Strong Presence", desc: "Across North India" },
                { icon: Shield, title: "Luxury Brand", desc: "Symbolizing celebration" }
              ].map((item, index) => (
                <div key={index} className="bg-[#6b0d37]/40 backdrop-blur-sm p-6 rounded-xl border border-[#FFD700]/20 text-center hover:bg-[#6b0d37]/60 transition-all transform hover:scale-105">
                  <item.icon className="w-12 h-12 text-[#FFD700] mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-[#FFD700] mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-20 text-center">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-12 rounded-3xl">
              <p className="text-2xl md:text-3xl font-bold text-[#951049] italic">
                "Royal Supreme isn't just about creating beverages — it's about creating experiences. Every pour is a promise, every sip a celebration."
              </p>
            </div>
          </div>
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
                className="group relative bg-[#6b0d37] cursor-pointer rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-[#FFD700]/20"
                onClick={() => window.location.href = '/products'}
              >
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
              className="bg-[#FFD700] cursor-pointer text-[#951049] px-12 py-4 rounded-full font-bold text-lg uppercase tracking-wide hover:bg-[#FFC700] transition-all transform hover:scale-105 shadow-xl hover:shadow-[#FFD700]/30"
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