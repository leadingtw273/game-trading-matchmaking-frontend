import { useEffect } from "react";
import { useLocation } from "react-router-dom";

Component.displayName = "Search";
export function Component() {
  const location = useLocation();
  const { search } = location.state as { search: string };

  useEffect(() => {
    console.log("[test] Search useEffect", search);
  }, [search]);

  return (
    <>
      <div className="default-content">
        Search
        {search !== "" ? <p>By {search}</p> : null}
      </div>
    </>
  );
}
