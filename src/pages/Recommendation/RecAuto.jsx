// import axios from "axios";
// import React from "react";

// const baseURL = "https://api.igdb.com/v4/artworks;

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div>
//       <h1>{post.id}</h1>
//       <p>{post.url}</p>
//     </div>
//   );
// }