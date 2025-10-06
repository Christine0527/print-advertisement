import styled from "styled-components";
import { theme } from "../styles/theme";
import { BillboardCard } from "./BillboardCard";

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: ${theme.spacing.xl} ${theme.spacing.lg};
    min-height: 60vh;

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: ${theme.spacing.lg} ${theme.spacing.md};
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${theme.spacing.xl};
    flex-wrap: wrap;
    gap: ${theme.spacing.md};
`;

const Title = styled.h2`
    font-size: 1.75rem;
    font-weight: 600;
    color: ${theme.colors.text.primary};

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 1.5rem;
    }
`;

const BackButton = styled.button`
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    background: white;
    color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.primary};
    border-radius: ${theme.borderRadius.md};
    font-size: 1rem;
    font-weight: 600;
    transition: all ${theme.transitions.normal};

    &:hover {
        background: ${theme.colors.primary};
        color: white;
        transform: translateX(-4px);
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: ${theme.spacing.sm} ${theme.spacing.md};
        font-size: 0.875rem;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); /* 增加卡片寬度 */
    gap: ${theme.spacing.xl};

    @media (max-width: ${theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        gap: ${theme.spacing.lg};
    }
`;

const EmptyState = styled.div`
    text-align: center;
    padding: ${theme.spacing.xxl};
    color: ${theme.colors.text.secondary};

    div:first-child {
        font-size: 4rem;
        margin-bottom: ${theme.spacing.lg};
    }

    div:last-child {
        font-size: 1.25rem;
    }
`;

const Stats = styled.div`
    display: flex;
    gap: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.lg};
    flex-wrap: wrap;
`;

const StatItem = styled.div`
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    background: white;
    border-radius: ${theme.borderRadius.md};
    box-shadow: ${theme.shadows.sm};

    span:first-child {
        color: ${theme.colors.text.secondary};
        font-size: 0.875rem;
        margin-right: ${theme.spacing.sm};
    }

    span:last-child {
        color: ${theme.colors.text.primary};
        font-weight: 600;
        font-size: 1.125rem;
    }
`;

export const BillboardGrid = ({ city, billboards, onBack }) => {
    const availableCount = billboards.filter((b) => b.status === "available").length;
    const rentedCount = billboards.filter((b) => b.status === "rented").length;

    return (
        <Container>
            <Header>
                <div>
                    <Title>{city} - 廣告看板</Title>
                    <Stats>
                        <StatItem>
                            <span>總數量</span>
                            <span>{billboards.length}</span>
                        </StatItem>
                        <StatItem>
                            <span>可租</span>
                            <span style={{ color: theme.colors.status.available }}>
                                {availableCount}
                            </span>
                        </StatItem>
                    </Stats>
                </div>
                <BackButton onClick={onBack}>← 返回選擇縣市</BackButton>
            </Header>

            {billboards.length > 0 ? (
                <Grid>
                    {billboards.map((billboard) => (
                        <BillboardCard key={billboard.id} billboard={billboard} />
                    ))}
                </Grid>
            ) : (
                <EmptyState>
                    <div>📭</div>
                    <div>此縣市目前沒有廣告看板資料</div>
                </EmptyState>
            )}
        </Container>
    );
};
