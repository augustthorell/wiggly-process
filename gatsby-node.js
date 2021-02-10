/* exports.sourceNodes = async ({ actions }) => {
    const { createNode } = actions
    // Download data from a remote API.
    const data = await fetch('http://localhost:8081/api/articles.php')
    // Process data and create nodes.using a custom processDatum function
    data.forEach(datum => createNode(processDatum(datum)))
    // You're done, return.
    return
  }
 */
const axios = require('axios');


 // exports.sourceNodes = async ({ actions }) => {
 exports.sourceNodes = ({actions}) => {
const {createNode} = actions;
return new Promise((resolve, reject) => {

// fetch raw data from the randomuser api
// const fetchRandomUser = () => axios.get(`https://randomuser.me/api/?results=500`);
// await for results
// const res = await fetchRandomUser();

axios.get(`https://randomuser.me/api/?results=100`).then(res => {

  res.data.results.map((data, i) => {

    // Create your node object
    const userNode = {
      // Required fields
      
      parent: `__SOURCE__`,
      internal: {
        type: `randomuser`,
      },
      children: [],

      /* // Other fields that you want to query with graphQl
      gender: user.gender,
      name: {
        title: user.name.title,
        first: user.name.first,
        last: user.name.last
      },
      picture: {
        large: user.picture.large,
        medium: user.picture.medium,
        thumbnail: user.picture.thumbnail
      }, */

      title: data.title,
      body: data.body,
      created_at: data.created_at,
      id: data.id,
      


    }

    
  });
  resolve();
});

});

}
