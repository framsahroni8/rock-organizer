import { ReasonDetail } from "../Reason-detail";
import "./Reason.scss";
import BestTeam from "../../assets/reasonImage/BestTeam.png";
import Solution from "../../assets/reasonImage/Solution.png";
import BestPrice from "../../assets/reasonImage/bestPrice.png";

export const Reason = () => {
  return (
    <div className="reasonBox">
      <div className="reasonHeader">
        <span>MENGAPA MEMILIH ROCK ORGANIZER?</span>
      </div>
      <div className="reasonDetail">
        <ReasonDetail
          src={Solution}
          alt="/"
          reasonTitle="All in Wedding Solution"
          reasonBody="Nikah di venue impian jadi lebih murah dengan paket pernikahan All-in-One lengkap dengan vendor berkualitas"
        />
        <ReasonDetail
          src={BestPrice}
          alt="/"
          reasonTitle="Best Price Guarantee"
          reasonBody="Kami pastikan budget yang dikeluarkan untuk dream wedding kalian adalah yang terbaik dan paling sesuai dengan apa yang kalian inginkan"
        />
        <ReasonDetail
          src={BestTeam}
          alt="/"
          reasonTitle="Best Team Companion"
          reasonBody="Dimulai dari perencanaan hingga pelaksanaan resepsi, team dari ROCK ORGANIZER akan mendampingi sepenuhnya untuk memastikan segalanya berjalan dengan lancar"
        />
      </div>
    </div>
  );
};
