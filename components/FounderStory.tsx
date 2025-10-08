export default function FounderStory() {
  return (
    <section id="story" className="bg-white">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-lg">Our Story</span>
            <h2 className="text-gray-900 mt-2">
              Designed by Hands That Know
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Photo Placeholder */}
            <div>
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-gray-600 text-lg font-medium">
                    Replace with Jim's photo
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Professional portrait of founder
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Story */}
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                At 81 years old, <strong>Jim Bishop</strong> wasn't looking to start a company. 
                He was just trying to live his life with dignity.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                A veteran of Texas state government and a man who nearly took a company public before 9/11 
                changed everything, Jim knew what it meant to solve hard problems. But arthritis presented 
                a different kind of challenge—one that existing solutions completely failed to address.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Every cane holder on the market required the very thing arthritis takes away: grip strength 
                and dexterity. Rubber hooks that wouldn't grip. Clips that wouldn't close. Velcro that 
                degraded. It was maddening.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                So Jim did what engineers do: he refused the constraint. Working with his partner 
                <strong> Sean Davenport</strong>, he designed something entirely new—a cane holster that 
                works <em>with</em> arthritic hands, not against them.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-600">
                <p className="text-lg text-gray-800 italic">
                  "This isn't just about holding a cane. It's about holding onto your independence. 
                  Every small freedom matters when you're fighting to maintain your dignity."
                </p>
                <p className="text-gray-600 mt-3 font-medium">
                  — James W. Bishop Jr., Founder
                </p>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, Bishop Mobility Solutions carries forward that same philosophy: mobility aids 
                should actually aid mobility. They should be engineered with empathy, built with precision, 
                and designed to restore—not diminish—the independence of those who use them.
              </p>
            </div>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">81</div>
              <p className="text-gray-600">Years of life experience informing every design decision</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">Patent Pending</div>
              <p className="text-gray-600">Protecting truly innovative assistive technology</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">Made in Texas</div>
              <p className="text-gray-600">Engineered and manufactured in the USA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}