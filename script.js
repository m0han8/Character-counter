const word = document.getElementById("one");
const ans = document.getElementById("two");
const click = document.getElementById("ok");

click.addEventListener("click", function() {
  let count = 0;
  let text = word.value;

  for (let i = 0; i < text.length; i++) {
    if ((text[i] >= 'a' && text[i] <= 'z') || (text[i] >= 'A' && text[i] <= 'Z')) {
      count++;
    }
  }

  ans.textContent = `The number of characters are: ${count}`;
});
