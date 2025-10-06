import { useState } from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

const Card = styled.div`
    background: white;
    border-radius: ${theme.borderRadius.lg};
    overflow: hidden;
    box-shadow: ${theme.shadows.md};
    transition: all ${theme.transitions.normal};
    cursor: pointer;

    &:hover {
        transform: translateY(-4px);
        box-shadow: ${theme.shadows.xl};
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 500px; /* 增加高度以適應直向圖片 */
    overflow: hidden;
    background: ${theme.colors.background.secondary};
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform ${theme.transitions.slow};

    ${Card}:hover & {
        transform: scale(1.05);
    }
`;

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
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

const ModalContent = styled.div`
    position: relative;
    max-width: 95vw;
    max-height: 95vh;
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

const ModalImage = styled.img`
    width: 100%;
    height: auto;
    max-height: 85vh;
    object-fit: contain;
    border-radius: ${theme.borderRadius.lg};

    @media (max-width: ${theme.breakpoints.mobile}) {
        border-radius: ${theme.borderRadius.md};
    }
`;

const StatusBadge = styled.div`
    position: absolute;
    top: ${theme.spacing.md};
    right: ${theme.spacing.md};
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    border-radius: ${theme.borderRadius.md};
    font-size: 0.875rem;
    font-weight: 600;
    background-color: ${(props) =>
        props.$status === "available" ? theme.colors.status.available : theme.colors.status.rented};
    color: white;
    box-shadow: ${theme.shadows.md};
`;

const PlaceholderImage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%);
    color: ${theme.colors.text.secondary};
    font-size: 3rem;
`;

export const BillboardCard = ({ billboard }) => {
    const [isOpen, setIsOpen] = useState(false);
    const statusText = billboard.status === "available" ? "可租" : "已租";

    return (
        <>
            <Card onClick={() => setIsOpen(true)}>
                <ImageContainer>
                    {billboard.image ? (
                        <Image
                            src={billboard.image}
                            alt={`${billboard.city} 廣告看板`}
                            onError={(e) => {
                                e.target.style.display = "none";
                                e.target.parentElement.innerHTML =
                                    '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 100%);color:#6B7280;font-size:3rem;">📷</div>';
                            }}
                        />
                    ) : (
                        <PlaceholderImage>📷</PlaceholderImage>
                    )}
                    <StatusBadge $status={billboard.status}>{statusText}</StatusBadge>
                </ImageContainer>
            </Card>

            {isOpen && (
                <Modal onClick={() => setIsOpen(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton>
                        <ModalImage
                            src={billboard.image}
                            alt={`${billboard.city} 廣告看板 - 放大檢視`}
                        />
                    </ModalContent>
                </Modal>
            )}
        </>
    );
};
