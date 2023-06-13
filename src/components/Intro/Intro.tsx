import { BoxIntro } from "../../ui-kit";
import { ImageBox } from "../../ui-kit/ImageBox";
import "./Intro.scss";
import Place1 from "../../assets/imageBox/place1.jpg";
import Place2 from "../../assets/imageBox/place2.jpg";
import Place3 from "../../assets/imageBox/place3.jpg";
import Place4 from "../../assets/imageBox/place4.jpg";
import Place5 from "../../assets/imageBox/place5.jpg";
import Reason from "../../ui-kit/Reason";
import { TiktokVideo } from "../../ui-kit/TiktokVideo";

export const Intro = () => {
  return (
    <div className="justify-center items-center min-h-screen introBackground">
      <div className="detailTitle">
        <BoxIntro boxType="first">
          Paket <br /> All In One
        </BoxIntro>
      </div>
      <div className="detailContainer">
        <div className="cardContainer">
          <ImageBox
            src={Place1}
            alt="/"
            placeLabel="Jakarta"
            priceLabel="Rp8.000.000"
          />
          <ImageBox
            src={Place2}
            alt="/"
            placeLabel="Bandung"
            priceLabel="Rp.10.000.000"
          />
          <ImageBox
            src={Place3}
            alt="/"
            placeLabel="Tangerang"
            priceLabel="Rp.40.000.000"
          />
          <ImageBox
            src={Place4}
            alt="/"
            placeLabel="Depok"
            priceLabel="Rp.80.000.000"
          />
        </div>
      </div>
      <div className="detailTitle">
          <BoxIntro boxType="first">
            Paket <br /> All In One
          </BoxIntro>
        </div>
      <div className="detailContainerDown">
        <div className="cardContainer">
          <ImageBox
            src={Place1}
            alt="/"
            placeLabel="Jakarta"
            priceLabel="Rp8.000.000"
          />
          <ImageBox
            src={Place2}
            alt="/"
            placeLabel="Bandung"
            priceLabel="Rp.10.000.000"
          />
          <ImageBox
            src={Place3}
            alt="/"
            placeLabel="Tangerang"
            priceLabel="Rp.40.000.000"
          />
          <ImageBox
            src={Place4}
            alt="/"
            placeLabel="Depok"
            priceLabel="Rp.80.000.000"
          />
        </div>
      </div>

      <Reason />
    </div>
  );
};
