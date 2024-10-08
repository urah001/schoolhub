"use client";
import { handleSubmitGist } from "@/app/lib/action";
import { useRef, useState } from "react";

import SubmitGistBtn from "./submitBtn";

function MyForm() {
  const resetForm = useRef<HTMLButtonElement>(null);
  resetForm.current?.click();
  return (
    <form
      action={handleSubmitGist as any}
      className="flex flex-col w-full h-full "
    >
      <label htmlFor="GistField" className="sr-only">
        Gist
      </label>
      <textarea
        id="GistField"
        className="w-full h-32 md:h-40 lg:h-48 resize-none placeholder-gray-500 text-white bg-transparent border border-gray-600 focus:border-[#ea580c] focus:ring-0 p-4 outline-none rounded-md transition-all duration-300"
        placeholder="Say what you feel..."
        name="gist"
      />
      <div className="w-full flex justify-end mt-4">
        <div className="w-full max-w-[100px]">
          <SubmitGistBtn />
          <button ref={resetForm} className="invisible" type="reset"></button>
        </div>
      </div>
      {/* <label htmlFor="GistField"></label>
      <textarea
        className="w-full h-full placeholder: text-grey-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none"
        placeholder="say what you feel..."
        name="gist"
      />{" "}
      <div className="w-full justify-between items-center flex ">
        <div></div>
        {/* the button at the top to let you post 
        <div className="w-full max-w-[100px]">
          <SubmitGistBtn />
          <button ref={resetForm} className="invisible" type="reset"></button>
        </div>
      </div> */}
    </form>
  );
}

export default MyForm;
