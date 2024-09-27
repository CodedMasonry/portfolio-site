import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { Meta, MetaProvider, Title } from "@solidjs/meta";
import "@fontsource/inter";
import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <MetaProvider>
            <Title>CodedMasonry</Title>
            <Meta
              name="description"
              content="A Developer and Cybersecurity Enthusiast "
            />
            <Suspense>
              <div class="flex flex-col h-screen">
                {props.children}
              </div>
            </Suspense>
          </MetaProvider>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}