import classes from "../assets/css/footer.module.css";
import backgroundImage from "../assets/images/Background (1).png";
import mapPin from "../assets/images/MapPin.png";
import phoneImage from "../assets/images/Phone.png";

export default function Footer() {
  return (
    <footer>
      <div className={classes.footer}>
        <div className={classes.logoArea}>
          <div className={classes.frame}>
            <div className={classes.logo}>
              <img src={backgroundImage} alt="TET" />
              <p>TET</p>
            </div>
          </div>
          <div className={classes.contactArea}>
            <div className={classes.socialMedia}>
              <img src={mapPin} alt="Location" />
              <p className={classes.locText}>
                345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
              </p>
            </div>
            <div className={classes.socialMedia}>
              <img src={phoneImage} alt="Phone" />
              <p className={classes.locText}>+994 55 555 55 55</p>
            </div>
            <div className={classes.socialMedia}>
              <p className={classes.locText}>Social media:</p>
            </div>
          </div>
        </div>
        <menu></menu>
      </div>
    </footer>
  );
}
