import Header from "./Header";
 
 
 
const AboutUs = () => {
 return (

<>
   <Header />
   <section id="about" className="bg-white py-16 px-4 md:px-10 text-center md:text-left">
     <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
       <div className="md:w-1/2">
         <img
           src="/graphic2.webp" 
           alt="BettyTech Creative Studio"
           className="w-full rounded-2xl shadow-lg"
         />
       </div>

       <div className="md:w-1/2">
         <h2 className="text-4xl font-bold text-purple-700 mb-4">We Are BettyTech</h2>
         <p className="text-gray-700 text-lg leading-relaxed mb-6">
           At BettyTech, we blend creativity and technology to deliver stunning results across web and graphic design.
           Whether you're building a brand, launching a new website, or leveling up your online presence, we’re here to
           bring your ideas to life — beautifully and powerfully.
         </p>
         <ul className="text-left text-gray-800 font-medium space-y-3">
           <li> Custom Logo, Flyer & Poster Design</li>
           <li>Responsive Website Development</li>
           <li>E-commerce Store Design</li>
           <li>Social Media Branding Graphics</li>
           <li>Visual Content for Digital Marketing</li>
         </ul>
         <a
           href="#contact"
           className="inline-block mt-8 bg-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-800 transition"
         >
           Let’s Work Together
         </a>
       </div>
     </div>
   </section>
   </>
 );
};

export default AboutUs;
