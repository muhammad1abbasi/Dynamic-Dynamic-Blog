import Link from "next/link";

const posts = [
  {
    slug: "first-post",
    title: "What is AI Agentic",
    excerpt: "The World of AI Agentic: How it shape our World!",
    image: "/images/untitled.jpg",
  },

  {
    slug: "second-post",
    title: "Python for AI ?",
    excerpt: "Why Python is important for AI ",
    image: "/images/python.png",
  },

];


export default function BlogHome() {
  return(
    <div className="min-h-screen bg-gray-50">

      <section className="bg-gradient-to-r from-blue-900 to-red-500 text-white h-screen flex items-center justify-center">
        <div className="text-center px-6 max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Blog</h1>
          <p className="text-lg font-light mb-6">Hi, Im Muhammad! This is my space where I share stories, insights, about IT and AI. Dive in to explore more!</p>
          <a href="#posts"
           className="inlline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow-md hover:bg-gray-200 transition"

          
          >
            Explore Posts
          </a>
        </div>
      </section>

      <main id="posts" className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Latest Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link 
             href={`/blog/${post.slug}`}
             key={post.slug}
             className="block bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          
            >
              <img
               src={post.image} 
               alt={post.title}
               className="w-full h-48 object-cover rounded-t-lg" 
             
               />
               <div className="p-4">
               <h3 className="text-xl font-bold mb-2">{post.title}</h3>

               <p className="text-gray-600">{post.excerpt}</p>
              </div>

            </Link>
          ))}

        </div>
      </main>


    </div>

  );
}

