import Header from "~/components/Header";
import Footer from "~/components/Footer";
import LoginMainSection from "~/components/LoginMainSection";

export default function LoginPage() {
    return (
        <>
            <Header />
            <main className="bg-backgrounds-card py-20 px-4 min-h-screen">
                <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto">
                    <div />
                    <LoginMainSection />
                    <div />
                </div>
            </main>
            <Footer />
        </>
    );
}