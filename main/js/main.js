      var images = $.get("https://api.github.com/repos/robchamberspfc/little-one/contents/content/" + page + "/",
                         function (data) {
                           $.each(data, function(i, item) {
                             $("#images").append("<div class='box'><div class='boxInner'><a href='#"+ item.sha +"'><img class='lazyload tiled' data-src='" + item.download_url + "'></a><div id='"+ item.sha +"' class='modalDialog'><div><img class='lazyload modal' data-src='" + item.download_url + "'><a href= '#close' class='button'>Close</a><a href='" + item.download_url + "' download='" + item.name + "' class='button'>Download (" + (item.size/1048576).toFixed(1) + "Mb)</a></div></div></div></div>");
                           }
                                 );
                         }
                        );

      var nav = $.get('/main/navigation.json',
                      function (data) {
                        $.each(data, function(i, item) {
                          $("#nav").append("<p class = 'nav'><a href = '" +item.url+"' name = 'menu' class = 'nav'>"+item.title+"</a></p>");
                        }
                              );
                      }
                     );