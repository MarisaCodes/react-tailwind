import { useEffect, useRef } from "react";

const Burger = () => {
  const refArr: HTMLDivElement[] = [];
  const menusRef = useRef(refArr);
  const burger = useRef(null as HTMLDivElement | null);

  useEffect(() => {
    const menus: NodeListOf<HTMLDivElement> | undefined =
      document.querySelectorAll("#burger ~ div");
    let i = 0;
    menus?.forEach((menu) => {
      menusRef.current[i] = menu;
      i += 1;
    });
    burger.current?.querySelector("div")?.addEventListener("click", () => {
      i = 0;
      console.log(i, menusRef.current[0].style.display);
      menusRef.current.forEach((ref) => {
        if (ref.style.display === "none") {
          i === 0
            ? (ref.style.display = "block")
            : (ref.style.display = "flex");
        } else {
          ref.style.display = "none";
        }
        i += 1;
      });
    });
    document.addEventListener("click", (e) => {
      if (
        !burger.current?.parentElement?.contains(e.target as HTMLElement) &&
        burger.current?.querySelector("div") !== e.target
      ) {
        console.log(menusRef.current);
        menusRef.current.forEach((ref) => {
          ref.style.display = "none";
        });
      }
    });
  }, []);
  return (
    <div
      className="flex-grow h-12 flex items-center md:hidden"
      id="burger"
      ref={burger}
    >
      <div className="ml-auto h-full w-fit px-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer flex justify-center flex-col gap-2">
        <div className="h-0.5 w-8 rounded-full dark:bg-gray-300 bg-gray-800"></div>
        <div className="h-0.5 w-8 rounded-full dark:bg-gray-300 bg-gray-800"></div>
        <div className="h-0.5 w-8 rounded-full dark:bg-gray-300 bg-gray-800"></div>
      </div>
    </div>
  );
};

export default Burger;
