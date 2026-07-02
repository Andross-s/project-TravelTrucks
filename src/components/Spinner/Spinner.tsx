// Spinner: shared Oval loading indicator used inside buttons and page loading states.
import { Oval } from "react-loader-spinner";

interface SpinnerProps {
  size?: number;
  color?: string;
  secondaryColor?: string;
}

const Spinner = ({
  size = 20,
  color = "#fff",
  secondaryColor = "rgba(255, 255, 255, 0.4)",
}: SpinnerProps) => (
  <Oval
    visible
    height={size}
    width={size}
    strokeWidth={5}
    color={color}
    secondaryColor={secondaryColor}
    ariaLabel="Loading"
  />
);

export default Spinner;
