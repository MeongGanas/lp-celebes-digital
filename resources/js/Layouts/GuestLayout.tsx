import InfobBar from "@/Components/MyComponent/Layout/InfoBar";
import Navbar from "@/Components/MyComponent/Layout/Navbar";
import Footer from "@/Components/MyComponent/Sections/Footer";
import { PropsWithChildren } from "react";

export default function GuestLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-neutral-50">
            <InfobBar />
            <Navbar />

            <main>{children}</main>

            <Footer />
        </div>
    );
}
