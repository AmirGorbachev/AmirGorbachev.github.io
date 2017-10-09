<?
if((isset($_POST['Name'])&&$_POST['Name']!="")&&(isset($_POST['Contacts'])&&$_POST['Contacts']!="")&&(isset($_POST['Subject'])&&$_POST['Subject']!="")&&(isset($_POST['Text'])&&$_POST['Text']!="")){ //Проверка отправилось ли наше поля Name и не пустые ли они
        $to = 'amir.gorbachyow@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['Name'].'</p>
                        <p>Телефон: '.$_POST['Contacts'].'</p>     
                        <p>Тема: '.$_POST['Subject'].'</p>   
                        <p>Сообщение: '.$_POST['Text'].'</p>             
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>