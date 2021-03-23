import imgFullStar from "../star_full.svg";
import imgEmptyStar from "../star_empty.svg";
import imgHalfStar from "../star_half.svg";

const Rating = (props) => {

  let rate = props.data.rate;
  let rateAr = [];
  rateAr = rate.split(".");

  let showStarsAr = [];

  let fullstar;
  fullstar = rateAr[0];

  let halfstar;
  halfstar = rateAr[1];

  let emptystar;

  
// ======== Berechnung Anzahl der jeweiligen Sterne

  if (halfstar === "" || halfstar <= 0 || halfstar === undefined) {
    halfstar = 0;
    emptystar = 10 - fullstar;
  } else if (halfstar >= 1) {
    halfstar = 1;
    emptystar = 10 - fullstar - halfstar;
  }


// ======== Push der Sterne in Array

  for (let i = 0; i < fullstar; i++) {
    let showFullstar = (
      <img
        key={"full" + i}
        style={{ width: "auto", height: "20px" }}
        src={imgFullStar}
        alt=""
      ></img>
    );
    showStarsAr.push(showFullstar);
  }

  if(halfstar){
    showStarsAr.push(<img
      key={"half"}
      style={{ width: "auto", height: "20px" }}
      src={imgHalfStar}
      alt=""
    ></img>);
  }

  for (let i = 0; i < emptystar; i++) {
    let showEmptyStern = (
      <img
        key={"empty" + i}
        style={{ width: "auto", height: "20px" }}
        src={imgEmptyStar}
        alt=""
      ></img>
    );
    showStarsAr.push(showEmptyStern);
  }

  // ======== Return

  return (
    <div className="rating">
       {showStarsAr.map((item, index) => item)}
    </div>
  );
};

export default Rating;