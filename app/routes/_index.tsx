import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "StreamX" },
    { name: "description", content: "Welcome to StreamX" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center bg-neutral-background font-nanum-square-neo">
      <div className="text-4xl">
        <p className="font-[300] text-primary-dark">안녕하세요. StreamX</p>
        <p className="font-[400] text-primary-light">안녕하세요. StreamX</p>
        <p className="font-[500] text-accent-mint">안녕하세요. StreamX</p>
        <p className="font-[600] text-accent-yellow">안녕하세요. StreamX</p>
        <p className="font-[700] text-accent-red">안녕하세요. StreamX</p>
        <p className="font-[800] text-neutral-main-text">안녕하세요. StreamX</p>
        <p className="font-[900] text-neutral-sub-text">안녕하세요. StreamX</p>
      </div>
    </div>
  );
}
