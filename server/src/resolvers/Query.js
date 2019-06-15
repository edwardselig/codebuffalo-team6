// async function feed(parent, args, context) {
//   const count = await context.prisma
//     .linksConnection({
//       where: {
//         OR: [
//           { description_contains: args.filter },
//           { url_contains: args.filter },
//         ],
//       },
//     })
//     .aggregate()
//     .count()
//   const links = await context.prisma.links({
//     where: {
//       OR: [
//         { description_contains: args.filter },
//         { url_contains: args.filter },
//       ],
//     },
//     skip: args.skip,
//     first: args.first,
//     orderBy: args.orderBy,
//   })
//   console.log(links);
//   console.log(typeof links);
//   return {
//     count,
//     links,
//   }
// }

// async function getBlogs(parent, args, context) {
//   const blogs = await context.prisma.blogs();
//   console.log(blogs);
//   console.log(typeof blogs);
//   return {
//     blogs,
//   }
// }

// module.exports = {
//   feed,
//   getBlogs,
// }

async function getUser(parent, args, context) {
    const user = await context.prisma.user();
    console.log(user);
    console.log(typeof user);
    return {
        user
    };
}

module.exports = {
    getUser
};
