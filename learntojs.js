function convert(){
    const numVal = Number(document.getElementById("input").value)
    const tabVal = numVal*numVal
    const result = document.getElementById("result")
    result.innerHTML = tabVal.toFixed(0)
  }
  function convert2(){
    const numVal = Number(document.getElementById("input").value)
    const tabVal = numVal*numVal*numVal
    const result = document.getElementById("result")
    result.innerHTML = tabVal.toFixed(0)
  }
  function convert3(){
    const numVal = Number(document.getElementById("input").value)
    const tabVal =numVal+273.15
    const result = document.getElementById("result")
    result.innerHTML = tabVal.toFixed(2)+"kelvin"
  }
  function convert4(){
    const numVal = Number(document.getElementById("input").value)
    const tabVal = numVal/0.032808
    const result = document.getElementById("result")
    result.innerHTML = tabVal.toFixed(2)+"CM"
  }
  function convert5(){
    const numVal = Number(document.getElementById("input").value)
    const tabVal = numVal/1.609344
    const result = document.getElementById("result")
    result.innerHTML = tabVal.toFixed(3)+"mph"
  }
  function convert6(){
    const numVal = Number(document.getElementById("input").value)
    const tabVal = numVal*3.2808
    const result = document.getElementById("result")
    result.innerHTML = tabVal.toFixed(3)+"feet"
  }
  function celsius(){
    const numVal = Number(document.getElementById("input").value)
    const tabVal = numVal *(9/5)+32.
    const result = document.getElementById("result")
    result.innerHTML = tabVal.toFixed(3)+"F"
  }
  function cm(){
    const numVal = Number(document.getElementById("input").value)
    const tabVal = numVal /2.54
    const result = document.getElementById("result")
    result.innerHTML = tabVal.toFixed(3)+"inches"
  }
