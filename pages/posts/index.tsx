import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";
import {GetStaticProps} from 'next';
import {Post} from '../../types';

export const getStaticProps:GetStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: {posts: data}
    }
}

type PostsProps={
    posts:Post[]
}


const Posts = ({ posts }: PostsProps) => {
    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <Heading text="Posts list:"  />
            <ul>
                {posts && posts.map(({ id, title }) => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}><a style={{textDecoration:'none', color:'black'}}>{title}</a></Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Posts;