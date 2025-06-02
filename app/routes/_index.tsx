import type { MetaFunction } from "@remix-run/node";
import Header from "../components/Header";
import MainSection from "~/components/MainSection";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "StreamX" },
    { name: "description", content: "Welcome to StreamX" },
  ];
};

export default function Index() {
    return (
        <div className="w-full min-h-screen bg-white">
            <div className="max-w-[1920px] mx-auto">
                <Header />

                <div className="w-full bg-backgrounds-card">
                    <MainSection />
                </div>

                <Footer />
            </div>
        </div>
    );
}
