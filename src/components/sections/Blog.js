import LinkContainer from "../LinkContainer";

export default function BlogContent() {
  return (
    <section>
      <h1>Blog</h1>
      <LinkContainer project={{ name: "Unser Blog", image: "/blog.jpg" }} />
    </section>
  );
}
