/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import Layout from "../components/layout"
import GoogleMapReact from "google-map-react"
import stores from "../utils/stores"
import Cart from "../assets/cart.svg"
import Tea from "../assets/tea.svg"

const Store = ({ icon, lat, lng, onClick }) => {
  return icon === "cart" ? (
    <Cart onClick={onClick} lat={lat} lng={lng} />
  ) : (
    <Tea onClick={onClick} lat={lat} lng={lng} />
  )
}

const mapOptions = {
  fullscreenControl: false,
  zoomControl: false,
}

export default () => {
  const handleClick = (store) => {
    console.log(store)
  }

  return (
    <Layout>
      <Container>
        <h1>STORE LOL</h1>

        <div
          style={{
            position: "relative",
            height: "722px",
            width: "100%",
            ".gm-fullscreen-control": {
              border: "2px solid tomato !important",
            },
          }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyB9BcZb7i1KQlno4qcjJBXWHZBAllvLKNc",
            }}
            defaultCenter={{
              lat: 43.65317772992091,
              lng: -79.3831899644022,
            }}
            defaultZoom={13}
            hideSettings={true}
            options={mapOptions}
          >
            {stores.map((store, i) => (
              <Store
                key={i}
                icon={store.icon}
                lat={store.lat}
                lng={store.lng}
                onClick={handleClick(store)}
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
      </Container>
    </Layout>
  )
}
