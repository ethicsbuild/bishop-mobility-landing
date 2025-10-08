export default function Problem() {
  return (
    <section className="bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-gray-900">
            The Daily Struggle Nobody Talks About
          </h2>
          
          <p className="text-xl text-gray-700">
            If you use a cane, you know the frustration: every time you need both hands free—to open a door, 
            pay at a counter, or carry groceries—your cane becomes a problem to solve.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="card text-center space-y-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="text-gray-900">Leaning It Against Walls</h3>
            <p className="text-gray-600">
              It falls. Every time. And bending down to pick it up? That's exactly what you're trying to avoid.
            </p>
          </div>
          
          <div className="card text-center space-y-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-gray-900">Awkward Clips & Hooks</h3>
            <p className="text-gray-600">
              Existing solutions require grip strength and dexterity—the very things arthritis takes away.
            </p>
          </div>
          
          <div className="card text-center space-y-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>
            <h3 className="text-gray-900">Loss of Independence</h3>
            <p className="text-gray-600">
              Having to ask for help with simple tasks. The small indignities that add up every single day.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-2xl text-gray-800 font-semibold italic">
            "There had to be a better way."
          </p>
          <p className="text-lg text-gray-600 mt-2">
            — Jim Bishop, Founder
          </p>
        </div>
      </div>
    </section>
  )
}