$(document).ready(function() {
  "use strict"
    // Tooltip

  tippy('#astronaut', {
    content: "<div class='tooltip-text'><b class='uppercase'>Astronaut</b><br>The first Man in space was Russian <b>Yuri Gagarin</b>.</div>",
    placement: 'left',
    trigger: 'click',
    arrow: true,
    theme: 'light',
    followCursor: 'initial',
    maxWidth: 280
  });

  tippy('#sun', {
    content: "<div class='tooltip-text'><b class='uppercase'>Sun</b><br><b>The Star</b> at the centre of our solar system.<br><b>Age: </b>4.6 Billion Years<br><b>Diameter: </b>1,392,684 km<br><b>Mass: </b>1.99 x 10^30 kg (333,060 Earths)",
    placement: 'right',
    trigger: 'click',
    arrow: true,
    theme: 'light',
    followCursor: 'initial',
    maxWidth: 280
  });

  tippy('#mercury', {
    content: "<div class='tooltip-text'><b class='uppercase'>Mercury</b><br><b>Diameter: </b>4,879 km<br><b>Mass: </b>3.30 x 10^23 kg (5.5% Earth)<br><b>Orbit Period: </b>88 days<br></div>",
    placement: 'right',
    trigger: 'click',
    arrow: true,
    theme: 'light',
    followCursor: 'initial',
    maxWidth: 280
  });

  tippy('#venus', {
    content: "<div class='tooltip-text'><b class='uppercase'>Venus</b><br><b>Diameter: </b>12,104 km<br><b>Mass: </b>4.87 x 10^24 kg (81.5% Earth)<br><b>Orbit Period: </b>225 days<br></div>",
    placement: 'right',
    trigger: 'click',
    arrow: true,
    theme: 'light',
    followCursor: 'initial',
    maxWidth: 280
  });

  tippy('#earth', {
    content: "<div class='tooltip-text'><b class='uppercase'>Earth</b><br><b>Equatorial Diameter: </b>12,756 km<br><b>Polar Diameter: </b>12,714 km<br><b>Mass: </b>5.97 x 10^24 kg<br><b>Orbit Period: </b>365.24 days<br></div>",
    placement: 'right',
    trigger: 'click',
    arrow: true,
    theme: 'light',
    followCursor: 'initial',
    maxWidth: 280
  });

  tippy('#mars', {
    content: "<div class='tooltip-text'><b class='uppercase'>Mars</b><br><b>Equatorial Diameter: </b>6,792 km<br><b>Polar Diameter: </b>6,752 km<br><b>Mass: </b>6.42 x 10^23 kg (10.7% Earth)<br><b>Orbit Period: </b>687 days<br></div>",
    placement: 'right',
    trigger: 'click',
    arrow: true,
    theme: 'light',
    followCursor: 'initial',
    maxWidth: 280
  });

  tippy('#jupiter', {
    content: "<div class='tooltip-text'><b class='uppercase'>Jupiter</b><br><b>Equatorial Diameter: </b>142,984 km<br><b>Polar Diameter: </b>133,709 km<br><b>Mass: </b>1.90 x 10^27 kg (318 Earths)<br><b>Orbit Period: </b>4,333 days<br></div>",
    placement: 'right',
    trigger: 'click',
    arrow: true,
    theme: 'light',
    followCursor: 'initial',
    maxWidth: 280
  });

  tippy('#saturn', {
    content: "<div class='tooltip-text'><b class='uppercase'>Saturn</b><br><b>Equatorial Diameter: </b>120,536 km<br><b>Polar Diameter: </b>108,728 km<br><b>Mass: </b>5.68 x 10^26 kg (95 Earths)<br><b>Orbit Period: </b>10,756 days<br></div>",
    placement: 'right',
    trigger: 'click',
    arrow: true,
    theme: 'light',
    followCursor: 'initial',
    maxWidth: 280
  });

  tippy('#uranus', {
    content: "<div class='tooltip-text'><b class='uppercase'>Uranus</b><br><b>Equatorial Diameter: </b>51,118 km<br><b>Polar Diameter: </b>49,946 km<br><b>Mass: </b>8.68 x 10^25 kg (15 Earths)<br><b>Orbit Period: </b>30,687 days<br></div>",
    placement: 'right',
    trigger: 'click',
    arrow: true,
    theme: 'light',
    followCursor: 'initial',
    maxWidth: 280
  });

  tippy('#neptun', {
    content: "<div class='tooltip-text'><b class='uppercase'>Neptune</b><br><b>Equatorial Diameter: </b>49,528 km<br><b>Polar Diameter: </b>48,682 km<br><b>Mass: </b>1.02 x 10^26 kg (17 Earths)<br><b>Orbit Period: </b>60,190 days<br></div>",
    placement: 'right',
    trigger: 'click',
    arrow: true,
    theme: 'light',
    followCursor: 'initial',
    maxWidth: 280
  });

  tippy('#moon', {
    content: "<div class='tooltip-text'><b class='uppercase'>Moon</b><br>The Moon (or Luna) is the Earth’s only <b>natural satellite</b>.<br>The first man to set foot on the Moon in 1969 was <b>Neil Armstrong</b> on the Apollo 11 mission.<br><b>Age: </b>4.6 Billion Years<br><b>Diameter: </b>3,475 km<br><b>Mass: </b>7.35 x 10^22 kg (0.01 Earths)",
    placement: 'right',
    trigger: 'click',
    arrow: true,
    theme: 'light',
    followCursor: 'initial',
    maxWidth: 280
  });

  tippy('#rocket', {
    content: "<div class='tooltip-text'><b class='uppercase'>Rocket</b><br>A typical rocket produces more than a million pounds of thrust. They <b>can travel at 22,000 miles per hour</b> carrying 6,000 pounds.<br><b>The fastest rocket record</b> was set by the Atlas V in 2006. It left the atmosphere traveling 36,000 miles per hour and topped out at 47,000 miles per hour.",
    placement: 'right',
    trigger: 'click',
    arrow: true,
    theme: 'light',
    followCursor: 'initial',
    maxWidth: 300
  });

  tippy('#meteor', {
    content: "<div class='tooltip-text'><b class='uppercase'>Meteor</b><br>A meteor or 'shooting star' is the visible streak of light from a heated and glowing object falling through the Earth's atmosphere.<br>Most <b>meteor showers </b>are caused by debris from comets. When Earth moves through those debris trails, we see increased numbers of comets.",
    placement: 'right',
    trigger: 'click',
    arrow: true,
    theme: 'light',
    followCursor: 'initial',
    maxWidth: 280
  });

  tippy('#observatory', {
    content: "<div class='tooltip-text'><b class='uppercase'>Observatory</b><br><b>The first notable</b> premodern European <b>observatory</b> was that at Uraniborg on the island of Hven, built by King Frederick II of Denmark for Tycho Brahe in 1576 ce.<br><span class='bullet'>&#8227; </span><b>The first optical telescope</b> used to study the heavens was constructed in 1609 by Galileo Galilei, using information from Flemish pioneers in lens-making.",
    placement: 'left',
    trigger: 'click',
    arrow: true,
    theme: 'dark',
    followCursor: 'initial',
    maxWidth: 280
  });

  tippy('#satellite', {
    content: "<div class='tooltip-text'><b class='uppercase'>Station</b><br>An <b>uplink Earth station</b> or other ground equipment transmits the desired signal to the satellite.<br>The satellite transmits the signal back to Earth and the ground equipment receives the signal.",
    placement: 'left',
    trigger: 'click',
    arrow: true,
    theme: 'dark',
    followCursor: 'initial',
    maxWidth: 280
  });
});