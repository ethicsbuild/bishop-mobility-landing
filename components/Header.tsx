export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-4">
            <img 
              src="/logo.jpg" 
              alt="Bishop Mobility Solutions"
              className="h-14 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900">Bishop Mobility</span>
              <span className="text-sm text-gray-600 font-medium">Solutions</span>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#story" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Our Story
            </a>
            <a href="#product" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Product
            </a>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Get Early Access
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}