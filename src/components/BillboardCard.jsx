import styled from "styled-components";
import { theme } from "../styles/theme";

const Card = styled.div`
    background: white;
    border-radius: ${theme.borderRadius.lg};
    overflow: hidden;
    box-shadow: ${theme.shadows.md};
    transition: all ${theme.transitions.normal};

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
    const statusText = billboard.status === "available" ? "可租" : "已租";

    return (
        <Card>
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
    );
};
