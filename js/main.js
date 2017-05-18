window.Select = (() => {
  return {
      init: () => {
          $.ajax({
              url: './../sources/data/inventory.json',
              type: 'GET',
              datatype: 'json',
              success: (inventory) => {
                  $(".result-container").append($("<div class='row' id='rc'>"));

                  inventory.forEach((item) => {
                      if (item.status === "new") {
                        $("#rc").append($("<a style='display=block' href='" + item.page + "'><div class='col-xs-4 item' href='#!'><img class='item-image' src='" + item.image + "'/><p class='item-name'>" + item.name + "</p><p class='item-price'>$" + item.price + "</p><div></a>"));
                      }
                  });
                  $(".result-container").append($("</div>"));
              },
              error: () => {
                  $(".result-container").append($("<div class='col-xs-6'>ERROR</div>"));
              }
          });
      }
  }
})();
