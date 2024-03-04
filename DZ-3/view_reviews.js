window.onload = function () {
    displayReviews();
}

function displayReviews() {
    var reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    var reviewsList = document.getElementById("reviewsList");

    if (reviews.length === 0) {
        reviewsList.innerHTML = "<p>No reviews available.</p>";
    } else {
        var productListHTML = "";

        // Собираем список уникальных продуктов
        var products = [];
        reviews.forEach(function (review) {
            if (!products.includes(review.productName)) {
                products.push(review.productName);
            }
        });

        // Для каждого уникального продукта создаем блок с отзывами
        products.forEach(function (product) {
            productListHTML += "<div>";
            productListHTML += "<h3 onclick='toggleReviews(\"" + product + "\")' class='product-name'>" + product + "</h3>";
            productListHTML += "<ul id='" + product + "-reviews' style='display:none;'>";
            reviews.forEach(function (review, index) {
                if (review.productName === product) {
                    productListHTML += "<li>" + review.reviewText + " <button onclick='deleteReview(" + index + ")'>Delete</button></li>";
                }
            });
            productListHTML += "</ul>";
            productListHTML += "</div>";
        });

        reviewsList.innerHTML = productListHTML;
    }
}

function toggleReviews(productName) {
    var reviewsDiv = document.getElementById(productName + "-reviews");
    if (reviewsDiv.style.display === "none") {
        reviewsDiv.style.display = "block";
    } else {
        reviewsDiv.style.display = "none";
    }
}

function deleteReview(index) {
    var reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.splice(index, 1);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    displayReviews();
}
