// Generate random data for books
const books = [
    {
      title: "The Shadow in the Forest",
      genre: "Fantasy",
      publish: 2019
    },
    {
      title: "Whispers of the Moon",
      genre: "Romance",
      publish: 2021
    },
    {
      title: "Secrets of the Lost City",
      genre: "Adventure",
      publish: 2018
    },
    {
      title: "The Silent Killer",
      genre: "Thriller",
      publish: 2023
    },
    {
      title: "Learning JavaScript Essentials",
      genre: "Educational",
      publish: 2020
    },
    {
      title: "Tales from the Deep Blue Sea",
      genre: "Fantasy",
      publish: 2017
    },
    {
      title: "Love Beyond Time",
      genre: "Romance",
      publish: 2022
    },
    {
      title: "Into the Wilderness",
      genre: "Adventure",
      publish: 2016
    },
    {
      title: "The Hacker's Handbook",
      genre: "Technology",
      publish: 2021
    },
    {
      title: "Nightfall",
      genre: "Horror",
      publish: 2015
    }
  ];
//   const userBooks=books.filter((bk )=>bk.genre=='Adventure')
  const userpublish=books.filter((bk)=>{
   return bk.publish>2018 && bk.genre=='Technology'
})
//   console.log(userBooks);
  console.log(userpublish);
  