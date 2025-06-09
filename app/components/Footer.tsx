export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-neutral-border-gray py-10 px-6">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
                <div className="flex flex-col items-start gap-4 min-w-[200px]">
                    <div className="flex items-center gap-2">
                        <img src="/StreamXDarkLogo.svg" alt="StreamX Logo" className="h-15" />
                    </div>
                    <div className="flex gap-6 text-neutral-sub-text text-xl">
                        <span>X</span>
                        <span>📷</span>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-20 text-left text-sm text-neutral-mainText">
                    <div>
                        <h4 className="font-semibold mb-3">StreamX 마켓 에서 판매하기</h4>
                        <ul className="space-y-1">
                            <li>StreamX 마켓 가이드</li>
                            <li>작품 출품하기</li>
                            <li>2차 창작물 저작권에 관한 대응</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-3">StreamX 마켓 에서 구매하기</h4>
                        <ul className="space-y-1">
                            <li>StreamX 마켓이란?</li>
                            <li>결제 방법</li>
                            <li>거래 순서</li>
                            <li>구매 가이드</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-3">고객지원</h4>
                        <ul className="space-y-1">
                            <li>공지사항</li>
                            <li>자주 하는 질문</li>
                            <li>문의하기</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}