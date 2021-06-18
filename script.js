function info(){
  var totalCase=document.getElementById('totalCase');
  var totalDeath=document.getElementById('totalDeath');
  var totalRecovered=document.getElementById('totalRecovered');
  var data_fetch=document.getElementById('data-fetch');
  var tC=0;
  var tD=0;
  var tR=0;
  var p=document.getElementById('p');
  fetch("https://www.trackcorona.live/api/countries")
  .then((fdata)=>{
    return fdata.json();
  })
  .then((data)=>{
    for(let i=0;i<=200;i++){
      tC+=data.data[i].confirmed;
      tD+=data.data[i].dead;
      tR+=data.data[i].recovered
      data_fetch.innerHTML+="<tr id=\""+data.data[i].location+"\">"+"<td>"+data.data[i].location+"</td>"+"<td>"+data.data[i].confirmed+"</td>"+"<td>"+data.data[i].dead+"</td>"+"<td>"+data.data[i].recovered+"</td>"+"</tr>";
    }
    totalCase.innerHTML=tC;
    totalDeath.innerHTML=tD;
    totalRecovered.innerHTML=tR;
  })
}
info();

function main(){
  var message=document.getElementById('message');
  var countrySearch=document.getElementById('countrySearch');
  fetch("https://www.trackcorona.live/api/countries")
  .then((fd)=>{
    return fd.json();
  })
  .then((d)=>{
    for(let i=0;i<=200;i++){
        if(countrySearch.value.toLowerCase()==d.data[i].location.toLowerCase()){
          message.innerHTML+="<div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\"><h4 class=\"alert-heading\">"+d.data[i].location+"<img src=\"https://www.countryflags.io/"+d.data[i].country_code+"/shiny/32.png\">"+"</h4><p><b>Confirmed Case :</b>"+d.data[i].confirmed+"<br><b>Death Case :</b>"+d.data[i].dead+"<br><b>Recovered Case :</b>"+d.data[i].recovered+"</p><hr><p class=\"mb-0\"><b>Updated At : </b>"+d.data[i].updated+"</p><button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button></div>";
          break;
        }
        if(i==200 && countrySearch.value.toLowerCase()!=d.data[i].location.toLowerCase()){
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
