const text_wrapper = document.getElementById("text_wrapper");
const renederd_words = document.getElementsByClassName("xd");

let text = "FANCY SPINNING TEXT";

text = `${text} ${text}`;

text.split("").forEach((t, i) => {
  const textEl = document.createElement("strong");
  textEl.innerHTML = t;
  textEl.className = "xd";
  textEl.style.left = `${i * 150}px`;

  if (i % 2 != 0) {
    textEl.classList.add("text-white");
  }

  text_wrapper.appendChild(textEl);
});

for(let i = 0; i < renederd_words.length; i++){
  xd = renederd_words[i];

  console.log(xd);
}