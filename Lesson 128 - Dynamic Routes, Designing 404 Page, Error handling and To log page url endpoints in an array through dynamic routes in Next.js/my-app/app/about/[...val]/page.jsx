export default async function Page({ params }) {
  const resolvedParams = await params; 
  console.log(resolvedParams.val); 
  return <div>I am about page check console</div>;
}