import Image from "next/image";



export default function Contact() {
  return (
      <main>
        {/* section */}
          <section>
            <div className="text-center pt-3 sm:pt-5 md:pt-10 xl:pt-14">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl xl:text-4xl 
              font-semibold sm:font-semibold md:font-bold xl:font-bold">Hi! How can we help you?</h2>
              <p className="px-5 sm:px-10 md:px-14 xl:px-20
              pt-3 sm:pt-5 md:pt-10 xl:pt-14">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem corrupti minima culpa, minus quis blanditiis excepturi voluptates molestias facilis? Veritatis sed reiciendis atque a consectetur perferendis excepturi unde, iste quia?</p>
            </div>
            
            <div>
              
            </div>
          </section>


            {/* section */}
            <section>
             <div className="grid grid-cols-3 place-items-center pt-3 sm:pt-5 md:pt-10 xl:pt-14
                            pb-3 sm:pb-5 md:pb-10 xl:pb-14">
                    <div>
                      <Image width={50} height={50} src="/icon-1.png" alt="icon"/>
                      <p className="pt-2 sm:pt-4 md:pt-5 xl:pt-8">Cart</p>
                     
                    </div>
                    <div>
                      <Image width={50} height={50} src="/icon-5.png" alt="icon"/>
                      <p className="pt-2 sm:pt-4 md:pt-5 xl:pt-8">Globalization</p>
                    </div>
                    <div>
                      <Image width={50} height={50} src="/icon-6.png" alt="icon"/>
                      <p className="pt-2 sm:pt-4 md:pt-5 xl:pt-8">Email</p>
                    </div>
              </div>
              </section>
            {/* section */}
            <section>
              <div className="bg-green-100 px-10 pt-5 pb-5">
              <div >
                <h3 className="font-semibold md:font-bold 
                text-base sm:text-base md:text-lg xl:text-lg">
                    Top Questions
                </h3>
                </div>
                <div className="grid grid-cols-2 leading-10">
                <p>How to cancel the order?</p>
                <p>What is our refund policy?</p>
                <p>How do I track my order?</p>
                <p>What are the weekly payment partner discounts?</p>
                <p>How can I learn more about the upcoming campaigns and the discounts?</p>
                <p>What are the expected delivery timelines?</p>
              </div>
              </div>
            </section>


            {/* section */}
            <section>
              <div className="pt-5 pb-5">
                <div >
                  <h3 className="text-center text-lg md:textxl font-semibold md:font-bold">
                  Still looking for answers? Ask Us anytime, day or night, Click on Chat Now to connect with us 24/7
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-5 text-center pt-5">
                  <p>Chat with Us<br/>
                  10AM - 6PM (Mon - Sun)</p>

                  <p>021-111-132729<br/>
                  10AM - 6PM (Mon-Sat)</p>
                </div>
              </div>
              </section>
      </main>
  );
}
