interface ButtonProps {
  children: React.ReactNode;
  color?: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { children, color } = props;

  const defaultColor = "red";

  return (
    <button
      className={`bg-${color || defaultColor}-500 hover:bg-${
        color || defaultColor
      }-700 text-white font-bold py-2 px-4 ml-3 rounded`}
      {...props}
    >
      {children}
    </button>
  );
}
