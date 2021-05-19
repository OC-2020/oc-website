/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect, useRef } from "react";
import GoogleMapReact from "google-map-react";
import StoreMarker from "../components/storeMarker";

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
        height: ["500px", "600px", "722px"],
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyB9BcZb7i1KQlno4qcjJBXWHZBAllvLKNc",
          libraries: 'places'
        }}
        center={latlng}
        zoom={zoomed ? zoomed : isMobile ? 4.5 : 5.7}
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

      <svg
        className="slanted-top"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100px",
        }}
      >
        <polygon fill="white" points="0,0 0,100 100,0" />
      </svg>

      <svg
        className="slanted-bottom"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100px",
        }}
      >
        <polygon fill="white" points="100,0 100,100 0,100" />
      </svg>
    </div>
  );
};
