import { useEffect } from "react";
import { useNavigate, useSearchParams } from "@remix-run/react";

export default function OAuthCallback() {
    const [params] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const token = params.get("token");
        if (token) {
            localStorage.setItem("token", token); // JWT 저장
            alert("로그인 성공!");
            navigate("/"); // 홈 또는 원하는 페이지로 이동
        } else {
            alert("토큰이 없습니다.");
            navigate("/login");
        }
    }, [params, navigate]);

    return <p>로그인 처리 중입니다...</p>;
}