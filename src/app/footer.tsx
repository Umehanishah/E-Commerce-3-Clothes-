import Image from "next/image";
import { Button } from "@/components/ui/button"


export default function Footer() {
  return (
     
            <section>
              
                    <div className="grid grid-cols-4 justify-between items-center w-[100%] mx-auto
                                    bg-green-900 text-green-100
                                    pt-3 sm:pt-5 md:pt-10 xl:pt-14 
                                    pb-3 sm:pb-5 md:pb-10 xl:pb-14
                                    px-5 sm:px-10 md:px-14 xl:px-20">
                            <div>
                                <h2 className="font-serif
                                            font-semibold sm:font-semibold md:font-bold xl:font-bold
                                            text-lg sm:text-xl md:text-2xl xl:text-4xl">
                                            Rivo</h2>
                                
                                <p className="
                                    pt-2 sm:pt-5 md:pt-10 xl:pt-14
                                    text-xs sm:text-sm md:text-sm xl:text-base
                                    ">Social Media</p>
                            <div className="flex gap-3  
                                pt-1 sm:pt-3 md:pt-5 xl:pt-7">
                                <div className="">
                                <a href="/cart">
                                <Image width={20} height={20} src="/icon-2.png" alt="cart" /></a>
                                </div>

                                <div className="">
                                <a href="/cart">
                                <Image width={20} height={20} src="/icon-3.png" alt="cart" /></a>
                                </div>

                                <div className="">
                                <a href="/cart">
                                <Image width={20} height={20} src="/icon-4.png" alt="cart" /></a>
                                </div>
                                </div>
                            </div>

                            
                        <div>
                        <ul className="pt-5">
                            <li className="font-semibold text-base">
                                SHOP</li>
                            <li className="font-light text-sm pt-5">
                                Products</li>
                            <li className="font-light text-sm pt-5">
                                Overview</li>
                            <li className="font-light text-sm pt-5">
                                Pricing</li>
                            <li className="font-light text-sm pt-5">
                                Releases</li>
                        </ul>
                        </div>   

                         <div>
                         <ul className="pt-5">
                            <li className="font-semibold text-base">
                                COMPANY</li>
                            <li className="font-light text-sm pt-5">
                                About Us</li>
                            <li className="font-light text-sm pt-5">
                                Contact</li>
                            <li className="font-light text-sm pt-5">
                                News</li>
                            <li className="font-light text-sm pt-5">
                                Support</li>
                        </ul>
                        </div> 

                         <div>
                        <ul>
                            <li className="pb-10">STAY UP TO DATE</li>
                            <li className="bg-transparent border-2 border-green-100">Enter your email</li>
                            <Button className="bg-green-200 text-black">Submit</Button>
                        </ul>
                        </div> 

                
                        </div>
                        
            </section>
      
  );
}