export default function NavBar() {
  return (
    <div className="z-10 fixed h-20 bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 w-screen flex justify-center items-center p-5">
      <span className="font-main font-bold text-white text-2xl">
        Right click to navigate
      </span>
    </div>
  );
}
