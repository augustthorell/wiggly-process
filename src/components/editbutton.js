import React from 'react'

function EditButton(articles) {
    console.log(articles.id)
    
    

    function changeHandler(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    
    return (
        <div>
            <button type="button" /* onClick={ () => displayEdit()} */>Edit</button><br />
            <input
                className="titletextedit"
                type="text"
                name="edittitle"
                placeholder="Edit Title"
                value={articles.id.title}
                onChange={changeHandler}
                /* style={{display: "none"}} */
            />
            <br />
            <textarea
                className="bodytextedit"
                style={{
                    height: 280,
                    width: 550,
                }}
                name="editbody"
                placeholder="Edit Content"
                value={articles.id.body}
                onChange={changeHandler}
                /* style={{display: "none"}} */
            />
        </div>
    )
}

export default EditButton
