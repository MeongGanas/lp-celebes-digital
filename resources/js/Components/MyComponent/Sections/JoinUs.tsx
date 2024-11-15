import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";

export default function JoinUs() {
    return (
        <div className="font-jakarta container px-5 py-20">
            <div className="relative overflow-hidden rounded-xl border-4 border-primary bg-[url('/assets/image/join_bg.png')] bg-cover bg-center p-10 md:p-16 my-shadow">
                <div className="space-y-5 text-center lg:max-w-[575px] lg:text-left">
                    <h1 className="text-3xl font-bold leading-[120%] md:text-4xl lg:text-[42px]">
                        Bergabunglah Bersama Kami Sekarang!
                    </h1>
                    <p className="lg:max-w-[431px]">
                        Temukan solusi terbaik untuk kebutuhan bisnis Anda
                        dengan tim ahli kami.
                    </p>
                    <Button
                        asChild
                        className="hover:bg-red bg-primary p-6 font-semibold my-shadow transition hover:scale-105"
                    >
                        <Link href="/">Hubungi Kami</Link>
                    </Button>
                </div>
                <img
                    src="/assets/image/join_circle.png"
                    className="absolute right-0 top-0 hidden lg:block h-full"
                    alt="circle"
                />
            </div>
        </div>
    );
}
