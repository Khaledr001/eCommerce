import { useState, useRef } from "react";
// import "./style.css";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imgname, {
              type: "image/png",
              lastModified: Date.now(),
            });

            console.log(file);
            setImage(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };

  const handleUploadButtonClick = (file) => {
    var myHeaders = new Headers();
    const token = "adhgsdaksdhk938742937423";
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("file", file);
    console.log(formdata);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://trickuweb.com/upload/profile_pic", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        const profileurl = JSON.parse(result);
        setImage(profileurl.img_url);
      })
      .catch((error) => console.log("error", error));
  };

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="p-8 flex justify-center items-center ">
      <div className="border-2 border-dashed border-[#ccc] rounded-md p-2 flex flex-col justify-center items-center">
        <label
          htmlFor="image-upload-input"
          className="text-2xl font-bold mb-4 cursor-pointer">
          {image ? image.name : "Choose an image"}
        </label>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="upload image"
              className="h-[200px] w-[200px] rounded-full"
            />
          ) : (
            <img
              src="./public/images/products/iphone1.jpg"
              alt="upload image"
              className="h-[200px] w-[200px] me-[35px] hidden"
            />
          )}

          <input
            id="image-upload-input"
            className="hidden"
            type="file"
            onChange={handleImageChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>

        <button
          className="bg-[#4CAF50] border-none text-white px-4 py-3 mt-4 cursor-pointer rounded-md hover:bg-[#3e8e41]"
          onClick={handleUploadButtonClick}>
          Upload
        </button>
      </div>
    </div>
  );
}

export default ImageUpload;
