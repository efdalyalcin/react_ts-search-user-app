import "./Footer.scss";
import image from "../../../assets/img/footer.png";

export default function Footer() {
  return (
    <footer className="Footer">
      <img src={image} alt="office desk" className="Footer__image" />
      <div className="Footer__contacts">
        <div>
          <h3 className="Footer__title">İletişim</h3>
          <a
            href="https://goo.gl/maps/r71SUwacQ8MVE9vm7"
            className="Footer__address"
          >
            Zühtüpaşa, Bağdat Cd. No:2, 34724 Kadıköy/İstanbul
          </a>
        </div>
        <a href="mailto:yalcinefdal@gmail.com" className="Footer__email">
          Email: yalcinefdal@gmail.com
        </a>
      </div>
      <div className="Footer__map">
        <iframe
          title="Home-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6023.530471138655!2d29.038994569927077!3d40.98665257885946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab870784d1389%3A0x2bf4921764859e70!2sUlker%20Fenerbahce%20Sukru%20Saracoglu%20Stadium!5e0!3m2!1sen!2str!4v1668855043575!5m2!1sen!2str"
          width="100%"
          height="222px"
          loading="lazy"
        />
      </div>
    </footer>
  );
}
