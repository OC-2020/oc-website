/** @jsx jsx */
import { jsx, Styled, Container, Flex } from "theme-ui"
import { useState, useEffect } from "react"
import Layout from "../components/layout"
import Map from "../sections/map"
import Newsletter from "../sections/newsletter"
import Partners from "../sections/partners"
import Forms from "../sections/forms"
import CartOutline from "../assets/cart_outline.svg"
import TeaOutline from "../assets/tea_outline.svg"
import StoreTypeahead from "../components/StoreTypeahead"
import storeData from "../utils/storeData"

export default () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 600
  const [latlng, setLatlng] = useState(
    isMobile
      ? {
          lat: 41.74295282305372,
          lng: -70.9589970265489,
        }
      : {
          lat: 44.74295282305372,
          lng: -65.5159970265489,
        }
  )
  const [zoomed, setZoomed] = useState(false)
  const [selectedStore, setSelectedStore] = useState(null)
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [mapApi, setMapApi] = useState(null);

  useEffect(() => {
    if (!selectedStore) {
      return
    }

    const isMobile = typeof window !== "undefined" && window.innerWidth < 600

    const coords = {
      lat: selectedStore.lat,
      lng: isMobile ? selectedStore.lng + 0.0009 : selectedStore.lng + 0.0095,
    }

    setLatlng(coords)
    setZoomed(15)
  }, [selectedStore])

  useEffect(() => {
    if (!selectedPlace) {
      return
    }

    const isMobile = typeof window !== "undefined" && window.innerWidth < 600

    const coords = {
      lat: selectedPlace[0].geometry.location.lat(),
      lng: isMobile ? selectedPlace[0].geometry.location.lng() + 0.0009 : selectedPlace[0].geometry.location.lng() + 0.075,
    }

    setLatlng(coords)
    setZoomed(12)
  }, [selectedPlace])

  return (
    <Layout>
      <Container sx={{ mt: [8, 8, 0] }}>
        <Styled.h1 sx={{ fontSize: ["50px", "50px", "116px"] }}>
          Find Us
        </Styled.h1>

        <Styled.h3
          sx={{
            display: ["block", "block", "flex"],
            alignItems: "center",
            mt: [2, 2, 0],
            mb: [2, 4, 6],
            lineHeight: "36px",
            svg: {
              ml: 2,
              mr: [6, 6, 4],
            },
            br: {
              display: ["block", "block", "none"],
            },
          }}
        >
          In grocery stores
          <CartOutline />
          <br />
          In Restaurants
          <TeaOutline />
        </Styled.h3>
      </Container>

      <section
        sx={{
          position: "relative",
          maxWidth: ["100%", "100%", "1440px"],
          mx: "auto",
          mt: -4,
          mb: ["460px", "460px", 0],
        }}
      >
        <Flex
          sx={{
            position: ["absolute", "absolute", "relative"],
            width: "100%",
            top: ["320px", "320px", 0],
            justifyContent: "flex-end",
            mb: 4,
            px: [4, 4, 0],
          }}
        >
          <StoreTypeahead
            setSelectedStore={setSelectedStore}
            maps={mapApi}
            onPlacesChanged={setSelectedPlace}
          />
        </Flex>

        <Map
          stores={storeData}
          selectedStore={selectedStore}
          setSelectedStore={setSelectedStore}
          selectedPlace={selectedPlace}
          setSelectedPlace={setSelectedPlace}
          latlng={latlng}
          zoomed={zoomed}
          setMapApi={setMapApi}
        />
      </section>

      <Partners />

      <Newsletter />

      <Container sx={{ pb: 8 }} id="forms">
        <Forms />
      </Container>
    </Layout>
  )
}
