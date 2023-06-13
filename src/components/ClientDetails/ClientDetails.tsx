import { ClientBox } from "../../ui-kit/ClientBox";
import Client1 from "../../assets/clients/DitaImam.jpg";
import Client2 from "../../assets/clients/EgaBob.jpg";
import Client3 from "../../assets/clients/LindaHelmy.jpg";
import "./ClientDetails.scss";
import TiktokVideo from "../../ui-kit/TiktokVideo";
import { Button, SliderDetail } from "../../ui-kit";

export const ClientDetails: React.FC = () => {
  const Client = [Client1, Client2, Client3];
  return (
    <div className="detailsBackground">
      <div className="detailsText">
        <span>Klien Rock Organizer</span>
      </div>
      <div className="sliderClient">
        <SliderDetail images={Client}/>
      </div>
      <div className="detailsImage">
        <ClientBox src={Client1} alt="Dita & Imam" />
        <ClientBox src={Client2} alt="Ega & Bob" />
        <ClientBox src={Client3} alt="Linda & Helmy" />
      </div>
      <div className="detailsTiktok">
        <div className="detailsTiktok-text">
          <span>Temukan Cerita Lainnya di Akun Rock-Organizer</span>
          <div className="detailsTiktok-button"></div>

          <a href="https://www.tiktok.com/@rockorganizer" target="__blank">
            <Button className="buttonClick">Tiktok Rock Organizer</Button>
          </a>
        </div>
        <TiktokVideo src="https://www.tiktok.com/embed/v2/7205032531157077274" />
        <TiktokVideo src="https://www.tiktok.com/embed/v2/7206300079609629979" />
      </div>
    </div>
  );
};
