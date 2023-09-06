"use client";
import { createClient } from "@/prismicio";
import { BlogLink, BlogLinkDescription, BlogPostList, ImgCover } from "../components/blog/blog.styles";
import FooterBlog from "../components/blog/FooterBlog";
import HeaderBlog from "../components/blog/HeaderBlog";
import { GlobalStyle } from "../GlobalStyle";
import { formatDate } from "../lib/utils";
import { List } from "./blog.types";

export default async function Blog(){

    const client = createClient()
    const posts = await client.getByType('blogpost', {
        page: 1
    }).catch(err => console.log(err))

    const jsonData: List = JSON.parse(JSON.stringify(posts))
    const list = jsonData.results.map(item =>  {

        const datePost = formatDate(item.first_publication_date)
        const abrev = item.data.content[2].text?.slice(0, 110) + ' ...'
        return(
            <a href={`blog/${item.uid}`} key={item.id}>
            <BlogLink>   
                <ImgCover field={item.data.image} />
                <BlogLinkDescription>
                <h3>{item.data.content[0].text}</h3>
                <p>{abrev}</p>
                <p className="date">{datePost}</p>
                </BlogLinkDescription>
            </BlogLink>
            </a>
        )
    })

    return(
        <>
             <GlobalStyle />
            <HeaderBlog />
            <BlogPostList>
                <h1>Blog Inovate Ambiental</h1>
                {list}
            </BlogPostList>
            <FooterBlog />
        </>

    )
}