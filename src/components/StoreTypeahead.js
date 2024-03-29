/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { useState, useRef, useEffect, useCallback } from "react"
import storeData from "../utils/storeData"
import Cart from "../assets/cart.svg"
import Tea from "../assets/tea.svg"
import SearchIcon from "../assets/searchIcon.svg"
import NotFound from "../assets/notFound.svg"

export default ({ setSelectedStore, maps, onPlacesChanged }) => {
  const [suggestions, setSuggestions] = useState(storeData)
  const [searchText, setSearchText] = useState("")

  const handleStoreClick = (store) => {
    setSelectedStore(store)
  }

  const Suggestions = () => (
    <Flex
      sx={{
        flexDirection: "column",
        position: "absolute",
        top: "90px",
        left: 0,
        width: ["100%", "100%", "360px"],
        maxHeight: ["500px", "500px", "700px"],
        overflowY: "auto",
        zIndex: 2,
        background: "white",
        boxShadow: "0px 18px 35px 5px rgba(137, 145, 158, 0.19)",
        borderRadius: "8px",
      }}
    >
      {suggestions.length < 1 && searchText ? (
        <Flex
          sx={{
            alignItems: "center",
            mx: 6,
            py: 4,
            svg: {
              mr: 5,
              transition: "transform .1s ease-in-out",
            },
          }}
        >
          <NotFound />
          <div sx={{ flex: 1 }}>
            <h2
              sx={{
                mt: 0,
                mb: "4px",
                fontSize: ["20px", "20px", "22px"],
                fontWeight: 600,
                textTransform: "uppercase",
                fontFamily: "barlow",
              }}
            >
              Don't see your store?
            </h2>
            <p
              sx={{
                m: 0,
                fontSize: "16px",
              }}
            >
              Fill out the <a href="#forms">form below</a> so we know which
              store you’d like to find Oat Canada in.
            </p>
          </div>
        </Flex>
      ) : (
        suggestions.map((suggestion, i) => (
          <Flex
            key={i}
            sx={{
              alignItems: "center",
              minHeight: "140px",
              height: "100%",
              mx: 6,
              py: 4,
              borderTop: "1px solid rgba(68, 71, 79, 0.3)",
              cursor: "pointer",
              ":first-of-type": {
                border: "none",
                pt: 6,
              },
              ":last-of-type": {
                pb: 6,
              },
              svg: {
                mr: 4,
                transform: "scale(.75)",
                transition: "transform .1s ease-in-out",
              },
              ":hover": {
                svg: {
                  transform: "scale(.85)",
                },
              },
            }}
            onClick={() => handleStoreClick(suggestion)}
          >
            {suggestion.icon === "cart" ? <Cart /> : <Tea />}
            <div sx={{ flex: 1 }}>
              <h2
                sx={{
                  mt: 0,
                  mb: "4px",
                  fontSize: "22px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  fontFamily: "barlow",
                }}
              >
                {suggestion.name}
              </h2>
              <p
                sx={{
                  m: 0,
                  fontSize: "16px",
                }}
              >
                {suggestion.address}
              </p>
            </div>
          </Flex>
        ))
      )}
    </Flex>
  )

  const handleChange = (e) => {
    const text = e.target.value
    const filteredStores = storeData.filter(
      (store) =>
        store.address
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(text.toLowerCase()) ||
        store.name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(text.toLowerCase())
    )

    setSearchText(text)
    setSuggestions(text.length < 1 ? storeData : filteredStores)
  }

  const input = useRef(null)
  const searchBox = useRef(null)

  const handleOnPlacesChanged = useCallback(() => {
    if (onPlacesChanged) {
      onPlacesChanged(searchBox.current.getPlaces())
    }
  }, [onPlacesChanged, searchBox])

  useEffect(() => {
    if (!searchBox.current && maps) {
      searchBox.current = new maps.places.SearchBox(input.current)
      searchBox.current.addListener("places_changed", handleOnPlacesChanged)
    }

    return () => {
      if (maps) {
        searchBox.current = null
        maps.event.clearInstanceListeners(searchBox)
      }
    }
  }, [maps, handleOnPlacesChanged])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Flex
      sx={{
        position: "relative",
        alignItems: "center",
        width: ["100%", "100%", "360px"],
        height: "85px",
        borderRadius: "8px",
        zIndex: 2,
        mr: [0, 0, "4vw"],
      }}
    >
      <form
        action="#"
        onSubmit={handleSubmit}
        sx={{
          py: 2,
          width: "100%",
          borderRadius: "8px",
          boxShadow: "0px 6px 35px 5px rgb(137 145 158 / 28%)",
          background: "white",
        }}
      >
        <input
          ref={input}
          type="search"
          onChange={handleChange}
          placeholder="Search by City"
          sx={{
            width: "100%",
            height: "45px",
            px: 6,
            border: "none",
            caretColor: "black",
            ":focus": {
              outline: "none",
            },
          }}
        />
      </form>

      <Suggestions />

      <SearchIcon
        sx={{
          position: "absolute",
          right: 4,
        }}
      />
    </Flex>
  )
}
