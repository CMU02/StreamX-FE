import { Link, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
    exp: number;
    iat: number;
    [key: string]: any;
}

export default function Header() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jwtDecode<DecodedToken>(token);
                const currentTime = Date.now() / 1000;
                if (decoded.exp && decoded.exp > currentTime) {
                    setIsLoggedIn(true);
                } else {
                    localStorage.removeItem("token");
                }
            } catch (e) {
                console.error("토큰 decode 실패:", e);
                localStorage.removeItem("token");
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/login");
    };

    return (
        <header className="w-full bg-white border-b border-neutral-border-gray">
            <div className="container mx-auto flex items-center justify-between px-6 h-14">
                <Link to="/" className="h-full flex items-center">
                    <img src="/StreamXDarkLogo.svg" alt="StreamX Logo" className="max-h-full object-contain" />
                </Link>

                <div className="flex space-x-5 text-neutral-mainText text-sm items-center">
                    {isLoggedIn ? (
                        <button onClick={handleLogout} className="hover:text-accent-red">로그아웃</button>
                    ) : (
                        <Link to="/login" className="hover:text-accent-mint">로그인</Link>
                    )}
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