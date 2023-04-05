import React, { useState } from "react";
import { FieldProps } from "formik";

const ImageUpload: React.FC<FieldProps> = ({ field, form }) => {
  const [images, setImages] = useState<string[]>([]);

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(setImageToBase64(files[i]));
      }
      const base64Images = await Promise.all(promises);
      setImages((prevImages) => [...prevImages, ...base64Images]);
      form.setFieldValue(field.name, [
        ...form.values[field.name],
        ...base64Images,
      ]);
    }
  };

  const setImageToBase64 = (image: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);

      reader.onloadend = () => {
        const base64Image = reader.result as string;
        resolve(base64Image);
      };
    });
  };

  return (
    <div className="mb-sizeLarge">
      <div className="w-uploadBtn h-uploadBtn border rounded-xl flex items-center justify-center mx-auto mb-sizeMedium">
        <label
          htmlFor="file"
          className="py-sizeLarge px-sizeDoubleXl flex flex-row gap-4 cursor-pointer"
        >
          <span>Upload images</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
        </label>

        <input
          style={{ visibility: "hidden", width: "0" }}
          id="file"
          onChange={handleImage}
          type="file"
          placeholder="Upload an image"
          multiple
        />
      </div>
      <div className="flex flex-wrap gap-4" style={{}}>
        {images.map((el, index) => (
          <img
            key={index}
            src={el}
            style={{ width: "25rem", height: "100%", border: '1px solid #000', borderRadius: '3px', padding: '5px' }}
            className="image-small-preview"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
