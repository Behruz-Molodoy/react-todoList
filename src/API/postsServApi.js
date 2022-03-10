// eslint-disable-next-line no-unused-vars
import axios from "axios";

export default class postServApi {
  static async getAllPosts(limit, page) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts` , {
      params: {
        _limit: limit,
        _page: page 
      }
    })
    return response
  }
}
