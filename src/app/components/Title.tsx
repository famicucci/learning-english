interface TitleProps {
  children: React.ReactNode;
}

export default function Title(props: TitleProps) {
  const { children } = props;

  return (
    <h1 className="text-2xl font-bold" {...props}>
      {children}
    </h1>
  );
}
