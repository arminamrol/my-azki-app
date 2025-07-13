import React from "react";
import { classnames } from "../../utils/classNames";

type SelectionCardProps = {
  title: string;
  isActive?: boolean;
  onClick?: () => void;
  image?: string;
};

const SelectionCard: React.FC<SelectionCardProps> = ({
  title,
  isActive = true,
  onClick,
  image,
}) => {
  return (
    <div
      className={classnames(
        "aspect-square flex flex-col space-y-2 items-center justify-center w-32 rounded-2xl border border-gray-300",
        {
          "bg-gray-200": !isActive,
          "cursor-not-allowed": !isActive,
          "cursor-pointer": isActive,
        }
      )}
      onClick={isActive ? onClick : undefined}
    >
      {image && (
        <img
          src={image}
          width={40}
          height={40}
          className={classnames({ "opacity-10": !isActive })}
        />
      )}
      <h3 className={classnames("text-sm", { "text-gray-400": !isActive })}>
        {title}
      </h3>
    </div>
  );
};

export default SelectionCard;
