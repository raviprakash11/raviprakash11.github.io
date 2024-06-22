import bell from "../../images/bell.jpg";
import bell1 from "../../images/belligundi.jpg";
import koda from "../../images/Kodachadri-2.webp";

export default function GoingJourney() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ fontSize: "32px" }}>How fares the journey thus far?</div>
      <div>An update on your current mountain adventures and experiences.</div>
      <div>
        <img src={bell} alt="m" width="100%" height="auto" />
        <img src={bell1} alt="m" width="100%" height="auto" />
        <img src={koda} alt="m" width="100%" height="auto" />
      </div>
    </div>
  );
}
