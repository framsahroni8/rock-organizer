import WhatsApp from "../../assets/logo/whatsapp.svg";
import Instagram from "../../assets/logo/instagram.svg";
import TiktTok from "../../assets/logo/tiktok.svg";
import "./Footer.scss";
import { NavBarFooter } from "../../ui-kit/NavbarFooter";
import { DetailsFooter } from "../../ui-kit/DetailsFooter";

export const Footer = () => {
  return (
    <div className="footer">
      <NavBarFooter />
      <div className="DetailsFooter">
        <div className="DetailsFooter-logo">
          <DetailsFooter DetailsTitle="Ikuti Sosial Media Kami">
            <div className="detailsLogo">
              <a
                href="https://api.whatsapp.com/send?phone=6287877271102&text=Halo%2C%20Rock%20Organizer%0ANama%20saya%20%3A%0ATanggal%20%2F%20Bulan%20Pernikahan%20%3A%0ATolong%20dibantu%20penawaran%20terbaiknya%F0%9F%98%8D%F0%9F%98%8D"
                target="__blank"
              >
                <img src={WhatsApp} alt="/" className="logoFooter" />
              </a>
              <a
                href="https://www.instagram.com/rock_organizer/"
                target="__blank"
              >
                <img src={Instagram} alt="/" className="logoFooter" />
              </a>
              <a href="https://www.tiktok.com/@rockorganizer" target="__blank">
                <img src={TiktTok} alt="/" className="logoFooter" />
              </a>
            </div>
          </DetailsFooter>
        </div>
        <div>
          <DetailsFooter DetailsTitle="PT. ROCK ORGANIZER DOTCOM">
            Modernland Jalan Raya Taman Golf Blok DG2 No 86 Cipondoh - Kota
            Tangerang
          </DetailsFooter>
        </div>
        <div>
          <DetailsFooter DetailsTitle="Ingin Konsultasi? Segera hubungi kami">
            WhatsApp : 0878-7727-1102 <br /> Instagram : @rock_organizer
          </DetailsFooter>
        </div>
      </div>
    </div>
  );
};
