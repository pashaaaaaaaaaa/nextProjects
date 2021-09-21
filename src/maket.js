window.addEventListener('load', () => {
    addFirstInput()
    addTask();
    
});

// создаю массив 

let taskList = [];



// добавляю главную функцию


function addTask() {
  
    const add = document.querySelector('.button');
    const container = document.querySelector('.wrapper');
    const pressDalete = document.querySelector('.wrapperImg')
    const btnSort = document.querySelector('.menu')

    // нажатия на кнопку меню Сортировка 

    btnSort.addEventListener('click',(event)=>{//функция срабатовает при вызове клика 

        btnSort.classList.toggle('menuUp');//toggle это переключи как if и  else

        taskList.sort(function(div1, div2) {
            const input1 = div1.querySelector('input');//поиск внутри дива инпута
            const input2 = div2.querySelector('input');
            const value1  = input1.value
            const value2  = input2.value
            if (!btnSort.classList.contains('menuUp')) {//проверка на есть ли такой класс
                return value1 - value2
            } else {
                return value2 - value1
            }
        });
        // for each проверяет внутри массива каждый див (инпут и картина х)
        taskList.forEach(div => {
            const container = div.parentElement;
            container.append(div);
        });
        console.log(taskList)
    });

    // кнопка удаление полностью инпута

    pressDalete.addEventListener('click', (event) => {
        event.target.parentNode.remove()
    })


    // Кнопка (ДОБАВИТЬ)
    
    add.addEventListener('click', (event) => {
        const div = addElement();        
        container.append(div);
    })  
}


    // вторая функция которое создает див.инпут и картину




function addElement() {
    const clickButton = document.createElement('div');
    clickButton.classList.add('wrapperInput');

    // добавляю в массив 

    taskList.push(clickButton);

    // создаю новый инпут

    const clickInput = document.createElement('input');
    clickInput.classList.add('wrapperOne');
    clickInput.type = "text";

    // создаю новую картину закрыть

    const exitButton = document.createElement('div');
    exitButton.classList.add('wrapperImg');

    // удаление полностью строки из массива

    exitButton.addEventListener('click', (event) => {
        const div = event.target.parentNode;
        div.remove();
       const indexDalet = taskList.indexOf(div)
       taskList.splice(indexDalet, 1)
    });

    // присвоение друг на друга

    clickButton.append(clickInput);
    clickButton.append(exitButton);
    
    return clickButton;
}

// функция для главного инпута 


function addFirstInput(){
    const container = document.querySelector('.wrapper');
    const div = addElement();        
    container.append(div);
}


// drag and drop version

const constDrag = document.querySelector('.container')

console.log(constDrag)




