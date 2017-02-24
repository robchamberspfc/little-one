      $.get('navigation.json',
            function (data) {
              $.each(data, function(i, item) {
                $("#nav").append("<p class = 'nav'><a href = '" +item.url+"' = 'menu' class = 'nav'>"+item.title+"</a></p>");
              }
                    );
            }
           );
