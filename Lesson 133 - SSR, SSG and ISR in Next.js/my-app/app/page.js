import Image from "next/image";

export default async function Home() { 
  
  let data = await fetch('https://api.vercel.app/blog',  { next: { revalidate: 3600 } })
  // let data = await fetch('https://api.vercel.app/blog',  { cache: 'no-store' })
  let posts = await data.json()
  return (
    <ol>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ol>
  )
}

// export const dynamic = 'force-dynamic'