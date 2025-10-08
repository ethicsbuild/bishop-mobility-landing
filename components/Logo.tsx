export default function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <img 
        src="/logo.jpg" 
        alt="Bishop Mobility Solutions - Chess bishop logo representing strategic mobility solutions"
        className="h-12 w-auto"
      />
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-900">Bishop Mobility</span>
        <span className="text-sm text-gray-600">Solutions</span>
      </div>
    </div>
  )
}