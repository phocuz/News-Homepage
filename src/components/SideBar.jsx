function SideBar() {
    return (
       <div className="w-full bg-gray-900  text-white p-6">
        <h3 className="text-5xl font-bold text-yellow-500 mb-4 p-4">New</h3>
        <div className="m-6 pb-4 border-b border-gray-700 ">
          <h4 className="font-semibold mb-4 text-3xl ">Hydrogen VS Electric Cars</h4>
           <p className="text-gray-400 text-xl">Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div className="mb-6 pb-4 border-b border-gray-700">
          <h4 className="font-semibold mb-4 text-3xl">The Downsides of AI Artistry</h4>
          <p className="text-gray-400 text-xl">What are the possible adverse effects of on-demand AI image generation?</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-3xl">Is VC Funding Drying Up?</h4>
          <p className="text-gray-400 text-xl">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
      </div>
    )
}

export default SideBar
