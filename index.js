function scuberGreetingForFeet(freeSample){
  let depth
    if (freeSample <= 400) {
      return 'This one is on me!'
    }
    
    else if (freeSample < 2500) {
      return 'I will gladly take your thirty bucks.'
    }

    else if (freeSample >= 2500) {
      return 'No can do.'
    }
  }

function ternaryCheckCity(city){
  let destination
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  }
  else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip){

  let response;
  switch (tip) {
    case 'generous':
        response = 'Thank you so much.';
        break;
    case 'not as generous':
        response = 'Thank you.';
        break;
    default:
        response = 'Bye.';
        break;
  }

  return response
}