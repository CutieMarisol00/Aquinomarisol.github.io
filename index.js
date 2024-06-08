const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2")
const countLikes1 = document.getElementById("countLikes1")
const countLikes2 = document.getElementById("countLikes2")

const btndisLike1 = document.getElementById("btndisLike1")
const btndisLike2 = document.getElementById("btndisLike2")
const countdisLikes1 = document.getElementById("countdisLikes1")
const countdisLikes2 = document.getElementById("countdisLikes2")

function hitLikes1() {
  let totalLikes1 = parseInt(countLikes1.value) + 1
  countLikes1.textContent = totalLikes1.toString()
}
btnLike1.addEventListener("click",hitLikes1)

function hitLikes2() {
  let totalLikes2 = parseInt(countLikes2.value) + 1
  countLikes2.textContent = totalLikes2.toString()
}
btnLike2.addEventListener("click",hitLikes2)

function hitdisLikes1() {
  let totaldisLikes1 = parseInt(countdisLikes1.value) + 1
  countdisLikes1.textContent = totaldisLikes1.toString()
}
btndisLike1.addEventListener("click",hitdisLikes1)

function hitdisLikes2() {
  let totaldisLikes2 = parseInt(countdisLikes2.value) + 1
  countdisLikes2.textContent = totaldisLikes2.toString()
}
btndisLike2.addEventListener("click",hitdisLikes2)

const submit = document.getElementById("submit")
const comment = document.getElementById("comment")
const commentbox = document.getElementById("commentbox")
function submitComment(){
  commentbox.textContent +=comment.value.toString() + "\n"
  comment.value="";
}
submit.addEventListener("click",submitComment)
