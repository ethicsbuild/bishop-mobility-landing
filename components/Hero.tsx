export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                Patent Pending • Made in Texas
              </span>
            </div>
            
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