import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Features() {
  return (
      <main>
        {/* header section */}
            <section>
                  <div className="bg-white pt-5 sm:pt-20 xl:pt-20 
                                    px-5 sm:px-10 md:px-20 xl:px-20 
                                    pb-5 sm:pb-20 xl:pb-20">
                    <div className="flex gap-10">
                          <div>
                              <h1 className="font-serif font-semibold sm:font-bold xl:font-bold
                                          text-green-900 pt-5 md:pt-10
                                          text-xl sm:text-4xl md:text-6xl">
                                          FollowUp Our Features</h1>
                              <p className="font-serif font-light sm:font-normal xl:font-medium
                                          text-green-900 
                                          pt-2 sm:pt-6 xl:pt-10
                                          text-sm sm:text-base md:text-lg">
                                          Explore our curated collection of stylish clothing 
                                          and accessories tailored to your unique taste.
                                          </p>
                                <p className="font-serif font-light sm:font-normal xl:font-medium
                                          text-green-900 
                                          pt-2 sm:pt-6 xl:pt-10
                                          text-sm sm:text-base md:text-lg">
                                          Explore our curated collection of stylish clothing 
                                          and accessories tailored to your unique taste.
                                          </p>
                              <Button className="bg-green-900 hover:bg-transparent hover:border-2 hover:border-green-900
                                                  hover:text-green-900 hover:font-semibold mt-2 sm:mt-5 md:mt-10 xl:mt-14">
                                                    Explore Now</Button>
                          </div>

                          <div className="pr-5 sm:pr-10 xl:pr-14">
                            <Image width={500} height={700} src="/img-1.png" alt=""/>
                          </div>
                    </div>
                  </div>
            </section>


              {/* 2nd section */}
              <section>
                  <div className="bg-green-200 pt-5 sm:pt-20 xl:pt-20  
                                    px-5 sm:px-10 md:px-20 xl:px-20">
                  
                  <div>
                        <h1 className="font-serif font-semibold text-center 
                              sm:font-bold xl:font-bold
                            text-green-900 text-xl sm:text-2xl md:text-4xl">
                               Best Productivity</h1>
                        <p className="font-serif font-light text-center
                               sm:font-normal xl:font-medium
                             text-green-900 
                                pt-2 sm:pt-6 xl:pt-10
                                text-xs sm:text-sm md:text-medium">
                                Explore our curated collection of stylish clothing 
                                and accessories tailored to your unique taste.</p>
                    
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                           <div>   
                              <p className="font-serif font-light 
                               sm:font-normal xl:font-medium
                             text-green-900 
                                pt-2 sm:pt-6 xl:pt-10
                                text-xs sm:text-sm md:text-medium">
                                Explore our curated collection of stylish clothing 
                                and accessories tailored to your unique taste
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Ullam dolorum nam odio recusandae natus error explicabo. 
                                Aperiam illum accusamus nihil eius ea, maiores veritatis vero inventore, 
                                dolore porro animi. Velit?<br/>
                                Explore our curated collection of stylish clothing 
                                and accessories tailored to your unique taste
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Ullam dolorum nam odio recusandae natus error explicabo. 
                                Aperiam illum accusamus nihil eius ea, maiores veritatis vero inventore, 
                                dolore porro animi. Velit?</p>
                                <Button>See More</Button>
                                </div>
                                <div>
                                <Image width={300} height={300} src="/img-5.png" alt="dress"/>
                                </div>

                    </div>
                  </div>
            </section>


              {/* 3rd section */}
            
              <section>
                  <div className="bg-white pt-5 sm:pt-20 xl:pt-20 pb-5 sm:pb-20 xl:pb-20 
                                    px-5 sm:px-10 md:px-20 xl:px-20">
                  
                  <div>
                        <h1 className="font-serif font-semibold text-center 
                              sm:font-bold xl:font-bold
                            text-green-900 text-xl sm:text-2xl md:text-4xl">
                               Designer Clothes For You</h1>
                        <p className="font-serif font-light text-center
                               sm:font-normal xl:font-medium
                             text-green-900 
                                pt-2 sm:pt-6 xl:pt-10
                                text-xs sm:text-sm md:text-medium">
                                Explore our curated collection of stylish clothing 
                                and accessories tailored to your unique taste.</p>

                        <div className="flex flex-col md:flex-row place-items-center
                                        gap-3 sm:gap-5 md:gap-10 xl:gap-14
                                        pt-5 sm:pt-7 md:pt-10 xl:pt-14">
                                <div className="pt-3 sm:pt-5 md:pt-10 xl:pt-14 text-center">
                                  <Image width={300} height={400} src="/img-12.png" alt="dress" className="bg-green-100"/>
                                <p className="font-semibold pt-2 sm:pt-4 md:pt-6 xl:pt-10">Accessories</p>
                                <p className="pt-1 sm:pt-2 md:pt-4 xl:pt-6 text-xs md:text-sm">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum, aspernatur corporis nostrum facere architecto, quidem aliquam quo mollitia, vitae quos nemo doloremque veritatis! Tenetur dicta minus consectetur praesentium sequi!
                                </p>
                                </div>

                                <div className="pt-3 sm:pt-5 md:pt-10 xl:pt-14 text-center">
                                  <Image width={300} height={400} src="/img-13.png" alt="dress"/>
                                  <p className="font-semibold pt-2 sm:pt-4 md:pt-6 xl:pt-10">Dresses</p>
                                <p className="pt-1 sm:pt-2 md:pt-4 xl:pt-6 text-xs md:text-sm">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odio reiciendis, ullam incidunt deserunt eligendi voluptatum tempore iure. Minus adipisci laudantium sit odit eius repudiandae saepe numquam vel ut temporibus!
                                </p>
                                </div>

                                <div className="pt-3 sm:pt-5 md:pt-10 xl:pt-14 text-center">
                                  <Image width={300} height={400} src="/img-14.png" alt="dress"/>
                                <p className="font-semibold pt-2 sm:pt-4 md:pt-6 xl:pt-10">Outerwear</p>
                                <p className="pt-1 sm:pt-2 md:pt-4 xl:pt-6 text-xs md:text-sm">
                                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis animi quo delectus nulla, architecto similique eum ipsa minus! Vel consequatur laborum tempora cupiditate assumenda optio, explicabo officiis quod. Cum, animi!
                                </p>
                                </div>
                        </div>
  
                    </div>
                  </div>
            </section>


          {/*4th section */}
            <section>
                  <div className="bg-green-200 pt-3 sm:pt-10 xl:pt-10 
                                    px-5 sm:px-10 md:px-20 xl:px-20">
      
                                <div className="grid grid-cols-2 gap-3">
                                
                                <div>
                                <Image width={400} height={500} src="/img-11.png" alt="dress"/>
                                </div>
                                
                                <div>
                                  <div>
                                  <p className="font-semibold text-left text-green-900 
                                  pt-2 sm:pt-5 md:pt-10 xl:pt-14
                                  text-xl sm:text-2xl md:text-4xl xl:text-6xl
                                  ">Exclusive offer</p>
                                  </div>
                                  <div>
                                 <p className="font-light text-green-900 
                                  pt-2 sm:pt-4 md:pt-6 xl:pt-10
                                  text-xs sm:text-sm md:text-base xl:text-lg
                                  text-left 
                                  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nam amet recusandae nesciunt aliquid qui dolor dolorum! Tempore alias consequatur beatae distinctio hic. Eveniet sint debitis iusto molestias eligendi nostrum.</p>
                                </div>
                                <div className="flex gap-10 text-center pt-3 sm:pt-5 md:pt-8 xl:pt-10">
                                <p className="pb-1 sm:pb-2 md:pb-4 xl:pb-5
                                px-2 sm:px-4 md:px-6 xl:px-8
                                pt-1 sm:pt-2 md:pt-4 xl:pt-5
                                bg-white">06<br/>Days</p>
                                
                                <p className="pb-1 sm:pb-2 md:pb-4 xl:pb-5
                                px-2 sm:px-4 md:px-6 xl:px-8
                                pt-1 sm:pt-2 md:pt-4 xl:pt-5
                                bg-white">18<br/>Hours</p>

                                <p className="pb-1 sm:pb-2 md:pb-4 xl:pb-5
                                px-2 sm:px-4 md:px-6 xl:px-8
                                pt-1 sm:pt-2 md:pt-4 xl:pt-5
                                bg-white">48<br/>Min</p>
                                
                                </div>

                                <Button className="mt-3 md:mt-10
                                px-3 sm:px-5 md:px-7 xl:px-10
                                bg-green-900
                                ">Buy Now</Button>
                                
                                </div>
                               
                                </div>
                      </div>
                
                </section>

          {/* 6th section */}
            <section>
                  <div className="bg-white pt-5 sm:pt-20 xl:pt-20
                                    pb-5 sm:pb-20 xl:pb-20 
                                    px-5 sm:px-10 md:px-20 xl:px-20">
                  
                  <div>
                        <h1 className="font-serif font-semibold text-center 
                              sm:font-bold xl:font-bold
                            text-green-900 text-xl sm:text-2xl md:text-4xl">
                               Feedback Corner</h1>
                        
                        <div className="flex flex-col md:flex-row place-items-center
                                        gap-3 sm:gap-5 md:gap-10 xl:gap-14
                                        pt-5 sm:pt-7 md:pt-10 xl:pt-14">

                                <div className="pt-2 sm:pt-4 md:pt-6 xl:pt-8
                                         pb-2 sm:pb-4 md:pb-6 xl:pb-8
                                         px-2 sm:px-4 md:px-6 xl:px-8 bg-white 
                                         border-2 border-gray-100
                                         hover:bg-green-100">
                                <p className="font-semibold pt-2 sm:pt-4 md:pt-6 xl:pt-10">Emily Wilson</p>
                                <p className="pt-1 sm:pt-2 md:pt-4 xl:pt-6 text-xs md:text-sm">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum, aspernatur corporis nostrum facere architecto, quidem aliquam quo mollitia, vitae quos nemo doloremque veritatis! Tenetur dicta minus consectetur praesentium sequi!
                                </p>
                                </div>

                                <div className="pt-2 sm:pt-4 md:pt-6 xl:pt-8
                                         pb-2 sm:pb-4 md:pb-6 xl:pb-8
                                         px-2 sm:px-4 md:px-6 xl:px-8 bg-white 
                                         border-2 border-gray-100
                                         hover:bg-green-100">
                                <p className="font-semibold pt-2 sm:pt-4 md:pt-6 xl:pt-10">Emily Wilson</p>
                                <p className="pt-1 sm:pt-2 md:pt-4 xl:pt-6 text-xs md:text-sm">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum, aspernatur corporis nostrum facere architecto, quidem aliquam quo mollitia, vitae quos nemo doloremque veritatis! Tenetur dicta minus consectetur praesentium sequi!
                                </p>
                                </div>

                                <div className="pt-2 sm:pt-4 md:pt-6 xl:pt-8
                                         pb-2 sm:pb-4 md:pb-6 xl:pb-8
                                         px-2 sm:px-4 md:px-6 xl:px-8 bg-white 
                                         border-2 border-gray-100 
                                         hover:bg-green-100">
                                <p className="font-semibold pt-2 sm:pt-4 md:pt-6 xl:pt-10">Emily Wilson</p>
                                <p className="pt-1 sm:pt-2 md:pt-4 xl:pt-6 text-xs md:text-sm">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum, aspernatur corporis nostrum facere architecto, quidem aliquam quo mollitia, vitae quos nemo doloremque veritatis! Tenetur dicta minus consectetur praesentium sequi!
                                </p>
                                </div>

                                
                        </div>
  
                    </div>
                  </div>
            </section>


      </main>
  );
}
