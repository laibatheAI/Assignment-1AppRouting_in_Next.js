import Link from "next/link";
export default function Footer(){
  return(
    <div className="bg-purple-950">

      <h1 className="text-center font-serif font-bold text-2xl lg:text-4xl py-7 text-purple-400 w-full">You Can Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 py-10 lg:mx-[500px]">
      <Link className="text-center font-serif font-bold text-2xl 
                      text-purple-400 w-full"  
                      href = "https://www.linkedin.com/in/LaibaNaz">LinkedIn</Link>

      <Link className="text-center font-serif font-extrabold text-2xl 
                      text-purple-400 w-full"
                       href = "https://www.github.com/laibathecoder">GitHub</Link>

      </div>

    </div>
  );
}