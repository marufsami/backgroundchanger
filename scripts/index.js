let btn = document.getElementById('change');
// let color = ['black', 'white', 'red', 'yellow', 'blue'];
btn.addEventListener('click', function() {

    let hex = '#';
    let dk = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    for (let i = 0; i < 6; i++) {
        hex += dk[Math.floor(Math.random() * dk.length)];
    }
    document.body.style.backgroundColor = hex;
    function showNotification(){
        new Notification("HEY",{
        body:"Read the article"
    });
}

if(Notification.permission === "granted"){
    // alert("It has permission to notification");
    showNotification();
}
else if(Notification.permission !== "denied"){
    Notification.requestPermission().then(permission =>{
        if(permission === "granted"){
            showNotification();
        }
    })
}
new Notification('hello");

});
