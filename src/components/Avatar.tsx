import { ReactNode, useEffect, useRef, useState } from "react";

const Avatar = ({
  children,
  avatar,
  objectFit = "object-cover",
  width = 45,
  id = "avatar",
}: {
  children?: ReactNode;
  avatar: string;
  objectFit?: string;
  width?: number;
  id?: string;
}) => {
  const menu = useRef(null as HTMLInputElement | null);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    function handleDoc(e: Event) {
      setChecked(menu.current?.checked!);
      if (!menu.current?.parentElement?.contains(e.target as HTMLElement)) {
        const checkbox: HTMLInputElement | null = menu.current;
        checkbox ? (checkbox.checked = false) : null;
      }
    }
    document.addEventListener("click", (e) => handleDoc(e));
    return () => {
      document.removeEventListener("click", (e) => handleDoc(e));
    };
  }, []);

  return (
    <div>
      <label htmlFor={id}>
        <img
          src={avatar}
          alt="user avatar/profile picture"
          width={width}
          className={`rounded-full aspect-square ${objectFit} cursor-pointer outline outline-2 outline-offset-2 ${
            checked && children ? "outline-blue-500" : "outline-gray-500"
          }`}
        />
      </label>

      <input
        type="checkbox"
        name={id}
        id={id}
        className="hidden peer group"
        ref={menu}
      />

      {children && (
        <div className="hidden peer-checked:flex items-center flex-col gap-5 w-fit p-4 px-10 absolute bg-white border-gray-400 dark:bg-gray-800 border-2 dark:border-gray-700 rounded-md z-20">
          {children}
        </div>
      )}
    </div>
  );
};

export default Avatar;
