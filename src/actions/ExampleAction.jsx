// import gql from 'graphql-tag';
// import { client } from '../index';

// export const RECEIVE_BLOGS = 'RECEIVE_BLOGS';

// function receiveBlogs(data) {
//     return { type: RECEIVE_BLOGS, data };
// }

// /* actions are where you should make all network connections (database querys) */
// export default function clickButtonAction() {
//     return function action(dispatch) {
//         client
//             .query({
//                 query: gql`
//                     query {
//                         getBlogs {
//                             blogs {
//                                 id
//                                 createdAt
//                                 title
//                                 text
//                             }
//                         }
//                     }
//                 `
//             })
//             .then(data => {
//                 dispatch(receiveBlogs(data));
//             })
//             .catch(error => console.error(error));
//     };
// }
