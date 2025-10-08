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
          
          {/* Right Column - Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-32 h-32 mx-auto text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-gray-600 text-lg font-medium">
                  Replace with your product photo
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Recommended: High-quality image of the cane holster
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300 rounded-full opacity-30 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}