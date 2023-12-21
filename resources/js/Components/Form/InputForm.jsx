const InputForm = (props) => {
    const { htmlFor, children, type, name, placeholder, onChange } = props;
    return (
      <>
        <label className="block mb-2 mt-2" htmlFor={htmlFor}>
          {children}
        </label>
        <input
          className="w-full rounded-md p-2 bg-zinc-400 text-zinc-800 font-medium"
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </>
    );
  };
  
  export default InputForm;
  