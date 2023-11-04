import styled from 'styled-components';

const getRandomHexColor = props => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const StatSection = styled.section`
  width: 360px;
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.blue};
  border-radius: ${p => p.theme.radii.sm};
  display: flex;
  flex-direction: column;
  margin: 0 auto ${p => p.theme.spacing(10)};
`;

export const StatTitle = styled.h2`
  width: 100%;
  padding: ${p => p.theme.spacing(8)} 0;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
`;

export const StatListItem = styled.li`
  width: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.spacing(3)} 0;
  gap: ${p => p.theme.spacing(2)};
  background-color: ${getRandomHexColor};
`;

export const StatLabel = styled.span`
  color: ${p => p.theme.colors.white};
`;

export const StatPercentage = styled.span`
  color: ${p => p.theme.colors.white};
  font-weight: 500;
  font-size: 18px;
`;
