export default function MathLearningPlatform() {
  const checkAnswer = (event, isCorrect) => {
    const button = event.currentTarget;
    const parent = button.parentElement;
    const buttons = parent.querySelectorAll('.answer-btn');

    buttons.forEach((btn) => {
      btn.disabled = true;
    });

    if (isCorrect) {
      button.classList.add('bg-green-100', 'border-green-500');
    } else {
      button.classList.add('bg-red-100', 'border-red-500');
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">MathStep</h1>
            <p className="text-sm text-slate-500">
              Самообучение математике в стиле Stepik
            </p>
          </div>

          <nav className="flex gap-6 text-sm font-medium">
            <a href="#modules" className="hover:text-blue-600 transition">
              Модули
            </a>
            <a href="#theory" className="hover:text-blue-600 transition">
              Теория
            </a>
            <a href="#practice" className="hover:text-blue-600 transition">
              Практика
            </a>
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            Подготовка по школьной программе РФ
          </div>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Изучайте математику
            <span className="text-blue-600"> интерактивно</span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Теория, практические задания, автоматическая проверка ответов и прогресс обучения — всё в одном месте.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow hover:scale-105 transition">
              Начать обучение
            </button>

            <button className="px-6 py-3 rounded-2xl bg-white border border-slate-300 font-semibold hover:bg-slate-100 transition">
              Смотреть программу
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-bold text-xl">Ваш прогресс</h3>
              <p className="text-slate-500 text-sm">11 класс • ЕГЭ профиль</p>
            </div>

            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">
              78%
            </div>
          </div>

          <div className="space-y-4">
            {[
              { title: 'Алгебра', progress: '70%' },
              { title: 'Геометрия', progress: '80%' },
              { title: 'Тригонометрия', progress: '90%' }
            ].map((item) => (
              <div key={item.title}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{item.title}</span>
                  <span>{item.progress}</span>
                </div>

                <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: item.progress }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="modules" className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-3">Учебные модули</h2>
          <p className="text-slate-600">
            Программа соответствует старшей школе России и подготовке к ЕГЭ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Алгебра',
              number: 1,
              lessons: ['Квадратные уравнения', 'Логарифмы']
            },
            {
              title: 'Геометрия',
              number: 2,
              lessons: ['Планиметрия', 'Стереометрия']
            },
            {
              title: 'Тригонометрия',
              number: 3,
              lessons: ['Тригонометрические функции', 'Тождества']
            }
          ].map((module) => (
            <div
              key={module.title}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 hover:shadow-xl transition"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold">{module.title}</h3>

                <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  {module.number}
                </div>
              </div>

              <div className="space-y-3">
                {module.lessons.map((lesson) => (
                  <div
                    key={lesson}
                    className="flex items-center justify-between bg-slate-50 rounded-2xl px-4 py-3"
                  >
                    <span className="text-sm font-medium">{lesson}</span>

                    <button className="text-blue-600 text-sm font-semibold hover:underline">
                      Открыть
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="theory" className="bg-white border-y border-slate-200 py-16 mt-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-3">Теория</h2>
            <p className="text-slate-600">
              Материал подаётся кратко, структурировано и с примерами.
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                x²
              </div>

              <div>
                <h3 className="text-2xl font-bold">Квадратные уравнения</h3>
                <p className="text-slate-500">Алгебра • Базовый уровень</p>
              </div>
            </div>

            <div className="space-y-5 text-slate-700 leading-relaxed">
              <p>Квадратное уравнение имеет вид:</p>

              <div className="bg-white rounded-2xl p-5 text-center text-2xl font-bold border border-slate-200">
                ax² + bx + c = 0
              </div>

              <p>Для решения используется дискриминант:</p>

              <div className="bg-white rounded-2xl p-5 text-center text-2xl font-bold border border-slate-200">
                D = b² - 4ac
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="practice" className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-3">Интерактивная практика</h2>
          <p className="text-slate-600">
            Решайте задания и получайте автоматическую проверку.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              question: 'Решите уравнение: x² - 5x + 6 = 0',
              answers: [
                { text: 'x = 2 и x = 3', correct: true },
                { text: 'x = -2 и x = -3', correct: false },
                { text: 'x = 1 и x = 6', correct: false }
              ]
            },
            {
              question: 'Чему равен sin(90°)?',
              answers: [
                { text: '0', correct: false },
                { text: '1', correct: true },
                { text: '-1', correct: false }
              ]
            },
            {
              question: 'Сколько градусов в развернутом угле?',
              answers: [
                { text: '90°', correct: false },
                { text: '180°', correct: true },
                { text: '360°', correct: false }
              ]
            }
          ].map((test, index) => (
            <div
              key={test.question}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8"
            >
              <h3 className="text-xl font-semibold mb-6">
                {index + 1}. {test.question}
              </h3>

              <div className="space-y-3">
                {test.answers.map((answer) => (
                  <button
                    key={answer.text}
                    onClick={(event) => checkAnswer(event, answer.correct)}
                    className="answer-btn w-full text-left px-5 py-4 rounded-2xl border border-slate-200 hover:border-blue-300 transition"
                  >
                    {answer.text}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white mt-10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg">MathStep</h3>
            <p className="text-sm text-slate-500">
              Онлайн-платформа для изучения математики
            </p>
          </div>

          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#">О платформе</a>
            <a href="#">Курсы</a>
            <a href="#">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
