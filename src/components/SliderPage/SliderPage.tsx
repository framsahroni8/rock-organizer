import { SliderDetail } from "../../ui-kit/Slider";
import "./SliderPage.scss";
import Promo1 from "../../assets/promo/promo1.jpg";
import Promo2 from "../../assets/promo/promo2.png";
import Promo3 from "../../assets/promo/promo3.png";
import Promo4 from "../../assets/promo/promo4.png";
import Bonus1 from "../../assets/bonus/bonus1.png";
import Bonus2 from "../../assets/bonus/bonus2.png";
import Bonus3 from "../../assets/bonus/bonus3.png";

export const SliderPage: React.FC = () => {
  const promo = [Promo1, Promo2, Promo3, Promo4];

  const bonus = [Bonus1, Bonus2, Bonus3];

  return (
    <div className="sliderContainer">
      <div className="sliderText">
        <span>
          Lebih Murah, Lebih Mudah, Lebih Mewah <br />
          dengan paket Rock Organizer
        </span>
      </div>
        <div className="sliderImage">
          <SliderDetail images={promo} />
          <SliderDetail images={bonus} />
        </div>
    </div>
  );
};
