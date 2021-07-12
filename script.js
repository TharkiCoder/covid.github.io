function info(){
  var totalCase=document.getElementById('totalCase');
  var totalDeath=document.getElementById('totalDeath');
  var totalRecovered=document.getElementById('totalRecovered');
  var data_fetch=document.getElementById('data-fetch');
  var tC=0;
  var tD=0;
  var tR=0;
  var p=document.getElementById('p');
  fetch("https://api.covid19api.com/summary")
  .then((fdata)=>{
    return fdata.json();
  })
  .then((data)=>{
    for(let i=0;i<=191;i++){
      data_fetch.innerHTML+="<tr>"+"<td>"+data.Countries[i].Country+"</td>"+"<td>"+data.Countries[i].TotalConfirmed+"</td>"+"<td>"+data.Countries[i].TotalDeaths+"</td>"+"<td>"+data.Countries[i].TotalRecovered+"</td>"+"</tr>";
    }
    totalCase.innerHTML=data.Global.TotalConfirmed;
    totalDeath.innerHTML=data.Global.TotalDeaths;;
    totalRecovered.innerHTML=data.Global.TotalRecovered;
  })
}
info();

function main(){
  var message=document.getElementById('message');
  var countrySearch=document.getElementById('countrySearch');
  fetch("https://api.covid19api.com/summary")
  .then((fd)=>{
    return fd.json();
  })
  .then((d)=>{
    for(let i=0;i<=191;i++){
        if(countrySearch.value.toLowerCase()==d.Countries[i].Country.toLowerCase()){
          message.innerHTML+="<div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\"><h4 class=\"alert-heading\">"+d.Countries[i].Country+"<img src=\"https://www.countryflags.io/"+d.Countries[i].CountryCode+"/shiny/32.png\">"+"</h4><p><b>Total Confirmed Case :</b>"+d.Countries[i].TotalConfirmed+"<br><b>Total Death Case :</b>"+d.Countries[i].TotalDeaths+"<br><b>Total Recovered Case :</b>"+d.Countries[i].TotalRecovered+"</p><p><b>New Confirmed Case :</b>"+d.Countries[i].NewConfirmed+"<br><b>New Death Case :</b>"+d.Countries[i].NewDeaths+"<br><b>New Recovered Case :</b>"+d.Countries[i].NewRecovered+"</p><hr><p class=\"mb-0\"><b>Updated At : </b>"+d.Countries[i].Date+"</p><button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button></div>";
          break;
        }
        if(i==191 && countrySearch.value.toLowerCase()!=d.Countries[i].Country.toLowerCase()){
            message.innerHTML+="<div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\"><strong>NO Result Found</strong> <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button></div>";
        }
      }
  })
}

function speak(a,b){
  let v=document.getElementById(a).innerHTML;
  let w=document.getElementById(b).style.color;
  if(w!='rgb(153, 153, 153)'){
    document.getElementById(b).style.color='rgb(153, 153, 153)';
    responsiveVoice.cancel();
  }
  else{
  document.getElementById(b).style.color='rgb(111, 66, 193)';
  responsiveVoice.speak(v,"UK English Female");
  }
}

function health_meter(){
   var c=0;
  var flexCheckChecked1=document.getElementById('flexCheckChecked1').checked;
  var flexCheckChecked2=document.getElementById('flexCheckChecked2').checked;
  var flexCheckChecked3=document.getElementById('flexCheckChecked3').checked;
  var flexCheckChecked4=document.getElementById('flexCheckChecked4').checked;
  var flexCheckChecked5=document.getElementById('flexCheckChecked5').checked;
  var flexCheckChecked6=document.getElementById('flexCheckChecked6').checked;
  a=[flexCheckChecked1,flexCheckChecked2,flexCheckChecked3,flexCheckChecked4,flexCheckChecked5,flexCheckChecked6]
  for(let i=0;i<=5;i++){
    if(a[i]==true){
      c+=1
    }
  }
  document.getElementById('needle').style.transform='rotate('+30*c+'deg)';
  document.getElementById('Safety').innerHTML=100-c*16+'% Safe';
}
