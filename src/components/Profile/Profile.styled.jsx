import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 300px;
  background-color: ${p => p.theme.colors.white};
  margin: 0 auto;
  border: 2px solid ${p => p.theme.colors.blue};
  border-radius: ${p => p.theme.radii.md};
  padding-top: ${p => p.theme.spacing(6)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(8)};
  margin-bottom: ${p => p.theme.spacing(10)};
  box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -webkit-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -moz-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(3)};
`;

export const Avatar = styled.img`
  width: 120px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const Tag = styled.p`
  color: ${p => p.theme.colors.gray};
`;

export const Location = styled.p`
  color: ${p => p.theme.colors.gray};
`;

export const StatsList = styled.ul`
  background-color: ${p => p.theme.colors.lightblue};
  width: 100%;
  display: flex;
`;

export const StatsItem = styled.li`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(5)};
  border-top: 1px solid ${p => p.theme.colors.blue};

  &:not(:last-child) {
    border-right: 1px solid ${p => p.theme.colors.blue};
  }

  &:hover {
    background-color: ${p => p.theme.colors.shadowblue};
  }
`;

export const StatsLabel = styled.span`
  color: ${p => p.theme.colors.gray};
  font-size: 14px;
`;

export const StatsQuantity = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
