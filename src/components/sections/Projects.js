import LinkContainer from "../LinkContainer";

import { projectData } from "../../../public/content/project";

export default function ProjectsContent() {
  return (
    <section>
      <h1>Projekte</h1>
      {projectData.map((project, index) => (
        <div key={index}>
          <LinkContainer project={project} />
        </div>
      ))}
    </section>
  );
}
