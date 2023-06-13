import { ArtikelBox } from "../../ui-kit/ArtikelBox";
import "./Artikel.scss";
import Artikel1 from "../../assets/WeddingArtikel/Dita&Imam.jpg";
import Artikel2 from "../../assets/WeddingArtikel/Malinda&Helmy.png";
import Artikel3 from "../../assets/WeddingArtikel/Ega&Bob.jpg";

export const Artikel = () => {
  return (
    <div className="artikelContainer">
      <div className="artikelTitle">
        <div className="title">
          <span>Artikel untuk inspirasi pernikahanmu</span>
        </div>
        <div className="link">
          <span>Lihat semua artikel</span>
        </div>
      </div>
      <div className="artikelBox">
        <ArtikelBox
          src={Artikel1}
          alt="/"
          artDate="19 Des"
          artTitle="Dita & Imam"
        >
          Pernikahan Dita & Imam yang yang terlaksana di dengan paket All-in-one
          Rock Organizer.
        </ArtikelBox>
        <ArtikelBox
          src={Artikel2}
          alt="/"
          artDate="13 Mar"
          artTitle="Malinda & Helmy"
        >
          Pernikahan Malinda & Helmy yang terlaksana di dengan paket All-in-one
          Rock Organizer.
        </ArtikelBox>
        <ArtikelBox
          src={Artikel3}
          alt="/"
          artDate="04 Feb"
          artTitle="Ega & Bob"
        >
          Pernikahan Ega & Bob yang terlaksana di dengan paket All-in-one Rock
          Organizer.
        </ArtikelBox>
      </div>
    </div>
  );
};
