import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "StreamX" },
    { name: "description", content: "Welcome to StreamX" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center bg-white font-nanum-square-neo">
      <div className="text-4xl">
        <p className="font-[300]">안녕하세요. Hello world</p>
        <p className="font-[400]">안녕하세요. Hello world</p>
        <p className="font-[500]">안녕하세요. Hello world</p>
        <p className="font-[600]">안녕하세요. Hello world</p>
        <p className="font-[700]">안녕하세요. Hello world</p>
        <p className="font-[800]">안녕하세요. Hello world</p>
        <p className="font-[900]">안녕하세요. Hello world</p>
      </div>
    </div>
  );
}
