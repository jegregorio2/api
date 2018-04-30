$(document).ready(function() {

    // variables
    // This api key does not show, so use your own api key. Thank you.
    var apiKey = '########################';

    var espnUrl = 'https://newsapi.org/v2/top-headlines?sources=espn&apiKey=';
    var nflnewsUrl = 'https://newsapi.org/v2/top-headlines?sources=nfl-news&apiKey=';
    var eweeklyURL = 'https://newsapi.org/v2/top-headlines?sources=entertainment-weekly&apiKey=';

    // click
    $('#espn').click(function() {
        $('#main').html('');
        getNews(espnUrl);
    }); // end click 

    // click
    $('#nflnews').click(function() {
        $('#main').html('');
        getNews(nflnewsUrl);
    }); // end click 

    // click
    $('#eweekly').click(function() {
        $('#main').html('');
        getNews(eweeklyURL);
    }); // end click 

    // function_declaration
    function getNews(url) {

        // variables
        var url = url + apiKey;

        // ajax 
        $.ajax({
                url: url,
                method: "GET",
                datatype: "JSON"
            }) // end ajax

            .done(function(data) {

                // variables
                var output = '';

                // for_loop
                for (var i = 0; i < data.articles.length; i++) {

                    // variables
                    title = data.articles[i].title;
                    author = data.articles[i].author;
                    description = data.articles[i].description;
                    url2 = data.articles[i].url;
                    urlImage = data.articles[i].urlToImage;

                    // displays
                    output += '<div class="articlerow">';
                    output += '<div class="article">';
                    output += '<h2 class="title">' + title + '</h2>';
                    output += '<h3>By ' + author + '</h3>';
                    output += '<p> ' + description + '</p>';
                    output += '<a href="' + url2 + '" target="_blank" class="readmore"><p>Read More</p></a>';
                    output += '</div>';
                    output += '<div class="share">';
                    output += '<img class="storyimage" src="' + urlImage + '" />';
                    output += '</div>';
                    output += '</div>';

                }; // end for loop 

                $('#main').html(output);

            }) // end done

            .fail(function() {
                $('#main').html('');
                $('#main').html('<p>Something not right</p>');
            }); // end fail 

    }; // end function getNews

}); // end ready function