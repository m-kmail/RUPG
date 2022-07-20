const manager = new APIManager();
const renderer = new Renderer();

const loadData = function () {
  manager.init();
};

const display = function () {
  renderer.render(manager.getData());
};

$(".load").on("click", loadData);
$(".show").on("click", display);
