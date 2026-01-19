import { useRef, useEffect } from "react"

export default function LandingPage() {
  // Kreiramo ref koji će referencirati div
  const myDivRef = useRef(null)

  useEffect(() => {
    // Ovo se izvršava samo na client-side
    if (myDivRef.current) {
      console.log("Div je spreman:", myDivRef.current)
      // Primjer: dodajemo klasu nakon što je div učitan
      myDivRef.current.classList.add("highlight")
    }
  }, [])

  return (
    <div
      ref={myDivRef}
      id="landingDiv"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#fefefe",
        fontFamily: "Arial, sans-serif",
        fontSize: "2rem",
        color: "#333",
        transition: "all 0.3s ease",
      }}
    >
      Dobrodošla na moj landing page 🌟
    </div>
  )
}
