import { useNavigate } from "@remix-run/react";

export default function LoginMainSection() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center">
            <section className="w-full max-w-sm bg-white px-6 py-8 text-center rounded shadow-sm">
                <h2 className="text-2xl font-bold mb-6">로그인</h2>

                <div className="flex flex-col gap-4 mt-6">
                    <input
                        type="text"
                        placeholder="아이디"
                        className="w-full border border-neutral-border-gray px-4 py-3 text-sm rounded focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="비밀번호"
                        className="w-full border border-neutral-border-gray px-4 py-3 text-sm rounded focus:outline-none"
                    />
                    <div className="flex justify-start items-center text-sm text-neutral-sub-text">
                        <input type="checkbox" id="remember" className="mr-2" />
                        <label htmlFor="remember">아이디 기억하기</label>
                    </div>
                </div>

                <div className="mt-8">
                    <button className="w-full bg-primary-button text-white py-3 text-base font-bold hover:opacity-90 rounded">
                        로그인
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
                    <button className="w-full border bg-primary-button text-white hover:opacity-90 py-3 font-medium flex items-center justify-center gap-3 rounded">
                        <img src="/icons/google.svg" alt="google" className="w-5 h-5" />
                        구글 로그인
                    </button>
                </div>
            </section>
        </div>
    );
}