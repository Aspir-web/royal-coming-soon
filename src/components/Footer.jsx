const Footer = () => {
  return (
    <footer className="bg-[#6b0d37] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#FFD700] tracking-wider">Royal</h3>
            <p className="text-sm text-gray-300">Crafting premium spirits. Excellence in every bottle.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#FFD700] font-semibold mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {/* <li><a href="#" className="hover:text-[#FFD700] transition-colors">About Us</a></li> */}
              <li><a href="/products" className="hover:text-[#FFD700] transition-colors">Our Products</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors">Contact</a></li>
              {/* <li><a href="#" className="hover:text-[#FFD700] transition-colors">Store Locator</a></li> */}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[#FFD700] font-semibold mb-4 uppercase tracking-wide">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/distribution" className="hover:text-[#FFD700] transition-colors">Authorised Distribution</a></li>
              <li><a href="/business-collaboration" className="hover:text-[#FFD700] transition-colors">Business Collaboration</a></li>
              <li><a href="/tin" className="hover:text-[#FFD700] transition-colors">TIN Document</a></li>
              <li><a href="/tax" className="hover:text-[#FFD700] transition-colors">Commercial Tax</a></li>
              <li><a href="/udyam" className="hover:text-[#FFD700] transition-colors">UDYAM Registration</a></li>
              <li><a href="/registration" className="hover:text-[#FFD700] transition-colors">Registration Documents</a></li>
              <li><a href="/khoday" className="hover:text-[#FFD700] transition-colors">KHODAY INDIA LIMITED Sales Documents</a></li>
              <li><a href="/blendwell" className="hover:text-[#FFD700] transition-colors">BLENDWELL BOTTLERS PVT.LTD Documents</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#FFD700] font-semibold mb-4 uppercase tracking-wide">Connect</h4>
            <ul className="space-y-2 text-sm">
              {/* <li>info@royal.com</li>
              <li>+1 (800) 555-0123</li> */}
              <li className="pt-4 flex gap-4">
                <a href="#" className="hover:text-[#FFD700] transition-colors">Facebook</a>
                <a href="#" className="hover:text-[#FFD700] transition-colors">Instagram</a>
                <a href="#" className="hover:text-[#FFD700] transition-colors">Twitter</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#951049] pt-8 text-center text-sm text-gray-400">
          <p className="mb-2">© 2025 Royal Spirits. All rights reserved.</p>
          {/* <p className="text-xs">Please drink responsibly. Must be 21+ to purchase.</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;