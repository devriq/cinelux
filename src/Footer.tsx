const Footer = () => {
  //set the year of footer element dynamicly
  const footerDate = new Date();

  return (
    <footer className="h-[10vh] grid text-center text-xs place-items-center">
      <span className="font-semibold">
        Copyright &copy; {`DEVriq ${footerDate.getFullYear()}. Todos os direitos reservados.`}
      </span>
    </footer>
  );
};

export default Footer;
