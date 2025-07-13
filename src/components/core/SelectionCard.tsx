import React from "react";

type SelectionCardProps = {
  title: string;
  isActive?: boolean;
  onClick?: () => void;
};

const SelectionCard: React.FC<SelectionCardProps> = ({
  title,
  isActive = true,
  onClick,
}) => {
  const cardClassName = `selection-card ${isActive ? "active" : "disabled"}`;

  return (
    <div className={cardClassName} onClick={isActive ? onClick : undefined}>
      <h3>{title}</h3>
    </div>
  );
};

export default SelectionCard;
