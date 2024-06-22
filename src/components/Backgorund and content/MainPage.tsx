import { BackgroundAndContent } from "./BackgroundAndContent";

export function MainPage() {
  return (
    <div className="bg-black border border-red/[0.2] dark:border-white/[0.2] flex flex-col items-start relative h-[100.5vh]">
      <BackgroundAndContent  />
      <div className="p-0.3 bg-black w-full text-center text-white font-Lexend ">
        © 2023 Rize Labs, HQ Singapore
      </div>
    </div>
  );
}
