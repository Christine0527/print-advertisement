import styled from "styled-components";
import { theme } from "../styles/theme";

const HeaderContainer = styled.header`
    background: linear-gradient(135deg, ${theme.colors.primary} 0%, #1e40af 100%);
    color: white;
    padding: ${theme.spacing.xl} ${theme.spacing.lg};
    box-shadow: ${theme.shadows.md};

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: ${theme.spacing.lg} ${theme.spacing.md};
    }
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin: 0;

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 1.5rem;
    }
`;

const Subtitle = styled.p`
    text-align: center;
    margin-top: ${theme.spacing.sm};
    opacity: 0.9;
    font-size: 1rem;

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 0.875rem;
    }
`;

export const Header = () => {
    return (
        <HeaderContainer>
            <Title>Logo鳳鳴廣告户外看板</Title>
            <Subtitle>選擇縣市，查看可租廣告看板</Subtitle>
        </HeaderContainer>
    );
};
