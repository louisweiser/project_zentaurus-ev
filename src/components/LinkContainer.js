import Image from "next/image";

export default function ProjectLinkContainer({ project }) {
  return (
    <div>
      <Image
        src={"/images" + project.image}
        alt="image"
        width={300}
        height={100}
      ></Image>
      <h2>{project.name}</h2>
    </div>
  );
}
