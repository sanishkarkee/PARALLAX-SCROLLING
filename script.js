let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
// console.log(hill5);

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  // console.log(value);

  //----------------(TEXT)------------------
  text.style.marginTop = value * 2.5 + 'px';
  // text ko mathi margin-top add hudai jancha
  // console.log(text.style.marginTop);

  // --------------(LEAF)---------------

  leaf.style.top = value * -1.5 + 'px';
  //leaf negetive top ma push garcha
  // console.log(text.style.top);

  leaf.style.left = value * 1.5 + 'px';
  //leaf  lai left ma push garcha
  // console.log(text.style.top);

  // -----------------(HILL)---------------
  hill5.style.left = value * 1.5 + 'px';

  hill4.style.left = value * -1.5 + 'px';

  hill1.style.top = value * 1 + 'px';
});
