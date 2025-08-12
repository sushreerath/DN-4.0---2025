export default function BlogDetails() {
  const blogs = [
    { title: "React Learning", author: "Stephen Biz", desc: "Welcome to learning React!" },
    { title: "Installation", author: "Schwezdenier", desc: "You can install React from npm." }
  ];

  return (
    <div className="section">
      <h2>Blog Details</h2>
      {blogs.map((blog, index) => (
        <div key={index}>
          <strong>{blog.title}</strong>
          <p>{blog.author}</p>
          <p>{blog.desc}</p>
        </div>
      ))}
    </div>
  );
}
