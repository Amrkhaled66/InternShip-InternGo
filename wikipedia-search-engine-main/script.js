let resultsContainer = document.getElementsByClassName("container")[0];

const generateResults = (searchValue, inputField) => {
  fetch(
    "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=" +
      searchValue
  )
    .then((response) => response.json())
    .then((data) => {
      let results = data.query.search;
      resultsContainer.innerHTML = "";

      results.forEach((res) => {
        let result = document.createElement("div");
        result.classList.add("results");
        result.innerHTML = `
                <div>
                    <h3>${res.title}</h3>
                    <p>${res.snippet}</p>
                </div>
                <a href="https://en.wikipedia.org/?curid=${res.pageid}" target="_blank">Read More</a>
                `;
        resultsContainer.appendChild(result);
      });

      if (inputField.value === "") {
        resultsContainer.innerHTML =
          "<p>Type something in the above search input</p>";
      }
    });
};

// depuncing
const debounce = function (func, daley) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, daley);
  };
};
const generateResultsDebounced = debounce(generateResults, 2000);

const validateInput = (el) => {
  if (el.value === "") {
    resultsContainer.innerHTML =
      "<p>Type something in the above search input</p>";
  } else {
    generateResultsDebounced(el.value, el);
  }
};

const func = function () {
  console.log("Func");
};

const throotle = function (func, daley=2000) {
  let latsTime;
  return function () {
    const now = new Date().getTime();
    if (now - latsTime < daley) return;

    latsTime = now;
    func();
  };
};

document.querySelector("button").addEventListener("click", throotle(func));
