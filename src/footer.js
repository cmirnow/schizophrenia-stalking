const Footer = () => {
  const startYear = 2022;
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p className="link-action">
        <a
          href="https://blog.masterpro.ws/schizophrenia-stalking-online-test"
          title="Психоаналитические этюды"
          target="_blank"
          rel="noreferrer"
        >
          Психоаналитические этюды.{" "}
        </a>
        Masterpro.ws ©{" "}
        {startYear === currentYear ? startYear : startYear + "-" + currentYear}
      </p>
    </div>
  );
};

export default Footer;
