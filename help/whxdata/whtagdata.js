(function() {
var tagCombinations =  [["$"]] ,
  tags =  [{"display":"saas","name":"cc8_0_olduionprem ! cc8_0_olduiupgradeonprem ! & cc8_0_onprem ! & cc8_0_webuionpremise ! & cc8_0_webuionpremonly ! & comment ! & hidden ! & onlineonlyoldui ! & onlineonlyopl ! & print ! & printonly ! & quickstart ! & quickstartonly ! & writernote ! &"}],
  caption = "Filter by",
  type = "checkbox",
  defFilter = null;

window.rh.model.publish("p.tag_combinations", tagCombinations, { sync:true });
window.rh.model.publish("temp.data", {"tags": tags, "caption": caption, "type": type , "default": defFilter}, { sync:true });
})();