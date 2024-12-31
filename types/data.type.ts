export interface DataType {
    Id: number
    CategoryId: number
    Title: string
    Desc: string
    Desc2: string
    CreatedDate: string
    UpdatedDate: string
    Category: string
    UrlCategory1: string
    UrlCategory2: any
    UrlKeywords: string
    VisitStatictics: number
    Abstract: string
    CategoryUrlCategory1: string
    CategoryUrlCategory2: string
    CategoryUrlCategory3: string
    RelatedProductsOnTop: boolean
    Tags: any[]
    RelatedProducts: RelatedProduct[]
    Image: string
    ImageMedium: string
    ImageThumbnail: string
  }
  
  export interface RelatedProduct {
    postProduct: PostProduct[]
    CarouselGroup: string
  }
  
  export interface PostProduct {
    Price?: number
    OldPrice?: number
    Name: string
    ImagePath: string
    ProductUrl: string
    UrlCategory1: string
    UrlCategory2: any
    UrlKeyword: string
    CarouselGroup: string
    Comments: Comment[]
  }
  
  export interface Comment {
    Title: string
    Description: string
  }
  