import { createFileRoute } from "@tanstack/react-router";
import { 
  Package, 
  Settings, 
  FileText, 
  Layout, 
  MessageSquare,
  Truck,
  Globe
} from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

const adminCards = [
  {
    id: "products",
    category: "КАТАЛОГ ТОВАРОВ",
    title: "Продукция",
    description: "Добавляйте, редактируйте и удаляйте товары. Назначайте категории и фото.",
    icon: Package,
    count: 5,
    countLabel: "позиций",
    action: "Управление →",
    color: "from-green-500/20 to-transparent",
    borderColor: "border-green-500/50",
    iconColor: "text-green-500"
  },
  {
    id: "services",
    category: "СПИСОК УСЛУГ",
    title: "Услуги",
    description: "Управляйте описанием услуг, изображениями, видео и переводами.",
    icon: Truck,
    count: 4,
    countLabel: "услуг",
    action: "Управление →",
    color: "from-blue-500/20 to-transparent",
    borderColor: "border-blue-500/50",
    iconColor: "text-blue-500"
  },
  {
    id: "builder",
    category: "КОНСТРУКТОР СТРАНИЦ",
    title: "Visual Builder",
    description: "Перетаскивайте блоки, добавляйте медиа и настраивайте каждую страницу сайта.",
    icon: Layout,
    count: 7,
    countLabel: "страниц",
    action: "Открыть Builder →",
    color: "from-purple-500/20 to-transparent",
    borderColor: "border-purple-500/50",
    iconColor: "text-purple-500"
  },
  {
    id: "content",
    category: "ТЕКСТЫ И ПЕРЕВОДЫ",
    title: "Контент",
    description: "Редактируйте все тексты сайта на русском, казахском и английском языках.",
    icon: Globe,
    count: 3,
    countLabel: "языка",
    action: "Редактировать →",
    color: "from-yellow-500/20 to-transparent",
    borderColor: "border-yellow-500/50",
    iconColor: "text-yellow-500"
  },
  {
    id: "pages",
    category: "СТРУКТУРА САЙТА",
    title: "Страницы",
    description: "Управляйте порядком блоков, скрывайте секции и настраивайте мета-данные.",
    icon: FileText,
    count: 7,
    countLabel: "страниц",
    action: "Управление →",
    color: "from-pink-500/20 to-transparent",
    borderColor: "border-pink-500/50",
    iconColor: "text-pink-500"
  },
  {
    id: "settings",
    category: "ГЛОБАЛЬНЫЕ ПАРАМЕТРЫ",
    title: "Настройки",
    description: "Название компании, цвета, логотип, контактная информация и SEO.",
    icon: Settings,
    action: "Настроить →",
    color: "from-neutral-500/20 to-transparent",
    borderColor: "border-neutral-500/50",
    iconColor: "text-neutral-500"
  },
  {
    id: "bot",
    category: "НАСТРОЙКИ ЧАТ-БОТА",
    title: "DEMETRA_ASSISTANT",
    description: "Приветствия, FAQ, авто-ответы, телефон поддержки и имя ассистента.",
    icon: MessageSquare,
    action: "Настроить ассистента →",
    color: "from-cyan-500/20 to-transparent",
    borderColor: "border-cyan-500/50",
    iconColor: "text-cyan-500"
  }
];

const miniStats = [
  { label: "Товаров в каталоге", value: 5, color: "text-green-500" },
  { label: "Категорий товаров", value: 7, color: "text-blue-500" },
  { label: "Услуг на сайте", value: 4, color: "text-purple-500" },
]

function AdminPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 font-sans selection:bg-primary/30">
      <div className="max-w-[1400px] mx-auto space-y-8">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-2">
            ВЫБЕРИТЕ РАЗДЕЛ ДЛЯ УПРАВЛЕНИЯ
          </h1>
          <p className="text-sm text-neutral-400">
            Нажмите на плитку чтобы открыть нужный раздел администрирования.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminCards.map((card) => {
            const Icon = card.icon;
            return (
              <div 
                key={card.id} 
                className={`relative overflow-hidden rounded-xl bg-[#111111] border ${card.borderColor} hover:scale-[1.02] transition-transform duration-300 cursor-pointer group flex flex-col`}
              >
                {/* Gradient background effect */}
                <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${card.color} opacity-20 pointer-events-none`} />
                
                <div className="p-6 flex flex-col h-full relative z-10">
                  {/* Top Row: Icon & Count */}
                  <div className="flex justify-between items-start mb-10">
                    <div className={`p-2 rounded-lg bg-black/40 border border-white/5 ${card.iconColor}`}>
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    {card.count !== undefined && (
                      <div className="text-right">
                        <div className="text-2xl font-bold leading-none">{card.count}</div>
                        <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono mt-1">{card.countLabel}</div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="mt-auto">
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-2">
                      {card.category}
                    </div>
                    <h2 className="text-xl font-bold mb-3">{card.title}</h2>
                    <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className={`text-sm font-medium ${card.iconColor} group-hover:underline mt-auto`}>
                    {card.action}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mini Stats Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {miniStats.map((stat, idx) => (
            <div key={idx} className="bg-[#111111] rounded-xl border border-white/5 p-4 flex justify-between items-center">
              <span className="text-sm text-neutral-400">{stat.label}</span>
              <span className={`text-xl font-bold ${stat.color}`}>{stat.value}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
