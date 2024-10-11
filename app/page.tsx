"use client";

import Link from 'next/link';
import { useQuery } from 'react-query';
import axios from 'axios';
import ThemeToggle from './components/ThemeToggle';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

type Post = {
    id: number;
    title: string;
    body: string;
    date: string;
};

export default function Home() {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    const { data: posts, isLoading } = useQuery<Post[]>('posts', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data.map((post: Post) => ({
            ...post,
            date: new Date(Date.now() - post.id * 24 * 60 * 60 * 1000).toISOString(),
        }));
    });

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className={darkMode ? 'dark' : 'light'}>
            <ThemeToggle />
            <h1>overreacted</h1>
            <ul>
                {posts?.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p className="post-subtitle">{new Date(post.date).toLocaleDateString()}</p>
                        <p>{post.body}</p>
                        <Link href={`/post/${post.id}`}>Read more</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
