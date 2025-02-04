$(document).ready(function() {

  var text = text_messages[settings.language];
  var questions = questions_text[settings.language];
  
    
  // Returns an array with integers from `0` (inclusive) to `n_items` (exclusive)
  function get_ordered_array(n_items) {
    return Array(Math.floor(n_items)).fill().map((_, index) => index);
  };
  

  // Returns a shuffled array with integers from `0` (inclusive) to `n_items`
  // (exclusive)
  function get_shuffled_array(n_items) {

    var x = get_ordered_array(n_items),
        j, temp;

    for (var i = 0; i <= x.length - 2; ++i) {
      j = Math.floor(Math.random() * (x.length - i)) + i;
      temp = x[i];
      x[i] = x[j];
      x[j] = temp;
    };

    return x;
  };
   

  // Function that returns the indices of the questions
  var get_questions_indices =
    settings.has_random_questions ?
    () => get_shuffled_array(questions.length).slice(0, settings.n_questions) :
    () => get_ordered_array(n_questions);

  // Function that returns the indices of the answers
  var get_answers_indices = settings.has_random_answers ?
                            get_shuffled_array : get_ordered_array;

  
  // Start content
  function start_content() {

    var html = text.title
    + (settings.can_enter_n_questions ? 
    '<input type="text" id="n-questions" class="form-control mx-auto" value=""'
    + text.enter_n_questions
    + '</input>' : "")
    + '<a><img id="button-start" class="start start_hover" src="img/start.png"></a>'

    $("#start-content").html(html);

    // Input validation
    function enter_q() {
          
      var n = $("#n-questions").val();
      if (n) {
        n = parseInt(n, 5);
        if (n && n >= 1 && n <= questions.length) {
          settings.n_questions = n;
        } else {
          n.val == "";
          alert(text.wrong_input_alert_pre + $("#n-questions").val() 
          + text.wrong_input_alert_post);
          window.location.reload();
        };
      };
    };
      
    $("#button-start").on("click", enter_q);
  };

  start_content()

  // Function that display the Start content 
  function show_start_content() {
    $("#start-content, #satellite, #observatory, #bg-front").css("display","block");
    $("#quiz-content").css("display","none");
    $("#n-questions").val("");
  };

  function start_quiz() {

    var questions_indices = get_questions_indices(),
      i = 0,
      n_correct_answers = 0,
      given_answer,
      correct_answer,
      message = "";

    function show_quiz_content() {
      $("#start-content, #satellite, #observatory, #bg-front").css("display","none");
      $("#quiz-content").css("display","block");
    };

    show_quiz_content()

    function go() {

      given_answer = $(this).text();
      
      if (given_answer == correct_answer) {

        ++n_correct_answers;
        message += '<div id="content-a-a" class="col-12 text-center fadeIn">' 
        + text.correct_answer_message_pre 
        + given_answer 
        + '<br/><br/></div>';

      } else {

        message += '<div id="content-a-a" class="col-12 text-center fadeIn">' 
          + text.incorrect_answer_message_pre
          + given_answer 
          + "<br/>"
          + text.incorrect_answer_message
          + correct_answer 
          + "<br/><br/></div>";

        };

      correct_answer = set_question(++i);
    };

    function set_question(index) {

      var generate_result =
        (settings.correct_answers_character == "" || n_correct_answers === 0) ?
        n_correct_answers :
        settings.correct_answers_character.repeat(n_correct_answers);
        generate_result = '<span id="symbol">' + generate_result + '</span>';

      if (index == questions_indices.length) {

        if (n_correct_answers >= 1) {
          var results = '<div id="result" class="row tracking-in-expand-fwd-top"><div id="content-q" class="col-12">'
          + text.quiz_finished_message_pre
          + '<div id="content-q" class="col-12">' 
          + text.quiz_finished_message_post 
          + generate_result
          + '</div></div>' 
          + '<button type="button" id="button-restart-1" class="btn btn-secondary mx-2 mt-4 uppercase tracking-in-expand-fwd-top">'
          + text.restart_quiz
          + '</button>'
          + '<button type="button" id="button-answers" class="btn btn-secondary mx-2 mt-4 uppercase tracking-in-expand-fwd-top">'
          + text.show_answers
          + '</button>';
        
        } else {
          var results = '<div id="result" class="row tracking-in-expand-fwd-top"><div id="content-q" class="col-12">' 
          + text.quiz_finished_message_post
          + generate_result
          + "</div>"
          + '<div id="content-q" class="col-12">'
          + text.wrong_input_message
          + '</div></div>'
          + '<button type="button" id="button-restart-1" class="btn btn-secondary mx-2 mt-3 uppercase tracking-in-expand-fwd-top">'
          + text.restart_quiz
          +' </button>'
          + '<button type="button" id="button-answers" class="btn btn-secondary mx-2 mt-3 uppercase tracking-in-expand-fwd-top">'
          + text.show_answers
          + '</button>';
        
        };

        function show_correct_answers() {
          var a = $('<div id="answers" class="text-center"></div><br/>' 
          + message + "</p>" 
          + '<button type="button" id="button-restart-2" class="btn btn-secondary mx-2 uppercase">'
          + text.restart_quiz
          + '</button>');
          
          $("#quiz-content").append(a);
          $("#content-q, #button-restart-1, #button-answers").hide();
          $("#button-restart-2").on("click", show_start_content);
        };

        $("#quiz-content").html(results);
        $("#button-restart-1").on("click", show_start_content);
        $("#button-answers").on("click", show_correct_answers);

        return;

      };

      var question_index = questions_indices[index]
      var q = questions[question_index];
      var n = q.answers.length;
      var answers_indices = get_answers_indices(n);
      
      message += '<div id="content-a-q" class="col-12 text-center fadeIn"><br/>'
        + q.question + '<br/></div>';

      $("#quiz-content").html('<div id="question-text" class="text-center fadeIn"></div><div id="buttons"></div>')

      var s = "";
      for (var i = 0; i < n; ++i) {
        s += '<button type="button" class="btn btn-secondary mx-2 uppercase fadeIn" id="button-'
        + i + '"></button>\n';
      };

      $("#buttons").html(s);

      $("#question-text").html(q.question);

      for (var i = 0; i < n; ++i) {
        $("#button-" + i).on("click", go);
        $("#button-" + i).html(q.answers[answers_indices[i]]);
      };
    
      return q.correct_answer;
    };

    correct_answer = set_question(0);
  };

  $("#button-start").on("click", start_quiz);

});
