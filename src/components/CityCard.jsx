import styled from "styled-components";
import { theme } from "../styles/theme";

const Card = styled.button`
    background: white;
    border-radius: ${theme.borderRadius.lg};
    padding: ${theme.spacing.lg};
    box-shadow: ${theme.shadows.sm};
    transition: all ${theme.transitions.normal};
    border: 2px solid transparent;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing.sm};

    &:hover {
        transform: translateY(-4px);
        box-shadow: ${theme.shadows.lg};
        border-color: ${(props) => props.$regionColor};
    }

    &:active {
        transform: translateY(-2px);
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: ${theme.spacing.md};
        min-height: 80px;
    }
`;

const CityName = styled.div`
    font-size: 1.25rem;
    font-weight: 600;
    color: ${theme.colors.text.primary};

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 1rem;
    }
`;

const Count = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.$regionColor};

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 1.25rem;
    }
`;

const CountLabel = styled.div`
    font-size: 0.875rem;
    color: ${theme.colors.text.secondary};

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 0.75rem;
    }
`;

export const CityCard = ({ city, count, regionColor, onClick }) => {
    return (
        <Card onClick={onClick} $regionColor={regionColor}>
            <CityName>{city}</CityName>
            <Count $regionColor={regionColor}>{count}</Count>
            <CountLabel>個看板</CountLabel>
        </Card>
    );
};
