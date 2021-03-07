/** @jsx jsx */
import { jsx } from "theme-ui"
import { useRef } from "react"
import GoogleMapReact from "google-map-react"
import stores from "../utils/stores"
import Store from "../components/store"

const mapOptions = {
  fullscreenControl: false,
  zoomControl: false,
}

export default () => {
  const mapRef = useRef()
  const storeRefs = stores.map(() => useRef())

  const handleClick = (ref) => {
    ref.current.classList.toggle("show-tooltip")
  }

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
        }}
        defaultCenter={{
          lat: 43.65314637810758,
          lng: -79.38177755709162,
        }}
        defaultZoom={12}
        hideSettings={true}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map
        }}
        options={mapOptions}
      >
        {stores.map((store, i) => (
          <Store
            key={i}
            store={store}
            icon={store.icon}
            lat={store.lat}
            lng={store.lng}
            ref={storeRefs[i]}
            onClick={() => handleClick(storeRefs[i])}
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
  )
}
