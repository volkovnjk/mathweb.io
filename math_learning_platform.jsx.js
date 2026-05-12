<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MathStep</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 text-slate-900 font-sans min-h-screen">

  <header class="bg-white border-b border-slate-200 sticky top-0 z-10">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold">MathStep</h1>
        <p class="text-sm text-slate-500">Самообучение математике</p>
      </div>

      <nav class="flex gap-6 text-sm font-medium">
        <a href="#modules" class="hover:text-blue-600 transition">Модули</a>
        <a href="#theory" class="hover:text-blue-600 transition">Теория</a>
        <a href="#practice" class="hover:text-blue-600 transition">Практика</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
          Подготовка по программе РФ
        </div>

        <h2 class="text-5xl font-bold leading-tight mb-6">
          Изучайте математику
          <span class="text-blue-600"> интерактивно</span>
        </h2>

        <p class="text-lg text-slate-600 leading-relaxed mb-8">
          Теория, практика и автоматическая проверка ответов.
        </p>

        <button class="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">
          Начать обучение
        </button>
      </div>

      <div class="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
        <h3 class="font-bold text-xl mb-6">Ваш прогресс</h3>

        <div class="space-y-4">
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span>Алгебра</span>
              <span>70%</span>
            </div>
            <div class="h-3 rounded-full bg-slate-100 overflow-hidden">
              <div class="h-full bg-blue-500 rounded-full" style="width:70%"></div>
            </div>
          </div>

          <div>
            <div class="flex justify-between text-sm mb-1">
              <span>Геометрия</span>
              <span>80%</span>
            </div>
            <div class="h-3 rounded-full bg-slate-100 overflow-hidden">
              <div class="h-full bg-blue-500 rounded-full" style="width:80%"></div>
            </div>
          </div>

          <div>
            <div class="flex justify-between text-sm mb-1">
              <span>Тригонометрия</span>
              <span>90%</span>
            </div>
            <div class="h-3 rounded-full bg-slate-100 overflow-hidden">
              <div class="h-full bg-blue-500 rounded-full" style="width:90%"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="modules" class="max-w-7xl mx-auto px-6 py-12">
      <h2 class="text-3xl font-bold mb-8">Учебные модули</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
          <h3 class="text-xl font-bold mb-4">Алгебра</h3>

          <div class="space-y-3">
            <div class="bg-slate-50 rounded-2xl px-4 py-3">Квадратные уравнения</div>
            <div class="bg-slate-50 rounded-2xl px-4 py-3">Логарифмы</div>
          </div>
        </div>

        <div class="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
          <h3 class="text-xl font-bold mb-4">Геометрия</h3>

          <div class="space-y-3">
            <div class="bg-slate-50 rounded-2xl px-4 py-3">Планиметрия</div>
            <div class="bg-slate-50 rounded-2xl px-4 py-3">Стереометрия</div>
          </div>
        </div>

        <div class="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
          <h3 class="text-xl font-bold mb-4">Тригонометрия</h3>

          <div class="space-y-3">
            <div class="bg-slate-50 rounded-2xl px-4 py-3">Тригонометрические функции</div>
            <div class="bg-slate-50 rounded-2xl px-4 py-3">Тождества</div>
          </div>
        </div>
      </div>
    </section>

    <section id="theory" class="bg-white border-y border-slate-200 py-16 mt-12">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">Теория</h2>

        <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h3 class="text-2xl font-bold mb-6">Квадратные уравнения</h3>

          <p class="mb-4">Квадратное уравнение имеет вид:</p>

          <div class="bg-white rounded-2xl p-5 text-center text-2xl font-bold border border-slate-200 mb-4">
            ax² + bx + c = 0
          </div>

          <p class="mb-4">Дискриминант:</p>

          <div class="bg-white rounded-2xl p-5 text-center text-2xl font-bold border border-slate-200">
            D = b² - 4ac
          </div>
        </div>
      </div>
    </section>

    <section id="practice" class="max-w-5xl mx-auto px-6 py-16">
      <h2 class="text-3xl font-bold mb-8">Интерактивная практика</h2>

      <div class="space-y-6">

        <div class="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
          <h3 class="text-xl font-semibold mb-6">
            1. Решите уравнение: x² - 5x + 6 = 0
          </h3>

          <div class="space-y-3">
            <button onclick="checkAnswer(this, true)" class="answer-btn w-full text-left px-5 py-4 rounded-2xl border border-slate-200 hover:border-blue-300 transition">
              x = 2 и x = 3
            </button>

            <button onclick="checkAnswer(this, false)" class="answer-btn w-full text-left px-5 py-4 rounded-2xl border border-slate-200 hover:border-blue-300 transition">
              x = -2 и x = -3
            </button>

            <button onclick="checkAnswer(this, false)" class="answer-btn w-full text-left px-5 py-4 rounded-2xl border border-slate-200 hover:border-blue-300 transition">
              x = 1 и x = 6
            </button>
          </div>
        </div>

        <div class="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
          <h3 class="text-xl font-semibold mb-6">
            2. Чему равен sin(90°)?
          </h3>

          <div class="space-y-3">
            <button onclick="checkAnswer(this, false)" class="answer-btn w-full text-left px-5 py-4 rounded-2xl border border-slate-200 hover:border-blue-300 transition">
              0
            </button>

            <button onclick="checkAnswer(this, true)" class="answer-btn w-full text-left px-5 py-4 rounded-2xl border border-slate-200 hover:border-blue-300 transition">
              1
            </button>

            <button onclick="checkAnswer(this, false)" class="answer-btn w-full text-left px-5 py-4 rounded-2xl border border-slate-200 hover:border-blue-300 transition">
              -1
            </button>
          </div>
        </div>

      </div>
    </section>
  </main>

  <footer class="border-t border-slate-200 bg-white mt-10">
    <div class="max-w-7xl mx-auto px-6 py-8 text-center text-slate-500 text-sm">
      © 2026 MathStep
    </div>
  </footer>

  <script>
    function checkAnswer(button, isCorrect) {
      const parent = button.parentElement;
      const buttons = parent.querySelectorAll('.answer-btn');

      buttons.forEach(btn => {
        btn.disabled = true;
      });

      if (isCorrect) {
        button.classList.add('bg-green-100', 'border-green-500');
      } else {
        button.classList.add('bg-red-100', 'border-red-500');
      }
    }
  </script>

</body>
</html>
