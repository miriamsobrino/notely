export const ColorButton = ({ showColors, color }) => {
  return (
    <div
      className={`h-8 w-8 rounded-full transform transition-transform duration-300 ease-in-out cursor-pointer shadow-md  ${
        showColors ? 'scale-100' : 'scale-0'
      }`}
      style={{
        backgroundColor: color,
        transitionDelay: `${
          showColors ? index * 100 : (Colors.length - index - 1) * 100
        }ms`,
      }}
    ></div>
  );
};
