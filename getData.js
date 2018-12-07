var agendajson =require('./agenda.json')
var speakersjson = require('./speakers.json')
var fs=require('fs')


class getData{
 fetchAgendaDetails(callback){
     let agendabufferdata =fs.readFileSync(__dirname +"\\agenda.json");
     let agendadata =JSON.parse(agendabufferdata);
     console.log("Agenda details is",agendadata)
  callback(agendadata)
 }

 fetchSpeakerDetails(callback){
    let speakerbufferdata =fs.readFileSync(__dirname +"\\speakers.json");
    let speakerdata =JSON.parse(speakerbufferdata);
    console.log("Speaker details are",speakerdata)
 callback(speakerdata)

 }

}

module.exports= getData;