const parent = document.querySelector('.container')

parent.addEventListener('click', function(event){
    const target = event.target
    if(target.className === 'btn-1'){
        console.log('you pressed Button 1');
    }else if(target.className === 'btn-2'){
        console.log('you pressed Button 2');
    }else if(target.className === 'btn-3'){
        console.log('you pressed Button 3');
    }
})