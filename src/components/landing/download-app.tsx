
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const GooglePlayIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.32921 21.6707L13.8153 12.1847L4.32921 2.69873L4.32921 21.6707Z" fill="#00A0FF"/>
        <path d="M19.7423 14.9391L15.9083 12.1851L13.8143 14.2791L19.7423 17.7051C21.6423 16.4811 22.1863 13.7911 20.9623 11.8911L19.7423 14.9391Z" fill="#FFC107"/>
        <path d="M19.7423 6.66358L13.8143 10.0896L15.9083 12.1836L19.7423 9.42958C20.9663 7.52958 20.4223 4.83958 18.5223 3.61558L19.7423 6.66358Z" fill="#FF3D00"/>
        <path d="M2.47461 1.25L4.32861 2.699L13.8146 12.185L2.47461 23.525C1.04561 22.56 -0.000389099 20.803 1.39161e-05 18.913V5.823C1.39161e-05 3.933 1.04561 2.176 2.47461 1.25Z" fill="#4CAF50"/>
    </svg>
)

const AppleIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.2283 14.536C17.2443 14.536 17.2603 14.536 17.2763 14.536C18.1563 14.536 19.3403 14.184 20.3003 13.48C20.4763 14.888 19.8363 16.632 18.7323 17.928C17.8043 19.016 16.6523 19.64 15.6203 19.656C14.4683 19.656 13.9883 19.016 12.9883 19.016C11.9883 19.016 11.4923 19.624 10.3723 19.656C9.32428 19.672 8.12428 19.016 7.21228 17.928C5.23628 15.368 6.06028 11.4 8.24428 9.688C9.26028 8.848 10.5963 8.368 11.8923 8.352C12.9243 8.352 14.0283 8.848 14.9083 9.472M14.6523 6.76C15.2283 6.056 15.5483 5.12 15.4363 4.24C14.5563 4.288 13.5883 4.8 12.9643 5.488C12.3883 6.128 12.0203 7.088 12.1643 7.968C13.0603 8.016 14.0763 7.464 14.6523 6.76Z" />
    </svg>
)

export default function DownloadApp() {
    return (
        <section className="py-12 sm:py-20 lg:py-24 bg-secondary/30">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="max-w-md">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">
                            Download Crevings App & Start Ordering Today
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Available on iOS and Android
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                            <Link href="#" className={cn(buttonVariants({ size: "lg" }), "h-14 px-6 text-lg font-semibold animate-glow w-full sm:w-auto")}>
                               <GooglePlayIcon />
                               <span className="flex flex-col items-start -space-y-1">
                                    <span className="text-xs uppercase font-normal">Get it on</span>
                                    <span className="text-lg font-semibold">Google Play</span>
                               </span>
                            </Link>
                             <Link href="#" className={cn(buttonVariants({ size: "lg" }), "h-14 px-6 text-lg font-semibold animate-glow w-full sm:w-auto")}>
                               <AppleIcon />
                               <span className="flex flex-col items-start -space-y-1">
                                    <span className="text-xs font-normal">Download on the</span>
                                    <span className="text-lg font-semibold">App Store</span>
                               </span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                                <Image 
                                    src="https://placehold.co/300x600.png" 
                                    className="w-[272px] h-[572px] object-cover" 
                                    alt="Crevings App Screenshot" 
                                    width={272} 
                                    height={572}
                                    data-ai-hint="app screen"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
