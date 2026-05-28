const fechaObjetivo = new Date("2026-08-18T00:00:00-05:00");

const frases = [
  "And she tortures me, tortures me with her love. The past was nothing! In the past it was only that infernal body of hers that tortured me, but now I've taken all her soul into my soul and through her I've become a man.",
  "I miss you more than I can say, but I also want you to be free, to grow, to live, and to know that wherever you are, I’ll still be here to love you :)",
  "He's more myself than I am. Whatever our souls are made of, his and mine are the same.",
  "The sun may be forever obscured, the sea may dry up in an instant; the earth’s axis may shatter like fragile glass. All this may happen! Death may shroud me in its mournful black, but the flame of your love will never be extinguished within me",
  
  "You are the beat that makes my heart race, the whisper that awakens my passion; in every gesture of yours I find purity; with you, love is my greatest strength.",

  `How do I love thee? Let me count the ways.
I love thee to the depth and breadth and height
My soul can reach, when feeling out of sight
For the ends of being and ideal grace`,
"In every kiss from you, I feel the magic of love; in every embrace from you, I find the peace I long for so much. You are my reason for being, my eternal longing.",

  `Shall I compare thee to a summer’s day?
Thou art more lovely and more temperate.
So long as men can breathe or eyes can see,
So long lives this, and this gives life to thee`,
"Distance doesn’t erase what I feel; on the contrary, it makes it clearer that my love doesn’t depend on having you close all the time. ",

"Even though I need you every moment of the day, I don’t want you to put your life on hold. Love isn’t about possession; it’s about knowing that wherever we are, we’ll live and thrive, secure in the knowledge that we’ll always be there for each other.",

  `O my Luve is like a red, red rose
That’s newly sprung in June;
O my Luve is like the melody
That’s sweetly played in tune`,

"Your presence is my favorite song; your laughter, the echo of infinite joy. With every kiss, time stands still. You are my love, the one who always sustains me. ",

"Para mi corazón basta tu pecho, para tu libertad bastan mis alas. Desde mi boca llegará hasta el cielo lo que estaba dormido sobre tu alma",

"Nothing makes me happier than being with you; with every passing day, I fall more and more in love with you. You are my soulmate, my best friend, my partner, my confidant, my love. You are the only person who truly knows my heart, my mind, and my soul. You are my everything, and I can’t imagine my life without you. ",

  `She walks in beauty, like the night
Of cloudless climes and starry skies;
And all that’s best of dark and bright
Meet in her aspect and her eyes`,
"Your kisses are a fire that sets my skin ablaze; your voice is music that makes my whole being vibrate; in your embrace I find my home; with you, love is an endless sea. ",
"In your smile I find a reason to dream; in your eyes, a universe that invites me to fly; every moment by your side is a divine gift; with you, love is an embrace in destiny.",
"Even though miles separate us, I’ll always be there to show you that my feelings for you are much stronger than any distance. I love you and will love you unconditionally forever. ",
"At this point, I couldn't think of anything else to say, but you can, Calabazita I really love you, and no matter how much time passes, I'm a damn stubborn guy, and I'm going to keep loving you.",
  `Then a mile of warm sea-scented beach;
Three fields to cross till a farm appears;
A tap at the pane, the quick sharp scratch,
And a voice less loud than the two hearts beating each to each`,
"I miss you in silence, in the little things, in the ordinary moments, in those times when everything would be better if you were here. ",

 `Drink to me only with thine eyes,
And I will pledge with mine;
Or leave a kiss but in the cup,
And I’ll not look for wine.
The thirst that from the soul doth rise
Doth ask a drink divine;
But might I of Jove’s nectar sup,
I would not change for thine.

I sent thee late a rosy wreath,
Not so much honouring thee
As giving it a hope, that there
It could not withered be;
But thou thereon didst only breathe,
And sent’st it back to me;
Since when it grows, and smells, I swear,
Not of itself, but thee.`
];

const diasElemento = document.getElementById("dias");
const horasElemento = document.getElementById("horas");
const minutosElemento = document.getElementById("minutos");
const segundosElemento = document.getElementById("segundos");
const fraseElemento = document.getElementById("fraseDia");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = fechaObjetivo - ahora;

  if (diferencia <= 0) {
    diasElemento.textContent = "00";
    horasElemento.textContent = "00";
    minutosElemento.textContent = "00";
    segundosElemento.textContent = "00";

    fraseElemento.textContent = "Llegó el día. Hoy ya no cuento el tiempo, hoy solo quiero estar contigo.";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  diasElemento.textContent = String(dias).padStart(2, "0");
  horasElemento.textContent = String(horas).padStart(2, "0");
  minutosElemento.textContent = String(minutos).padStart(2, "0");
  segundosElemento.textContent = String(segundos).padStart(2, "0");
}

