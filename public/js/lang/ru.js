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
    "error.availableonlyinmetagate": "Доступно только в настольном #MetaGate",
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
    "transaction.metahash.name.102": "Награда за ноду",
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
    "menu.coindelegation": "Делегирование",

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
    "termsview.title": "Условиями предоставления услуг",
    "termsview.agree": "Я согласен с условиями<br>предоставления услуг",
    "termsview.rules": "<p>These Terms of Use (hereinaſter “Terms”) were created by MetaHash AG, registered address<br/>at Gartenshtrasse 6, 6300 Zug, Switzerland (hereinaſter referred as “the Company”, “we”,<br/>“us”, “our”) and govern your use of https://metahash.org/ (hereinaſter referred as “this<br/>Website” or “our Website”).<br/></p><br/><p><br/>By accessing and using the Website, you agree to the following Terms, as they may be<br/>modified, changed, supplemented or updated from time to time, as well as all applicable laws<br/>and regulations. Please, read the following Terms carefully. If you do not agree to all of these<br/>Terms, please do not use this Website or any information, links or content contained on this<br/>Website. Your access to and use of this Website constitutes your acceptance of and agreement to abide by each of the<br/>terms set forth below including our Privacy Policy which is hereby<br/>incorporated in these Terms by reference. If you are using our Website on behalf of your<br/>organization, that organization accepts these Terms.<br/></p><br/><p><br/>These Terms may be modified, changed, supplemented or updated by the Company in its sole<br/>discretion at any time without advance notice. We suggest that you visit this page regularly to<br/>keep up to date with any changes. Your continued use of this Website will confirm your acceptance of these Terms as<br/>modified, changed, supplemented or updated by us. If you do not<br/>agree to such revised Terms, you must stop using this Website and any information, links or<br/>content contained on this Website.<br/></p><br/><p><br/>This English version of these Terms is the Official version. If you do not speak English, you can<br/>use translation services or translated versions of these Terms available on our Website.<br/>However, please, note that in case of any discrepancies the English version shall always<br/>prevail.<br/></p><br/><br/><h4>General</h4><br/><p><br/>The purpose of our Website is to provide you with some general information about the project,<br/>soſtware and technology being developed by us and to give you an access to the developed<br/>soſtware, including testing, collecting feedback about soſtware and its testing, downloading<br/>of provided applications on our Website. These Terms also apply to applications downloaded<br/>from our Website unless otherwise specified in separate terms of use for these applications.<br/>Compliance with these Terms is mandatory regardless of whether the Website and applications are being used on a<br/>computer or mobile device. You must not breach any of the following<br/>terms or our Acceptable Use Policy set out below.</p><br/><br/><h4>Use of Website</h4><br/><br/><p><br/>We may make (but are not obligated to make) the source code for the soſtware we develop<br/>available for download as open source soſtware. You agree to be bound by, and comply with,<br/>any license agreement that applies to this open source soſtware. You will not indicate that you<br/>are associated with us in connection with your use, modifications or distributions of this open<br/>source soſtware.</p><br/><p><br/>When we host any soſtware and enable you to access and use such soſtware through our<br/>websites including this Website, then these Terms will apply to such access and use, as well<br/>as any license agreements that we may enter into with you.<br/>Open Source Soſtware</p><br/><br/><h4>TERMS OF SERVICES</h4><br/><br/><p><br/>If you post, upload, input, provide or submit your personal data to us, including without<br/>limitation, your name, email address, IP address, cryptocurrency address, text, code or other<br/>information and materials, sign up to our mailing list or create an account on our Website<br/>(collectively, your “User Content”), you must ensure that the User Content provided by you at<br/>that or at any other time is true, accurate, up to date and complete and that any User Content<br/>you post, upload, input, provide or submit to us or via our Website do not breach or infringe the<br/>intellectual property rights of any third party. We do not own, control or endorse any User<br/>Content that is transmitted, stored or processed via our Website or sent to us and we are not<br/>responsible or liable for any User Content. You are solely responsible and liable for all of your<br/>User Content and for your use of any interactive features, links or information or content on<br/>our Website, and you represent and warrant that (i) you own all intellectual property rights (or<br/>have obtained all necessary permissions) to provide your User Content and to grant the<br/>licenses in these terms; (ii) your User Content will not violate any agreements or confidentiality<br/>obligations; and (iii) your User Content will not violate, infringe or misappropriate any<br/>intellectual property right or other proprietary right, including the right of publicity or privacy,<br/>of any person or entity.<br/></p><br/><p><br/>You are entirely responsible for maintaining the confidentiality of your User Content and any<br/>of your non-public information. Furthermore, you are entirely responsible for any and all<br/>activities that occur under your account (if any). You agree to notify us immediately of any<br/>unauthorized use of your User Content, account or any other breach of security. We will not be<br/>liable for any loss or damages that you may incur as a result of someone else using your User<br/>Content or account, either with or without your knowledge. However, you could be held liable<br/>for losses incurred by our Parties (as defined below) or another party due to someone else<br/>using your User Content or account. You may not use anyone else’s User Content or account at<br/>any time without the permission of such person or entity.<br/></p><br/><p><br/>By posting, uploading, inputting, providing or submitting your User Content to us, you grant us,<br/>our affiliates any necessary sub-licensees a non-exclusive, worldwide, perpetual, right and<br/>permission to use, publicly perform and publicly display your User Content for the purposes of<br/>our Website using.<br/></p><br/><p><br/>You must immediately update and inform us of any changes to your User Content by updating<br/>your personal data by contacting us at support@metahash.org, so that we can communicate<br/>with you effectively and provide accurate and up to date information to you.</p><br/><br/><h4>User Content</h4><br/><p><br/>We may display third-party content, advertisements, links, promotions, logos and other materials on our Website<br/>(collectively, the “Third-Party Content”) for your convenience only. We<br/>do not approve of, control, endorse or sponsor any third parties or Third-Party Content, and we<br/>make no representations or warranties of any kind regarding such Third-Party Content, including, without limitation,<br/>the accuracy, validity, legality, copyright compliance, or decency of<br/>such content. Your use of or interactions with any Third-Party Content, and any third party that<br/>provides Third-Party Content, are solely between you and such third parties and we are not<br/>responsible or liable in any manner for such use or interactions. We are not responsible for any<br/>of the content on third party sites linked to our Website nor can it be assumed that we have<br/>reviewed or approved of such sites or their content, nor do we warrant that the links to these<br/>sites work or are up to date. Our Privacy Policy does not apply to Third-Party Content. You shall<br/>consult the terms and conditions and privacy policy of those third party websites to find out<br/>how they collect and use your personal data and to establish whether and for what purpose<br/>they use cookies.</p><br/><br/><h4>Third Party Content</h4><br/><p><br/>If you decide to submit questions, comments, suggestions, ideas, original or creative materials<br/>or other information to us (collectively, “Feedback”), you do so on your own accord and not<br/>based on any request or solicitation from us. Feedback does not include User Content. We<br/>reserve the right to use Feedback for any purpose at no charge and without compensation to<br/>you. Do not send us Feedback if you expect to be paid or want to continue to own or claim<br/>rights to your Feedback. The purpose of these Terms is to avoid potential misunderstandings<br/>or disputes if our products, services, business ideas or business strategies might seem similar<br/>to ideas submitted to us as Feedback. If you decide to send us Feedback, you acknowledge<br/>and understand that we make no assurances that your Feedback will be treated as<br/>confidential or proprietary.<br/></p><br/><p><br/>Although we have no obligation to screen, edit or monitor User Content, we reserve the right,<br/>and have absolute discretion, to remove, screen or edit User Content if it violates these Terms<br/>or provisions of applicable law. Furthermore, if we have reason to believe that there is likely<br/>to be a breach of security, breach or misuse of our Website or if you breach any of your<br/>obligations under these Terms or the Privacy Policy, we may suspend your use of this Website<br/>at any time and for any reason.<br/></p><br/><p><br/>Any User Content submitted by you on this Website may be accessed by us globally.<br/></p><br/><h4>Feedback</h4><br/><p><br/>We may gather information and statistics collectively about all visitors to this Website which<br/>may include the information supplied by you. This information helps us to design and arrange<br/>our Web pages in a user-friendly manner and to continually improve our Website to better<br/>meet the needs of our Website users. We may share this kind of aggregate data with selected<br/>third parties to assist with these purposes. Personal data is processed by us in accordance<br/>with our Privacy Policy.</p><br/><br/><h4>Aggregate Information</h4><br/><p><br/>We and our licensors retain all right, title and interest in and to this Website and its products<br/>and services, including all copyrights, patents, trade secrets, trademarks, other intellectual<br/>property rights, trade names, logos, slogans, custom graphics, button icons, scripts, videos,<br/>text, images, soſtware, code, files, content, information and other material available on our<br/>Website and nothing on this Website may be copied, imitated or used, in whole or in part,<br/>without our or the applicable licensor’s prior written permission. The Company reserves all<br/>rights not expressly granted.</p><br/><p><br/>Any unauthorized reproduction is prohibited.<br/></p><br/><p><br/>You may only access, use and print the information and material on this Website for<br/>non-commercial or personal use provided that you are authorized to access such information<br/>or material and keep intact all copyright and proprietary notices.<br/>You must not otherwise reproduce, adapt, store, transmit, distribute, print, display,<br/>commercialize, publish or create derivative works from any part of the content, format or<br/>design of this Website.<br/></p><br/><p><br/>If you seek to reproduce or otherwise use the content on this Website in any way it is your<br/>responsibility to obtain approval from us for such use. Nothing in these Terms will be<br/>construed as conferring any our right or license to any patent, trademark, copyright or other<br/>our proprietary rights or any third party, whether by estoppel, implication or otherwise.<br/></p><br/><h4>Intellectual Property</h4><br/><p><br/>You must only use the content or services provided through this Website for their stated<br/>purpose. You must not use this Website to:<br/><br />(a) publish, post, send, upload, submit, display or disseminate any information or material<br/>and/or otherwise make available or engage in any conduct that is unlawful, discriminatory,<br/>harassing, libelous, defamatory, abusive, threatening, harmful, offensive, obscene, tortious or<br/>otherwise objectionable;<br/>(b) display, upload or transmit material that encourages conduct that may constitute a<br/>criminal offence, result in civil liability or otherwise violate or breach any applicable laws,<br/>regulations or code of practice;<br /><br/>(c) interfere or violate the legal rights (such as rights of privacy and publicity) of others or<br/>violate others use or enjoyment of this Website;<br/><br />(d) violate any applicable laws or regulations;<br/><br /> (e) use this Website or links on this Website in any manner that could interfere with, disrupt,<br/>negatively affect or inhibit other users from using this Website or links on this Website or that<br/>could damage, disable, overburden or impair the functioning of this Website or our servers or<br/>any networks connected to any of our servers in any manner;<br/><br />(f) create a false identity for the purpose of misleading others or fraudulently or otherwise<br/>misrepresent yourself to be another person or a representative of another entity including, but<br/>not limited to, an authorized user of this Website or our representative, or fraudulently or<br/>otherwise misrepresent that you have an affiliation with a person, entity or group;<br/><br />(g) mislead or deceive us, our representatives and any third parties who may rely on the<br/>information provided by you, by providing inaccurate or false information, which includes<br/>omissions of information;<br/><br />(h) disguise the origin of any material transmitted through the services provided by this<br/>Website (whether by forging message/packet headers or otherwise manipulating normal<br/>identification information);<br/><br />(i) violate, infringe or misappropriate any intellectual or industrial property right of any person<br/>(such as copyright, trademarks, patents, or trade secrets, or other proprietary rights of any<br/>party) or commit a tort;<br/><br />(j) upload files that contain viruses, Trojan horses, worms, time bombs, cancelbots, corrupted<br/>files, or any other similar soſtware or programs that may damage the operation of another’s<br/>computer or property;<br/><br />(k) send, upload, display or disseminate or otherwise make available material containing or<br/>associated with spam, junk mail, advertising for pyramid schemes, chain letters, virus<br/>warnings (without first confirming the authenticity of the warning), or any other form of<br/>unauthorized advertising or promotional material;<br/><br />(l) access any content, area or functionality of this Website that you are prohibited or restricted from<br/>accessing<br/>or attempt to bypass or circumvent measures employed to prevent or limit<br/>your access to any content, area or functionality of this Website;<br/><br />(m) obtain unauthorized access to or interfere with the performance of the servers which host<br/>this Website or provide the services on this Website or any servers on any associated networks<br/>or otherwise fail to comply with any policies or procedures relating to the use of those servers;<br/></p><br/><h4>Acceptable Use Policy</h4><br/><p><br/>(n) attempt to gain unauthorized access to any services or products, other accounts, computer<br/>systems, or networks connected to any of our servers through hacking, password mining, or<br/>any other means;<br/>(o) obtain or attempt to obtain any materials or information through any means not intentionally made available<br/>through this Website or its services;<br/>(p) harvest or otherwise collect, whether aggregated or otherwise, data about others including<br/>e-mail addresses and/or distribute or sell such data in any manner;<br/>(q) use any part of this Website other than for its intended purpose; or<br/>(r) use this Website to engage in or promote any activity that violates these Terms.<br/>To the fullest extent permitted by applicable law, you will indemnify, defend and hold<br/>harmless us and our respective past, present and future employees, officers, directors,<br/>contractors, consultants, advisers, equity holders, suppliers, vendors, service providers, parent<br/>companies, subsidiaries, affiliates, agents, representatives, predecessors, successors and<br/>assigns (collectively, the “our Parties”) from and against all claims, damages, liabilities,<br/>losses, costs and expenses (including attorneys’ fees) that arise from or relate to: (i) your<br/>access to or use of our Website, products or services; (ii) your User Content; (iii) any Feedback<br/>you provide; or (iv) your violation of these Terms.<br/></p><br/><p><br/>We reserve the right to exercise sole control over the defense, at your expense, of any claim<br/>subject to indemnification pursuant to these terms. This indemnity is in addition to, and not in<br/>lieu of, any other indemnities set forth in a written agreement between you and us.<br/></p><br/><h4>Indemnification</h4><br/><p><br/>THIS WEBSITE AND ALL INFORMATION, PRODUCTS AND SERVICES PROVIDED THROUGH THIS<br/>WEBSITE ARE PROVIDED “AS IS” AND ON AN “AS AVAILABLE” BASIS WITHOUT ANY<br/>REPRESENTATIONS, WARRANTIES, PROMISES OR GUARANTEES WHATSOEVER OF ANY KIND<br/>INCLUDING, WITHOUT LIMITATION, ANY REPRESENTATIONS, WARRANTIES, PROMISES OR<br/>GUARANTEES REGARDING THE ACCURACY, CURRENCY, COMPLETENESS, ADEQUACY,<br/>AVAILBILITY, SUITABLITY OR OPERATION OF THIS WEBSITE, ANY PRODUCTS OR SERVICES WE<br/>MAY PROVIDE THROUGH IT OR THE INFORMATION OR MATERIAL IT CONTAINS.<br/>EACH OF OUR PARTIES DISCLAIM ALL REPRESENTATIONS AND WARRANTIES, WHETHER<br/>EXPRESS, IMPLIED OR STATUTORY, WITH REGARD TO THE FOREGOING, INCLUDING, WITHOUT<br/>LIMITATION: (A) ANY WARRANTY WITH RESPECT TO THE CONTENT, INFORMATION, DATA,<br/>SERVICES, AVAILABLITY, UNINTERRUPTED ACCESS, OR SERVICES OR PRODUCTS PROVIDED<br/>THROUGH OR IN CONNECTION WITH THIS WEBSITE; (B) ANY WARRANTIES THAT THIS<br/>WEBSITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES, WORMS,<br/>TROJAN HORSES OR OTHER HARMFUL COMPONENTS; (C) ANY WARRANTIES THAT THIS<br/>WEBSITE, ITS CONTENT AND ANY SERVICES OR PRODUCTS PROVIDED THROUGH IT ARE<br/>ERROR-FREE OR THAT DEFECTS IN THIS WEBSITE, ITS CONTENT OR SUCH SERVICES OR<br/>PRODUCTS WILL BE CORRECTED; (D) ANY WARRANTIES OF TITLE OR IMPLIED WARRANTIES<br/>OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE; (E) ANY WARRANTIES THAT<br/>THIS WEBSITE WILL BE COMPATIBLE WITH YOUR COMPUTER OR OTHER ELECTRONIC<br/>EQUIPMENT; AND (F) ANY WARRANTIES OF NON-INFRINGEMENT. THE MATERIALS AND<br/>RELATED GRAPHICS PUBLISHED ON THIS WEBSITE COULD INCLUDE TECHNICAL<br/>INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE<br/>INFORMATION CONTAINED ON THIS WEBSITE. OUR PARTIES MAY MAKE IMPROVEMENTS<br/>AND/OR CHANGES TO THE WEBSITE, ITS PRODUCTS, SERVICES AND/OR THE MATERIALS<br/>DESCRIBED ON THIS WEBSITE AT ANY TIME.<br/></p><br/><h4>Disclaimer</h4><br/><p><br/>In addition, to the maximum extent permitted by law, none of our Parties shall be responsible<br/>or liable for:<br/><br />(a) any loss, liability, cost, expense or damage suffered or incurred arising out of or in connection with any<br/>access to or use of this Website or any of its content;<br/><br />(b) any reliance on, or decision made on the basis of, information or material shown on or<br/>omitted from this Website;<br/><br />(c) any representation or otherwise in respect of the existence or availability of any job, vacancy,<br/>assignment or<br/>other engagement or appointment advertised on this Website (if any) and<br/>any representation or otherwise that we have or will ask for a candidate’s information, will or<br/>have asked to interview or hire a candidate, or that any candidates will meet our needs;<br/><br />(d) any matter affecting this Website or any of its content caused by circumstances beyond<br/>our reasonable control;<br/><br />(e) the performance of this Website and any fault, delays, interruptions or lack of availability<br/>of this Website and any of the services or products provided through this Website, which may<br/>occur due to increased usage of this Website, intermittent failures of this Website or the need<br/>for repairs, maintenance or the introduction of new facilities, products or services; and<br/><br />(f) any information or material on any website operated by a third party which may be<br/>accessed from this Website.<br/></p><br/><p><br/>IN NO EVENT WILL OUR PARTIES BE RESPONSIBLE OR LIABLE FOR ANY CLAIMS, DAMAGES,<br/>LIABILITIES, LOSSES, COSTS OR EXPENSES OF ANY KIND, WHETHER DIRECT OR INDIRECT,<br/>CONSEQUENTIAL, COMPENSATORY, INCIDENTAL, ACTUAL, EXEMPLARY, PUNITIVE OR<br/>SPECIAL (INCLUDING DAMAGES FOR LOSS OF BUSINESS, REVENUES, PROFITS, DATA, USE,<br/>GOODWILL OR OTHER INTANGIBLE LOSSES) REGARDLESS OF WHETHER OUR PARTIES HAVE<br/>BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, LIABILITIES, LOSSES, COSTS OR<br/>EXPENSES, ARISING OUT OF OR IN CONNECTION WITH: (A) THE USE OR PERFORMANCE OF<br/>THIS WEBSITE; (B) ANY PROVISION OF OR FAILURE TO PROVIDE THIS WEBSITE OR ITS<br/>SERVICES (INCLUDING WITHOUT LIMITATION ANY LINKS ON OUR WEBSITE); (C) ANY INFORMATION AVAILABLE FROM THIS WEBSITE;<br/>(D) ANY CONDUCT OR CONTENT OF ANY THIRD<br/>PARTY; (E) UNAUTHORIZED ACCESS, USE OR ALTERATION OF THE TRANSMISSION OF DATA OR<br/>CONTENT TO OR FROM US; OR (F) THE FAILURE TO RECEIVE IN ANY WAY THE TRANSMISSION<br/>OF ANY DATA, CONTENT, FUNDS OR PROPERTY FROM YOU. IN NO CIRCUMSTANCES WILL THE<br/>AGGREGATE LIABILITY OF OUR PARTIES ARISING UNDER THESE TERMS EXCEED $1000.00<br/>CHF.<br/></p><br/><p><br/>Without prejudice to our other rights under these Terms, if you breach these Terms in any way,<br/>we may take such action as we deem appropriate to deal with the breach, including<br/>suspending your access to the Website, prohibiting you from accessing the Website, blocking<br/>computers using your IP address from accessing the Website, contacting your internet service<br/>provider to request that they block your access to the Website and/or bringing court<br/>proceedings against you.<br/></p><br/><h4>Breaches of these Terms</h4><br/><p><br/>These Terms are governed by the laws of Switzerland. All claims arising out of or relating to<br/>these Terms will be litigated exclusively in the courts of the Switzerland and we and you<br/>consent to personal jurisdiction in those courts.<br/></p><br/><h4>Final Provisions</h4><br/><br/><p><br/>These Terms control the relationship between us and you. They do not create any third-party<br/>beneficiary rights.</p><br/><p><br/>If you do not comply with these Terms, and we don’t take action right away, this doesn’t<br/>mean that we are giving up any rights that we may have (such as taking action in the<br/>future).</p><br/><p><br/>If a provision of these Terms is determined by any court or other competent authority to be<br/>unlawful and/or unenforceable, the other provisions will continue in effect.<br/>We may revise these Terms from time-to-time. Revised Terms will apply to the use of this<br/>Website from the date of the publication of the revised Terms on this Website. You shall<br/>check this page regularly to ensure that you are familiar with the current version.<br/>If you have any questions regarding these Terms, please contact us at legal@metahash.org<br/></p><br/><p>This Terms are effective as of April 12, 2018</p>",

    // CreateAccountView

    "register.error.emailexists": "Учетная запись с этим e-mail уже существует",
    "createaccountview.title": "Создание учетной записи",
    "createaccountview.login": "E-mail",
    "createaccountview.password": "Пароль",
    "createaccountview.password2": "Подтвердите пароль",

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
    "currenciesview.card.wallets": "Кошельков: <b><!--XX--></b>",
    "currenciesview.card.currencyrate": "Курс",

    // WalletsView

    "walletsview.tab.wallets": "Кошельки",
    "walletsview.tab.wallet": "Кошелек",
    "walletsview.tab.latesttransactions": "История операций",
    "walletsview.button.importpk": "Импортировать ключ",
    "walletsview.button.editwallet": "Редактировать",
    "walletsview.button.transfer": "Перевод",
    "walletsview.button.forging": "Форжинг",
    "walletsview.button.copyaddress": "Копировать&nbsp;адрес",
    "walletsview.button.showqr": "Показать QR-код",
    "walletsview.button.savepk": "Созранить закрытый ключ",
    "walletsview.button.transactions": "Операции",
    "walletsview.button.delegations": "Делегирование",
    "walletsview.walletdelegations": "Делегирование",
    "walletsview.notransactions.title": "Операции отсутствуют",
    "walletsview.notransactions.text": "Операций по текущему кошельку не было",
    "walletsview.nodelegations.title": "Делегирования отсутствуют",
    "walletsview.nodelegations.text": "Делегирований по текущему кошельку не было",

    // WalletView

    "createwalletview.navtitle": "Добавление #MHC кошелёк",
    "createwalletview.title": "Создать кошелёк",
    "createwalletview.button.add": "Создать кошелёк",
    "createwalletview.button.addtip": "Добавить новый или импортировать из QR-кода",
    "createwalletview.placeholder.walletname": "Название кошелька",
    "createwalletview.placeholder.walletpassword": "Пароль для кошелька",
    "createwalletview.button.generate": "Генерировать",
    "createwalletview.button.copy": "Копировать",
    "createwalletview.button.scanqr": "Отсканировать QR-код",
    "createwalletview.button.openfileqr": "Открыть файл с QR-кодом",
    "createwalletview.alert.added": "#MHC кошелек добавлен",
    "createwalletview.alert.address": "Адрес",
    "createwalletview.alert.password": "Пароль",
    "createwalletview.alert.savepkqrcode": "Сохранить QR-код с закрытым ключем",
    "createwalletview.alert.savepkfile": "Сохранить файл закрытого ключа",

    // EditWalletView

    "editwalletview.title": "Редактирование кошелька",
    "editwalletview.tip": "Вы можете переименовать или удалить кошелек",
    "editwalletview.walletname": "Название кошелька",
    "editwalletview.button.savechanges": "Сохранить",
    "editwalletview.button.deletewallet": "Удалить кошелек",

    // TransferView

    "transferview.error.nodesoffline": "На текущий момент в сети нет активных нод",
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
    "appsview.title": "#MetaApps",
    "appsview.subtitle": "Приложения, основанные на технологии блокчейн",
    "appsview.search.dapps": "Поиск приложений",

    // SettingsView

    "settings.title": "Настройки",

    "settings.menu.locale": "Язык",
    "settings.menu.wallets": "Кошельки",
    "settings.menu.security": "Безопасность",
    "settings.menu.password": "Пароль",
    "settings.menu.passcode": "Код-пароль",
    "settings.menu.account": "Настройки учетной записи",
    "settings.menu.deleteaccount": "Удалить учетную запись",
    "settings.menu.system": "Системные",
    "settings.menu.cacheclear": "Очистить кэш",
    "settings.menu.logout": "Выход",

    "settings.cache.cleaned": "Кеш очищен",

    // LocaleSettingsView

    "settings.locale.title": "Языковые настройки",
    "settings.locale.language": "Язык",
    "settings.locale.en": "English",
    "settings.locale.ru": "Русский",

    // WalletsSettingsView
    "settings.wallets.title": "Кошельки",
    "settings.wallets.display": "Настройки отображения",
    "settings.wallets.display.all": "Отображать все кошельки",
    "settings.wallets.display.onlydevice": "Отображать кошельки расположенные на устройстве",
    "settings.wallets.storepkinicloud": "Хранить закрытые ключи в iCloud",
    "settings.wallets.display.hint": "Если вы выберете отображение всех кошельков, кошельки, которые отсутствуют на вашем устройстве, будут отображаться серым цветом. Вам будет не доступна возможность просмотра баланса и выполнения операций для кошельков, отсутствующих на устройстве.",
    "settings.wallets.icloud.hint": "Если ваше устройство будет потеряно или повреждено, то при переходе на новое устройство вы сможте восстановить кошельки из iCloud. Если вы не хотите хранить закрытые ключи в iCloud, то обязательно храниете резервную копию ваших закрытых ключей в другом месте.<br><b>При утере восстановить их будет невозможно.</b>",

    // PasswordSettingsView

    "settings.password.title": "Пароль",
    "settings.password.change": "Изменить пароль",
    "settings.password.change.button": "Изменить пароль",
    "settings.password.changed": "Пароль изменен",
    "settings.password.oldpassword": "Текущий пароль",
    "settings.password.newpassword": "Пароль",
    "settings.password.repeatnewpassword": "Повторите  пароль",
    "settings.password.tupeoldpassword": "Введите текущий пароль",
    "settings.password.tupenewpassword": "Введите новый пароль",
    "settings.password.tupenewpasswordagain": "Введите новый пароль еще раз",
    "settings.password.error.emptyoldpassword": "Введите текущий пароль",
    "settings.password.error.emptynewpassword": "Введите новый пароль",
    "settings.password.error.wrongpassword": "Неверный текущий пароль",
    "settings.password.hint": "Надежно храните свой пароль. Если вы его потеряете, то вы не сможете управлять своими средствами.",

    // PasscodeSettingsView

    "settings.passcode.title": "Код-пароль",
    "settings.passcode.change.button": "Изменить код-пароль",
    "settings.passcode.turnon": "Включить код-пароль",
    "settings.passcode.turnoff": "Отключить код-пароль",
    "settings.passcode.error.donotmatch": "Код-пароли не совпадают",
    "settings.passcode.options": "Дополнительные настройки",
    "settings.passcode.biometricsID": "Разблокировка по Face ID или Touch ID",
    "settings.passcode.hint": "Используйте код-пароль, чтобы свести к минимуму риск несанкционированного доступа к вашим данным",

    // QrCodeAlertView

    "qrcodealertview.title.address": "QR-код с адресом кошелька",
    "qrcodealertview.title.pk": "QR-код с закрытым ключем",
    "qrcodealertview.comment.address": "Поделитесь этим QR-кодом с отправителем",
    "qrcodealertview.comment.pk": "Этот QR-код содержит выш закрытый ключ. Он обеспечивает доступ к вашим средствам без пароля и может быть использован для восстановления потерянного кошелька. Держите его в безопасности!",
    "qrcodealertview.comment.pknotexists": "На устройстве не найден закрытый ключ соответствующий этому кошельку.",
    "qrcodealertview.actions.saveqr": "Сохранить изображение QR-кода",
    "qrcodealertview.actions.showpkqr": "Показать QR-код для закрытого ключа",
    "qrcodealertview.hint": "Выполните свайп слева направо или наоборот для переключения<br> между публичным адресом и закрытым ключём",

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

    // MetaPayView

    "metapaview.amount": "Сумма:",
    "metapaview.placeholder.amount": "Сумма",
    "metapaview.wallet": "Кошелек:",
    "metapaview.toaddress": "Получатель:",
    "metapaview.placeholder.address": "Получатель",
    "metapaview.data": "Информация:",
    "metapaview.placeholder.data": "Информация",
    "metapaview.password": "Пароль:",
    "metapaview.placeholder.password": "Пароль от кошелька",
    "metapaview.maxfee": "Максимальная комиссия:",
    "metapaview.button.signandsend": "Подписать и отправить",
    "metapaview.button.continue": "Далее",
    "metapaview.transfer": "Перевод",
    "metapaview.allavailable": "Все",
    "metapaview.node": "Нода:",
    "metapaview.delegation":"Делегирование",
    "metapaview.delegationrequest": "Запрос на делегирование",
      "metapaview.delegationrequestpleasecheck": "Проверьте детали делегирования перед тем, как продолжить",
    "metapaview.undelegation": "Разделегирование",
    "metapaview.undelegationrequest": "Запрос на разделегирование",
    "metapaview.undelegationrequestpleasecheck": "Проверьте детали резделегирования перед тем, как продолжить",


    // MetaPaySelectWalletAlertView

    "selectwalletalertview.title": "Выбор кошелька",

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

    "node.type.Proxy": "Прокси",
    "node.type.InfrastructureTorrent": "Инфраструктурный торрент",
    "node.delegation": ["делегирование", "делегирования", "делегирований"],

    // NodeView
    "nodeview.error.notenoghfunds": "Недостаточно средств для делегирования",
    "nodeview.filter.recommended": "Рекомендуемые",
    "nodeview.filter.allnodes": "Все ноды",
    "nodeview.sort.balanceup": "Баланс",
    "nodeview.title": "Ноды",
    "nodeview.trust": "Уровень доверия",
    "nodeview.roi": "ROI",
    "nodeview.geo": "Местоположение",
    "nodeview.avgrps": "Avg RPS",
    "nodeview.lastcheck": "Последняя проверка",
    "nodeview.search.node": "Поиск ноды",
    "nodeview.button.delegate": "Делегировать",
    "nodeview.button.undelegateall": "Разделегировать все",
    "nodeview.button.moreinfo": "Больше информации",
    "nodeview.button.undelegate": "Разделегировать",
    "nodeview.button.showallnodes": "Показать все ноды",

    // SupportView
    "supportview.title": "#MetaWallet поддержка",
    "supportview.software.info": "Информация о приложении",
    "supportview.software.appversion": "Версия приложения:",
    "supportview.software.uiversion": "Версия интерфейса:",
    "supportview.sendlogs": "Отправить логи в службу поддержки",
    "supportview.hint": "Ваш запрос будет отправлен в службу поддержки.<br>Запросы обрабатываются в среднем в течение 24 часов.<br><br>Напишите нам, если у Вас остались вопросы. Мы с удовольствием на них ответим.",
    "supportview.disclaimer.title": "Публичная информация",
    "supportview.disclaimer.subtitle": "Это первый публичный релиз #MetaWallet",
    "supportview.disclaimer.text": "Мы понимаем, что данное приложение не идеально и мы продалжаем работать над его улучшением, чтобы сделать его лучшим браузером для децентрализованных приложений, разработанных на платформе #MetaHash, и мы планируем сделать его лучшим криптовалютным кошельком для монет #MetaHash, токенов и других валют.",
    "supportview.linkmetagete.title": "Посетите #MetaGate",
    "supportview.linkmetagete.text": "Страница загрузки",
    "supportview.linkgithub.title": "Все версии и исходный код",
    "supportview.linkgithub.text": "на GitHub",
    "supportview.linkmetahash.title": "#MetaWallet это проект",
    "supportview.linkmetahash.text": "metahash.org",
    "supportview.releasenote.title": "Обратите внимание, что это один из первых релизов приложения",
    "supportview.releasenote.text": "Это один из первых релизов приложения и в нем могут возникать ошибки. Приложение находится на стадии тестирования и ему еще далеко до перехода в промышленную эксплуатацию, поэтому будьте осторожны при его использовании.",
    "supportview.releasenote.title2": "Нам нужна Ваша помощь!",
    "supportview.releasenote.text2.link": "Если у вас есть идеи о том, как сделать приложение #MetaGate лучше, то пишите на e-mail: ",
    "supportview.releasenote.text2.link2": "Если что-то не работает, пожалуйста, напишите: ",
    "supportview.releasenote.title3": "Идея #MetaGate",
    "supportview.releasenote.text3": "MetaGate это не кошелек, это каталог децентрализованных приложений и браузер, который может загружать пользовательский интерфейс приложений или напрямую обращаться к децентрализованным приложениям через mh: // (протокол #MetaHash), в том числе с кошельком, являющимся децентрализованным приложением с открытым исходным кодом. На текущем момент в MetaGate обеспечена возможность работы приложений, пользовательский интерфейс которых разработан с использованием HTML и JS.<br>",
    "supportview.releasenote.big": " #MetaHash находится в стадии разработки и нам потребуется проделать еще много работы, чтобы сделать из него идеальную платформу для создания  работающих в в режиме реального времени децентрализованных приложений. Мы считаем, что #MetaHash позволит создавать децентрализованные приложения, разработка которых была не возможна до его запуска.",
    "supportview.discussion.title": "Присоединяйтесь",


    "supportview.discussion.linkwebsite": "Наш веб-сайт:",
    "supportview.discussion.linktelegram": "Telegram:",
    "supportview.discussion.linktwitter": "Twitter:",
    "supportview.share.title": "Мы в соцсетях:",
    "supportview.faq.aboutmetahash": "Что такое #MetaHash?",
    "supportview.faq.terms": "Условия использования",
    "supportview.faq.privacypolicy": "Политика конфиденциальности",
    "supportview.faq.antispampolicy": "Анти-Спам политика",
    "supportview.faq.riskda": "Соглашение о раскрытии рисков",

    "supportview.contact.title": "Контакты",
    "supportview.contact.feedback": "Обратная связь",
    "supportview.contact.support": "Служба поддержки ",
    "supportview.contact.pressenquiries": "Электронный адрес для пресс-запросов",
    "supportview.contact.pressoffice": "Телефон пресс-службы",

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


/**
 * @param  {integer} count quantity for word
 * @param  {array} words array of words. Example: ['кошелек', 'кошелька', 'кошельков'], ['делегирование', 'делегирования', 'делегирований']
 * @return {string} count + plural form for word
 */
window.pluralize = function (count, words) {
    var cases = [2, 0, 1, 1, 1, 2];
    return count + ' ' + words[ (count % 100 > 4 && count % 100 < 20) ? 2 : cases[ Math.min(count % 10, 5)] ];
}
