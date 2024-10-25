import image01 from "../assets/image-retro-pcs.jpg"
import image02 from "../assets/image-top-laptops.jpg"
import image03 from "../assets/image-gaming-growth.jpg"
function Section() {
    return (
           <div className="grid lg:grid-cols-3   md:grid-cols-1 grid-cols-1 gap-6 mt-10 ">

            <div className="flex justify-between md:justify-normal md:gap-4 ">
            <img src={image01} alt="image-retro-pcs.jpg" />
            <div className="flex flex-col gap-2 ">
                <h1 className=" text-6xl m-2 text-red-500">01</h1>
                <h3 className="font-extrabold text-gray-900 hover:text-red-500 text-2xl ">Reviving Retro PCs</h3>
                <p className="text-gray-500 text-2xl">What happens when old PCs <br />are given modern upgrades?</p>
            </div>
            </div>

            <div className="flex justify-between md:justify-normal gap-2 mt-4 md:gap-4 ">
            <img src={image02} alt="image-top-laptops.jpg" />
            <div className="flex flex-col gap-2 mt-4">
                <h1 className=" text-6xl m-2 text-red-500">02</h1>
                <h3 className="font-extrabold text-gray-900 hover:text-red-500 text-2xl "> Top 10 Laptops of 2022</h3>
                <p className="text-gray-500 text-2xl">Our best picks for various <br />needs and budgets</p>
            </div>
            </div>

            <div className="flex justify-between md:justify-normal  mt-4 md:gap-4">
            <img src={image03} alt="image-gaming-growth.jpg"  />
            <div className="flex flex-col gap-2 mt-4">
                <h1 className=" text-6xl m-2 text-red-500">03</h1>
                <h3 className="font-extrabold text-gray-900 hover:text-red-500 text-2xl ">The Growth of Gaming</h3>
                <p className="text-gray-500 text-2xl">how the pandenmic has spread <br />new opportunities</p>
            </div>
            </div>
        </div>
    )
}

export default Section
