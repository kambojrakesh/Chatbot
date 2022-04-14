$(document).ready(function () {
  var trackHCTMEVents = function (label) {
    if (typeof window.ga !== 'undefined') {
      ga('send', {
        hitType: 'event',
        eventCategory: 'HCTM Info Session',
        eventAction: 'click',
        eventLabel: label,
        eventValue: 1
      });
    }
  };

  var externalUrl = 'https://www.eventbrite.ca/e/durham-college-degree-webinar-where-the-jobs-are-tickets-46366358025';

  //hero image
  $(document).on('click', '#sSlider .n2-ss-layers-container.n2-ow', function (e) {
    window.stop();
    if (isExternal(e.target.dataset.href) && (e.target.dataset.href.indexOf(externalUrl) > -1)) {
      url = e.target.dataset.href;
      //pause navigation
      e.preventDefault();
      //send GA event
      trackHCTMEVents('Secondary Slider');
      //now that the event has been sent, resume navigation
      window.location = url;
    }

    //secondary slider image, for some reason the event trickles down from the img element
    else if (isExternal(e.target.parentElement.href) && (e.target.parentElement.href.indexOf(externalUrl) > -1)){
      //send GA event
      trackHCTMEVents('Secondary Slider');      
      url = e.target.parentElement.href;      
      //pause navigation
      e.preventDefault();
      //now that the event has been sent, resume navigation
      window.location = url;      
    }    
    else if (e.target.parentElement.href) {
      url = e.target.parentElement.href;      
      //resume navigation
      e.preventDefault();
      window.location = url;      
    }
    else if (e.target.href) {
      url = e.target.href;      
      //resume navigation
      e.preventDefault();
      urlArr = url.split('/');
      
      //make sure page doesn't jump
      if (urlArr[[urlArr.length - 1]] !== '#') {
        window.location = url;     
      }
    }     
    else if (e.currentTarget.dataset.href) {
      url = e.currentTarget.dataset.href;      
      //resume navigation
      e.preventDefault();
      window.location = url;     
    }    
  });

  //hero image clickable elements
  /* $(document).on('click', '#sSlider .n2-ss-layers-container.n2-ow a', function (e) {
    target = e.target.href;
    e.preventDefault();
    if (isExternal(target) && (target.indexOf(externalUrl) > -1)) {
      url = e.target.href;
      //pause navigation
      e.preventDefault();
      //send GA event
      trackHCTMEVents('Secondary Slider');
      //now that the event has been sent, resume navigation
      window.location = target;
    }
  });*/

  //Trending Card
/*   $('section.trending a').click(function (e) {
    target = e.currentTarget.href;
    e.preventDefault();
    if (isExternal(target) && (target.indexOf(externalUrl) > -1)) {
      url = e.target.href;
      //pause navigation
      e.preventDefault();
      //send GA event
      trackHCTMEVents('Trending Card');
      //now that the event has been sent, resume navigation
      window.location = target;
    } else {
      window.location = target;
    }
  });

  //Degree program page widget
  $('.degree-widget a.button').click(function (e) {
    target = e.currentTarget.href;
    e.preventDefault();
    if (isExternal(target) && (target.indexOf(externalUrl) > -1)) {
      url = e.target.href;
      //pause navigation
      e.preventDefault();
      //send GA event
      trackHCTMEVents('Program Page Widget');
      //now that the event has been sent, resume navigation
      window.location = target;
    } else {
      window.location = url;
    }
  }); */
});
