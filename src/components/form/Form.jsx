const Form = ({ id, label, type = "text", placeholder, value, onChange }) => {
  return (
    <div className="w-1/2 flex flex-col">
      <label
        className="text-[18px] font-[400] font-[Inter] text-white"
        htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
        className="h-[40px] bg-[#374151] rounded-[5px] border-[1px] border-[#4b5563] indent-2.5 mt-2.5 text-[16px] font-[Inter] focus:outline-2 focus:outline-[dodgerblue] focus:border-none text-white"
      />
    </div>
  );
};

export default Form;
