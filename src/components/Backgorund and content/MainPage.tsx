import { BackgroundAndContent } from "./BackgroundAndContent";

export function MainPage() {
  return (
    <div className="bg-black flex flex-col items-start relative h-[100vh] xl:h-[96.8vh] m-0">
      <BackgroundAndContent />
      <div className="p-[0.05vh] m-0 bg-black w-[100vw] text-center text-white font-Lexend ">
        © 2023 Rize Labs, HQ Singapore
      </div>
    </div>
  );
}
