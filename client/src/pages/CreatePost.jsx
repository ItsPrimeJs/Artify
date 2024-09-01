import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImage, setGeneratingImage] = useState(false);

  const [Loading, setLoading] = useState(false);

  const generateImage = () => {};
  const handleSubmit = () => {};

  const handleChange = (e) => {
    setForm({...form ,[e.target.name] : [e.target.value]});
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({...form, prompt: randomPrompt });
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[700px]">
          Generate an imaginative image through DALL-E AI and share it with the
          community
        </p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Sujal Shelar"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt" // Corrected "Propmt" to "Prompt"
            type="text"
            name="prompt" // Corrected "propmt" to "prompt"
            placeholder="Imagine your crush proposing to you to marry yourself"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe={true}
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {generatingImage && (
              <div className=" absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <button
            className="text-white bg-green-500 rounded-md px-5 py-2.5 w-full sm:w:auto font-medium text-center"
            type="button"
            onClick={generateImage}
          >
            {generatingImage ? "Generating Image..." : "Generate Image"}
          </button>
        </div>

        <div className="mt-6">
          <p className="mt-2 text-[#666e75] text-[14px] max-w-[700px]  text-center">Once you created the image you can simply share with the coummunity </p>
          <button
            className="mt-2 text-white bg-[#ad49d4] rounded-md px-5 py-2.5 w-full sm:w:auto font-medium text-center"
            type="button"
          >
            {generatingImage ? "Generating Image..." : "Share with the coummunity"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
