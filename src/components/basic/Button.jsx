
const Button = ({loading, children}) => {
  return (
    <button
      className="btn transition-all rounded-md bg-gradient-to-br from-red-500 to-red-600 ease-in-out duration-1000 btn-error text-white mt-8">
      {loading && <span className={`loading loading-spinner loading-xs`}></span>}
      {children}
    </button>
  );
};

export default Button;