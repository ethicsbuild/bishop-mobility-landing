export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h1 className="text-gray-900">
              Freedom at Your Side
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              The first cane holster designed by someone who actually needs one. 
              Secure your cane hands-free with dignity and confidence.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg text-gray-700">Perfect for arthritic hands - no clasps, no friction, no frustration</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg text-gray-700">Clips securely to your belt - always accessible, never in the way</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg text-gray-700">Engineered for reliability - no moving parts to fail</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="btn-primary text-center">
                Get Early Access
              </a>
              <a href="#story" className="btn-secondary text-center">
                Our Story
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-medium">Patent Pending</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
                <span className="font-medium">Made in Texas</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Product Image */}
          <div className="relative">
            <img 
              src="/product-in-use.jpg" 
              alt="Bishop Mobility Cane Holster in use - showing the dual S-curved design holding a cane securely on a belt"
              className="aspect-square object-cover rounded-2xl shadow-2xl"
            />
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300 rounded-full opacity-30 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}