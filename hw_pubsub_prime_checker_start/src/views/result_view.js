const PubSub = require('../helpers/pub_sub.js')

const ResultView = function (){

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const check_prime = event.detail;
    this.displayResult(check_prime)
  })
};


ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result')

  if(result){
    resultElement.textContent = 'This numbe is prime!'
  }else{
    resultElement.textContent = 'This number is not prime!'
  }

}






module.exports = ResultView;
