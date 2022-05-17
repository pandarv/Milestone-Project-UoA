const search = document.querySelector(".search");
// const searchBtn = document.querySelector(".search-btn");
const input = document.querySelector("main input");
const headlineList = document.querySelector(".news-headlines");

search.addEventListener("submit", function (e) {
  e.preventDefault();

  //   const newsAPIKey = "5d78bc58d70040dd812963f0e3cbbaa6";
  let searchVal = input.value.trim().toLowerCase();

  if (searchVal !== "") {
    const options = {
      method: "GET",
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        "X-RapidAPI-Key": "5e1ff15530msh80f1761af613ab1p1dc48fjsn24401c60918d",
      },
    };

    fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${searchVal}&freshness=Day&textFormat=Raw&safeSearch=Off`, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          document.querySelector("h5").innerText = `Not able to find (${searchVal}).`;
        }
        console.log(response.status);
      })
      .then((data) => {
        if (data) {
          console.log(data);
          document.querySelector("h5").innerText = `Searched News`;
        }
      })
      .finally(() => {
        console.log(`Data fetched`);
      });
  } else {
    document.querySelector("h5").innerText = `Search field is empty`;
  }
  input.value = "";
});
