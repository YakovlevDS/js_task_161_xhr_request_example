const btn = document.querySelector('.btn')
const url = './API/people.json'

btn.addEventListener('click', function() {
  getData(url)
})

function getData() {
  const xhr = new XMLHttpRequest()

xhr.open('GET', url)
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 &&  xhr.status === 200) {
    const data = JSON.parse(xhr.responseText)

    const displayData = data.map((person) => {
      return `<p>${person.name}</p>`
    }).join('');

    const elem = document.createElement('div');
    
    elem.innerHTML = displayData;

    document.body.appendChild(elem)
  } else {
    console.log({
      status: xhr.status,
      text: xhr.statusText,
      state: xhr.readyState
    });
  }
}
xhr.send()
}


console.log('hello world');