import Head from "next/head";
import PostInfo from "../../components/PostInfo";
import {GetStaticPaths, GetStaticProps} from 'next';
import {Post} from '../../types';

//SSG

export const getStaticPaths:GetStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    const paths = data.map(({id}) => ({
        params: {id: id.toString()}
    }))
    console.log(paths)
    return {
        paths,
        fallback: false,
    }
};


export const getStaticProps:GetStaticProps = async (context) => {
    const {id} = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json()

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props:{ post: data },
    }
};

type PostProps={
    post:Post
}

const Post = ({post}:PostProps) => (
        <>
            <Head>
                <title>Contact  page</title>
            </Head>
            <PostInfo post={post}/>
        </>
)

export default Post;