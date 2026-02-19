import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-black to-blue-950 flex flex-col">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(30,64,175,0.3),transparent_70%)]"></div>

      <header className="relative z-10 px-6 py-4 mx-auto w-full max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold flex items-center gap-2">
              <Icon name="Shield" size={28} />
              МодЖКХ
            </Link>
            <nav className="hidden ml-12 space-x-8 lg:flex">
              {[
                { label: "Услуги", href: "#services" },
                { label: "Преимущества", href: "#advantages" },
                { label: "Цены", href: "#pricing" },
                { label: "Статистика", href: "#stats" },
                { label: "Контакты", href: "#contacts" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+73522123456" className="hidden sm:flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors">
              <Icon name="Phone" size={16} />
              +7 (3522) 123-45-67
            </a>
            <a href="#contacts" className="px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-600 transition-colors">
              Консультация
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex flex-col flex-1 items-center justify-center px-6 py-12 mx-auto text-center max-w-7xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm text-blue-300 bg-blue-950/60 border border-blue-800/40 rounded-full">
          <Icon name="Scale" size={14} />
          Защита прав потребителей в сфере ЖКХ с 2024 года
        </div>

        <h1 className="max-w-4xl mx-auto text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
          Модернизация управления предприятий{" "}
          <span className="text-blue-400">ЖКХ</span>
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-300 leading-relaxed">
          Юридическая защита граждан, ТСЖ и управляющих компаний
          <br className="hidden sm:block" />
          в Курганской области. Решаем споры по ЖКУ — от досудебных
          <br className="hidden sm:block" />
          претензий до взыскания компенсаций.
        </p>

        <div className="flex flex-col mt-10 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <a
            href="#contacts"
            className="flex items-center justify-center px-8 py-3 text-lg font-medium text-gray-900 bg-white rounded-md hover:bg-gray-100 transition-colors"
          >
            Бесплатная консультация
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </a>
          <a
            href="#ai-assistant"
            className="flex items-center justify-center gap-2 px-8 py-3 text-lg font-medium text-white bg-blue-700/80 rounded-md hover:bg-blue-600 transition-colors"
          >
            <Icon name="Bot" size={20} />
            ИИ-ассистент 24/7
          </a>
        </div>

        <div className="w-full mt-20">
          <p className="mb-8 text-gray-400">
            Результаты работы в <span className="text-white">Курганской области</span>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl md:text-4xl font-bold text-white">75%</span>
              <span className="text-sm text-gray-400">успешных дел</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl md:text-4xl font-bold text-white">100+</span>
              <span className="text-sm text-gray-400">кейсов в 2023 г.</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl md:text-4xl font-bold text-white">65%</span>
              <span className="text-sm text-gray-400">решено досудебно</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl md:text-4xl font-bold text-white">24/7</span>
              <span className="text-sm text-gray-400">ИИ-консультант</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
