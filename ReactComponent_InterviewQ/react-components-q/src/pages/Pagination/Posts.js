function Posts({ posts }) {
  let postList = posts.map((post) => {
    return <li key={post.id}>{post.title}</li>;
  });
  return (
    <div className="post-wrapper">
      <ul>{postList}</ul>
    </div>
  );
}
export default Posts;
