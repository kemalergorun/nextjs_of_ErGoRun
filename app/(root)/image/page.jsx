import Image from "next/image";
import koala from "@/public/koala.jpg";

export default function ImagePage() {
  return (
    <div>
      <h1>Images</h1>
      {/* 1- Import like an HTML */}
      <img
        src="/koala.jpg"
        alt="Image of Koala"
        style={{ width: "300px", height: "500px" }}
        title="Koala"
      />

      {/* 2- Import the image from public folder - static import */}
      <Image src="/koala.jpg" width={300} height={500} alt="Koala image" />

      {/* 3- Import the image with an import name */}
      <Image src={koala} width={300} height={500} alt="Imported Koala" />

      {/* 4- Remote Images */}
      {/* It works: */}
      {/* <img
        src="https://images.pexels.com/photos/918595/pexels-photo-918595.jpeg"
        alt=""
      /> */}

      {/* You have to add the path into next config */}
      <Image
        src="https://images.pexels.com/photos/918595/pexels-photo-918595.jpeg"
        width={500}
        height={300}
        alt="Imported Fox"
      />

      <div style={{ position: "relative", height: "500px" }}>
        {/* When using fill, the parent element must have position: relative or display: block */}
        <Image src={koala} alt="Koala" fill />
      </div>
    </div>
  );
}
