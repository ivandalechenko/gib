import './style.scss'

document.getElementById('hashcopy').onclick = () => {
    navigator.clipboard.writeText("#SaveBUBBLES #ManLikeBUBBLES #FreeMandemBUBBLES #BUBBLESTypeShit #BetterCallBUBBLES #BUBBLESOut")
        .then(() => {
            document.getElementById('copied').classList.remove('copied_hide')
            setTimeout(() => {
                document.getElementById('copied').classList.add('copied_hide')
            }, 3000);
            // console.log("Текст скопирован в буфер обмена!");
        })
        .catch(err => {
            console.error("Ошибка при копировании текста: ", err);
        });

}


document.getElementById('ca').onclick = () => {
    navigator.clipboard.writeText("")
        .then(() => {
            document.getElementById('copied').classList.remove('copied_hide')
            setTimeout(() => {
                document.getElementById('copied').classList.add('copied_hide')
            }, 3000);
            // console.log("Текст скопирован в буфер обмена!");
        })
        .catch(err => {
            console.error("Ошибка при копировании текста: ", err);
        });

}

