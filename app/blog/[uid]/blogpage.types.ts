export interface PostData {
    id: string;
    uid: string;
    url: string;
    type: string;
    href: string;
    tags: any[];
    first_publication_date: string;
    last_publication_date: string;
    slugs: string[];
    linked_documents: any[];
    lang: string;
    alternate_languages: any[];
    data: Data;
  }
  
  export interface Data {
    content: Content[];
    image: Image;
    slices: any[];
    meta_description: string;
    meta_image: Image;
    meta_title: string;
  }
  
  export interface Image {
    dimensions: Dimensions;
    alt?: any;
    copyright?: any;
    url: string;
  }
  
  export interface Dimensions {
    width: number;
    height: number;
  }
  
  export interface Content {
    type: string;
    text: string;
    spans: any[];
  }