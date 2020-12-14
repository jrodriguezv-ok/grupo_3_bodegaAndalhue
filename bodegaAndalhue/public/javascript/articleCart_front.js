window.addEventListener("load", function() {
    var articles = document.querySelectorAll(".containerProduct");
    var impares = [];
    for (let i = 0; i < articles.length; i++) {
        if (i % 2) {
            impares.push(articles[i])
        }
    }
    impares.map(function(article) {
        return article.classList.add("fondoGris")
    })
})