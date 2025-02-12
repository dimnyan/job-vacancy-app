const Card = ({title, children}) => {
  return (
    <div className="card bg-slate-300 text-slate-900 w-full drop-shadow-lg">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Card;