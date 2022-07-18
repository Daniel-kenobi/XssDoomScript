
/* Configuration */
const ClearPage = false;

const GameResolutionWidth = 800;
const GameResolutionHeight = 600;
const GameFullScreen = false;

const ShowText = false;
const TextToShow = 'Hax0r 1337 - Follow us'

const InjectHtml = false;
const InnerHtml = '<h1>Hi there</h1>'

const ChangeBackgroundColor = true
const BackgroundColor =  "rgb(114, 0, 0)"


function ChangeBodyAspects() {
    if(ChangeBackgroundColor)
        document.body.style.backgroundColor = BackgroundColor;

    if(ClearPage)
        document.body.innerHTML = '';  

    if(InjectHtml)
        document.body.innerHTML = InnerHtml;  
}

function ShowTextOnDOM(){
    var h1 = document.createElement('h1');
    h1.style.textAlign = 'center';
    h1.style.color = 'white';
    h1.style.fontSize = '24px'
    h1.style.fontFamily = 'verdana'
    h1.style.fontWeight = '1000'

    if(ShowText)
        h1.textContent = TextToShow

    document.body.appendChild(h1);
}

function CreateGameIframe() {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Fcustom%2Fdos%2Fdoom.jsdos?anonymous=1'
    iframe.id = "doomed"

    iframe.height = GameResolutionHeight;
    iframe.width = GameResolutionWidth;
    iframe.allowFullscreen = GameFullScreen;

    document.body.appendChild(iframe);
}


ChangeBodyAspects();
ShowTextOnDOM();
CreateGameIframe();