let money = prompt('Ваш бюджет на месяц?'),
    time = prompt ('Введите дату в формате YYYY-MM-DD');
    

let appData = {
budjet : money,
timeData : time,
expenses : {},
optionalExpenses: {},
income : [],
savings : false
}
appData.expenses.a1 = prompt('Введите обязательную статью расходов в этом месяце'),
appData.expenses.a2 = prompt('Во сколько обойдется?');
alert(appData.budjet / 30);