const submitBtn = document.querySelector(".submit_btn");
const userName = document.querySelector("#user");
const comment = document.querySelector("#comment");
const likeIcon = document.querySelector(".heart_icon");
const count = document.querySelector(".count");
const commentsCont = document.querySelector(".comments_container");

likeIcon.addEventListener("click", likeComment);
submitBtn.addEventListener("click", submitFeedback);

feedbackArr = [];
let positiveFeedback = false;
let likesCount = 0;

function submitFeedback(e) {
  // get user name
  const userForm = userName.value;
  // get feedback
  const commentForm = comment.value;
  // if inputs are not empty
  if (userForm && commentForm !== "") {
    // create new feedback
    newFeedback = {
      id: Math.floor(Math.random() * 1000 + 1),
      userName: userForm,
      userComment: commentForm,
      typeOfFeedback: positiveFeedback,
    };
    // add new feedback to array
    feedbackArr.push(newFeedback);
    // if liked add to count
    if (positiveFeedback === true) {
      addLikes();
    }
    // clear inputs
    resetForm();
    // add feedback to list
    addFeedback(newFeedback);
  }

  e.preventDefault();
}

function likeComment() {
  likeIcon.classList.toggle("liked");

  if (likeIcon.classList.contains("liked")) {
    likeIcon.innerHTML = `<i class="fas fa-heart"></i>`;
    // set feedback to liked
    positiveFeedback = true;
  } else {
    likeIcon.innerHTML = `<i class="far fa-heart"></i>`;
    // set feedback to not liked
    positiveFeedback = false;
  }
}

function addLikes() {
  likesCount++;
  count.innerHTML = likesCount;
}

function resetForm() {
  userName.value = "";
  comment.value = "";
  likeIcon.innerHTML = `<i class="far fa-heart"></i>`;
  positiveFeedback = false;
}

function addFeedback(item) {
  // select first letter of the user name
  const letter = item.userName.charAt(0);
  // create new div
  const div = document.createElement("div");
  // add class
  div.classList = "comment_card";
  // add id
  div.id = item.id;
  // add html
  div.innerHTML = `
    <div class="pic center_display">
                    ${letter}
                </div>
                <div class="comment_info">
                    <small class="nickname">
                        ${item.userName}
                    </small>
                    <p class="comment">
                        ${item.userComment}
                    </p>
                    <div class="comment_bottom">
                        <div class="heart_icon--comment">
                            ${
                              item.typeOfFeedback
                                ? `<i class="fas fa-heart positive"></i>`
                                : `<i class="far fa-heart"></i>`
                            }
                        </div>
                        <button>
                            Reply
                        </button>
                    </div>
                </div>
    `;
  // insert feedback into the list
  commentsCont.insertAdjacentElement("beforeend", div);
}
