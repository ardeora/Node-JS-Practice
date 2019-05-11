let cards = document.getElementsByClassName('project');

function setCardWidth(size) {
  if (size >= 750) {
    $('.project').css('width', 'calc(33.3333% - 16.6667px)');
  } else if (size >= 500) {
    $('.project').css('width', 'calc(50% - 12.5px)');
  } else {
    $('.project').css('width', '100%');
  }
}

function setCardxPosition(size, cardArray) {
  if (size >= 750) {
    for (let i = 0; i < cardArray.length; i++) {
      if(i % 3 === 0) {
        cardArray[i].style.left = '0';
      } else if((i - 1) % 3 === 0) {
        cardArray[i].style.left = 'calc(33.3333% + 8.33333px)';
      } else if((i - 2) % 3 === 0) {
        cardArray[i].style.left = 'calc(66.6667% + 16.6667px)';
      }
    }
  } else if (size >= 500) {
    for (let i = 0; i < cardArray.length; i++) {
      if(i % 2 === 0) {
        cardArray[i].style.left = '0';
      } else if((i - 1) % 2 === 0) {
        cardArray[i].style.left = 'calc(50% + 12.5px)';
      }
    }
  } else {
    for (let i = 0; i < cardArray.length; i++) {
        cardArray[i].style.left = '0';
    }
  }
}

function setCardyPosition(size,cardArray) {
  let highest = 0;
  if (size >= 750) {
    for (let i = 0; i < cardArray.length; i++) {
      if (i - 3 < 0) {
        cardArray[i].style.top = '0';
      } else {
        let margin = 20;
        console.log('entered');
        let style = window.getComputedStyle(cardArray[i-3]);
        let top = style.getPropertyValue('top');
        top = top.substring(0, top.length - 2)
        let height = cardArray[i-3].offsetHeight;
        let totalVal = parseInt(top) + height + margin;
        highest = Math.max(highest, (totalVal + cardArray[i].offsetHeight));
        cardArray[i].style.top =  totalVal+'px';
      }
    }
  } else if (size >= 500) {
    for (let i = 0; i < cardArray.length; i++) {
      if (i - 2 < 0) {
        cardArray[i].style.top = '0';
      } else {
        let margin = 16;
        console.log('entered');
        let style = window.getComputedStyle(cardArray[i-2]);
        let top = style.getPropertyValue('top');
        top = top.substring(0, top.length - 2)
        let height = cardArray[i-2].offsetHeight;
        let totalVal = parseInt(top) + height + margin;
        highest = Math.max(highest, (totalVal + cardArray[i].offsetHeight));
        cardArray[i].style.top =  totalVal+'px';
      }
    }
  } else {
    for (let i = 0; i < cardArray.length; i++) {
      if (i - 1 < 0) {
        cardArray[i].style.top = '0';
      } else {
        let margin = 16;
        console.log('entered');
        let style = window.getComputedStyle(cardArray[i-1]);
        let top = style.getPropertyValue('top');
        top = top.substring(0, top.length - 2)
        let height = cardArray[i-1].offsetHeight;
        let totalVal = parseInt(top) + height + margin;
        highest = Math.max(highest, (totalVal + cardArray[i].offsetHeight));
        cardArray[i].style.top =  totalVal+'px';
      }
    }
  }
  let parentContainer = document.getElementById('project-grid-container');
  console.log(highest);
  parentContainer.style.height =  highest+'px'
}

setCardWidth(jQuery(window).width());
setCardxPosition(jQuery(window).width(), cards);
setCardyPosition(jQuery(window).width(), cards);



window.addEventListener("resize", function(){
  setCardWidth(jQuery(window).width());
  setCardxPosition(jQuery(window).width(), cards);
  setCardyPosition(jQuery(window).width(), cards);
}, true);

console.log(cards);
