import styled from "styled-components";
import { theme } from "../styles/theme";
import { regions } from "../data/billboards";
import { CityCard } from "./CityCard";

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: ${theme.spacing.xl} ${theme.spacing.lg};

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: ${theme.spacing.lg} ${theme.spacing.md};
    }
`;

const RegionSection = styled.section`
    margin-bottom: ${theme.spacing.xxl};

    &:last-child {
        margin-bottom: 0;
    }
`;

const RegionHeader = styled.div`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.md};
    margin-bottom: ${theme.spacing.lg};
`;

const RegionIndicator = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => props.$color};
`;

const RegionTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${theme.colors.text.primary};

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 1.25rem;
    }
`;

const CitiesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: ${theme.spacing.lg};

    @media (max-width: ${theme.breakpoints.mobile}) {
        grid-template-columns: repeat(2, 1fr);
        gap: ${theme.spacing.md};
    }
`;

export const RegionSelector = ({ onCitySelect, citiesCount }) => {
    return (
        <Container>
            {Object.entries(regions).map(([regionKey, regionData]) => (
                <RegionSection key={regionKey}>
                    <RegionHeader>
                        <RegionIndicator $color={regionData.color} />
                        <RegionTitle>{regionData.name}</RegionTitle>
                    </RegionHeader>

                    <CitiesGrid>
                        {regionData.cities.map((city) => {
                            const count = citiesCount.get(city) || 0;
                            return (
                                <CityCard
                                    key={city}
                                    city={city}
                                    count={count}
                                    regionColor={regionData.color}
                                    onClick={() => onCitySelect(city)}
                                />
                            );
                        })}
                    </CitiesGrid>
                </RegionSection>
            ))}
        </Container>
    );
};
