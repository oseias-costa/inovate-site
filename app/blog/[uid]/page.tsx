"use client";
import { formatDate } from "@/app/lib/utils";
import { createClient } from "@/prismicio";
import { asHTML } from "@prismicio/client";
import { useParams } from "next/navigation";
import { BlogPageContainer, BlogPageContent, ImageBlogPage } from "./blogpage.styles";

export default async function BlogPage(){
    const { uid } = useParams()

    const client = createClient()
    const page = await client.getByUID('blogpost', uid).catch(err => console.log(err))
    const content = asHTML(page.data.content)
    const datePost = formatDate(page.first_publication_date)
    console.log((page.linked_documents))

    return(
        <BlogPageContainer>
            <BlogPageContent>
            <p>{datePost}</p>
            <div dangerouslySetInnerHTML={ { __html: content ? content : String('Blog')} } />
            <ImageBlogPage field={page.data.image} />
            </BlogPageContent>
        </BlogPageContainer>
    )
}