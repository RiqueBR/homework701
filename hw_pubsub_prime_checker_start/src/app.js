const ResultView = require('./views/result_view')
const FormView = require('./views/form_view')
const PrimeChecker = require('./models/prime_checker')

document.addEventListener('DOMContentLoaded', () => {
  const formView = new FormView;
  formView.bindEvents();

  const primeChecker = new PrimeChecker;
  primeChecker.bindEvents();

  const resultView = new ResultView;
  resultView.bindEvents();

});
