const apiurl =  'https://newsapi.org/v2/everything?q=tesla&from=2023-04-17&sortBy=publishedAt&apiKey=b9ac7567b4ec4c99ab60b8d1fdb2d09e';

fetch(apiurl)
.then((data) => {
    return data.json();
})
.then((news) => {
    
    let small = document.getElementsByClassName("small-column");
    const articles = news.articles.slice(0, 4);

    for(i=0; i < articles.length; i++) {
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
        a.href="#"

        // 7. creat h3 element
        let h3= document.createElement("h3");
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
    const posts = news.articles.slice(13, 16);
    for (i=0; i < posts.length; i++) {

        // 1. creat div with className
        let container= document.createElement("div");
        container.className = "article";

        // 2. add image to the div
        let img = document.createElement("img");
        img.src = posts[i].urlToImage;

        // 3. add image to div(container)
        container.appendChild(img);

        // 4. creat h4 element
        let h4 = document.createElement("h4");
        h4.className = "title";
        h4.innerText = posts[i].title;
        
        // 5. add h4 to div(container)
        container.appendChild(h4);

         // 6. creat link
        let a = document.createElement("a");
        a.href="#"

        // 7. creat h3 element
        let h3 = document.createElement("h3");
        h3.innerText = posts[i].description;

        // 8. add h3 to a
        a.appendChild(h3);

         // 9. add a to div(container)
        container.appendChild(a);

         // 10. creat h4 element
        let author = document.createElement("h4");
        author.className = "author";
        author.innerText = posts[i].author;

        // 11. add author to div(box)

        container.appendChild(author);



        

        big[0].appendChild(container);
        
    }


    console.log(JSON.stringify(news.articles, null, 2));
});