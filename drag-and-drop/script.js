const empties = document.querySelectorAll(".empty");
const fill = document.querySelector(".fill");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  // console.log('Drag Start');
  //appending to class list (adding extra space)
  this.className += " hold";
  // to make box white once drag starts
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  // console.log('Drag End');
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
  // console.log('Drag Over');
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
  // console.log('Drag Enter');
}

function dragLeave() {
  this.className = "empty";
  // console.log('Drag Leave');
}

function dragDrop() {
  // console.log('Drag Drop');
  //Making sure class is empty before droping
  this.className = "empty";
  this.append(fill);
}
