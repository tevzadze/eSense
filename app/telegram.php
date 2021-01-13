<?php

/* https://api.telegram.org/bot1594691142:AAF-VF-4NRyjicWDYFHHY8GnEDIJR49FGfo/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$age = $_POST['age'];
$city = $_POST['city'];
$question = $_POST['question'];

$token = "1594691142:AAF-VF-4NRyjicWDYFHHY8GnEDIJR49FGfo";
$chat_id = "1536892119";

$arr = array(
  'Имя: ' => $name,
  'Номер телефона: ' => $phone,
  'Возраст: ' => $age,
  'Город: ' => $city,
  'Вопрос: ' => $question,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>