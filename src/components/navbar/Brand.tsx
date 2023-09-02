const Brand = ({
  logo,
  text,
  width = 45,
  objectFit = "object-scale-down",
}: {
  logo: string;
  text: string;
  width?: number;
  objectFit?: string;
}) => {
  return (
    <div className="flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 px-2">
      <a
        href="https://react.dev"
        className="flex gap-2 items-center"
        target="_blank"
      >
        <img src={logo} alt="" width={width} className={`${objectFit}`} />
        <span className="dark:text-white text-lg">{text}</span>
      </a>
    </div>
  );
};

export default Brand;
