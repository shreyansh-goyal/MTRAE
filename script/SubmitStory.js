var config = {
    apiKey: "AIzaSyDL7yYskC0ETypCHg6HaRh0yJ8OEaoIakA",
    authDomain: "uplabdhiyan-fb2b5.firebaseapp.com",
    databaseURL: "https://uplabdhiyan-fb2b5.firebaseio.com",
    projectId: "uplabdhiyan-fb2b5",
    storageBucket: "",
    messagingSenderId: "882948577765"
};
firebase.initializeApp(config);

var messageRef=firebase.database().ref('messages');
document.getElementById("yourstory").addEventListener('submit',submitform);
function submitform(e)
{
    e.preventDefault();
    var Fname =getinputval('Fname');
    var Lname =getinputval('Lname');
    var Profession=getinputval('Profession');
    var email=getinputval('email');
    var text=getinputval('text');
    savemessage(Fname,Lname,Profession,email,text,image);
}
function getinputval(id){
    return document.getElementById(id).value;
}

function savemessage(Fname,Lname,Profession,email,text)
{
    var newmessageRef=messageRef.push();
    newmessageRef.set({
        Fname:Fname,
        Lname:Lname,
        Profession:Profession,
        email:email,
        text:text,
    });
}