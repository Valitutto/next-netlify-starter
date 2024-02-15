import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return <p>Post: {router.query.slug}</p>;
}

export async function getStaticPaths(preview) {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps({ params, preview }) {
  return { props: {} };
}
