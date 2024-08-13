import "./App.css";
import { Suspense } from "react";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { RepoData } from "./RepoData.tsx";

function App() {
  return (
    <div>
      <h1>React 19: Suspense and React Query</h1>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            fallbackRender={() => <div>There was an error!</div>}
            onReset={reset}
          >
            <Suspense fallback={"Loading repos"}>
                <RepoData id="tanstack-query" />
                <RepoData id="tanstack-table" />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </div>
  );
}

export default App;
