import { ClientComp } from "@/components/clientComp";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  // console.log(data);
  return <ClientComp data={data} />;
}
