import React, {useState} from 'react'

function EditButton(articles) {
    
    let article = articles.id
    

    const [editTitle, setTitle] = useState ('');
    const [editBody, setBody] = useState ('');

    const submitHandler = e => {
        e.preventDefault()
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify(
            {
                "id": parseInt(article.id),
                "title": editTitle,
                "body": editBody
            });

        let requestOptions = {
        method: 'PUT',
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8081/api/articles.php/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        window.location.reload();
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    className="titletextedit"
                    type="text"
                    name="edittitle"
                    placeholder={article.title}
                    value={editTitle} 
                    onChange={e => setTitle(e.target.value)} 
                />
                <br />
                <textarea
                    className="bodytextedit"
                    style={{
                        height: 280,
                        width: 550,
                    }}
                    name="editbody"
                    placeholder={article.body}
                    value={editBody}
                    onChange={e => setBody(e.target.value)}
                /><br />
                <button type="submit" >Update post</button><br />
            </form>
        </div>
    )
}

export default EditButton 

