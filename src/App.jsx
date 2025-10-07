import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import { Header } from "./components/Header";
import { FloatingContactButton } from "./components/FloatingContactButton";
import { RegionSelector } from "./components/RegionSelector";
import { BillboardGrid } from "./components/BillboardGrid";
import { getCitiesWithCount, getBillboardsByCity } from "./data/billboards";

function App() {
    const [selectedCity, setSelectedCity] = useState(null);
    const citiesCount = getCitiesWithCount();

    const handleCitySelect = (city) => {
        setSelectedCity(city);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleBack = () => {
        setSelectedCity(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const billboards = selectedCity ? getBillboardsByCity(selectedCity) : [];

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            {!selectedCity && <FloatingContactButton />}

            {selectedCity ? (
                <BillboardGrid city={selectedCity} billboards={billboards} onBack={handleBack} />
            ) : (
                <RegionSelector onCitySelect={handleCitySelect} citiesCount={citiesCount} />
            )}
        </ThemeProvider>
    );
}

export default App;
