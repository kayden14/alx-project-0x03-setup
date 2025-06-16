import { PageRouteProps } from "@/interface"; // in index.tsx
import { LayoutProps } from "@/interface";    // in Layout.tsx

interface ButtonProps {
  action: () => void;
  buttonLabel: string;
  buttonBackgroundColor: string;
}

const Button: React.FC<ButtonProps> = ({
  action,
  buttonLabel,
  buttonBackgroundColor,
}) => {
  return (
    <button
      onClick={action}
      className={`px-6 py-2 text-white font-semibold rounded bg-${buttonBackgroundColor}-500 hover:bg-${buttonBackgroundColor}-600 transition`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
