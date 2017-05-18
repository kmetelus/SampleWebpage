window.FillInfo = (() => {
  return {
      init: (name) => {
          $.ajax({
              url: './../../sources/data/inventory.json',
              type: 'GET',
              datatype: 'json',
              success: (inventory) => {
                  let item;
                  inventory.forEach((obj) => {
                      if (obj.name === name) {
                          item = obj;
                      }
                  });

                  $("#item-name").append($("<h2>" + item.name + "</h2>"));
                  $("#item-image").append($("<img class ='item-image' src='./../." + item.image + "'></img>"));
                  $("#item-description").append($("<p class='item-description'>" + item.description + "</p>"));
                  $("#item-price").append($("<p>Price: $" + item.price + "</p>"));
                  $("#item-price").append($("<div class='priceOfItem' style='display:none;'>" + item.price + "</div>"));

              },
              error: () => {
                  alert("error");
              }
          });
      }
  }
})();
