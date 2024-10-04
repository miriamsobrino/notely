export const Title = ({ children, size = 'text-4xl' }) => {
  return (
    <h1
      className={`font-bold bg-gradient-to-br from-blue-700 via-blue-400 to-pink-400 bg-clip-text py-2 text-transparent ${size}`}
    >
      {children}
    </h1>
  );
};
