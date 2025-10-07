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

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing.md};

    @media (max-width: ${theme.breakpoints.mobile}) {
        gap: ${theme.spacing.sm};
    }
`;

const Logo = styled.img`
    height: 60px;
    width: auto;

    @media (max-width: ${theme.breakpoints.mobile}) {
        height: 45px;
    }
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
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
            <TitleWrapper>
                <Logo src={`${import.meta.env.BASE_URL}images/logo.png`} alt="鳳鳴廣告 Logo" />
                <Title>鳳鳴廣告户外看板</Title>
            </TitleWrapper>
            <Subtitle>選擇縣市，查看可租廣告看板</Subtitle>
        </HeaderContainer>
    );
};
