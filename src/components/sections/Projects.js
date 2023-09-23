import LinkContainer from "../LinkContainer";

import { projectData } from "../../../public/content/project";
import Link from "next/link";

export default function ProjectsContent() {
  return (
    <section>
      <h1>Projekte</h1>
      {projectData.map((project, index) => (
        <div key={index}>
          <Link
            href={"/projekt/" + project.name.toLowerCase().replace(/ /g, "")}
          >
            <LinkContainer project={project} />
          </Link>
        </div>
      ))}
    </section>
  );
}
