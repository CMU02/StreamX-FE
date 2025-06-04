export default function SignupMainSection() {
    return (
        <div className="flex flex-col items-center">
            <section className="w-full max-w-sm bg-white px-6 py-8 text-center rounded shadow-sm">
                <h2 className="text-2xl font-bold mb-6">회원 가입</h2>

                <div className="flex flex-col gap-4 mt-6">
                    <input
                        type="text"
                        placeholder="아이디"
                        className="w-full border border-neutral-border-gray px-4 py-3 text-sm rounded focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="비밀번호"
                        className="w-full border border-neutral-border-gray px-4 py-3 text-sm rounded focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="이메일"
                        className="w-full border border-neutral-border-gray px-4 py-3 text-sm rounded focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="이름"
                        className="w-full border border-neutral-border-gray px-4 py-3 text-sm rounded focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="전화번호"
                        className="w-full border border-neutral-border-gray px-4 py-3 text-sm rounded focus:outline-none"
                    />
                </div>

                <div className="mt-8">
                    <button className="w-full bg-primary-button text-white py-3 text-base font-bold hover:opacity-90 rounded-none">
                        회원가입
                    </button>
                </div>
            </section>
        </div>
    );
}