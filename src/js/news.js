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

    fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${searchVal}&freshness=Day&textFormat=Raw&safeSearch=Off&sortBy=Date&count=100&cc=en-US&category=Entertainment_Music`, options)
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
          // document.querySelector("main li").parentElement.remove();

          /*** Removes searched History ***/
          const liList = document.querySelectorAll("main ul li");
          liList.forEach((item) => item.remove());

          // if (headlineList.hasChildNodes()) {
          //   let childList = headlineList.childNodes;
          //   childList.remove();
          //   // childList.forEach()
          //   console.log(childList);
          // }
          // headlineList.removeChild(liList);
          // console.log(data);

          /***** Try Later After project submission - Display and sorting  *****/
          // const dataApiExtract = {
          //   category: data.value.map((item) => item.category),
          //   datePublished: data.value.map((item) => item.datePublished),
          //   urlLink: data.value.map((item) => item.url),
          //   newsHeadline: data.value.map((item) => item.name),
          // };
          // console.log(dataApiExtract);
          // dataApiExtract.forEach
          // dataApiExtract.datePublished.sort((a, b) => a - b);

          //   let jsonDate = new Date().toJSON();
          // console.log(dataApiExtract.newsHeadline);
          //   console.log(new Date(dataApiExtract.datePublished).toUTCString());

          // const dateArr = dataApiExtract.datePublished.map((item) => new Date(item).toUTCString());
          // dateArr.sort((a, b) => a - b);
          // console.log(dateArr);

          //   let backToDate = ;
          //   console.log(data);
          //   console.log(dataApiExtract.category, backToDate);

          document.querySelector("h5").innerText = `Searched News`;
          const dataArr = data.value;
          console.log(dataArr);

          /**** Working as List on webpage ****/

          dataArr.forEach((item) => {
            // console.log(item);
            const lis = document.createElement("li");
            const a = document.createElement("a");
            const span = document.createElement("span");
            const date = new Date(item.datePublished).toUTCString();
            // console.log(date);
            const modifiedDate = new Date(date);
            let day = modifiedDate.getDate();
            let month = modifiedDate.getMonth() + 1;
            let year = modifiedDate.getFullYear();
            a.setAttribute("href", item.url);
            a.setAttribute("target", "_blank");
            a.innerText = item.name;
            span.innerText = `${month} / ${day} / ${year}`;
            // span.innerText = `${date}`;
            lis.appendChild(a);
            lis.appendChild(span);
            headlineList.appendChild(lis);
          });

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
