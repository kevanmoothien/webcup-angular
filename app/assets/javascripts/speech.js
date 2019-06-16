
window.speechSynthesis.onvoiceschanged = function() {
    window.speechSynthesis.getVoices();
    console.log('loaded');
};
function load_fn(){
    var btn = document.getElementById('title');
    speechSynthesis.cancel()
    var u = new SpeechSynthesisUtterance();
    u.text = document.getElementById('card-text').textContent;

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

var timeoutResumeInfinity;
function run(id){
    console.log('running', id)

    speechSynthesis.cancel()
    var u = new SpeechSynthesisUtterance();
    u.text = document.getElementById(id).textContent;
    console.log(u.text)

    u.onstart = function(event) {
        resumeInfinity();
    };

    var  t;
    u.onstart = function (event) {
        t = event.timeStamp;
        console.log(t);
    };

    u.onerror = function(event){
        console.log('#####', event)
    }

    u.onend = function (event) {
        clearTimeout(timeoutResumeInfinity);
        resumeInfinity()
        t = event.timeStamp-t;
        console.log(event.timeStamp);
        console.log((t/1000) +' seconds');
    };

    speechSynthesis.speak(u);
}

function eventFire(el, etype){
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}

function resumeInfinity() {
    window.speechSynthesis.pause();
    window.speechSynthesis.resume();
    timeoutResumeInfinity = setTimeout(resumeInfinity, 1000);
}
