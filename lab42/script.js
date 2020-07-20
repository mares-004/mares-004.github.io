function maxi()
{
  var numres = 0;
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  if(num1 < num2) numres = num2;
  else numres = num1;

  document.getElementById("res1").value = numres;
  //return numres;
}
function maxi3()
{
  var numres = 0;
  var num1 = document.getElementById("num11").value;
  var num2 = document.getElementById("num22").value;
  var num3 = document.getElementById("num33").value;

  if(num1 < num2)
  {
    if(num2 < num3) numres = num3;
    else numres = num2;
  }
  else
  {
    if(num1 < num3) numres = num3;
    else numres = numres = num1;
  }

  document.getElementById("res2").value = numres;

}
function isVowel()
{
  var elem = document.getElementById("vowel").value;
  elem = elem.toUpperCase();
  if(elem == "A" || elem == "E" || elem == "I" || elem == "O" || elem == "U") document.getElementById("res3").value = "TRUE";
  else document.getElementById("res3").value = "FALSE";
}
function sumandmult()
{
  var summult = [1,2,3,4];
  var res6 = 0;
  var res7 = 1;

  for (var i=0; i<summult.length; i++)
   {
     res6 = res6 + summult[i];
     res7 = res7 * summult[i];
   }

   document.getElementById("res4").value = res6;
   document.getElementById("res5").value = res7;
}
function reverse()
{
  var str = document.getElementById("rever").value;

  var strvec = str.split("");
  var strres = "";
  var len = strvec.length - 1;

  for(var i = len; i >= 0; i--)
  {
    strres = strres + strvec[i];
  }

  document.getElementById("res6").value = strres;
}
function findLongestWord()
{
  var words = new Array(3);
  var wrstr = "";
  words[0] = document.getElementById("word1").value;
  words[1] = document.getElementById("word2").value;
  words[2] = document.getElementById("word3").value;

  wrstr = words[0];

  for(var i = 1; i < words.length; i++)
  {
     if(wrstr.length < words[i].length)  wrstr = words[i];
  }

  document.getElementById("res7").value = wrstr.length;

}


function filterLongWords()
{
  var vec = new Array(3);
  var vec2 = [];
  var num = 0;
  var result = "";

  vec[0] = document.getElementById("word11").value;
  vec[1] = document.getElementById("word22").value;
  vec[2] = document.getElementById("word33").value;

  num = document.getElementById("param").value;

  vec2 = filter(vec, num);

  for(var i=0; i < vec2.length; i++)
  {
     console.log(vec2[i]);
  }



}


function filter(vecr, n )
{
  var str = "";
  var vecfin = [];
  for(var y = 0; y < vecr.length; y++)
  {
    str = vecr[y];
    if(str.length > n)
    {
      vecfin.push(str);
    }
  }

  return vecfin;

}
