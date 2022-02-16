import Heading from "./Heading";
import {Post} from '../types';




type PostInfoProps ={
    post:Post
}


const PostInfo = ({ post }:PostInfoProps) => {
    const { title, body } = post || {};

    if (!post) {
        return <Heading tag="h3" text="Empty post" />
    }

    return (
        <>
            <Heading tag="h3" text={title} />
            <p>{body}</p>
        </>
    );
}

export default PostInfo;