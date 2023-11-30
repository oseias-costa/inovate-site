"use client";
import ButtonBackBlog from "@/app/components/blog/ButtonBackBlog";
import FooterBlog from "@/app/components/blog/FooterBlog";
import HeaderBlog from "@/app/components/blog/HeaderBlog";
import { GlobalStyle } from "@/app/GlobalStyle";
import { formatDate } from "@/app/lib/utils";
import { createClient } from "@/prismicio";
import { AllDocumentTypes } from "@/prismicio-types";
import { asHTML, Client } from "@prismicio/client";
import { Metadata } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "next/navigation";
import {
  BlogPageContainer,
  BlogPageContent,
  ImageBlogPage,
} from "../../components/blog/blogpage.styles";

async function getPost(
  uid: string,
  client: Client<AllDocumentTypes>
): Promise<any> {
  const jsonPage =
    uid !== undefined &&
    (await client
      .getByUID("blogpost", uid)
      .catch((err: any) => console.log(err)));
  return jsonPage;
}

export default async function BlogPage() {
  const { uid } = useParams();
  const client = createClient();

  const jsonPage = await getPost(uid, client);
  const content = asHTML(jsonPage?.data.content);
  const datePost = formatDate(jsonPage?.first_publication_date);
  console.log(jsonPage);

  return (
    <>
      <head>
        <title>{jsonPage.data.meta_title}</title>
        <meta name="description" content={jsonPage.data.meta_description} />
      </head>
      <BlogPageContainer>
        <GlobalStyle />
        <HeaderBlog />
        <BlogPageContent>
          <ButtonBackBlog />
          <p className="datePost">{datePost}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: content ? content : String("Blog"),
            }}
          />
          <ImageBlogPage
            field={jsonPage?.data.image}
            fallbackAlt={jsonPage?.meta_description}
          />
        </BlogPageContent>
        <FooterBlog />
      </BlogPageContainer>
    </>
  );
}
