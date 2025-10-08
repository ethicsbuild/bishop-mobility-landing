export default function ProductDetails() {
  return (
    <section id="product" className="bg-gradient-to-br from-gray-50 to-white">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-lg">Engineering Excellence</span>
            <h2 className="text-gray-900 mt-2">
              Precision Meets Simplicity
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Every curve, every dimension, every material choice serves a purpose: 
              to make your life easier.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card space-y-4">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-gray-900">Dual S-Curved Column Design</h3>
              <p className="text-gray-600">
                Two symmetrical support columns with compound curvature create a natural cradle 
                for your cane. The geometry is self-centering—your cane finds its place automatically.
              </p>
            </div>
            
            <div className="card space-y-4">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-gray-900">No Moving Parts</h3>
              <p className="text-gray-600">
                Zero points of mechanical failure. No springs to weaken, no clips to break, 
                no hinges to wear out. Just solid, reliable engineering.
              </p>
            </div>
            
            <div className="card space-y-4">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-gray-900">High-Quality Polymer Resin</h3>
              <p className="text-gray-600">
                UV-resistant, lightweight, and incredibly strong. This isn't cheap plastic—it's 
                engineered material designed for daily use and long-term durability.
              </p>
            </div>
            
            <div className="card space-y-4">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-gray-900">Universal Fit</h3>
              <p className="text-gray-600">
                Accommodates standard cane diameters from 0.75" to 1.25". Works with most 
                walking canes on the market.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-600 text-white rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">The Bishop Difference</h3>
                <p className="text-xl text-blue-50">
                  Other cane holders are designed by people who don't use canes. 
                  Ours is designed by someone who does.
                </p>
                <p className="text-lg text-blue-100">
                  That's why every detail—from the oval terminal heads that increase surface contact, 
                  to the spring steel belt clip that stays secure—is informed by real-world experience.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-500 bg-opacity-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-100">Ease of Use</span>
                    <span className="font-bold">10/10</span>
                  </div>
                  <div className="w-full bg-blue-400 rounded-full h-3">
                    <div className="bg-white rounded-full h-3 w-full"></div>
                  </div>
                </div>
                
                <div className="bg-blue-500 bg-opacity-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-100">Durability</span>
                    <span className="font-bold">10/10</span>
                  </div>
                  <div className="w-full bg-blue-400 rounded-full h-3">
                    <div className="bg-white rounded-full h-3 w-full"></div>
                  </div>
                </div>
                
                <div className="bg-blue-500 bg-opacity-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-100">Arthritis-Friendly</span>
                    <span className="font-bold">10/10</span>
                  </div>
                  <div className="w-full bg-blue-400 rounded-full h-3">
                    <div className="bg-white rounded-full h-3 w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}