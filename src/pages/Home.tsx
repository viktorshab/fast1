import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Zap, Clock, DollarSign, CheckCircle2, ArrowRight, Play, Sparkles, Rocket, Palette, Star, TrendingUp, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// ═══════════════════════════════════════════════════════════════════════
// 🎬  МЕДІА-ФАЙЛИ ЛЕНДИНГА  —  ЄДИНЕ МІСЦЕ, ДЕ ТРЕБА ЩОСЬ МІНЯТИ
// ═══════════════════════════════════════════════════════════════════════
//
// ⚠️  ЧОМУ ТВОЯ КАРТИНКА НЕ ЗАВАНТАЖИЛАСЬ, КОЛИ ТИ ПРОСТО КИНУВ ЇЇ У ПАПКУ?
//     Тому що код не знає про новий файл, поки ти не впишеш його назву
//     сюди, в MEDIA. Файл у папці ≠ файл на сайті. Треба 2 кроки:
//       (1) покласти файл у public/  або  public/videos/
//       (2) вписати його ім'я в цей блок (нижче)
//
// ───────────────────────────────────────────────────────────────────────
// ЯК ДОДАТИ СВОЮ КАРТИНКУ:
//   1. Стисни картинку до WebP або JPG, розмір до 500 КБ
//      (онлайн: https://squoosh.app  або  https://tinypng.com)
//   2. Поклади файл у папку  public/   напр.,  public/my-hero.webp
//   3. Знайди потрібний рядок нижче (heroBackground / modalBackground)
//   4. Заміни значення справа від "=" на шлях свого файлу:
//        heroBackground: "/my-hero.webp",
//      ВАЖЛИВО: шлях починається зі "/"  (без слова "public")
//   5. Збережи файл — сайт оновиться сам.
//
// ЯК ДОДАТИ СВОЄ ВІДЕО:
//   1. Пересохрани в MP4 (кодек H.264), розмір до 10 МБ
//      (онлайн: https://www.freeconvert.com/video-compressor)
//   2. Поклади файл у  public/videos/   напр.,  public/videos/marshall.mp4
//   3. Заміни потрібний рядок (caseNVideo) на:
//        case4Video: "videos/marshall.mp4",
//      (для відео шлях БЕЗ слеша на початку — просто "videos/...")
//   4. Збережи файл.
// ═══════════════════════════════════════════════════════════════════════
const MEDIA = {
  // ── Фон головного екрана (Hero) ──────────────────────────────────────
  // Зараз: картинка з Unsplash (тягнеться з інтернету).
  // Свій варіант: поклади файл у public/ і заміни цей рядок, напр.:
  //   heroBackground: "/my-hero.webp",
  heroBackground:
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",

  // ── Фон модального вікна "Залиш заявку" ──────────────────────────────
  // Свій варіант:  modalBackground: "/my-modal.webp",
  modalBackground:
    "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop",

  // ── Відео 4-х кейсів (усі файли повинні лежати у public/videos/) ────
  case1Video: "videos/case1.mp4", // 🟢 ЄСТЬ   —  "Автосалон Chery"
  case2Video: "videos/case2.mp4", // 🟢 ЄСТЬ   —  "Косметика 'To Be'"
  case3Video: "videos/case3.mp4", // 🟢 ЄСТЬ   —  "Автосалон Porsche"
  case4Video: "videos/case4.mp4", // ❌ НЕМА! Поклади свій файл у public/videos/case4.mp4
  //                                   (або заміни рядок вище на ім'я свого файла)
};

