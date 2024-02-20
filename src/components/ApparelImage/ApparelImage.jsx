import "./ApparelImage.css";
import heroMobile from "../../assets/images/hero-mobile.jpg";
import heroDesktop from "../../assets/images/hero-desktop.jpg";

const ApparelImage = () => {
  return (
    <picture className="apparelImage">
      <source media="(max-width: 768px)" srcSet={heroMobile}></source>
      <img src={heroDesktop} />
    </picture>
  );
};

export default ApparelImage;
