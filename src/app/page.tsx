import Image from "next/image";

export default function Home(){
  return(
    <div className="relative w-full h-full pt-14">

         <Image className="mx-16 lg:mx-0 lg:absolute lg:ml-32 mt-12 rounded-full z-10" src="/purlogo.jpg"  
                    alt="overlay"
                    width={200}  
                    height={300} 
                    /> 

        <Image className="px-2 lg:mx-5 mt-5 rounded-3xl w-[1300px] lg:object-cover" src="/aiwalpr-1.webp"  
                    alt="backgrond"
                    width={800}  
                    height={300} />
            

      <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className=" lg:m-14">

            <h1 className="text-center font-serif font-extrabold text-2xl lg:text-4xl 
              bg-gradient-to-r from-purple-950 to-purple-700 
              bg-clip-text text-transparent w-full">
                *Innovating Tomorrow,Empowering Today*</h1>

            <br/>

            <p className="text-purple-950 lg:pl-18 text-center justify-center lg:w-[600px] lg:font-medium">
              Empowering Your Digital Journey with Cutting-Edge Solutions and Reliable Tech Support – Discover Innovation at Your Fingertips. 
              From personalized hardware solutions to advanced software tools, 
              we’re here to enhance your productivity, streamline operations, and drive success. 
              Dive into a world where technology meets simplicity, designed to support your every need.
              Or for the shorter version:
              Your Destination for the Latest in Technology Solutions and Support. 
              Explore expert insights, top-quality products, 
              and tailored services crafted to help you excel in a digital world.
              </p>

            </div>

            <div className="px-10 lg:py-10">
              <Image className="rounded-3xl" src="/background.jpeg"  
                alt="laptopKyes"
                width={600}  
                height={300} />
              </div>
      </div>

          
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 p-10 ">

          <Image className=" rounded-3xl mr-5" src="/down3.jpg"  
          alt="workingLaptop"
          width={700}  
          height={0} />

          <Image className=" rounded-3xl" src="/download.jpeg"  
          alt="workingLaptop"
          width={700}  
          height={0} />

        </div>

    </div>
    
  );
}