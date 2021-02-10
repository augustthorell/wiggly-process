import React /*, { useEffect, useState} */ from 'react'

import NewscontainerAdmin from "../components/newscontainerAdmin"

import Form from "../components/form"
import Layout from "../components/layout"

function Adminpage() {

    return (
        <div>
            <Layout>
                <h1>Admin page</h1>
                <p>Add or update the news post</p>

                <Form />
                <NewscontainerAdmin />
                
            </Layout>
        </div>
    )
}

export default Adminpage