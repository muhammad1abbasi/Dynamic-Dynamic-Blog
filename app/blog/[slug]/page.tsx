"use client";
import React, { use , useState } from "react";


type PostType = {
    title: string;
    heading: string;
    heading2: string;
    content: string;
    examples: string;
    image: string;
    content2: string;
    heading3: string;
    content3: string;
    image2: string;
    image3: string;
    image4: string;
};


const posts: Record<string, PostType> ={
    "first-post": {
        title: "AI Agentic",
        heading: "1: What is AI Agentinc ?",
        content: "AI Agentic refers to artificial intelligence systems that act independently, make decisions and perform tasks based on goals without requiring constant human intervention. these systems learn adapt, and execute actions autonomously, mimicking human agency.",
        examples: "For Examples: Autonomous cars deciding routes , Virtual assistants mamaging schedules.",
        image: "/images/Agentic.jpg",
        heading2: "2: The Future of AI Agentic",
        content2: "AI Agentic systems could evolve into personal companions capable of understading emotions, managing daily lives , and offerign tailored solutions.",
        heading3: "2: How the World Can Change with AI Agentic",
        content3: "Global Productivity Boost: Ai systems can work 24/7 without fatigue, increasing effciency in industries like manufacturing, logistics, and service delivery.",
        image2: "/images/roboto.png",
        image3: "/images/future.png",
        image4: "/images/world.png",
    },
    "second-post": {
        title: "Python for AI ?",
        heading: "Why Python is impotant for AI",
        content: "Python plays a crucial role in AI development due to its simplicity Python`s clear syntex allows AI developers to focus on solving complex problems instead of struggling with language intricacies.",
        examples: "",
        image: "/images/PythonAI.png",
        heading2: "How Python works in AI developmet ",
        content2: " Data Handling : Libraries like Pandas and Numpy allow for easy manipulation and analysis of large datasets the backbone of AI system.",
        heading3: "What Will Be the Impact of Python in AI",
        content3: "Increased Accessibility: Python lowers the barrier to entry enabling more developeres to contribute to AI innovations, Ai tools built in Python are driving advancements in healthcare, autonomous systems and personalized learning , Python enables the development of intelligent systems making AI and intefral part of daily life from virtual assistants to smarter cities",
        image2: "/images/pythonimport.png",
        image3: "/images/PYTHONE.png",
        image4: "/images/impactpython.png"
    },
};


type BlogPostProps = {
    params: Promise<{slug: string}>;
};

export default function BlogPost({params}: BlogPostProps) {
    const {slug} = use(params);


    const post = posts[slug];


    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState("");

    const addComment = () => {
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    if (!post) {
        return <div className="p-4">Post not found</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-6xl font-bold mb-4 flex justify-center ">{post.title}</h1>
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full max-h-96 object-cover rounded-lg mb-6 shadow-md" 
            
            />
            <h1 className="text-5xl font-bold mb-4 flex justify-center">{post.heading}</h1>
            <img 
              src={post.image2} 
              alt={post.title}
              className="w-full max-h-96 object-cover rounded-lg mb-6 shadow-md" 
            
            />

        <p className="text-gray-900 mb-6 text-2xl">{post.content}</p>
        <p className="text-gray-600 mb-6 ">{post.examples}</p>

        <h1 className="text-5xl font-bold mb-4 flex justify-center">{post.heading2}</h1>
        <img 
              src={post.image3} 
              alt={post.title}
              className="w-full max-h-96 object-cover rounded-lg mb-6 shadow-md" 
            
            />

        <p className="text-gray-900 mb-6 text-2xl ">{post.content2}</p>

        <h1 className="text-5xl font-bold mb-4 flex justify-center">{post.heading3}</h1>
        <img 
              src={post.image4} 
              alt={post.title}
              className="w-full max-h-96 object-cover rounded-lg mb-6 shadow-md" 
            
            />

        <p className="text-gray-900 mb-6 text-2xl ">{post.content3}</p>
     

        <div className="border-t pt-4">
            <h2 className="text-2xl font-semibold mb-2">Comments Section</h2>
            <div className="space-y-3 mb-4">
                {comments.map((comment, index)=>(
                    <div
                    key={index}
                    className="p-2 border rounded bg-gray-100 shadow-sm"
                    >
                        {comment}

                    </div>
                ))}

            </div>

            <div className="flex gap-2">
                <input 
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-1 p-2 boeder rounded"
                placeholder="Add a Comment..."
                 />
                 <button
                 onClick={addComment}
                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                 >
                    Add

                 </button>

            </div>

        </div>

        </div>
    );





}