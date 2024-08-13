import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchProject } from "./queries.ts";

export const RepoData = ({ id }: { id: string }) => {
  const { data } = useSuspenseQuery({
    queryKey: ["project", id],
    queryFn: () => fetchProject(id),
  });

  return (
    <div>
      {data ? (
        <div>
          <p>name: {data.full_name}</p>
          <p>forks: {data.forks_count}</p>
          <p>stars: {data.stargazers_count}</p>
          <p>watchers: {data.watchers_count}</p>
        </div>
      ) : null}
      <br />
      <br />
    </div>
  );
};
