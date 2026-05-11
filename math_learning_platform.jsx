export default function MathLearningPlatform() {
  const checkAnswer = (
    event: React.MouseEvent<HTMLButtonElement>,
    isCorrect: boolean
  ) => {
    const button = event.currentTarget;
    const parent = button.parentElement;

    if (!parent) return;

    const buttons = parent.querySelectorAll('.answer-btn');

    buttons.forEach((btn) => {
      (btn as HTMLButtonElement).disabled = true;
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
              Самообучение математике
            </p>
          </div>

          <nav className="flex gap-6 text-sm font-medium">
            <a href="#modules" className="hover:text-blue-600">
              Модули
            </a>
            <a href="#theory" className="hover:text-blue-600">
              Теория
            </a>
            <a href="#practice" className="hover:text-blue-600">
              Практика
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              Подготовка по программе РФ
            </div>

            <h2 className="text-5xl font-bold leading-tight mb-6">
              Изучайте математику
              <span className="text-blue-600"> интерактивно</span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Теория, практика и автоматическая проверка ответов.
            </p>

            <button className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">
              Начать обучение
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
            <h3 className="font-bold text-xl mb-6">Ваш прогресс</h3>

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
          <h2 className="text-3xl font-bold mb-8">Учебные модули</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Алгебра',
                lessons: ['Квадратные уравнения', 'Логарифмы']
              },
              {
                title: 'Геометрия',
                lessons: ['Планиметрия', 'Стереометрия']
              },
              {
                title: 'Тригонометрия',
                lessons: ['Тригонометрические функции', 'Тождества']
              }
            ].map((module) => (
              <div
                key={module.title}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6"
              >
                <h3 className="text-xl font-bold mb-4">{module.title}</h3>

                <div className="space-y-3">
                  {module.lessons.map((lesson) => (
                    <div
                      key={lesson}
                      className="bg-slate-50 rounded-2xl px-4 py-3"
                    >
                      {lesson}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="theory"
          className="bg-white border-y border-slate-200 py-16 mt-12"
        >
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Теория</h2>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">
                Квадратные уравнения
              </h3>

              <p className="mb-4">Квадратное уравнение имеет вид:</p>

              <div className="bg-white rounded-2xl p-5 text-center text-2xl font-bold border border-slate-200 mb-4">
                ax² + bx + c = 0
              </div>

              <p className="mb-4">Дискриминант:</p>

              <div className="bg-white rounded-2xl p-5 text-center text-2xl font-bold border border-slate-200">
                D = b² - 4ac
              </div>
            </div>
          </div>
        </section>

        <section id="practice" className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">
            Интерактивная практика
          </h2>

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
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 mb-6"
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
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white mt-10">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-slate-500 text-sm">
          © 2026 MathStep
        </div>
      </footer>
    </div>
  );
}
