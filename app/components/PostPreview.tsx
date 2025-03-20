import React from 'react';
import { Link } from 'react-router-dom';

interface PostProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

const PostPreview: React.FC<PostProps> = ({ id, title, excerpt, date }) => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
      <p className="card-text">{excerpt}</p>
      <Link to={`/blog/${id}`} className="btn btn-primary">
        Read More
      </Link>
    </div>
  </div>
);

export default PostPreview;
