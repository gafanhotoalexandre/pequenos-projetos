import { Post } from "../types/Post";

interface PostItemProps {
  data: Post
}

export function PostItem({ data }: PostItemProps) {
  return (
    <div
      key={data.id}
      className="mb-4"
    >
      <h4 className="font-bold">{data.title}</h4>
      <small># {data.id} - Usuário: {data.userId}</small>
      <p>{data.body}</p>
    </div>
  );
}
