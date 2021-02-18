import React, { useEffect, useState} from "react"

import {MyApi} from "../util/MyApi"

import DeleteButton from "./deleteButton"

import EditButton from "./editbutton"

const NewscontainerAdmin = () => {
    let [articles, setArticles] = useState([]);

    useEffect(() => {
      MyApi.getAllArticles().then(responseJson => {
        setArticles(responseJson.articles);  
      });
  
    }, []);

    return (
        <div>
          <p>Update post</p>
            {articles.map((articles) =>
              <div key={articles.id}>
                <h3>{articles.title}</h3>
                <p>{articles.created_at}</p>
                <p>{articles.body}</p>
                <EditButton id={articles}/>
                <DeleteButton id={articles.id} />
                <br /><hr />
              </div>
            )}
        </div>
    )
}

export default NewscontainerAdmin

