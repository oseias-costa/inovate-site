"use client";
import ButtonBackBlog from "@/app/components/blog/ButtonBackBlog";
import FooterBlog from "@/app/components/blog/FooterBlog";
import HeaderBlog from "@/app/components/blog/HeaderBlog";
import { GlobalStyle } from "@/app/GlobalStyle";
import { formatDate } from "@/app/lib/utils";
import { createClient } from "@/prismicio";
import { asHTML } from "@prismicio/client";
import { useParams } from "next/navigation";
import { BlogPageContainer, BlogPageContent, ImageBlogPage } from "../../components/blog/blogpage.styles";

export default async function BlogPage(){
    const { uid } = useParams()

    const client = createClient()
    
    async function getPost(): Promise<any>{
        const jsonPage =  uid !== undefined && await client.getByUID('blogpost', uid).catch(err => console.log(err))
        return jsonPage
    }

    const jsonPage =  await getPost()
    const content = asHTML(jsonPage?.data.content)
    const datePost = formatDate(jsonPage?.first_publication_date)

    return(
        <BlogPageContainer>
             <GlobalStyle />
            <HeaderBlog />
            <BlogPageContent>
                <ButtonBackBlog />
                <p className="datePost">{datePost}</p>
                <div dangerouslySetInnerHTML={ { __html: content ? content : String('Blog')} } />
                <ImageBlogPage field={jsonPage?.data.image} fallbackAlt={jsonPage?.meta_description} />
            </BlogPageContent>
            <FooterBlog />
        </BlogPageContainer>
    )
}

