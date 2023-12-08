import React from 'react'

export default function Body(props) {
  return (
    <>
     <div className="container mx-auto mt-8">
      <div className={props.bg}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Our Website PortX</h2>
            <p className="text-gray-600">
              We are a team of dedicated professionals committed to delivering high-quality solutions in the field of technology.
            </p>
            <p className="text-gray-600 mt-4">
              Explore our website to discover how we can help you achieve your goals and stay ahead in today's competitive landscape.
            </p>
          </div>
          <div className="md:text-center">
            <img
              src={props.img} 
              alt="Team Work"
              className="mx-auto w-40"
            />
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Services</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Custom Software Development</li>
            <li>Web and Mobile App Development</li>
            <li>Consulting and Strategy</li>
            <li>User Experience Design</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}
