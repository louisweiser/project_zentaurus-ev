import { useEffect } from "react";
import { useRouter } from "next/router";

import ProjectCard from "../ProjectCard";
import SectionTitle from "../SectionTitle";
import { useSectionRefs } from "@/pages/_app.js";
import { projectData } from "../../../public/content/project";

export default function ProjectsContent() {
  const sectionRefs = useSectionRefs();

  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      const scrollY = window.scrollY;
      sessionStorage.setItem("scroll", scrollY);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router]);

  return (
    <section id="section4" ref={sectionRefs[4]}>
      <SectionTitle title="Projekte" />
      {projectData.map((project, index) => (
        <article key={index}>
          <ProjectCard project={project} />
        </article>
      ))}
    </section>
  );
}
