
import { Suspense } from "react";
import Homepage from "./Homepage/page";
function LoadingFallback() {
  return <div>Loading search parameters...</div>;
}
export default function Home() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Homepage />
    </Suspense>
  );
}

