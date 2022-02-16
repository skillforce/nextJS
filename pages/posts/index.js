import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";

export const getStaticProps = async () => {
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

const Posts = ({ posts }) => {
    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <Heading text="Posts list:" />
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