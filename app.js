
let cskruns=["_","_","_","_","_","_"];
let miruns=["_","_","_","_","_","_"];

let cskscores=0;
let miscores=0;
let ballcounter=0;

function strikeBall()
{
    ballcounter++;
    let runs =Math.floor(Math.random()*5)*2;

    if(runs==8)
    {
        runs='W';
    }
    if(ballcounter <= 6)
    {
         if(runs != 'W')
         {
            cskscores=cskscores+runs;
            document.getElementById("cskscores").textContent=cskscores;
        }
           cskruns[ballcounter-1]=runs;
           document.getElementById("cskruns").textContent=cskruns;
    }
 
    else if(ballcounter <=12)
        {
        if(runs != 'W')
        {
          miscores=miscores+runs;
          document.getElementById("miscores").textContent=miscores;
        }
          miruns[ballcounter-7]=runs;
          document.getElementById("miruns").textContent=miruns;
        if(miscores==cskscores)
        {
            ballcounter =12;
        }
        }
     if(ballcounter >= 12)
    {
        document.getElementById("bat").disabled=true;

        let maxScore=Math.max(cskscores,miscores);
        if(cskscores==maxScore)
    {
        document.getElementById("csk").classList.add("winner");
    }
    else if(cskscores==miscores)
    {
        document.getElementById("mi").classList.add("winner");
    }
}
}




