window.Select = (() => {
  return {
      init: () => {
          console.log("here");

          $.ajax({
              url: './../sources/data/inventory.json',
              type: 'GET',
              datatype: 'json',
              success: (inventory) => {
                  // console.log("owijefoiwjef");
                  inventory.forEach((item) => {
                      console.log("here");
                      $(".result-container").append($("<div><img class='item' src='" + item.image + "'/><div>"));
                  });
              },
              error: () => {
                  $(".result-container").append($("<div class='col-xs-6'>ERROR</div>"));
                  console.log("hereeeeeee");
              }
          });

          // $.getJSON("./../sources/data/test.json").success((inventory) => {
          //     console.log("inventory");
          //     inventory.forEach((item) => {
          //         console.log(item);
          //         // $(".result-container").append($("<img src='" + item.image + "'/>"));
          //     });
          // }).error(() => {
          //     console.log("error");
          // });
      }
  }
})();
