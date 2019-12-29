const vue = new Vue({
    el: '.app',
    data: {
        testIsShowed: false, //shows "page" with questions
        currentStep: 0,
        stepResultIsShowed: false,
        chosenAnswer: '',
        chosenSellBuy: '',
        isChosenAnswerCorrect: false,
        resultPopupIsShowed: false, //shows final popup
        timeCounter: 60, //time per question
        steps: [
            {
                id: 1,
                mainImg: 'img/step-0.png',
                questionTheme: 'Apple',
                question: 'Акции всемирноизвестного производителя портативной техники <strong>Apple.</strong> Выберите, как эта новость повлияет на график актива. Нажимайте <strong>"купить"</strong> если уверены в росте, <strong>"продать" </strong> - в падении.',
                answers: ['Производственная активность в США выросла по итогам предыдущего месяца','Безработица в Еврозоне оказалась значительно ниже ожиданий', 'Эксперты разочарованы презентацией нового iPhone, выразив сомнения в росте продаж'],
                correctAnswer: 'Эксперты разочарованы презентацией нового iPhone, выразив сомнения в росте продаж',
                correctSellBuy: 'sell',
                answerDescription: 'Когда появляются новости о неудачных презентациях или снижении выручки компании (даже предполагаемой), это становится веским поводом для инвесторов <strong> ПРОДАТЬ акции Apple,</strong> чей продукт не понравился людям и, возможно, принесет разработчикам не так много денег, как они рассчитывали.'
            },
            {
                id: 2,
                mainImg: 'img/step-0.png',
                questionTheme: 'Boeing',
                question: 'Акции одного из крупнейших мировых производителей авиационной, космической и военной техники <strong> Boeing. </strong> выберите, как эта новость повлияет на график актива. нажимайте <strong>"купить"</strong> если уверены в росте, <strong>"продать"</strong> - в падении.',
                answers: ['Курс британского фунта начал падать из-за того, что появились сообщения о возможном выходе Британии из состава ЕС «без сделки»', 'Министры финансов G20 договорились к 2020 году начать облагать налогом IT-компании', 'Еще одна крупная авиакомпания заявила о расторжении контракта с Boeing из-за проблем в системе безопасности самолетов'],
                correctAnswer: 'Еще одна крупная авиакомпания заявила о расторжении контракта с Boeing из-за проблем в системе безопасности самолетов',
                correctSellBuy: 'sell',
                answerDescription: 'Расторжение контракта обещает отрицательно сказаться на показателях прибыли компании, с которой его расторгают – в данном случае, Boeing. Инвесторы и трейдеры моментально реагируют на подобные новости. Разумно – <strong>ПРОДАТЬ акции Boeing.</strong>'
            },
            {
                id: 3,
                mainImg: 'img/step-0.png',
                questionTheme: 'Gold',
                question: '<strong>Золото.</strong> Выберите, как эта новость повлияет на график актива. Нажимайте <strong>"купить"</strong> если уверены в росте, <strong>"продать"</strong> - в падении.',
                answers: ['Объем промышленного производства в Еврозоне вырос и полностью совпал с прогнозом', 'Barrick Gold, крупнейшая золотодобывающая компания в мире, сообщила об аварии на одном из своих месторождении и о прекращении разработки до устранения последствий.','Стоимость нефти резко снизилась на сообщениях о росте запасов в США'],
                correctAnswer: 'Barrick Gold, крупнейшая золотодобывающая компания в мире, сообщила об аварии на одном из своих месторождении и о прекращении разработки до устранения последствий.',
                correctSellBuy: 'buy',
                answerDescription: 'Данная новость предполагает, что золота в ближайшей перспективе будет добываться меньше. Это смещает баланс между спросом и предложением, вызывая рост цены Gold. Чем меньше товара (при таком же уровне спроса), тем он дороже. Соответственно, стоимость золота начинает расти, и это благоприянтый момент для того, чтобы <strong>КУПИТЬ Gold.</strong>'
            },
            {
                id: 4,
                mainImg: 'img/step-0.png',
                questionTheme: 'USD/\RUB',
                question: '<strong>Пара доллар-рубль.</strong> Выберите, как эта новость повлияет на график актива. Нажимайте <strong>"купить"</strong> если уверены в росте, <strong>"продать"</strong> - в падении.',
                answers: ['Дональд Трамп сообщил о введении новой порции санкций против России, которые эксперты охарактеризовали как «неожиданно жесткие»', 'Банк России принял решение сохранить ключевую процентную ставку, как того от него и ждал рынок', 'Помощник президента России Юрий Ушаков заявил, что следующий саммит G20 пройдет в ноябре 2020 года в Саудовской Аравии'],
                correctAnswer: 'Дональд Трамп сообщил о введении новой порции санкций против России, которые эксперты охарактеризовали как «неожиданно жесткие»',
                correctSellBuy: 'buy',
                answerDescription: 'Неприятные новости о санкциях заставляют инвесторов держаться подальше от вложений в российские активы и продавать их. Поскольку в паре USD/RUB рубль стоит вторым, а доллар – первым, график будет расти. Т.е. один доллар будет стоить все больше и больше рублей. Получается, что момент публикации такой новости – благоприятен для того, чтобы <strong>КУПИТЬ USD/RUB.</strong>'
            },
            {
                id: 5,
                mainImg: 'img/step-0.png',
                questionTheme: 'USD/\EUR',
                question: '<strong>Пара евро-доллар.</strong> Выберите, как эта новость повлияет на график актива. Нажимайте <strong>"купить"</strong> если уверены в росте, <strong>"продать"</strong> - в падении.',
                answers: ['Президент ЕЦБ Марио Драги во время пресс-конференции неожиданно для многих заговорил о снижении ключевой ставки', 'Reebok отчиталась о рекордных продажах за всю историю компании', 'ВВП Швейцарии резко сократился из-за падения объемов производства часов'],
                correctAnswer: 'Президент ЕЦБ Марио Драги во время пресс-конференции неожиданно для многих заговорил о снижении ключевой ставки',
                correctSellBuy: 'sell',
                answerDescription: 'Главная новость из трех – по евро (EUR). Все, что касается Европейского Центробанка, всегда моментально замечается рынками. Тем более, что снижение ставок делает вложения в валюте менее доходными для инвесторов, а также увеличивает «предложение» (количество) валюты, понижая ее стоимость. Разумный вариант – <strong>ПРОДАТЬ EUR/USD.</strong>'
            },
        ]
    },
    methods: {
        //initialize quest page
        startTest(){
            this.testIsShowed = true,
            this.decreaseCounter();
        },
        chooseAnswer(answer) {
            this.chosenAnswer = answer;
        },
        // decrease time
        decreaseCounter() {
            this.timeCounter = 60; //time per question
            //global variable that stores interval function. Global because it needs to be reseted
            window.timerFunc = setInterval(() => {
                if(this.timeCounter > 0) {
                    this.timeCounter--;
                } else {
                    // if time is less than timeCounter - show incorrect result and clear interval
                    clearInterval(timerFunc);
                    this.showResult('Incorrect answer!');
                }
            },1000);
        },
        windowScrollTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
        showResult(val) {
                this.chosenSellBuy = val; // gets chosen buy or sell value from click event
                if(
                    // if answer is correct and sell\buy is correct - show succes text
                    this.chosenAnswer === this.currentStepObj.correctAnswer
                    && this.chosenSellBuy === this.currentStepObj.correctSellBuy
                ) {
                    this.isChosenAnswerCorrect = true;
                } else {
                    this.isChosenAnswerCorrect = false;
                }
                //clear interval and show results
                clearInterval(timerFunc);
                this.stepResultIsShowed = true
        },
        proceedNextStep() {
            // if question number is more than total questions - show result popup
            // else - proceed next question
            if(this.currentStep === this.steps.length -1) {
                this.resultPopupIsShowed = true
            } else {
                this.currentStep++;
                this.stepResultIsShowed = false;
                this.chosenAnswer = '';
                this.windowScrollTop();
                this.decreaseCounter();
            }
        },
    },
    computed: {
        //stores data about current question object
        currentStepObj() {
            return this.steps[this.currentStep]
        },
    },
})