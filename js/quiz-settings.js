var settings = {
  // The language of the quiz
  language: "en", // "sr",
  // Number of questions in a quiz
  n_questions: 5,
  // Whether the user can specify the number of questions
  can_enter_n_questions: false,
  // Whether questions are shuffled
  has_random_questions: true,
  // Whether answers are shuffled
  has_random_answers: true,
  // The character to display the same number of times as the nmber of correct
  // answers
  correct_answers_character: "&nbsp" + "<img src='img/star.png' class='mx-auto mb-2' alt='star icon'>"
};

var questions_text = {};

questions_text.en = [
  {
    question: "How many planets there are in the solar system?",
    answers: ["9", "13", "8", "11"],
    correct_answer: "8"
  },
  {
    question: "Who was the first man to set foot on the Moon?",
    answers: ["James Irwin", "Yuri Gagarin", "John Young", "Neil Armstrong"],
    correct_answer: "Neil Armstrong"
  },
  {
    question: "Which of these planets is dwarf?",
    answers: ["Earth", "Mars", "Pluto", "Uranus"],
    correct_answer: "Pluto"
  },
  {
    question: "The Shooting star is a?",
    answers: ["Comet", "Meteor", "Asteroid", "Meteorites"],
    correct_answer: "Meteor"
  },
  {
    question: "How much is the diameter of the Sun?",
    answers: ["1,392,684", "333,060", "133,709", "1,132,849"],
    correct_answer: "1,392,684"
  }
];

questions_text.sr = [
  {
    question: '<img src="img/co.png" class="img-fluid" alt="Co">',
    answers: ["Coperniclum", "Chromium", "Cobalt", "Copper"],
    correct_answer: "Cobalt"
  },
  {
    question: '<img src="img/ni.png" class="img-fluid" alt="Ni">',
    answers: ["Nitrogen", "Niobium", "Nihonium", "Nickel"],
    correct_answer: "Nickel"
  },
  {
    question: '<img src="img/ne.png" class="img-fluid" alt="Ne">',
    answers: ["Neon", "Neptuniun", "Neodymium", "Nobelium"],
    correct_answer: "Neon"
  },
  {
    question: '<img src="img/ru.png" class="img-fluid" alt="Ru">',
    answers: ["Radium", "Ruthenium", "Rubidium", "Rhodium"],
    correct_answer: "Ruthenium"
  },
  {
    question: '<img src="img/pa.png" class="img-fluid" alt="Pa">',
    answers: ["Protactinium", "Praseodymium", "Platinum", "Palladium"],
    correct_answer: "Protactinium"
  },
  {
    question: '<img src="img/ga.png" class="img-fluid" alt="Ga">',
    answers: ["Germanium", "Gold", "Oganesson", "Gallium"],
    correct_answer: "Gallium"
  },
  {
    question: '<img src="img/sn.png" class="img-fluid" alt="Sn">',
    answers: ["Strontium", "Scandium", "Tin", "Sillicon"],
    correct_answer: "Tin"
  },
  {
    question: '<img src="img/i.png" class="img-fluid" alt="I">',
    answers: ["Iridium", "Iodine", "Indium", "Iron"],
    correct_answer: "Iodine"
  },
  {
    question: '<img src="img/au.png" class="img-fluid" alt="Au">',
    answers: ["Gold", "Actinium", "Americium", "Aluminium"],
    correct_answer: "Gold"
  },
  {
    question: '<img src="img/br.png" class="img-fluid" alt="Br">',
    answers: ["Berillium", "Barium", "Bromine", "Bohrium"],
    correct_answer: "Bromine"
  }
];

var text_messages = {};

text_messages.en = {
  title: "<p class='s4-title'>Test your knowledge</p>",
  enter_n_questions: "placeholder='Enter the number of questions'",
  restart_quiz: "Restart the Quiz",
  show_answers: "Show answers",
  wrong_input_alert_pre: "Wrong input: ",
  wrong_input_alert_post: "! You must enter a number from 1 to 10.",
  wrong_input_message: "<p class='uppercase'>Try again</p>",
  quiz_finished_message_pre: "<p class='congrats text-center uppercase'>Congratulations</p></div>",
  quiz_finished_message_post: "<p id='reward'>Final results:</p>",
  correct_answer_message_pre: "<img src='img/corr.png' class='mx-auto mb-1' alt='correct icon'> &mdash; ",
  incorrect_answer_message_pre: "<img src='img/wrong.png' class='mx-auto mb-1' alt='wrong icon'> &mdash; ",
  incorrect_answer_message: "Correct answer &mdash; ",
};

text_messages.sr = {
  title: '<h2 class="title">PERIODNI SISTEM</h2>',
  subtitle: '<p class="subtitle">Pogodite ime elementa na osnovu njegovog simbola</p>',
  enter_n_questions: "Unesite broj pitanja:",
  start_quiz: "Počnite kviz",
  restart_quiz: "Ponovo počnite kviz",
  show_answers: "Prikažite odgovore",
  wrong_input_alert_pre: "Pogrešan unos: ",
  wrong_input_alert_post: "! Molim Vas, pokušajte ponovo.",
  wrong_input_message: '<p class="text-white uppercase">Pokušajte ponovo.</p>',
  quiz_finished_message_pre: "<p class='congrats text-center text-white uppercase'>Čestitamo</p>",
  quiz_finished_message_post_1: "<p id='reward'><span class='text-white'>Osvojili ste </span><span class='text-pink'>",
  quiz_finished_message_post_2: "&nbsp" + "<span class='text-white'>poena</span></p>",
  correct_answer_message_pre: "<img src='img/corr.png' class='mx-auto mb-1' alt='correct icon'> &mdash; ",
  incorrect_answer_message_pre: "<img src='img/wrong.png' class='mx-auto mb-1' alt='wrong icon'> &mdash; ",
  incorrect_answer_message: "Tačan odgovor &mdash; ",
};
