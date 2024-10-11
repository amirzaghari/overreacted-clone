"use client";

import { useRouter } from 'next/navigation';
import { useQuery } from 'react-query';
import axios from 'axios';
import './postPage.scss';

type Post = {
    id: number;
    title: string;
    body: string;
    date: string;
};

export default function PostPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const { id } = params;

    const { data: post, isLoading } = useQuery<Post>(['post', id], async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const postData = response.data;
        return {
            ...postData,
            date: new Date(Date.now() - postData.id * 24 * 60 * 60 * 1000).toISOString(),
        };
    });

    if (isLoading) return <div>Loading...</div>;

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="post-container">
            <h1>{post.title}</h1>
            <p className="post-date">{new Date(post.date).toLocaleDateString()}</p>
            <p className="post-body">{post.body}</p>
            <button className="go-back-button" onClick={() => router.back()}>Go back</button>
        </div>
    );
}
