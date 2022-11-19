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
            href="https://goo.gl/maps/zGNyKQWp4NUuWDAP8"
            className="Footer__address"
          >
            Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi
            D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
          </a>
        </div>
        <a href="mailto:bilgi@tesodev.com" className="Footer__email">
          Email: bilgi@tesodev.com
        </a>
      </div>
      <div className="Footer__map" >
        <iframe
          title="tesodev map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2795620386214!2d28.88875941517743!3d41.01913932670571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1sen!2str!4v1664711077559!5m2!1sen!2str"
          loading="lazy"
          width="100%" 
          height="222px"
        />
      </div>
    </footer>
  );
}
