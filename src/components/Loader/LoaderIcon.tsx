import { LoadingIcon } from "../../assets/icons";

interface Props {
  isDark?: boolean;
}

const LoaderIcon = ({ isDark = false }: Props) => {
  return (
    <div className="animate-spin">
      <LoadingIcon
        fill={isDark ? "#FFFFFF" : "#333333"}
        height={16}
        width={16}
      />
    </div>
  );
};

export default LoaderIcon;
