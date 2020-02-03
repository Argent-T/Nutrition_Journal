document.querySelectorAll("#nav li").forEach(function(navEl) {
    navEl.onclick = function() { toggleTab(this.id, this.dataset.target); }
  });
  
  function toggleTab(selectedNav, targetId) {
    var navEls = document.querySelectorAll("#nav li");
  
    navEls.forEach(function(navEl) {
      if (navEl.id == selectedNav) {
        navEl.classList.add("is-active");
      } else {
        if (navEl.classList.contains("is-active")) {
          navEl.classList.remove("is-active");
        }
      }
    });
  
    var tabs = document.querySelectorAll(".tab-pane");
  
    tabs.forEach(function(tab) {
      if (tab.id == targetId) {
        tab.style.display = "block";
      } else {
        tab.style.display = "none";
      }
    });
  }


foodButton = document.querySelector("#foodButton")
  
if (foodButton) {
  foodButton.addEventListener("click", function (event) {

      event.preventDefault();
      foodSearch = $('#input').val();
      
      console.log(foodSearch);
      
      foodAjax()
      picture();

  })
};

workoutButton = document.querySelector("#workoutButton")
 
if (workoutButton) {
  workoutButton.addEventListener("click", function (event) {

      event.preventDefault();
      workout = $('#workout').val().trim()
      time = $('#time').val().trim();
      exeInput = workout +" "+ time +" minutes"
      console.log(today);
      console.log(workout);
      


      
      workoutInfo();

  })
};

exerciseLogButton = document.querySelector("#exerciseLog")
  
if (exerciseLogButton) {
  exerciseLogButton.addEventListener("click", function (event) {

      event.preventDefault();
      
      console.log(time);
      console.log(workout);
      console.log(exeInput)
      console.log(today);
      console.log(calories)
      
      // handleFormSubmit();

  })
};

// A function for handling what happens when the form to create a new post is submitted
function handleFormSubmit(event) {
  event.preventDefault();
  // Wont submit the post if we are missing a body, title, or author
  if (!time.val().trim() || !workout.val().trim() || !today.val() || !calories.val()) 
    return;
  }
  // Constructing a newPost object to hand to the database
  var newPost = {
    exercise_name: workout
      .val()
      .trim(),
    duration: time
      .val()
      .trim(),
    calories_burned: calories
    .val()
    .trim(),
    date: today
    .val()
    .trim()
  };

  // If we're updating a post run updatePost to update a post
  // Otherwise run submitPost to create a whole new post
  if (updating) {
    newPost.id = postId;
    updatePost(newPost);
  }
  else {
    submitPost(newPost);
  }


// Submits a new post and brings user to blog page upon completion
function submitPost(post) {
  $.post("/api/exercises", post, function() {
  
  });
}