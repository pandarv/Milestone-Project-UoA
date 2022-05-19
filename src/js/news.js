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
          let dataApiExtract = {
            category: data.value.map((item) => item.category),
            datePublished: data.value.map((item) => item.datePublished),
            urlLink: data.value.map((item) => item.url),
            newsHeadline: data.value.map((item) => item.name),
          };
          //   let jsonDate = new Date().toJSON();
          //   console.log(dataApiExtract.newsHeadline);
          //   console.log(new Date(dataApiExtract.datePublished).toUTCString());
          dataApiExtract.datePublished.forEach((item) => console.log(new Date(item).toUTCString()));
          //   let backToDate = ;
          //   console.log(data);
          //   console.log(dataApiExtract.category, backToDate);
          document.querySelector("h5").innerText = `Searched News`;
          //   let lis = document.createElement("li");
          //   let a = document.createElement("a");
          //   a.setAttribute("href", dataApiExtract.urlLink);
          //   a.setAttribute("target", "_blank");
          //   a.textContent = dataApiExtract.newsHeadline;
          //   lis.appendChild(a);
          //   console.log(dataApiExtract.newsHeadline.length);
          //   headlineList.appendChild(lis);

          //   data.value.forEach((element) => {
          //     console.log(element);
          // let lis = document.createElement("li");
          // let a = document.createElement("a");
          // a.setAttribute("href", dataApiExtract.urlLink);
          // a.setAttribute("target", "_blank");
          // a.textContent = dataApiExtract.newsHeadline;
          // lis.appendChild(a);
          // headlineList.appendChild(lis);
          //   });
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
