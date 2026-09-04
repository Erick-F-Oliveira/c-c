const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200/50 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover" href={"/privacy"}>
          Privacidade
        </a>
        <a className="link link-hover">Contact</a>
      </nav>
    </footer>
  );
};

export default Footer;
