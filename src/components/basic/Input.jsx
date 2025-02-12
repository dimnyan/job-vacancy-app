const Input = ({label, name, placeholder, type, value, changeValue}) => {
  return (
    <div>
      <div className="label">
        <span className="label-text text-slate-900">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => changeValue(e)}
        className="input border-slate-400/50 bg-slate-300 w-full"
      />
    </div>
  );
};

export default Input;