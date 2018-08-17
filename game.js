const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const linereader = readline.createInterface({
  input: fs.createReadStream('TheBadOrge.txt')
})

var line = 0;
var parsedFile = {};

var scriptFile = [];


function ParseScript()
{
  var dependentLines = scriptFile;

  dependentLines.forEach(function(line){
    var codedLines = line.split("#");
    var ob = {}
    ob.question = codedLines[1];
    ob.answers = [];
    for(var i = 2; i < codedLines.length; i++)
    {
      var ansline = codedLines[i].split(",");
      var answer = {};
      answer.response = ansline[0]
      answer.line = ansline[1]
      ob.answers.push(answer);
    }
    parsedFile[codedLines[0]] = ob;
  })
}

function ReadFile()
{
  linereader.on('line',function(line){
    scriptFile.push(line);
  });
  linereader.on('close',function(){
    Game();
  })
}

function Game()
{

  ParseScript();

  Ask();
  
}

function Ask()
{
  if(line === -999)
  {
    rl.close();
    return;
  }
  var ob = parsedFile[line];
  console.log(ob.question);
  console.log("Choose:");
  for(var i = 0; i < ob.answers.length; i++)
  {
    console.log("----"+ob.answers[i].response);
  }
  rl.question("\n",(answer)=>{
    let action = false;
    ob.answers.forEach(function(obj){
      if(answer === obj.response)
      {
        line = obj.line;
        action = true;
        return;
        
      }
    })
    if(!action)
    {
      line = -999;
      console.log("You died");
    }
    Ask();
  });
  line = -999;
  
}

ReadFile();