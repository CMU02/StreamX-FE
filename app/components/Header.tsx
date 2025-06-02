import { Link } from "@remix-run/react";

export default function Header() {
    return (
        <header className="w-full bg-white border-b border-neutral-border-gray">
            <div className="container mx-auto flex items-center justify-between px-6 h-14">
                <Link to="/" className="h-full flex items-center">
                    <img src="/StreamXDarkLogo.svg" alt="StreamX Logo" className="max-h-full object-contain" />
                </Link>

                <div className="flex space-x-5 text-neutral-mainText text-sm">
                    <Link to="/login" className="hover:text-accent-mint">로그인</Link>
                    <Link to="/submit" className="hover:text-accent-mint">출품하기</Link>
                    <Link to="/cart" className="hover:text-accent-mint">장바구니</Link>
                </div>
            </div>

            <div className="border-t border-neutral-border-gray">
                <div className="container mx-auto flex justify-start px-6 py-3">
                    <div className="flex items-center gap-2 w-full max-w-md ml-[20%]">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="검색"
                                className="w-full border border-neutral-border-gray rounded-full px-4 py-2 pr-10 text-sm text-neutral-sub-text focus:outline-none focus:ring-2 focus:ring-accent-mint"
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-sub-text hover:text-accent-mint">
                                🔍
                            </button>
                        </div>
                        <button className="text-neutral-sub-text hover:text-accent-mint">
                            ⚙️
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}