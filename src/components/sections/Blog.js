import LinkContainer from "../LinkContainer";

export default function BlogContent() {
  return (
    <section>
      <h1>Blog</h1>
      <LinkContainer project={{ name: "Blog", image: "/blog.jpg" }} />
    </section>
  );
}
