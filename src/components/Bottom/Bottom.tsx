import { Button } from "../../ui-kit";
import "./Bottom.scss";

export const Bottom = () => {
  return (
    <div className="bottom">
      <div className="bottomText">
        <span>
          Hemat Budget Pernikahan Kamu
          <br /> dengan Rock Organizer
        </span>
      </div>
      <div className="bottomButton">
        <a href="https://api.whatsapp.com/send?phone=6287877271102&text=Halo%2C%20Rock%20Organizer%0ANama%20saya%20%3A%0ATanggal%20%2F%20Bulan%20Pernikahan%20%3A%0ATolong%20dibantu%20penawaran%20terbaiknya%F0%9F%98%8D%F0%9F%98%8D" target="__blank">
          <Button buttonType="filled" className="tombol absolute left-[50%] top[50%]">
            Konsultasikan Caranya disini
          </Button>
        </a>
      </div>
    </div>
  );
};
