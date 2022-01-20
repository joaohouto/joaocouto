import moment from "moment";

const Footer = () => {
  return (
    <footer>
      <div>&copy; {moment().format("YYYY")} - João Couto</div>
    </footer>
  );
};

export default Footer;
