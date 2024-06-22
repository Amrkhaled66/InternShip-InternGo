const copyicon__btn = document.querySelector(".copyicon__btn");
const pre = [...document.querySelectorAll("pre")];

pre.map((p) =>
    p.addEventListener("click", function (e) {
        if (e.target.classList.contains("copyicon__btn__p")) {
      navigator.clipboard.writeText(e.target.closest("pre").querySelector("code").innerText)
    }
  })
);
