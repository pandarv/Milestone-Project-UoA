const search = document.querySelector(".search");
const input = document.querySelector("main input");
const headlineList = document.querySelector(".news-headlines");

search.addEventListener("submit", function (e) {
  e.preventDefault();
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

    fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${searchVal}&freshness=Day&textFormat=Raw&safeSearch=Off&sortBy=Date&count=50&cc=en-US&category=Entertainment_Music`, options)
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
          /*** Removes searched History ***/
          const liList = document.querySelectorAll("main ul li");
          liList.forEach((item) => item.remove());

          /**** Working as List on webpage ****/
          document.querySelector("h5").innerText = `Searched News`;
          const dataArr = data.value;
          console.log(dataArr);

          dataArr.forEach((item) => {
            const lis = document.createElement("li");
            const a = document.createElement("a");
            const span = document.createElement("span");
            const date = new Date(item.datePublished).toUTCString();
            const modifiedDate = new Date(date);
            let day = modifiedDate.getDate();
            let month = modifiedDate.getMonth() + 1;
            let year = modifiedDate.getFullYear();
            a.setAttribute("href", item.url);
            a.setAttribute("target", "_blank");
            a.innerText = item.name;
            span.innerText = `${month} / ${day} / ${year}`;
            lis.appendChild(a);
            lis.appendChild(span);
            headlineList.appendChild(lis);
          });
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
