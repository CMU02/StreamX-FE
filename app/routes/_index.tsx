import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
      <div className="flex bg-[#F6F4F4] min-h-screen">
        <header className="w-full bg-white shadow-lg">
          <nav className="container mx-auto flex items-center justify-between px-6 py-4">

            <div className="font-extrabold text-lg">logoicon</div>

            <div className="flex space-x-4 text-gray-700">
              <Link to="/login" className="hover:text-blue-500 active:text-blue-500">로그인</Link>
              <Link to="/submit" className="hover:text-blue-500 active:text-blue-500">출품하기</Link>
              <Link to="/cart" className="hover:text-blue-500 active:text-blue-500">장바구니</Link>
            </div>
          </nav>
        </header>
      </div>
  );
}
