/**
 * Русская локализация
 * @type {Object<string, string>}
 */
window.appLang = {

    // errors

    "error.error": "Ошибка",
    "error.unknown": "Неизвестная ошибка",
    "error.connection": "Ошибка соединения",
    "error.connection.offline": "Автономный режим",
    "error.connection.online": "Онлайн режим",
    "error.notavailable": "Недоступно в текущей версии",
    "error.availableonlyinmetagate": "Доступно только в настольном MetaGate",
    "error.unknown.domain": "Неизвестный домен",
    "error.emptyfields": "Заполните все обязательные поля",
    "error.wrongqrcode": "В отсканированном QR-коде не найдены данные",
    "error.wrongpassword": "Неправильный пароль",
    "error.wrongpasscode": "Неправильный код-пароль",
    "error.wrongfaceid": "Ошибка аутентификации",
    "error.passwordsdonotmatch": "Пароли не совпадают",
    "error.passwordshort": "Новый пароль слишком короткий. Минимальная длина:",
    "error.notenoughfunds": "Недостаточно средств",
    "error.pknotfound": "Закрытый ключ не найден на устройстве",
    "error.wrongname": "Неправильное имя",

    // success

    "success.success": "Успешно",
    "success.imported": "Импорт выполнен успешно",

    // common

    "common.version": "Версия интерфейса: " + VERSION + "." + VERSION_BUILD + ". Версия приложения: " + VERSION_APP, // + metawallet.env.appVersion + "." + metawallet.env.build,
    "common.copyright": "© 2017-2019 #MetaHash.  Все права защищены",

    "common.enabled": "Включено",
    "common.disabled": "Отключено",
    "common.activated": "Активировано",
    "common.copy": "Копировать",
    "common.copied": "Скопировано",
    "common.saved": "Сохранено",

    "common.ok": "OK",
    "common.cancel": "Отмена",
    "common.yes": "Да",
    "common.no": "Нет",

    "common.pleasewait": "Выполняется...",

    "currency.tmh": "TMH",
    "currency.btc": "BTC",
    "currency.eth": "ETH",
    "currency.mhc": "MHC",
    "currency.usd": "USD",

    "action.continue": "Далее",

    // Transaction

    "transaction.metahash.name.1": "Подтвердить",
    "transaction.metahash.name.20": "Перевод",
    "transaction.metahash.name.101": "Фиксированная награда",
    "transaction.metahash.name.102": "Награда за сервер",
    "transaction.metahash.name.103": "Награда за делегирование",
    "transaction.metahash.name.104": "Рандомная награда",
    "transaction.metahash.name.forging": "Начать форджинг",
    "transaction.metahash.name.forging.active": "Начать активный форджинг",
    "transaction.metahash.name.forging.stop": "Остановить форджинг",

    // System wallets
    "wallets.metahash.name.0x666174686572206f662077616c6c65747320666f7267696e67": "#MetaForging",

    // MenuView

    "menu.home": "Главная",
    "menu.apps": "Приложения",
    "menu.settings": "Настройки",
    "menu.support": "Поддержка",
    "menu.logout": "Выход",
    "menu.coindelegation": "Делегирование MHC",

    // PasscodeAlertView

    "passcodemodalview.title": "Введите пароль",
    "passcodemodalview.title.new": "Введите новый пароль",
    "passcodemodalview.title.repeat": "Повторите новый пароль",
    "passcodemodalview.subtitle": "или используйте Face ID / Touch ID",

    "settings.passcode.changed": "Код-пароль изменен",
    "settings.passcode.turnedon": "Код-пароль включен",
    "settings.passcode.turnedoff": "Код-пароль выключен",

    // LoaderView

    "loaderview.message.connected": "Подключено!",
    "loaderview.message.connecting": "Соединение...",

    "loaderview.tips.header": "Советы и подсказки",
    "loaderview.tips.tip1": "Не забудьте сохранить пароль!",
    "loaderview.tips.tip2": "Мы не храним ваши пароли.",
    "loaderview.tips.tip3": "Надежно храните свои ключи. При утере восстановить их будет невозможно.",
    "loaderview.tips.tip4": "Не удаляйте приложение MetaWallet, чтобы не потерять все свои данные.",
    "loaderview.tips.tip5": "Обращаем внимание, что подтверждение транзакций Ethereum и Bitcoin может занимать много времени.",
    "loaderview.tips.tip6": "Вы можете создать неограниченное количество кошельков.",
    "loaderview.tips.tip7": "Вы можете изменить язык интерфейса приложения в настройках.",
    "loaderview.tips.tip8": "Вы можете импортировать кошельки #MetaHash с помощью QR-кода.",
    "loaderview.tips.tip9": "Надежно храните свой пароль. Если вы его потеряете, то вы не сможете управлять своими средствами.",
    "loaderview.tips.tip10": "Мы не храним ваши пароли.",

    // AuthView

    "auth.title.welcome": "Здравствуйте",
    "auth.button.login": "Войти",
    "auth.button.createaccount": "Создать учетную запись",
    "auth.placeholder.login": "E-mail",
    "auth.placeholder.password": "Пароль",
    "auth.link.resetpassword": "Забыли пароль?",
    "auth.error.usernotfound": "Пользователь не найден",

    // ResetPasswordView

    "resetpassword.ok": "На ваш e-mail отправлена ссылка для сброса пароля",

    // TermsView

    "termsview.needagree": "Прочитайте и согласитесь с условиями, чтобы продолжить",

    // CreateAccountView

    "register.error.emailexists": "Учетная запись с этим e-mail уже существует",

    // CurrenciesView

    "wallets.settings.base.period.day": "24 часа",
    "wallets.settings.base.period.week": "7 дней",
    "wallets.settings.base.period.month": "1 месяц",
    "wallets.settings.base.currency.1": "TMH",
    "wallets.settings.base.currency.2": "BTC",
    "wallets.settings.base.currency.3": "ETH",
    "wallets.settings.base.currency.4": "MHC",
    "wallets.settings.base.currency.1000": "USD",

    "currenciesview.totalassetsvalue": "Доступный баланс",
    "currenciesview.tab.currencies": "Валюты",
    "currenciesview.tab.wallets": "Недавние кошельки",
    "currenciesview.card.wallets": "Количество кошельков: <b><!--XX--></b>",
    "currenciesview.card.currencyrate": "Курс валюты",

    // WalletsView

    "walletsview.tab.wallets": "Кошельки",
    "walletsview.tab.latesttransactions": "История операций",
    "walletsview.button.importpk": "Импортировать закрытый ключ",
    "walletsview.button.transfer": "Перевод",
    "walletsview.button.forging": "Форжинг",
    "walletsview.button.copyaddress": "Копировать адрес",
    "walletsview.button.showqr": "Показать QR-код",
    "walletsview.button.savepk": "Созранить закрытый ключ",
    "walletsview.button.forginginfo": "Форжинг",
    "walletsview.button.transactions": "Операции",
    "walletsview.button.delegations": "Делегирование",
    "walletsview.button.walletforging": "Форжинг кошельком",

    // WalletView

   "createwalletview.navtitle": "Добавить #MHC кошелёк",
    "createwalletview.title": "Создать кошелёк",
    "createwalletview.button.add": "Добавить кошелёк",
    "createwalletview.button.addtip": "Добавить новый или импортировать из QR-кода",
    "createwalletview.placeholder.walletname": "Наименование кошелька",
    "createwalletview.placeholder.walletpassword": "Пароль для кошелька",
   "createwalletview.button.generate": "Генерировать",
    "createwalletview.button.copy": "Копировать",
    "createwalletview.button.scanqr": "Отсканировать QR-код",
    "createwalletview.button.openfileqr": "Открыть файл с QR-кодом",

    // TransferView

    "transferview.error.nodesoffline": "На текущий момент в сети нет активных серверов",
    "transferview.error.notaccepted": "Тразакция не принята",

    // TransactionView

    "transactionview.title": "Информация об операции",
    "transactionview.repeattransfer": "Повторить перевод",
    "transactionview.operation.type": "Тип операции",
    "transactionview.operation.datetime": "Дата и время",
    "transactionview.operation.from": "Отправитель",
    "transactionview.operation.to": "Получатель",
    "transactionview.operation.amount": "Сумма операции",
    "transactionview.operation.status": "Статус операции",
    "transactionview.operation.data": "Данные",
    "transactionview.status.0": "Статус не известен",
    "transactionview.status.10": "В процессе",
    "transactionview.status.20": "Выполнена",
    "transactionview.status.40": "Не принята",
    "transactionview.button.copyhash": "Копировать<br/>хэш",
    "transactionview.button.checkinfo": "Детальная<br/>информация",
    "transactionview.button.repeattrans": "Повторить<br/>операцию",

    // AppsView

    "appsview.action.get": "Загрузить приложение",
    "appsview.action.open": "Открыть приложение",

    // SettingsView

    "settings.title": "Настройки",

    "settings.locale.en": "English",
    "settings.locale.ru": "Русский",

    "settings.cache.cleaned": "Кеш очищен",

    // PasswordSettingsView

    "settings.password.changed": "Пароль изменен",
    "settings.password.error.emptyoldpassword": "Введите текущий пароль",
    "settings.password.error.emptynewpassword": "Введите новый пароль",
    "settings.password.error.wrongpassword": "Неверный текущий пароль",

    // PasscodeSettingsView

    "settings.passcode.turnon": "Включить код-пароль",
    "settings.passcode.turnoff": "Отключить код-пароль",
    "settings.passcode.error.donotmatch": "Код-пароли не совпадают",

    // QrCodeAlertView

    "qrcodealertview.title.address": "QR-код с адресом кошелька",
    "qrcodealertview.title.pk": "QR-код с закрытым ключем",
    "qrcodealertview.comment.address": "Поделитесь этим QR-кодом с отправителем",
    "qrcodealertview.comment.pk": "Этот QR-код содержит выш закрытый ключ. Он обеспечивает доступ к вашим средствам без пароля и может быть использован для восстановления потерянного кошелька. Держите его в безопасности!",
    "qrcodealertview.comment.pknotexists": "На устройстве не найден закрытый ключ соответствующий этому кошельку.",
    "qrcodealertview.actions.saveqr": "Сохранить изображение QR-кода",
    "qrcodealertview.actions.showpkqr": "Показать QR-код для закрытого ключа",
    "qrcodealertview.hint": "Выполните свайп слева направо или наоборот для переключения<br> между кошельком и закрытым ключем",

    // WalletCreatedAlertView

    "walletcreatedalertview.notice": "Пароль и ключевой файл <i>не подлежат восстановлению</i> в случае потери. Держите их в безопасности и сделайте резервные копии!",

    // WalletCreateAlertView

    "walletcreatealertview.error.unknowncode": "Неизвестный QR-код",
    "walletcreatealertview.title.address": "Адрес",
    "walletcreatealertview.title.key.public": "Открытый ключ",
    "walletcreatealertview.title.key.enc": "Ключевой файл зашифрован",
    "walletcreatealertview.title.key.open": "Ключевой файл открыт",
    "walletcreatealertview.address.unknown": "Неизвестный адрес",

    // WalletImportEncryptedAlertView

    "walletimportview.error.unknowncode": "Неизвестный QR-код",
    "walletimportview.title.address": "Адрес",
    "walletimportview.title.key.public": "Открытый ключ",
    "walletimportview.title.key.enc": "Ключевой файл зашифрован",
    "walletimportview.title.key.open": "Ключевой файл открыт",
    "walletimportview.address.unknown": "Неизвестный адрес",

    // MetaPayAlertView

    "metapayalertview.error.nowallets": "Подходящих кошельков не найдено",
    "metapayalertview.error.notenoghfunds": "Недостаточно средств. Выберите другой кошелек или пополнить текуший",

    // iCloudSyncAlertView

    "icloudsyncalertview.title": "Синхронизация iCloud",
    "icloudsyncalertview.warning": "Предупреждение!",
    "icloudsyncalertview.text1": "По умолчанию закрытые ключи будут храниться в iCloud. Вы можете изменить параметры синхронизации в настройках.",
    "icloudsyncalertview.text2": "Надежно храните ваши пароли и закрытые ключи. При утере восстановить их будет невозможно.",

    // OfferPasscodeAlertView

    "offerpasscodealertview.title": "Установите код-доступа",
    "offerpasscodealertview.text": "Установите 4-значный код-доступа, чтобы упростить вход в приложение.",
    "offerpasscodealertview.actions.yes": "Установить код-пароль",
    "offerpasscodealertview.actions.no": "Пропустить",

    // NoPkAlertView

    "nopkalertview.text1": "Отсутствует закрытый ключ",
    "nopkalertview.text2": "Перевод средств без закрытого ключа невозможен. Импортируйте закрытый ключ, чтобы получить возможность переводить средства. Без закрытого ключа доступен просмотр информации о балансе кошелька и просмотр истории транзакций.",
    "nopkalertview.actions.import": "Импорт ключа из QR-кода",
    "nopkalertview.actions.cancel": "Назад",

    // importpk

    "importpk.wrongcurrency": "QR-код не содержит $currency кошелек",

    // GEO

    "node.geo.us": "Америка",
    "node.geo.eu": "Европа",
    "node.geo.cn": "Азия",
    "node.geo.undefined": "не определено",

    // NodeView
    "nodeview.error.notenoghfunds": "Недостаточно средств для делегирования",
};

/**
 * @param {number} time - UNIX timestamp (seconds)
 * @param {boolean} date - need date?
 * @return {string}
 */
window.timeToDateTime = function (time, date) {
    date = typeof date !== "undefined" ? date : false;
    let d = new Date();
    d.setTime(time * 1000);

    /**
     * @param {number} n
     * @return {string}
     */
    function addZero (n) {
        return n <= 9 ? "0" + n : "" + n;
    }

    let dateStr = [addZero(d.getDate()), addZero(d.getMonth() + 1), d.getFullYear()].join(".");
    let timeStr = [addZero(d.getHours()), addZero(d.getMinutes()), addZero(d.getSeconds())].join(":");

    return (date ? dateStr + " " : "") + timeStr;
};
