import Link from "next/link";
export default function Navbar(){
    return(
        <div className="">
            <div className=" fixed z-20 mt-0 grid lg:flex lg:justify-evenly items-center bg-purple-950 w-full lg:h-14 ">

                <div>
                    <h1 className="grid text-center font-extrabold lg:text-4xl bg-gradient-to-r from-purple-700 to-purple-400 bg-clip-text text-transparent">TechSpark</h1>
                </div>
                {/* bg-gradient-to-r from-blue-500 to-green-500 */}
                <div className="grid lg:grid-cols-2">
                <div className="text-[13px] space-x-2 lg:text-lg text-center lg:space-x-10 lg:font-bold text-white sm:my-4">
                    <Link href="/" className="hover:text-purple-300">HOME</Link>
                    <Link href="/about" className="hover:text-purple-300">ABOUT</Link>
                    <Link href="/services" className="hover:text-purple-300">SERVICES</Link>
                    <Link href="contact" className="hover:text-purple-300">CONTACT</Link>
                </div>

                    <div className="lg:ml-40 lg:pt-2 lg:block hidden">
                    <button className="text-white lg:text-xl lg:font-semibold lg:w-28 lg:h-10 rounded-2xl bg-gradient-to-r from-purple-700 to-purple-400 bg-clip">JOIN US</button>
                    </div>
                </div>
                
                </div>
        </div>
        
    );
}