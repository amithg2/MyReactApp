import Manufacter from "./Manufacter";
import "./Manufacters.css"; 

export default function Manufacters({ data }) {
  const manuList = data.map((manu) => (
    <Manufacter manu={manu} key={manu.Mfr_ID} />
  ));
  return (
    <>
      <h1>Manufacters</h1>
      <div className="Manufacters">{manuList}</div>
    </>
  );
}
