export default function Solution() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Product Dimensions */}
          <div className="order-2 lg:order-1">
            <img 
              src="/product-dimensions.jpg" 
              alt="Bishop Mobility Cane Holster technical specifications - showing dual S-curved columns with precise measurements"
              className="aspect-[4/3] object-contain bg-white rounded-2xl shadow-xl p-8"
            />
          </div>
          
          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <span className="text-blue-600 font-semibold text-lg">The Solution</span>
              <h2 className="text-gray-900 mt-2">
                Engineered for Real Life
              </h2>
            </div>
            
            <p className="text-xl text-gray-700">
              The Bishop Mobility Cane Holster isn't just another accessory—it's a complete rethinking 
              of how mobility aids should work.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Effortless Insertion</h3>
                  <p className="text-gray-600">
                    Simply slide your cane into the dual S-curved columns. The design naturally guides and 
                    centers your cane—no aiming, no fumbling, no frustration.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Rock-Solid Security</h3>
                  <p className="text-gray-600">
                    Once in place, your cane stays put. No moving parts to fail, no clips to break, 
                    no adhesives to wear out. Just reliable engineering.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Retrieval</h3>
                  <p className="text-gray-600">
                    When you need your cane again, a simple upward lift releases it. One smooth motion, 
                    and you're ready to move.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-lg text-gray-800 font-medium">
                "It's like having a third hand—one that never gets tired and never lets go until you're ready."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}