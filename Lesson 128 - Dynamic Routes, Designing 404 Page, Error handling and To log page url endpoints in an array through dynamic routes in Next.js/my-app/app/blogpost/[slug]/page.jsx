export default async function Page({ params }) {
  const { slug } = await params // This would now be correct for Next.js 15+
  return <div>My Post: {slug}</div>
}