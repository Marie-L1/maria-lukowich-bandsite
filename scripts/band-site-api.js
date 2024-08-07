
class BandSiteApi {
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }

    // getComments method
    async getComments(){
        const response = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
        return response.data;
    }

    // postComments method
    async postComments(newCommentObject){
        const response = await axios.post(`${this.baseUrl}/comments?api_key=${this.apiKey}`, newCommentObject)
        return response.data;
    }
}





// getShows method with async