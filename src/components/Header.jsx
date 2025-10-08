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
    opacity: 1;
    font-size: 1rem;

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 0.875rem;
    }
`;

const PhoneLink = styled.a`
    color: white;
    text-decoration: none;
    font-weight: 600;
    padding: 2px 6px;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        text-decoration: underline;
    }

    &:active {
        background-color: rgba(255, 255, 255, 0.3);
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
            <Subtitle>如果需要協尋指定地點之廣告看板</Subtitle>
            <Subtitle>
                請致電<PhoneLink href="tel:0931888859">0931-888-859</PhoneLink>蔣小姐24小時專線服務
            </Subtitle>
        </HeaderContainer>
    );
};
