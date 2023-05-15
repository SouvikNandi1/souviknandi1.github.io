const apiUrl = "https://api.edamam.com/search";
const initialParams = {
    q: "",
    app_id: "53c99899",
    app_key: "5bcac43624cd4fde163db0d5b37859e3",
    from: 0,
    to: 20
};

function searchRecipes() {
    const query = $('#gsc-i-id1').val();
    if (!query) return;
    const params = Object.assign({}, initialParams, { q: query });
    $.get(apiUrl, params)
        .then(response => {
            console.log(response);
            recipeaddsenginedisunic()
            displayRecipes(response.hits);
        })
        .catch(error => {
            console.error(error);
        });
}

function displayRecipes(hits) {
    const $recipeContainer = $('#recipedisunic');
    
    $recipeContainer.empty();
    if (hits.length === 0) {
        document.getElementById("recipedisunic").remove()
        return;
    }
    
    hits.forEach(hit => {
        const { label, image, url } = hit.recipe;
        const $recipe = $('<div class="recipe-item">');
        const $img = $('<img>').attr('src', image);
        const $title = $('<h2>').text(label);
        const $link = $('<button>').attr('onclick','window.open("'+url+'","_self")').text('View recipe');
        $recipe.append($img, $title, $link);
        $recipeContainer.append($recipe);
        $link
    });
}
