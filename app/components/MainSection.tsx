export default function MainSection() {
    return (
        <main className="container mx-auto px-4 py-20 text-center">
            <h2 className="text-lg text-neutral-mainText font-medium mb-2">
                나만의 AI 스트리머를 위한 아바타샵
            </h2>
            <h1 className="text-4xl font-extrabold text-neutral-mainText flex items-center justify-center gap-2">
                <img src="/StreamXDarkLogo.svg" alt="X" className="h-30" />
                Market
            </h1>

            <div className="relative mt-16 h-72 flex justify-center items-center">
                <div className="relative w-[640px] h-full translate-x-10">
                    <img src="/test.png" alt="" className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-48 object-cover rounded-xl shadow z-0" />
                    <img src="/test.png" alt="" className="absolute left-24 top-1/2 -translate-y-1/2 w-36 h-56 object-cover rounded-xl shadow-md z-10" />
                    <img src="/test.png" alt="" className="absolute left-48 top-1/2 -translate-y-1/2 w-44 h-64 object-cover rounded-2xl shadow-xl z-20" />
                    <img src="/test.png" alt="" className="absolute left-78 top-1/2 -translate-y-1/2 w-36 h-56 object-cover rounded-xl shadow-md z-10" />
                    <img src="/test.png" alt="" className="absolute left-[26.5rem] top-1/2 -translate-y-1/2 w-32 h-48 object-cover rounded-xl shadow z-0" />
                </div>
            </div>

            <div className="mt-10 flex justify-center">
                <button className="bg-neutral-lightgray text-sm text-neutral-sub-text px-6 py-2 rounded-md hover:bg-neutral-border-gray">
                    모든 아바타 보러가기
                </button>
            </div>
        </main>
    );
}