const Brand = ({ logo, text }: { logo: string; text: string }) => {
  return (
    <div className="flex items-center hover:bg-gray-200 dark:hover:bg-gray-700">
      <a
        href="https://react.dev"
        className="flex gap-2 items-center"
        target="_blank"
      >
        <img src={logo} alt="" />
        <span className="dark:text-white text-lg">{text}</span>
      </a>
    </div>
  );
};

export default Brand;
