import "./BoxIntro.scss";
import { Button } from "../Button";

export type BoxType = "first" | "second";

export interface IBox {
  boxType?: BoxType;
  children: React.ReactNode;
}

export const BoxIntro: React.FC<IBox> = ({ children, boxType }) => {
  return (
    <>
      {boxType === "first" && (
        <div className="boxCoverFirst">
          <div className="boxDetail">
            <span className="boxText">
              {children}
              <br />
            </span>
            <Button buttonType="filled" className="boxButton">
              Lihat Semua
            </Button>
          </div>
        </div>
      )}
      {boxType === "second" && (
        <div className="boxCoverSecond">
          <div className="boxDetail">
            <span className="boxText">
              {children}
              <br />
            </span>
            <Button buttonType="filled" className="boxButton">
              Lihat Semua
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
