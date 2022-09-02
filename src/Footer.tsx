const Footer = () => {
  //set the year of footer element dynamicly
  const footerDate = new Date();

  return (
    <footer className="p-5">
      <span className="font-semibold text-xs">
        Copyright &copy; {`DEVriq ${footerDate.getFullYear()}. Todos os direitos reservados.`}
      </span>
    </footer>
  );
};

export default Footer;
