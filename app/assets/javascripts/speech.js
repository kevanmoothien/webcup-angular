
window.speechSynthesis.onvoiceschanged = function() {
    window.speechSynthesis.getVoices();
    console.log('loaded');
};
function load_fn(){
    var btn = document.getElementById('play');
    speechSynthesis.cancel()
    var u = new SpeechSynthesisUtterance();
    u.text = document.getElementById('post_body').textContent;

    var  t;
    u.onstart = function (event) {
        t = event.timeStamp;
        console.log(t);
    };

    u.onend = function (event) {
        t = event.timeStamp-t;
        console.log(event.timeStamp);
        console.log((t/1000) +' seconds');
    };

    btn.onclick = function () {speechSynthesis.speak(u);};
}
