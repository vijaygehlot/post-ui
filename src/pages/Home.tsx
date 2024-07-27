import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import PostInputCard from '../components/PostInputCard';
import { getPosts } from '../api/api';

const Home: React.FC = () => {
    const [posts, setPosts] = useState<{ id: number; name: string; body: string; img: string; emoji: string; time: string; comment: string; }[]>([]);

    useEffect(() => {
        getPosts().then((data) => {
            setPosts(data);
        }).catch((error) => {
            console.error("Error fetching posts:", error);
        });
    }, []);

    return (
        <div className="p-4 sm:p-6 md:p-10 lg:p-20">
            <div className='pl-2 sm:pl-4 md:pl-8 lg:pl-20 mb-10'>
                <h1 className='text-[#C5C7CA] text-2xl sm:text-3xl md:text-4xl text-left'>Hello Jane</h1>
                <h6 className='text-[#7F8084] text-base sm:text-lg md:text-xl text-left'>How are you doing today? Would you like to share something with the community 🤗</h6>
            </div>
            <PostInputCard
                emoji="https://emojiisland.com/cdn/shop/products/Speech_Bubble_Emoji_large.png?v=1571606035"
                placeholder="How are you feeling today?"
                buttonText="Post"
            />
            {posts.map((item) => (
                <Card key={item.id} name={item.name} body={item.body} img={item.img} emoji={item.emoji} time={item.time} comment={item.comment} />
            ))}
        </div>
    );
};

export default Home;
