import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
      <div className="flex bg-F6F4F4">
        <div>
          <div className="flex bg-white px-4 py-5 items-center w-screen shadow-lg ">
            <div className="flex items-center basis-1/3 ">
              <div className="font-extrabold pl-4">
                logoicon
              </div>
            </div>
            <div className="flex justify-end basis-1/3">
            </div>
            <div className="flex basis-1/3 justify-end font-lightbold">
              <div className="px-2 cursor-pointer hover:text-blue-500 active:text-blue-500"> 로그인</div>
              <div className="px-2 cursor-pointer hover:text-blue-500 active:text-blue-500"> 출품하기</div>
              <div className="px-2 cursor-pointer hover:text-blue-500 active:text-blue-500"> 장바구니</div>
            </div>
          </div>
        </div>
      </div>
  );
}
