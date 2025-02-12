import React from 'react';

const FormInput = ({type, label}) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="label">
        <span className="label-text text-slate-900">{label}</span>
      </div>
      <input type={type} placeholder="" className="input input-sm border-slate-400/50 bg-slate-300"/>
    </div>
  );
};

export default FormInput;