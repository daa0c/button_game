
window.addEventListener('keydown', (e)=>{
    console.log('keydown event',e.key)

    if(e.key == '1' || e.key == '2' || e.key == '3'){
        const div = document.getElementById(e.key)
        div.classList.add('pressed')
    }
})

// 눌렀을 때 다시 돌아오게 하기
window.addEventListener('keyup', (e)=>{
    if(e.key == '1' || e.key == '2' || e.key == '3'){
        console.log('keyup evet', e.key)
        const div = document.getElementById(e.key)
        div.classList.remove('pressed')
    }
})


