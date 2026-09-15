export function ActiveMap() {
  return <figure
    className="active-map urban-map"
    role="group"
    aria-label="Illustrative Lagos-area map representing Nigeria as Mova's first launch market. No live location data is shown."
  >
    <div className="map-market-badge"><small>Launch market</small><strong>Nigeria</strong></div>
    <span className="map-ping map-ping--one" aria-hidden="true"><i/><b/></span>
    <span className="map-ping map-ping--two" aria-hidden="true"><i/><b/></span>
    <figcaption className="map-market-panel">
      <div><small>Launch market</small><strong>Nigeria</strong></div>
      <p>Mova is launching first in Nigeria, with more markets supported over time.</p>
    </figcaption>
    <div className="map-attribution">
      <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">© OpenStreetMap contributors · ODbL</a>
      <span> · </span>
      <a href="https://datacatalog.worldbank.org/search/dataset/0042080/nigeria-roads" target="_blank" rel="noreferrer">World Bank · CC BY 4.0</a>
    </div>
  </figure>;
}
