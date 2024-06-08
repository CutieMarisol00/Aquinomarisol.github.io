const btnLike1 = document.getElementById("btnLike1")
const countLike1 = document.getElementById("countLike1")

function clickLike1(){
  let totalLikes = parseInt(countLike1.value) + 1
  countLike1.textContent = totalLikes.toString()
}
btnLike1.addEventListener("click",clickLike1)

function clickLike2(){
  let totalLikes = parseInt(countLike2.value) + 1
  countLike2.textContent = totalLikes.toString()
}
btnLike2.addEventListener("click",clickLike2)


const submit = document.getElementById("submit")

const comment = document.getElementById("comment")

const commentbox = document.getElementById("commentbox")

function submitComment(){

commentbox.textContent += comment.value.toString() + "\n"

}

submit.addEventListener("click", submitComment)
