export interface List {
    page: number;
    results_per_page: number;
    results_size: number;
    total_results_size: number;
    total_pages: number;
    next_page?: any;
    prev_page?: any;
    results: Result[];
    version: string;
    license: string;
  }
  
  export interface Result {
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
    title: Title[];
    content: Content[];
    image: Image;
  }
  
  export interface Image {
    dimensions: Dimensions;
    alt?: any;
    copyright?: any;
    url: string;
  }
  
  export interface Content {
    type: string;
    text?: string;
    spans?: Span[];
    url?: string;
    alt?: any;
    copyright?: any;
    dimensions?: Dimensions;
  }
  
  export interface Dimensions {
    width: number;
    height: number;
  }
  
  export interface Span {
    start: number;
    end: number;
    type: string;
  }
  
  export interface Title {
    type: string;
    text: string;
    spans: any[];
  }