function mostrarFraseDelDia() {
  const hoy = new Date();

  const inicioDelAnio = new Date(hoy.getFullYear(), 0, 0);
  const diferencia = hoy - inicioDelAnio;
  const diaDelAnio = Math.floor(diferencia / (1000 * 60 * 60 * 24));

  const bloqueDeTresDias = Math.floor((diaDelAnio - 1) / 3);
  const indiceFrase = bloqueDeTresDias % frases.length;


  fraseElemento.textContent = frases[indiceFrase];
}

mostrarFraseDelDia();
actualizarContador();

setInterval(actualizarContador, 1000);

/* ============================= */
/* CORAZONES ANIMADOS */
/* ============================= */

/*
  Primer corazón:
  31 de mayo de 2026 a las 00:00, hora Ecuador.
*/
const fechaPrimerCorazon = new Date("2026-05-31T00:00:00-05:00");

/*
  Cada cuántos días aparece un corazón nuevo.
*/
const diasPorNuevoCorazon = 7;

/*
  Límite máximo de corazones.
  Puedes subirlo, pero no te emociones demasiado,
  que los celulares también tienen dignidad.
*/
const maximoCorazones = 20;

const contenedorCorazones = document.getElementById("corazonesFondo");

const corazones = [];

function calcularCantidadCorazones() {
  const ahora = new Date();

  const diferencia = ahora - fechaPrimerCorazon;

  /*
    Si todavía no llega el 31 de mayo de 2026,
    no aparece ningún corazón.
  */
  if (diferencia < 0) {
    return 0;
  }

  const milisegundosPorDia = 1000 * 60 * 60 * 24;
  const diasPasados = Math.floor(diferencia / milisegundosPorDia);

  /*
    El +1 significa:
    - el 31 de mayo aparece 1 corazón
    - 7 días después aparecen 2
    - 14 días después aparecen 3
  */
  const cantidad = Math.floor(diasPasados / diasPorNuevoCorazon) + 1;

  return Math.min(cantidad, maximoCorazones);
}

function crearCorazon() {
  const movimiento = document.createElement("div");
  movimiento.classList.add("corazon-movimiento");

  const corazon = document.createElement("div");
  corazon.classList.add("corazon");

  /*
    Tamaño aleatorio del corazón.
    Puedes modificar estos valores:
    24 = tamaño mínimo
    46 = tamaño máximo aproximado
  */
  const tamano = Math.floor(Math.random() * 22) + 24;

  movimiento.style.setProperty("--tamano-corazon", `${tamano}px`);

  movimiento.appendChild(corazon);
  contenedorCorazones.appendChild(movimiento);

  /*
    Posición inicial aleatoria.
  */
  const x = Math.random() * (window.innerWidth - tamano * 2);
  const y = Math.random() * (window.innerHeight - tamano * 2);

  /*
    Velocidad aleatoria.
    Puedes subir estos valores si quieres que se muevan más rápido.
  */
  const velocidadX = (Math.random() * 1.4 + 0.6) * (Math.random() < 0.5 ? -1 : 1);
  const velocidadY = (Math.random() * 1.4 + 0.6) * (Math.random() < 0.5 ? -1 : 1);

  const nuevoCorazon = {
    elemento: movimiento,
    x: x,
    y: y,
    velocidadX: velocidadX,
    velocidadY: velocidadY,
    tamano: tamano * 1.6
  };

  corazones.push(nuevoCorazon);
}

function generarCorazonesSegunFecha() {
  if (!contenedorCorazones) {
    return;
  }

  const cantidadCorazones = calcularCantidadCorazones();

  for (let i = 0; i < cantidadCorazones; i++) {
    crearCorazon();
  }
}

function moverCorazones() {
  for (let i = 0; i < corazones.length; i++) {
    const corazon = corazones[i];

    corazon.x += corazon.velocidadX;
    corazon.y += corazon.velocidadY;

    /*
      Rebote horizontal.
    */
    if (corazon.x <= 0 || corazon.x + corazon.tamano >= window.innerWidth) {
      corazon.velocidadX *= -1;
    }

    /*
      Rebote vertical.
    */
    if (corazon.y <= 0 || corazon.y + corazon.tamano >= window.innerHeight) {
      corazon.velocidadY *= -1;
    }

    corazon.elemento.style.left = `${corazon.x}px`;
    corazon.elemento.style.top = `${corazon.y}px`;
  }

  requestAnimationFrame(moverCorazones);
}

generarCorazonesSegunFecha();
moverCorazones();