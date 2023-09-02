const Brand = ({ logo, text }: { logo: string; text: string }) => {
  return (
    <div className="h-12 flex items-center">
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
