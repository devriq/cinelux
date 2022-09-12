const Footer = () => {
  //set the year of footer element dynamicly
  const footerDate = new Date();

  return (
    <footer className="my-4 w-full bg-[#111] flex mx-auto p-2">
      <span className="text-xs mx-auto">
        Copyright &copy; <a target="_blank" href="https://github.com/devriq">DEVriq</a> {`${footerDate.getFullYear()}.`}
      </span>
    </footer>
  );
};

export default Footer;
