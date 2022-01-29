const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

// Generate random messages & types
const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
]

const types = ['info','error','success'];

//If you want a custom message, pass it as param to createNotification Method => createNotification(message)
button.addEventListener('click',() => createNotification(message = null, type=null))

function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type ? type : getRandomType() );

    notif.innerText = message ? message : getRandomMessage();
    toasts.append(notif);
    setTimeout(() => {
        notif.remove();
    },3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}