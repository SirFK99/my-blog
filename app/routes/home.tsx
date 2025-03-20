import React, { useEffect, useState } from 'react';
import PostPreview from '../components/PostPreview';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('/app/data/posts.json')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Latest Blog Posts</h2>
      <div className="row">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="col-md-6">
              <PostPreview id={post.id} title={post.title} excerpt={post.excerpt} date={post.date} />
            </div>
          ))
        ) : (
          <p>No blog posts available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;