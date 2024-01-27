// the component function
const Footer = () => {
  //The Components Returned JSX
  return <div className="footer">
    <h1>AdrickDev</h1>
    <p>Copyright &copy; 2024 AdrickDev, NV</p>
    <div className="links">
      <a href="#">Contact</a>
      <a href="">About Me</a>
      <a href="#">Resume</a>
    </div>
    <div className="social">
      <a href="#"><img src="/images/facebook.png"/></a>
      <a href="#"><img src="/images/linkedin.png"/></a>
      <a href="#"><img src="/images/github.png"/></a>
    </div>
  </div>;
};

// export the component
export default Footer;
