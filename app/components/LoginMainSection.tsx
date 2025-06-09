import { useNavigate } from "@remix-run/react";
import { useState } from "react";

export default function LoginMainSection() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/auth/signIn", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                alert("로그인 실패");
                return;
            }

            const data = await response.json();
            localStorage.setItem("token", data.token);
            navigate("/");
        } catch (err) {
            console.error("로그인 에러:", err);
            alert("오류가 발생했습니다.");
        }
    };

    const handleGoogleLogin = () => {
        // ✅ 직접 백엔드 구글 OAuth2 경로로 이동
        window.location.href = "http://localhost:8080/oauth2/authorization/google";
    };

    return (
        <div className="flex flex-col items-center">
            <section className="w-full max-w-sm bg-white px-6 py-8 text-center rounded shadow-sm">
                <h2 className="text-2xl font-bold mb-6">로그인</h2>

                <div className="flex flex-col gap-4 mt-6">
                    <input
                        type="email"
                        placeholder="이메일"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-neutral-border-gray px-4 py-3 text-sm rounded focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-neutral-border-gray px-4 py-3 text-sm rounded focus:outline-none"
                    />
                    <div className="flex justify-start items-center text-sm text-neutral-sub-text">
                        <input type="checkbox" id="remember" className="mr-2" />
                        <label htmlFor="remember">아이디 기억하기</label>
                    </div>
                </div>

                <div className="mt-8">
                    <button
                        onClick={handleLogin}
                        className="w-full bg-primary-button text-white py-3 text-base font-bold hover:opacity-90 rounded"
                    >
                        로그인
                    </button>
                    <button
                        onClick={handleGoogleLogin}
                        className="mt-4 w-full border bg-primary-button text-white hover:opacity-90 py-3 font-medium flex items-center justify-center gap-3 rounded"
                    >
                        <img src="/public/google.png" alt="google" className="w-5 h-5" />
                        구글 로그인
                    </button>
                </div>
            </section>

            <section className="w-full max-w-sm mt-16 bg-white px-6 py-8 text-center rounded shadow-sm">
                <h2 className="text-2xl font-bold mb-6">회원가입</h2>

                <div className="flex flex-col gap-4 mt-6">
                    <button
                        onClick={() => navigate("/signup")}
                        className="w-full border bg-primary-button text-white hover:opacity-90 py-3 font-medium rounded"
                    >
                        회원가입
                    </button>
                </div>
            </section>
        </div>
    );
}