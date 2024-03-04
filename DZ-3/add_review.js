function addReview() {
    var productName = document.getElementById("productName").value;
    var reviewText = document.getElementById("reviewText").value;

    if (productName && reviewText) {
        var review = {
            productName: productName,
            reviewText: reviewText
        };

        // Get existing reviews from localStorage
        var existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];

        // Add the new review to existing reviews
        existingReviews.push(review);

        // Save the updated reviews to localStorage
        localStorage.setItem("reviews", JSON.stringify(existingReviews));

        alert("Review added successfully!");

        // Clear input fields after successful addition
        document.getElementById("productName").value = "";
        document.getElementById("reviewText").value = "";
    } else {
        alert("Please fill in all fields.");
    }
}
