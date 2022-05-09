import React from "react";
import $ from "jquery";

const ImageUploader = ({ setImage }) => {
  let picture = "";

  const handleFileSelected = (event) => {
    picture = event.target.files[0];
    upload();
  };

  const upload = () => {
    const formData = new FormData();
    formData.append("image", picture);
    $.ajax({
      url: "https://api.imgur.com/3/image",

      type: "POST",
      data: formData,
      headers: {
        Authorization: "Client-ID 335aed59b5127c3",
      },
      cache: false,
      contentType: false,
      processData: false,
      async: false,
      success: function (response) {
        setImage(response.data.link);
      },
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileSelected} />
    </div>
  );
};

export default ImageUploader;
