class BandSiteApi {
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }

    // getComments method
    async getComments(){
        const endpoint = "comments";
        try {
            const response = await axios.get(`${this.baseUrl}/${endpoint}?api_key=${this.apiKey}`);
            
            return response.data.sort(function (a, b) {
                return b.timestamp - a.timestamp;
            })
        } catch (error) {
            console.log(error)
        }
    }

    // postComments method
    async postComments(newComments){
        const endpoint = "comments";
        try{
            const response = await axios.post(`${this.baseUrl}/${endpoint}?api_key=${this.apiKey}`, newComments)
            return response.data;
        } catch(error){

        }
    }

    // getShows method
    async getShows(){
        const endpoint = "showdates";
        const response = await axios.get(`${this.baseUrl}/${endpoint}?api_key=${this.apiKey}`);
        return response.data;
    }

    testApi(){
        console.log("This is a test");
    }
}

export default BandSiteApi;
