import React from "react";

const Userform = (props) => {
    const{handleSubmit,handleInputChange,handleBack,index,form,inputVal}=props;
  return (
    <div>
      <form
        action=""
        className="flex flex-col items-start gap-3"
        onSubmit={handleSubmit}
      >
        {index > 0 && <a href="/" onClick={handleBack}>{`<-Back`}</a>}
        <label htmlFor="name" className="text-[25px] font-bold">
          {form[index].label}
        </label>
        <input
          onChange={handleInputChange}
          id={form[index].id}
          type={form[index].inpuType}
          className=" px-2 py-1 text-zinc-400 focus:text-zinc-900"
          placeholder={form[index].placeholder}
          value={inputVal}
        />
        <button className="px-4 py-1 bg-amber-400 rounded-md font-semibold text-white cursor-pointer">
          {form[index].buttonName}
        </button>
      </form>
    </div>
  );
};

export default Userform;
