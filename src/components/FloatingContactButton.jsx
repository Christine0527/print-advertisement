import { useState, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

const FloatingContainer = styled.div`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: ${theme.spacing.md};

    @media (max-width: ${theme.breakpoints.mobile}) {
        bottom: 1rem;
        right: 1rem;
    }
`;

const MiniCard = styled.div`
    background: white;
    border-radius: ${theme.borderRadius.lg};
    padding: ${theme.spacing.md};
    box-shadow: ${theme.shadows.xl};
    min-width: 280px;
    border: 2px solid ${theme.colors.primary};

    @media (max-width: ${theme.breakpoints.mobile}) {
        min-width: 240px;
        padding: ${theme.spacing.sm};
    }
`;

const MiniCardTitle = styled.div`
    font-size: 1.125rem;
    font-weight: 700;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.xs};
    display: flex;
    align-items: center;
    gap: ${theme.spacing.xs};

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 1rem;
    }
`;

const MiniCardInfo = styled.div`
    font-size: 0.875rem;
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.xs};
    display: flex;
    align-items: center;
    gap: ${theme.spacing.xs};

    strong {
        font-weight: 600;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 0.8rem;
    }
`;

const ViewCardButton = styled.button`
    width: 100%;
    background: linear-gradient(135deg, ${theme.colors.primary} 0%, #1e40af 100%);
    color: white;
    border: none;
    border-radius: ${theme.borderRadius.md};
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all ${theme.transitions.normal};
    margin-top: ${theme.spacing.sm};

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${theme.shadows.lg};
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 0.8rem;
        padding: ${theme.spacing.xs} ${theme.spacing.sm};
    }
`;

const CardModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    padding: ${theme.spacing.lg};
    backdrop-filter: blur(5px);
    animation: fadeIn 0.3s ease-in-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: ${theme.spacing.md};
    }
`;

const CardContent = styled.div`
    position: relative;
    max-width: 900px;
    width: 100%;
    background: white;
    border-radius: ${theme.borderRadius.xl};
    padding: ${theme.spacing.lg};
    box-shadow: ${theme.shadows.xl};
    animation: slideUp 0.3s ease-out;

    @keyframes slideUp {
        from {
            transform: translateY(50px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: ${theme.spacing.md};
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: ${theme.spacing.md};
    right: ${theme.spacing.md};
    width: 40px;
    height: 40px;
    background: ${theme.colors.text.secondary};
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all ${theme.transitions.normal};
    border: none;
    z-index: 10;

    &:hover {
        background: ${theme.colors.primary};
        transform: rotate(90deg);
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        width: 35px;
        height: 35px;
        font-size: 1.25rem;
        top: ${theme.spacing.sm};
        right: ${theme.spacing.sm};
    }
`;

const CardImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: ${theme.borderRadius.lg};
    box-shadow: ${theme.shadows.md};

    @media (max-width: ${theme.breakpoints.mobile}) {
        border-radius: ${theme.borderRadius.md};
    }
`;

export const FloatingContactButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    // 預載入圖片
    useEffect(() => {
        const img = new Image();
        img.src = "/print-advertisement/images/company-card.jpg";
        img.onload = () => setImageLoaded(true);
    }, []);

    return (
        <>
            <FloatingContainer>
                <MiniCard>
                    <MiniCardTitle>🏢 鳳鳴廣告有限公司</MiniCardTitle>
                    <MiniCardInfo>
                        <strong>📞</strong> 0931-888-859
                    </MiniCardInfo>
                    <MiniCardInfo>
                        <strong>📍</strong> 台南市新營區中正路22巷10號
                    </MiniCardInfo>
                    <ViewCardButton onClick={() => setIsOpen(true)}>
                        📋 點擊查看完整名片
                    </ViewCardButton>
                </MiniCard>
            </FloatingContainer>

            {isOpen && (
                <CardModal onClick={() => setIsOpen(false)}>
                    <CardContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton>
                        <CardImage
                            src="/print-advertisement/images/company-card.jpg"
                            alt="鳳鳴廣告有限公司名片"
                        />
                    </CardContent>
                </CardModal>
            )}
        </>
    );
};
