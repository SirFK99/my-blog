import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch('/app/data/posts.json')
      .then((res) => res.json())
      .then((data) => {
        const foundPost = data.find((p: Post) => p.id === Number(id));
        setPost(foundPost || null);
      })
      .catch((err) => console.error("Error fetching post:", err));
  }, [id]);

  if (!post) return <p>Post not found.</p>;

  return (
    <div className="container mt-4">
      <h2>{post.title}</h2>
      <p className="text-muted">{post.date}</p>
      <hr />
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;