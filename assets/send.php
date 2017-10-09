<?
if((isset($_GET['Name'])&&$_GET['Name']!="")&&(isset($_GET['Contacts'])&&$_GET['Contacts']!="")&&(isset($_GET['Subject'])&&$_GET['Subject']!="")&&(isset($_GET['Text'])&&$_GET['Text']!="")){ //Проверка отправилось ли наше поля Name и не пустые ли они
        $to = 'amir.gorbachyow@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_GET['Name'].'</p>
                        <p>Телефон: '.$_GET['Contacts'].'</p>     
                        <p>Тема: '.$_GET['Subject'].'</p>   
                        <p>Сообщение: '.$_GET['Text'].'</p>             
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>