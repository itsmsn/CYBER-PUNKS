function toglemenu()
{
  let elem = document.getElementById("toglemenu");
  if(elem.style.transform == "translateX(-100%)")
  {
    elem.style.transform = "translateX(0%)";
  }
  else{
    elem.style.transform = "translateX(-100%)";
  }
}

  