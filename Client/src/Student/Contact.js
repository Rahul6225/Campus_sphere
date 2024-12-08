import ReactGA from "react-ga4";
const Contact = () => {
  ReactGA.event({
    category: "Contact page",
    action: "clicked",
  });
  return (
      <h1 className='white-heading'>Coming Soon !!</h1>
  );
};

export default Contact;