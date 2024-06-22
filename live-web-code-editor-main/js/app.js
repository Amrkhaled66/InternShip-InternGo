document.getElementById("htmlCode").value = "<div>\n\n</div>";
document.getElementById("cssCode").value = "<style>\n\n</style>";
document.getElementById("jsCode").value = "<script>\n\n</script>";

const allTextarea = [...document.querySelectorAll("textarea")];

const setLocalStorge = function (e) {
  console.log(e.target.value);
  localStorage.setItem(e.target.id, e.target.value);
};

const getLocalStorage = function () {
  allTextarea.map((text) => {
    const content = localStorage.getItem(text.id);
    if (!content) return;
    document.getElementById(text.id).value = content;
  });
};

window.onload = getLocalStorage;

const debounce = function (func, daley = 1000) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(null, ...args), daley);
  };
};
const setLocalStorgeDebounced = debounce(setLocalStorge);

allTextarea.map((text) =>
  text.addEventListener("input", setLocalStorgeDebounced)
);

function showPreview() {
  var htmlCode = document.getElementById("htmlCode").value;
  var cssCode = "" + document.getElementById("cssCode").value + "";
  var jsCode = "" + document.getElementById("jsCode").value + "";
  var frame = document.getElementById("preview-window").contentWindow.document;
  frame.open();
  frame.write(htmlCode + cssCode + jsCode);
  frame.close();
}

function show(x) {
  document.getElementById("html").style.display = "none";
  document.getElementById("css").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById(x).style.display = "block";
}

function show_all() {
  if (window.innerWidth >= 992) {
    document.getElementById("html").style.display = "block";
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = "block";
    document.getElementById("result").style.display = "block";
  }
  if (
    window.innerWidth < 992 &&
    document.getElementById("html").style.display == "block"
  ) {
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
  }
}
