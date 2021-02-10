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
            {articles.map((articles) =>
              <div key={articles.id}>
                <h3>{articles.title}</h3>
                <p>{articles.created_at}</p>
                <p>{articles.body.substr(0, 40)}</p>
                <EditButton id={articles}/>
                <br />
                <DeleteButton id={articles.id} />
                <br /><hr />
              </div>
            )}
        </div>
    )
}

export default NewscontainerAdmin

