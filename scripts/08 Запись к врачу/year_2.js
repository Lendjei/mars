exports.src = function(self){
    var user = self.session.user;

    var text = self.sttText;

    // text = '1953-й'; // после тестирования удалить эту строку

    user.sttRes = self.sttText;
    user.askRes = text;
    var years = user.requestRes;
    // если есть в списке распознанная специальность
    if (years.indexOf(text) !== -1)
    {
        text = 'меню_4';
    } else // если не найдена специальность
        {
            user.txt = 'Ваш ответ не понятен.    ';
            text = 'меню_2';
        }
    // console.log('произнесено: ', self.sttText || '');
    return text;
}