
import { Button } from "@/components/ui/button"
import { Link } from "lucide-react";


export default function Header() {
  return (
     
            <section>
                <nav>
                    <div className="md:flex justify-between items-center w-[100%] mx-auto
                                    bg-green-200 text-green-900
                                    pt-3 sm:pt-5 md:pt-10 xl:pt-14 
                                    pb-3 sm:pb-5 md:pb-10 xl:pb-14">
                            <div>
                                <h2 className="font-serif px-2 sm:px-5 md:px-10 xl:px-14
                                            font-semibold sm:font-semibold md:font-bold xl:font-bold
                                            text-2xl sm:text-2xl md:text-3xl xl:text-4xl
                                            text-left">
                                            Rivo</h2>
                            </div>

                            <div className="static min-h-[30vh] sm:min-h-[20vh] md:min-h-fit left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
                                <ul className="flex md:flex-row flex-col md:items-center md:gap-5 sm:gap-8 xl:gap-10
                                px-20 sm:px-40 md:px-0">
                                    <li className="text-xs sm:text-sm xl:text-base pt-2 sm:pt-2 md:pt-2 xl:pt-2
                                    hover:bg-green-900 hover:text-white hover:pt-2 hover:pb-2 hover:px-4">
                                        <Link href="/">HOME</Link>
                                    </li>

                                    <li className="text-xs sm:text-sm xl:text-base pt-2 sm:pt-2 xl:pt-2
                                    hover:bg-green-900 hover:text-white hover:pt-2 hover:pb-2 hover:px-4">
                                        <a href="/shop">SHOP</a>
                                    </li>

                                    <li className="text-xs sm:text-sm xl:text-base pt-2 sm:pt-2 xl:pt-2
                                    hover:bg-green-900 hover:text-white hover:pt-2 hover:pb-2 hover:px-4">
                                        <a href="/features">FEATURES</a>
                                    </li>

                                    <li className="text-xs sm:text-sm xl:text-base pt-2 sm:pt-2 xl:pt-2
                                    hover:bg-green-900 hover:text-white hover:pt-2 hover:pb-2 hover:px-4">
                                        <a href="/contact">CONTACT</a>
                                    </li>
                                </ul>
                            </div>

                           

                            <div className="px-3 sm:px-5 md:px-10 xl:px-14">
                            <Button className="bg-transparent border-2 border-green-900 text-black">LOGIN</Button>
                            
                             </div>

                                                        
                        </div>
                        
                
                    </nav>
            </section>
      
  );
}