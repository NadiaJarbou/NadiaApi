const apiKey = '48f451365d5643dda1a7926d296e324b';
const url = `https://newsapi.org/v2/everything?language=en&q=IT OR programming OR marketing&apiKey=${apiKey}`;


fetch(url)
    .then((data) => {
        return data.json();
    })
    .then((news) => {

        console.log(JSON.stringify(news, null, 2))

        let small = document.getElementsByClassName("small-column");
        const articles = news.articles.slice(0, 4);

        for (let i = 0; i < articles.length; i++) {
            // 1. create dive with className
            let box = document.createElement("div");
            box.className = "article";

            // 2. add image to the div
            let img = document.createElement("img");
            img.src = articles[i].urlToImage;

            // 3. add image to div(box)
            box.appendChild(img);

            // 4. crete h4 element
            let h4 = document.createElement("h4");
            h4.className = "published";
            h4.innerText = articles[i].publishedAt;

            // 5. add h4 to div(box)
            box.appendChild(h4);

            // 6. creat link
            let a = document.createElement("a");
            a.href = articles[i].url;

            // 7. creat h3 element
            let h3 = document.createElement("h3");
            h3.className = "title";
            h3.innerText = articles[i].title;

            // 8. add h3 to a
            a.appendChild(h3);

            // 9. add a to div(box)
            box.appendChild(a);

            // 10. creat h4 element
            let author = document.createElement("h4");
            author.className = "author";
            author.innerText = articles[i].author;

            // 11. add author to div(box)
            box.appendChild(author);

            small[0].appendChild(box);
        }

        let big = document.getElementsByClassName("big-column");
        const posts = news.articles.slice(14, 17);
        for (let j = 0; j < posts.length; j++) {

            // 1. creat div with className
            let container = document.createElement("div");
            container.className = "article";

            // 2. add image to the div
            let img = document.createElement("img");
            img.src = posts[j].urlToImage;

            // 3. add image to div(container)
            container.appendChild(img);

            // 4. creat h4 element
            let h4 = document.createElement("h4");
            h4.className = "title";
            h4.innerText = posts[j].title;

            // 5. add h4 to div(container)
            container.appendChild(h4);

            // 6. creat link
            let a = document.createElement("a");
            a.href = posts[j].url;

            // 7. creat h3 element
            let h3 = document.createElement("h3");
            h3.innerText = posts[j].description;

            // 8. add h3 to a
            a.appendChild(h3);

            // 9. add a to div(container)
            container.appendChild(a);

            // 10. creat h4 element
            let author = document.createElement("h4");
            author.className = "author";
            author.innerText = posts[j].author;

            // 11. add author to div(box)
            container.appendChild(author);

            big[0].appendChild(container);

        }

        // sidebar news
        let side = document.getElementById("top");
        const sideNews = news.articles.slice(18, 24);
        for (let i = 0; i < sideNews.length; i++) {
            let con = document.createElement("div");
            con.className = "last-article";

            let a = document.createElement("a");
            a.href = sideNews[i].url;

            let h3 = document.createElement("h3");
            h3.innerText = sideNews[i].title;

            a.appendChild(h3);
            con.appendChild(a);
            side.appendChild(con);

            let hr = document.createElement("hr");
            hr.style = "width: 100%";
            side.appendChild(hr);
        }

    })
    .catch((error) => {
        console.log('Error:', error);
    });