document.getElementById('myButton').addEventListener('click', function() {
    let info = document.getElementById('text').value;
    if (info !==''){
        let heading = document.createElement('h1');
    let button = document.createElement('button');
    let container = document.createElement('div');
    button.textContent = 'Delete';
    button.style.margin = '10px';
    heading.textContent = info;
    container.classList.add('container');
    container.appendChild(heading); // Append heading to the container
    container.appendChild(button); // Append button to the container
    document.body.appendChild(container); // Append the container to the body
    console.log(info + " Clicking");
    
    button.addEventListener('click', function(event) {
        document.body.removeChild(container)  }) 

    }else{
        alert("Please add content")
    }
    
    
})

