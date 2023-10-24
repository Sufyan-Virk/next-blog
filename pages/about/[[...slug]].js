import React from "react";
import { useRouter } from "next/router";
import Layout from "./layout";
function About() {
  const router = useRouter();
  return (
    <Layout>
      {" "}
      <h1>About us ID</h1>
      {router.query.slug}
    </Layout>
  );
}

export default About;
