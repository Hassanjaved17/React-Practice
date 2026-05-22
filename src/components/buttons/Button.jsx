const Button = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-orange-400
        dark:bg-orange-500
        text-white
        px-6
        py-3
        rounded-lg
        hover:bg-orange-500
        dark:hover:bg-orange-600
        transition
        duration-300
      "
    >
      {title}
    </button>
  );
};

export default Button;