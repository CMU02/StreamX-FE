import { useNavigate } from "@remix-run/react";
import { useState } from "react";

export default function SignupMainSection() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSignup = async () => {
        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password, phoneNumber }),
            });

            if (!response.ok) {
                const message = await response.text(); // ← 여기서 에러 메시지 확인
                alert("회원가입 실패: " + message);
                return;
            }

            alert("회원가입 성공! 로그인 페이지로 이동합니다.");
            navigate("/login");
        } catch (err) {
            alert("에러 발생");
            console.error(err);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <section className="w-full max-w-sm bg-white px-6 py-8 text-center rounded shadow-sm">
                <h2 className="text-2xl font-bold mb-6">회원 가입</h2>

                <div className="flex flex-col gap-4 mt-6">
                    <input
                        type="text"
                        placeholder="이름"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border border-neutral-border-gray px-4 py-3 text-sm rounded focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-neutral-border-gray px-4 py-3 text-sm rounded focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="이메일"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-neutral-border-gray px-4 py-3 text-sm rounded focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="전화번호"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full border border-neutral-border-gray px-4 py-3 text-sm rounded focus:outline-none"
                    />
                </div>

                <div className="mt-8">
                    <button
                        onClick={handleSignup}
                        className="w-full bg-primary-button text-white py-3 text-base font-bold hover:opacity-90 rounded-none"
                    >
                        회원가입
                    </button>
                </div>
            </section>
        </div>
    );
}