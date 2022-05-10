//Создание одной простейшей заметки только с текстом.
var note = {
	addNewNote:function() {
		notes.innerHTML += '<div id="form"><textarea id="textwindow1" cols="30" rows="10"></textarea>' 
		+'<button >добавить</button></div>';		
	}
}
note.addNewNote();


//Сохранение заметки между сеансами приложения, в любом формате.
document.addEventListener("DOMContentLoaded", function() { // событие загрузки страницы

    //текст приложения при первом запуске
    document.querySelectorAll('textarea').value = 'AAA';

     document.querySelectorAll('textarea').forEach(function(e) { 
        //получаем значение из LocalStorage по ключу и присваиваем текстовому полю 
        e.value = localStorage.getItem('key', e.value);
        e.addEventListener('input', function() {
        // проверяем текстовое поле на входные данные и устанавливаем в LocalSTorage новое значение
        localStorage.setItem('key', e.value);
        })
        
    })

}); 












   
   
