import React from 'react'

const DeleteButton = (id) => {

    function deleteAction(id) {
        let intId = parseInt(id.id)
        console.log(intId)
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        

        let raw = JSON.stringify(
            {
                "id": intId
            });

        let requestOptions = {
        method: 'DELETE',
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8081/api/articles.php/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log(error));

        window.location.reload();
    }
        return (
            <div>
                <button onClick={ () => deleteAction(id)}>Delete post</button>
            </div>
        )
    
}
export default DeleteButton

