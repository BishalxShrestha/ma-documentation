
import Layout from "@/components/Layout";
import ReactMarkdown from "react-markdown";

export default function Page() {
  return (
    <Layout title="Introduction">
      <article className="prose dark:prose-invert max-w-none">
        <h1>Introduction</h1>
        <ReactMarkdown>
          {``}
        </ReactMarkdown>
        
      </article>
    </Layout>
  );
}