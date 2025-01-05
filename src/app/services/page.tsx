import Image from "next/image";
export default function Services(){
  return(
    <div>
      <div className="pt-10">

      <div className="" >
        <h1 className="py-5 text-center font-serif font-extrabold text-4xl 
                bg-gradient-to-r from-purple-950 to-purple-700 
                bg-clip-text text-transparent w-full">Services We Provide</h1>

        <p className="px-4 text-purple-950 text-pretty lg:text-center justify-center font-medium">
        At [TechSpark], we pride ourselves on offering a comprehensive range of cutting-edge technology services designed to meet the demands of todays fast-paced digital landscape. 
        Our innovative solutions include Artificial Intelligence (AI) and Machine Learning (ML) integration, enabling businesses to harness the power of data for predictive analytics and smarter decision-making. 
        We also specialize in cloud computing services, providing scalable and secure infrastructure that allows organizations to operate seamlessly in the cloud. Additionally, 
        our expertise in Internet of Things (IoT) solutions empowers companies to connect and manage devices effortlessly, unlocking new efficiencies and insights.
        Whether you’re looking to enhance your cybersecurity measures or explore the potential of blockchain technology, 
        our team is committed to delivering tailored solutions that drive growth and transform your business for the future.
        </p>

        <br /><br />

        <div className="grid px-4 lg:flex">
              
          <p className="text-purple-950 lg:mx-5 py-10 lg:text-center font-medium lg:w-[950px]">
          Transforming your business operations is our mission at [TechSpark]. 
          We offer advanced software development services that leverage the latest technologies, 
          including progressive web applications (PWAs) and mobile app development to enhance user engagement and accessibility across platforms. 
          Our DevOps services streamline your development and deployment processes, ensuring faster time-to-market and improved collaboration between teams. 
          With our data analytics solutions, we provide actionable insights that help you make informed strategic decisions and drive innovation. 
          Additionally, our dedicated IT support services ensure that your technology infrastructure runs smoothly, minimizing downtime and maximizing productivity. 
          Whatever your technological needs, 
          we are here to empower your organization with solutions that foster growth and efficiency in an ever-evolving market.
          </p>

          <Image className="lg:mx-10 rounded-tl-3xl rounded-br-3xl" src="/ai3.jpg"  
                    alt="laptopKyes"
                    width={500}  
                    height={300} />

        </div>

        <br /><br />

        <div className="px-4 grid space-y-2 lg:flex justify-around pb-16">

          <div>
            <Image className=" rounded-tl-3xl rounded-br-3xl h-72" src="/ai2.jpg"  
                    alt="laptopKyes"
                    width={400}  
                    height={300} />
          </div>

          <div>
            
            <Image className=" rounded-tl-3xl rounded-br-3xl h-72" src="/purlogo.jpg"  
                    alt="laptopKyes"
                    width={400}  
                    height={300} />
          </div>

          <div>
            
            <Image className=" rounded-tl-3xl rounded-br-3xl h-72" src="/bc-2.jpg"  
                    alt="laptopKyes"
                    width={400}  
                    height={300} />
          </div>

        </div>

      </div>

      </div>
      
    </div>
  );
}