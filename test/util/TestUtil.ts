
class TestUtil{

  public boardService(connectionpool: any){
    return{
        connectionPool : connectionpool,
        getBoardByID: function(id: string): any {},
    }
  }

  public getBoardByID(id: string){
    return {
      "_id" : "003c1f0e-108f-4171-9cd5-b7001a5ff9c7",
      "@type" : "CreativeWork",
      "additionalType" : "CuratedContent",
      "name" : "sun6",
      "_type" : "curated-content",
      "associatedMedia" : {
          "asset" : "https://s3-euw1-ap-pe-df-content-store-assets-u.s3.eu-west-1.amazonaws.com/curatedcontent/3dfb3391-9156-4956-897a-20cebe57d256/CCCurrentStatement13-12-2018.xls"
      }
    }
  }
}
export  = TestUtil;