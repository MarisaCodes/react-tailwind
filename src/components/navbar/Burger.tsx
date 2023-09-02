const Burger = ({ htmlFor = "main-menu" }: { htmlFor?: string }) => {
  return (
    <div className="flex-grow h-12 flex items-center md:hidden">
      <label
        htmlFor={htmlFor}
        className="ml-auto h-full w-fit px-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer flex justify-center flex-col gap-2"
      >
        <div className="h-0.5 w-8 rounded-full dark:bg-gray-300 bg-gray-800"></div>
        <div className="h-0.5 w-8 rounded-full dark:bg-gray-300 bg-gray-800"></div>
        <div className="h-0.5 w-8 rounded-full dark:bg-gray-300 bg-gray-800"></div>
      </label>
    </div>
  );
};

export default Burger;
