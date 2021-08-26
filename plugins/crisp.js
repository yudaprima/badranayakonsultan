export default () => {
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = "93fa3c4a-551b-4a36-a86b-b308479de45e";

  (function() {
    var d = document;
    var s = d.createElement("script");

    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
};
