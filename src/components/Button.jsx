const Button = ({
  children,
  onClick,
  className = "",
}) => {
  const defaultClasses = "rounded-full transition-colors cursor-pointer bg-Neutral0 font-medium";
  return (
    <button onClick={onClick} className={`${defaultClasses} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