// FastMotion Studio - Portfolio 2026
export default function Home() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<{url: string, title: string} | null>(null);
  const telegramLink = "https://t.me/your_telegram_handle"; // Placeholder

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    business: "",
    agreed: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.agreed && formData.name && formData.phone) {
      // Simulate form submission
      console.log("Form submitted:", formData);
      setIsModalOpen(false);
      navigate("/thank-you");
    }
  };

  return (
    <div className="min-h-screen font-sans bg-slate-950 text-slate-50 selection:bg-neon-green selection:text-slate-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={MEDIA.heroBackground}
          alt="Background"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      {/* 1. Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <Zap className="text-neon-green fill-neon-green relative z-10" size={24} />
              <div className="absolute inset-0 bg-neon-green blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">FastMotion</span>
          </Link>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-neon-green to-electric-blue text-slate-950 px-6 py-2.5 rounded-full font-bold hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all transform hover:-translate-y-0.5"
          >
            <Send size={18} />
            Написати нам
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="md:hidden p-3 bg-slate-800 rounded-full"
          >
            <Send size={20} className="text-electric-blue" />
          </button>
        </div>
      </header>

      <main className="pt-20">
        {/* 2. Hero Section - Creative Mesh Gradient */}
        <section className="relative py-28 lg:py-48 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-neon-green/10 rounded-full blur-[100px]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 text-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                <Sparkles size={16} className="text-neon-green" />
                <span className="text-sm font-bold tracking-wider uppercase text-slate-300">Креатив, що приносить гроші</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter leading-[0.9] mb-10">
                ВИБУХОВІ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-electric-blue to-purple-500">
                  МУЛЬТИКИ ДЛЯ БІЗНЕСУ
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-3xl text-slate-400 max-w-4xl mx-auto mb-14 leading-tight font-light">
                Створюємо анімовані креативи за 48 годин, які <span className="text-white font-medium">змушують клікати</span>. 
                Від $100. Без зайвих слів.
              </p>
              
              <div className="flex flex-col items-center gap-6">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="cta-button bg-white text-slate-950 hover:bg-neon-green transition-colors px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-black uppercase tracking-widest w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  Запустити проєкт
                  <Rocket size={24} />
                </button>
                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-slate-500 font-bold uppercase text-[10px] sm:text-xs tracking-[0.2em]">
                  <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-neon-green animate-ping" /> Відповідь за 15 хв</span>
                  <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />
                  <span>100% Результат</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. Pain Points - Light Background Section, Dark Cards */}
        <section className="py-20 sm:py-32 relative overflow-hidden bg-slate-50 text-slate-900">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
              {[
                {
                  icon: <Zap className="text-yellow-400" />,
                  title: "Швидше за світло",
                  desc: "Поки конкуренти тижнями малюють ескізи, ми вже тестуємо ваш перший ролик. Швидкість — наша головна релігія.",
                  color: "border-white/10 bg-slate-950 text-slate-50 shadow-2xl hover:border-yellow-500/50"
                },
                {
                  icon: <Palette className="text-purple-400" />,
                  title: "Креатив без меж",
                  desc: "Жодних шаблонів. Кожен мультик працює на ваш бренд. Ми створюємо візуальний шум, який неможливо ігнорувати.",
                  color: "border-white/10 bg-slate-950 text-slate-50 shadow-2xl hover:border-purple-500/50"
                },
                {
                  icon: <TrendingUp className="text-neon-green" />,
                  title: "ROI-орієнтованість",
                  desc: "Ми не просто художники, ми маркетологи. Наша анімація створена для того, щоб ваш CTR злітав у космос.",
                  color: "border-white/10 bg-slate-950 text-slate-50 shadow-2xl hover:border-emerald-500/50"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02, y: -10 }}
                  className={`p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border transition-all duration-500 ${item.color}`}
                >
                  <div className="w-12 h-12 sm:w-16 h-16 bg-white/5 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 sm:mb-8 shadow-inner">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 tracking-tight">{item.title}</h3>
                  <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Portfolio / Cases - Creative Grid with Specific Cases */}
        <section className="py-20 sm:py-32 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 gap-6 sm:gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black mb-4 sm:mb-6 uppercase tracking-tighter">Наші кейси</h2>
                <p className="text-lg sm:text-xl text-slate-400 font-light">Реальні проєкти, які вже приносять прибуток нашим клієнтам.</p>
              </div>
              <div className="text-neon-green font-mono text-xs sm:text-sm tracking-[0.3em] uppercase">Portfolio 2026</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
              {[
                {
                  title: "Автосалон Chery",
                  task: "Різдвяний мультик з Сантою для соцмереж. Створення святкової атмосфери навколо Tiggo 7 Pro.",
                  time: "48 годин",
                  result: "CTR +60%, віральне охоплення",
                  ratio: "aspect-[9/16]",
                  accent: "from-red-600/20",
                  video: MEDIA.case1Video
                },
                {
                  title: "Косметика 'To Be'",
                  task: "Преміальна презентація лінійки догляду в екстремальних умовах (гори, фунікулер).",
                  time: "3 дні",
                  result: "Зростання продажів у 3 рази",
                  ratio: "aspect-[9/16]",
                  accent: "from-blue-600/20",
                  video: MEDIA.case2Video
                },
                {
                  title: "Автосалон Porsche",
                  task: "Стильний мультик з ефектом рідкого металу та динамічною поїздкою узбережжям.",
                  time: "2 дні",
                  result: "ROI 320% на рекламній кампанії",
                  ratio: "aspect-[9/16]",
                  accent: "from-yellow-600/20",
                  video: MEDIA.case3Video
                },
                {
                  title: "Marshall",
                  task: "Динамічна презентація навушників Marshall з ефектами трансформації та преміальним звуком.",
                  time: "3 дні",
                  result: "Охоплення 500к+ за тиждень",
                  ratio: "aspect-[9/16]",
                  accent: "from-purple-600/20",
                  video: MEDIA.case4Video
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => setActiveVideo({ url: item.video, title: item.title })}
                >
                  <div className={`w-full ${item.ratio} bg-slate-900 rounded-[2rem] mb-8 relative overflow-hidden border border-white/5 group-hover:border-white/20 transition-all duration-700 shadow-2xl`}>
                    <video 
                      src={item.video}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                      muted
                      loop
                      playsInline
                      onMouseOver={(e) => e.currentTarget.play()}
                      onMouseOut={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                      <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                        <Play className="text-white fill-white ml-1" size={32} />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-neon-green">Дивитися кейс</span>
                    </div>
                  </div>
                  <div className="space-y-4 px-2">
                    <h3 className="text-3xl font-bold tracking-tight group-hover:text-neon-green transition-colors">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-light line-clamp-2">{item.task}</p>
                    <div className="flex justify-between items-center pt-4 border-t border-white/5">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Термін</span>
                        <span className="text-sm font-bold">{item.time}</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Результат</span>
                        <span className="text-sm font-bold text-neon-green">{item.result}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Comparison Table - Light Background Section, Dark Side Cards */}
        <section className="py-20 sm:py-32 bg-white text-slate-900">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black mb-12 sm:mb-20 text-center uppercase tracking-tighter">Чому ми — ваш <span className="text-electric-blue">найкращий вибір?</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="hidden md:flex p-10 rounded-[2rem] bg-slate-950 text-slate-50 border border-white/5 flex-col justify-center shadow-2xl">
                <h4 className="text-2xl font-bold mb-4 text-slate-400">Метрики</h4>
                <div className="space-y-12 mt-8">
                  <div className="text-lg font-medium py-4 border-b border-white/5">Терміни виконання</div>
                  <div className="text-lg font-medium py-4 border-b border-white/5">Вартість креативу</div>
                  <div className="text-lg font-medium py-4">Основний фокус</div>
                </div>
              </div>
              <div className="p-8 sm:p-10 rounded-[2rem] bg-gradient-to-b from-neon-green to-emerald-500 text-slate-950 shadow-xl relative z-10 scale-105">
                <h4 className="text-xl sm:text-2xl font-black mb-4 uppercase">FastMotion</h4>
                <div className="space-y-8 sm:space-y-12 mt-8">
                  <div className="flex flex-col sm:block py-4 border-b border-slate-950/10">
                    <span className="md:hidden text-[10px] uppercase font-bold opacity-60 mb-1">Терміни</span>
                    <div className="text-xl sm:text-2xl font-black">1-3 ДНІ</div>
                  </div>
                  <div className="flex flex-col sm:block py-4 border-b border-slate-950/10">
                    <span className="md:hidden text-[10px] uppercase font-bold opacity-60 mb-1">Вартість</span>
                    <div className="text-xl sm:text-2xl font-black">ВІД $100</div>
                  </div>
                  <div className="flex flex-col sm:block py-4">
                    <span className="md:hidden text-[10px] uppercase font-bold opacity-60 mb-1">Фокус</span>
                    <div className="text-xl sm:text-2xl font-black uppercase">CTR ТА ЛІДИ</div>
                  </div>
                </div>
              </div>
              <div className="p-8 sm:p-10 rounded-[2rem] bg-slate-950 text-slate-50 border border-white/5 flex flex-col justify-center opacity-80 shadow-2xl">
                <h4 className="text-xl sm:text-2xl font-bold mb-4 text-slate-500">Інші студії</h4>
                <div className="space-y-8 sm:space-y-12 mt-8">
                  <div className="flex flex-col sm:block py-4 border-b border-white/5">
                    <span className="md:hidden text-[10px] uppercase font-bold opacity-60 mb-1">Терміни</span>
                    <div className="text-lg font-medium">7-14 днів</div>
                  </div>
                  <div className="flex flex-col sm:block py-4 border-b border-white/5">
                    <span className="md:hidden text-[10px] uppercase font-bold opacity-60 mb-1">Вартість</span>
                    <div className="text-lg font-medium">від $500</div>
                  </div>
                  <div className="flex flex-col sm:block py-4">
                    <span className="md:hidden text-[10px] uppercase font-bold opacity-60 mb-1">Фокус</span>
                    <div className="text-lg font-medium">Просто картинка</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Pricing - Neon Card */}
        <section className="py-20 sm:py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-electric-blue/5 blur-[150px] -z-10" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-green/20 rounded-full blur-3xl animate-bounce" />
              <div className="glass-card p-8 sm:p-12 md:p-20 rounded-[2rem] sm:rounded-[3rem] text-center border-white/10 relative z-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neon-green via-electric-blue to-purple-500" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mb-6 uppercase tracking-tight">Performance Пакет</h2>
                <p className="text-slate-400 mb-8 sm:mb-12 text-base sm:text-lg font-light">Все, що потрібно для успішного запуску трафіку в одному флаконі.</p>
                
                <div className="text-5xl sm:text-7xl md:text-8xl font-display font-black text-white mb-8 sm:mb-12 tracking-tighter">
                  $100<span className="text-2xl sm:text-3xl text-slate-500 font-light">-$200</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left mb-12 sm:mb-16">
                  {[
                    "Сценарій під ваш оффер",
                    "Мультик преміум рівня",
                    "Професійний саунд-дизайн",
                    "Адаптація під усі формати",
                    "2 кола правок безкоштовно",
                    "Готовність за 48 годин"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5">
                      <CheckCircle2 size={18} className="text-neon-green shrink-0" />
                      <span className="text-slate-300 text-sm sm:text-base font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="cta-button bg-white text-slate-950 hover:bg-neon-green transition-all w-full py-5 sm:py-6 text-xl sm:text-2xl font-black uppercase tracking-widest"
                >
                  Замовити зараз
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. How It Works - Light Background Section, Dark Steps */}
        <section className="py-20 sm:py-32 bg-slate-50 text-slate-900 relative">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black mb-16 sm:mb-24 text-center uppercase tracking-tighter">Шлях до <span className="text-neon-green">результату</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
              {[
                {
                  step: "01",
                  title: "Контакт",
                  desc: "Ви надсилаєте посилання на продукт. Ми миттєво аналізуємо нішу та пропонуємо ідею.",
                  icon: <Send className="text-neon-green" />
                },
                {
                  step: "02",
                  title: "Магія",
                  desc: "Протягом 24 годин створюємо сценарій. Після вашого 'ОК' запускаємо мультик.",
                  icon: <Palette className="text-electric-blue" />
                },
                {
                  step: "03",
                  title: "Профіт",
                  desc: "Ви отримуєте готовий креатив, завантажуєте в кабінет і спостерігаєте за ростом лідів.",
                  icon: <TrendingUp className="text-purple-400" />
                }
              ].map((item, i) => (
                <div key={i} className="relative group">
                  <div className="text-7xl sm:text-[12rem] font-display font-black text-slate-900/[0.08] absolute -top-12 sm:-top-28 -left-4 sm:-left-12 select-none group-hover:text-slate-900/[0.15] transition-all duration-500 tracking-tighter">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 sm:w-20 h-20 bg-slate-950 rounded-2xl sm:rounded-[2rem] flex items-center justify-center mb-6 sm:mb-8 border border-white/10 shadow-2xl group-hover:border-white/30 transition-all">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 tracking-tight">{item.title}</h3>
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Footer - High Energy Finish */}
        <footer className="py-20 sm:py-32 bg-slate-950 border-t border-white/5 relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-neon-green/5 blur-[120px] -z-10" />
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <h2 className="text-4xl sm:text-6xl md:text-9xl font-display font-black mb-8 sm:mb-12 uppercase tracking-tighter leading-[0.8]">
                ЧАС <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue">ДИВУВАТИ</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-3xl text-slate-400 mb-12 sm:mb-16 max-w-3xl mx-auto font-light">
                Ваш наступний креатив може стати <span className="text-white font-medium">найприбутковішим</span>. Не відкладайте на завтра те, що принесе ліди вже сьогодні.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="cta-button bg-neon-green text-slate-950 neon-shadow inline-flex px-10 sm:px-16 py-5 sm:py-7 text-xl sm:text-2xl font-black uppercase tracking-[0.2em] mb-16 sm:mb-24 w-full sm:w-auto items-center justify-center"
              >
                Запустити проєкт
              </button>
            </motion.div>
            
            <div className="flex flex-col md:flex-row items-center justify-between pt-16 border-t border-white/5 text-slate-600 text-xs font-bold uppercase tracking-widest">
              <div className="flex items-center gap-3 mb-6 md:mb-0">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                  <Zap size={14} className="text-neon-green" />
                </div>
                <span>© 2026 FastMotion Studio. Креатив без кордонів.</span>
              </div>
              <div className="flex gap-10">
                <Link to="/html" className="hover:text-white transition-colors">HTML5 Анімація</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Order Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 z-20 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
              >
                <X size={24} className="text-slate-900" />
              </button>

              <div className="w-full aspect-[16/9] relative">
                <img
                  src={MEDIA.modalBackground}
                  alt="Creative Collaboration and Success"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-8 sm:p-12 text-center text-slate-950">
                <h2 className="text-3xl sm:text-4xl font-display font-black mb-4 tracking-tight">Залиш заявку</h2>
                <p className="text-slate-500 text-lg mb-10">Отримай прорахунок протягом 24 годин</p>
                
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Ім'я"
                      required
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all text-lg"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone"
                      required
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all text-lg"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 mb-2 font-medium">Галузь бізнесу та адреса сайту</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all text-lg"
                      value={formData.business}
                      onChange={(e) => setFormData({...formData, business: e.target.value})}
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-black text-white py-5 rounded-xl text-xl font-bold hover:bg-slate-800 transition-colors mt-6"
                  >
                    Відправити заявку
                  </button>
                  
                  <div className="flex gap-4 mt-6 items-start">
                    <input 
                      type="checkbox" 
                      id="modal-agree"
                      checked={formData.agreed}
                      onChange={(e) => setFormData({...formData, agreed: e.target.checked})}
                      className="mt-1.5 w-5 h-5 accent-neon-green"
                    />
                    <label htmlFor="modal-agree" className="text-sm text-slate-500 leading-relaxed">
                      Я даю згоду на обробку моїх персональних даних та на телефонний і електронний контакт відповідно до політики конфіденційності
                    </label>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Video Player Modal */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-6 right-6 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-md border border-white/10"
              >
                <X size={24} className="text-white" />
              </button>

              <video 
                src={activeVideo.url}
                className="w-full h-full"
                autoPlay
                controls
                playsInline
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                <h3 className="text-2xl font-bold text-white tracking-tight">{activeVideo.title}</h3>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
