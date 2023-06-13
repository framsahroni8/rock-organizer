import { Button } from "../../ui-kit";
import "./Background.scss";

export const Background = () => {
  return (
    <div className="p-2 flex justify-center items-center min-h-screen photo-background">
      <div className="w-screen">
        <h2 className="homeText">
          Jadikan Pernikahan Kamu Bebas Khawatir
          <br />
          <span>
            dan
            <br />
            <span> Mendapatkan Pilihan Terbaik Bersama</span>
            <br />
            <span className="homeText-rock"> Rock Organizer</span>
          </span>
        </h2>
        <div className="buttonBgs">
        <a href="https://api.whatsapp.com/send?phone=6287877271102&text=Halo%2C%20Rock%20Organizer%0ANama%20saya%20%3A%0ATanggal%20%2F%20Bulan%20Pernikahan%20%3A%0ATolong%20dibantu%20penawaran%20terbaiknya%F0%9F%98%8D%F0%9F%98%8D" target="__blank">
          <Button buttonType="filled" className="buttonBg absolute left-[50%] top[50%]">
          Konsultasikan Gratis
          </Button> </a>
        </div>
      </div>
    </div>
  );
};
