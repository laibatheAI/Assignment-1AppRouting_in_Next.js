import Image from "next/image";

export default async function About(){
  await new Promise((resolve) => {
      setTimeout(resolve,2000);
  })
    return(
          <div>

            <div className="px-4 pt-10" >
              <h1 className="py-5 text-center font-serif font-extrabold text-4xl 
                      bg-gradient-to-r from-purple-950 to-purple-700 
                      bg-clip-text text-transparent w-full">About Our Website</h1>

              <p className="text-purple-950  text-center justify-center font-medium">
              At [TechSpark], we believe in the power of technology to transform ideas into reality.
                Since our founding, we have been dedicated to providing innovative solutions tailored to meet the evolving needs of individuals and businesses alike. 
                Our team of experts combines technical excellence with a deep understanding of our clients goals, enabling us to deliver products and services that drive success.
                From software development and IT consulting to digital transformation and beyond, we are committed to empowering our clients with tools and insights that make a real difference. 
              Join us on a journey of growth, innovation, and limitless possibilities.
              </p>

              <br /><br />

              <div className="grid grid-cols-1 lg:flex">

              <Image className="px-2 lg:mx-10 rounded-tl-3xl rounded-br-3xl" src="/tachsideball.jpeg"  
                      alt="laptopKyes"
                      width={500}  
                      height={300} />
                
                <p className="text-purple-950 lg:mx-5 py-10 text-center font-medium lg:w-[950px]">
                  Our approach is rooted in a passion for continuous improvement and a commitment to customer satisfaction. 
                  We work closely with each client, taking the time to understand their unique challenges and aspirations. 
                  By harnessing cutting-edge technologies and industry best practices, we deliver solutions that are not only functional but also scalable and future-ready. 
                  At [TechSpark], we’re not just about solving problems — we’re about creating opportunities for growth and innovation. 
                  Join us on a journey toward a smarter, more connected future.
                  This version adds a bit more about the companys 
                  values and approach to customer engagement and technology.
                </p>

              </div>

              <br /><br />

              <div className="space-y-2 grid lg:flex justify-around pb-16">

                <div>
              <Image className=" rounded-tl-3xl rounded-br-3xl" src="/download (4).jpeg"  
                      alt="laptopKyes"
                      width={400}  
                      height={300} />
                </div>

                <div>
                  
              <Image className=" rounded-tl-3xl rounded-br-3xl h-72" src="/download (6).jpeg"  
                      alt="laptopKyes"
                      width={400}  
                      height={300} />
                </div>

                <div>
                  
              <Image className=" rounded-tl-3xl rounded-br-3xl" src="/download (3).jpeg"  
                      alt="laptopKyes"
                      width={400}  
                      height={300} />
                </div>

              </div>

            </div>

          </div>
  );
  }