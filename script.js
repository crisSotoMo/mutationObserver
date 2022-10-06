const targetNode = document.getElementById('targetNode');
const name = document.getElementById('name');
const add = document.getElementById('add');
const change = document.getElementById('change');

function addName() {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(name.value));
    targetNode.appendChild(li);
}   

function updateValue() {
    targetNode.children[ targetNode.children.length -1].value = 100;
}   

add.addEventListener('click', addName);
change.addEventListener('click', updateValue);

const callbacks = function(mutationList) {
    for (let mutation of mutationList) {   
        if (mutation.type === 'childList') {
            console.info('A child node has been added!'); 
        } else if (mutation.type === 'atributes') {   
            console.info(`The ${mutation.atributeName} attribute has been changed`);
        }  
    }     
}

const Observer = new MutationObserver();
observer.observe(targetNode, {
    atibutes: true,
    childList: true,
    subtree: true,
})