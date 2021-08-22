/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect, useRef } from "react";
import GoogleMapReact from "google-map-react";
import StoreMarker from "../components/storeMarker";
import MapLogos from '../components/mapLogos'

const mapOptions = {
  fullscreenControl: false,
  zoomControl: false,
  gestureHandling: "cooperative",
};

export default ({
  stores,
  setSelectedStore,
  selectedStore,
  selectedPlace,
  setMapApi,
  latlng,
  zoomed,
}) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 600;
  const storeRefs = stores.map(() => useRef());

  const handleClick = (store, key) => {
    setSelectedStore(store);
    storeRefs.map((ref) => ref.current.classList.remove("show-tooltip"));
    storeRefs[key].current.classList.toggle("show-tooltip");
  };

  const handleCloseClick = () => {
    storeRefs.map((ref) => ref.current.classList.remove("show-tooltip"));
  };

  useEffect(() => {
    if (!selectedStore) return;
    storeRefs.map((ref) => ref.current.classList.remove("show-tooltip"));
    storeRefs[selectedStore.id - 1].current.classList.add("show-tooltip");
  }, [storeRefs, selectedStore]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
      }}
      sx={{
        height: ["500px", "600px", "722px"]
      }}
    >

      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyB9BcZb7i1KQlno4qcjJBXWHZBAllvLKNc",
          libraries: 'places'
        }}
        center={latlng}
        zoom={zoomed ? zoomed : isMobile ? 3.2 : 4}
        hideSettings={true}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ maps }) => {
          setMapApi(maps);
        }}
        options={mapOptions}
      >
        {stores.map((store, i) => (
          <StoreMarker
            key={i}
            store={store}
            icon={store.icon}
            lat={store.lat}
            lng={store.lng}
            ref={storeRefs[i]}
            handleCloseClick={handleCloseClick}
            onClick={() => handleClick(store, i)}
          />
        ))}
      </GoogleMapReact>

      <div sx={{
        position: "absolute",
        top: '-3rem',
        width: "calc(100% + 4rem)",
        height: "100px",
        background: 'white',
        transform: 'translateX(-2rem) rotate(-3deg)'
      }} />

      <div sx={{
        position: "absolute",
        bottom: '-3rem',
        width: "calc(100% + 4rem)",
        height: "100px",
        background: 'white',
        transform: 'translateX(-2rem) rotate(-3deg)'
      }} />

      <div sx={{
        position: 'absolute',
        top: ['-13rem', '-13rem', '-11.5rem'],
      }}>
        <MapLogos />
      </div>
    </div>
  );
};
