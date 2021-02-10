/* import React from "react"

const apiRoot = "http://localhost:8081/api/articles.php"

const callback = (response) =>{
    console.log("THIS IS CALLBACK")
    console.log(response.articles[0].body);
    return (
        <h3>{response.articles[0].title}</h3>
    )
  }

const apiRequest = (callback) => {
    fetch(apiRoot)
    .then( (response) => (
        response.json().then(data =>(
            callback(data)
        ))
    ))
}

apiRequest(callback);

export default {
    callback
} */




/* let createdPost = await fetch(`${url}/${mode}`, {
      method: "POST", */



export class MyApi {
    static host = "http://localhost:8081/api/articles.php";

    static getAllArticles() {
        return fetch(MyApi.host + "/api/articles").then(response => response.json());
    };

    /* static updateArticles() {
        return fetch(MyApi.host + "/api/articles").then(response => response.json()), { method: "POST"};
    }; */
}

