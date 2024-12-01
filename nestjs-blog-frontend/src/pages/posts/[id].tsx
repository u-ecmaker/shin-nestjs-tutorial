import React from "react";
import styles from "@/styles/Home.module.css";
import { PostType } from "@/utils/Types";
import { getAllPosts, getPostById } from "@/utils/api";

type Params = {
  params: { id: string };
  // ({ params }: { params: { id: string } }) この部分は、関数の引数としてオブジェクトを受け取ります。paramsは、動的ルートのパラメータを含むオブジェクトです。
  //              { params: { id: string } }  この部分はTypeScriptの型注釈で、paramsオブジェクトがidという文字列型のプロパティを持つことを示しています。これは、URLのパラメータ（例: /posts/1の場合、idは"1"）を取得するために使用されます。
};
type Props = {
  post: PostType;
  params: Params;
};

export async function getStaticProps({ params }: Params) {
  const post: PostType = await getPostById(params.id);

  return {
    props: {
      params,
      post,
    },
  };
}

// posts/[id]のパスを生成
export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post: PostType) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

const Post = ({ post, params }: Props) => {
  console.log('!U params', params);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.content}>{post.content}</p>
      <p className={styles.author}>Author: {post.author}</p>
      <p className={styles.createdAt}>CreatedAt: {post.createdAt}</p>
    </div>
  );
};

export default Post;
