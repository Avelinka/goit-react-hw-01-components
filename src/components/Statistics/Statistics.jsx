import {
  StatSection,
  StatTitle,
  StatList,
  StatListItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      <StatTitle>{title}</StatTitle>

      <StatList>
        {stats.map(item => (
          <StatListItem key={item.id}>
            <StatLabel>{item.label}</StatLabel>
            <StatPercentage>{item.percentage}%</StatPercentage>
          </StatListItem>
        ))}
      </StatList>
    </StatSection>
  );
};
