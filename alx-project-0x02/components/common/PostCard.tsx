import { type PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ userId, id, title, body }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-500">User ID: {userId}</span>
        <span className="text-sm text-gray-500">Post #{id}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2 capitalize">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{body}</p>
    </div>
  );
};

export default PostCard;
