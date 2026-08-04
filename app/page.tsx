'use client'

import { useState } from 'react'
import {
  Activity, ArrowDownLeft, ArrowUpLeft, Bell, BookOpen, CalendarDays,
  Check, ChevronDown, CircleDot, ClipboardList, Command, Flag, Gauge,
  LayoutDashboard, Lightbulb, Menu, Plus, Search, Settings2, Sparkles,
  Target, Users, X, Zap,
} from 'lucide-react'

type Icon = React.ComponentType<{ className?: string }>

const navItems: { label: string; icon: Icon; badge?: string }[] = [
  { label: 'نمای کلی', icon: LayoutDashboard },
  { label: 'بک‌لاگ محصول', icon: ClipboardList, badge: '۱۲' },
  { label: 'اسپرینت‌ها', icon: Zap },
  { label: 'نقشه راه', icon: Target },
  { label: 'بازخورد کاربران', icon: Lightbulb, badge: '۳' },
]

const priorities = [
  { id: 'P1', title: 'خطای پرداخت در نسخه موبایل', meta: 'بحرانی · ۲ ساعت پیش', owner: 'سارا', tone: 'critical', progress: 72 },
  { id: 'P2', title: 'بازطراحی تجربه ورود کاربران', meta: 'بالا · دیروز', owner: 'مهدی', tone: 'high', progress: 44 },
  { id: 'P2', title: 'اتصال گزارش‌های هفتگی به داشبورد', meta: 'بالا · ۳ روز پیش', owner: 'نگار', tone: 'high', progress: 18 },
]

const activities = [
  { text: 'سارا یک باگ بحرانی را به اسپرینت فعلی اضافه کرد.', time: '۱۰ دقیقه پیش', icon: Flag, color: 'text-accent' },
  { text: 'مهدی سند «ریتم اسپرینت» را به‌روزرسانی کرد.', time: '۱ ساعت پیش', icon: BookOpen, color: 'text-primary' },
  { text: '۳ بازخورد جدید از کاربران دریافت شد.', time: 'امروز، ۹:۴۰', icon: Users, color: 'text-primary' },
]

function ProgressBar({ value, tone = 'primary' }: { value: number; tone?: 'primary' | 'accent' }) {
  return <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted"><div className={`h-full rounded-full ${tone === 'accent' ? 'bg-accent' : 'bg-primary'}`} style={{ width: `${value}%` }} /></div>
}

export default function Dashboard() {
  const [active, setActive] = useState('نمای کلی')
  const [showCommand, setShowCommand] = useState(false)
  const [checked, setChecked] = useState<number[]>([])
  const toggleCheck = (i: number) => setChecked((items) => items.includes(i) ? items.filter((x) => x !== i) : [...items, i])

  return (
    <main className="min-h-screen bg-background">
      <aside className="fixed inset-y-0 right-0 z-20 hidden w-64 flex-col border-l border-[#dbe4df] bg-[#102f35] text-white lg:flex">
        <div className="flex h-20 items-center gap-3 border-b border-white/10 px-6">
          <div className="flex size-9 items-center justify-center rounded-xl bg-[#d8f0e8] text-[#166b68]"><Gauge className="size-5" /></div>
          <div><div className="text-lg font-bold tracking-tight">پالس</div><div className="text-[10px] text-[#a8c4bd]">PRODUCT OS</div></div>
        </div>
        <div className="flex flex-1 flex-col gap-8 px-4 py-7">
          <div><div className="mb-3 px-3 text-[10px] font-bold tracking-widest text-[#71928b]">فضای کاری</div><button className="flex w-full items-center justify-between rounded-xl bg-white/10 px-3 py-3 text-sm"><span className="flex items-center gap-2"><div className="flex size-7 items-center justify-center rounded-lg bg-[#d8f0e8] text-xs font-bold text-[#166b68]">ن</div> نِکسا استودیو</span><ChevronDown className="size-4 text-[#a8c4bd]" /></button></div>
          <nav className="flex flex-col gap-1"><div className="mb-2 px-3 text-[10px] font-bold tracking-widest text-[#71928b]">مدیریت محصول</div>{navItems.map((item) => <button key={item.label} onClick={() => setActive(item.label)} className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm transition ${active === item.label ? 'bg-[#d8f0e8] font-bold text-[#153a3e]' : 'text-[#bed2cd] hover:bg-white/10'}`}><span className="flex items-center gap-3"><item.icon className="size-[18px]" />{item.label}</span>{item.badge && <span className={`rounded-full px-2 py-0.5 text-[10px] ${active === item.label ? 'bg-[#b6ded1] text-[#166b68]' : 'bg-white/10 text-[#bed2cd]'}`}>{item.badge}</span>}</button>)}</nav>
          <nav className="flex flex-col gap-1"><div className="mb-2 px-3 text-[10px] font-bold tracking-widest text-[#71928b]">منابع</div><button className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#bed2cd] hover:bg-white/10"><BookOpen className="size-[18px]" />کتابخانه اسناد</button><button className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#bed2cd] hover:bg-white/10"><Settings2 className="size-[18px]" />تنظیمات تیم</button></nav>
        </div>
        <div className="border-t border-white/10 p-4"><div className="flex items-center gap-3 rounded-xl bg-white/5 p-3"><div className="flex size-8 items-center justify-center rounded-full bg-[#e6a18e] text-xs font-bold text-[#693b31]">ع‌ک</div><div className="min-w-0 flex-1"><div className="truncate text-xs font-bold">علی کریمی</div><div className="truncate text-[10px] text-[#8eada6]">مدیر محصول</div></div><ChevronDown className="size-3 text-[#8eada6]" /></div></div>
      </aside>

      <section className="lg:mr-64">
        <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b border-border bg-background/90 px-5 backdrop-blur md:px-10">
          <div className="flex items-center gap-3"><button className="rounded-lg p-2 hover:bg-muted lg:hidden"><Menu className="size-5" /></button><div><div className="text-xs text-muted-foreground">شنبه، ۱۸ فروردین ۱۴۰۳</div><h1 className="mt-0.5 text-xl font-bold">صبح بخیر، علی <span className="text-primary">.</span></h1></div></div>
          <div className="flex items-center gap-2"><button onClick={() => setShowCommand(true)} className="hidden items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs text-muted-foreground transition hover:border-primary md:flex"><Search className="size-4" />جستجو <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono text-[10px]">⌘ K</kbd></button><button className="relative rounded-xl p-2.5 hover:bg-muted"><Bell className="size-[19px]" /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-accent" /></button><button className="flex items-center gap-2 rounded-xl bg-primary px-3.5 py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition hover:opacity-90"><Plus className="size-4" />آیتم جدید</button></div>
        </header>

        <div className="mx-auto max-w-[1440px] px-5 py-7 md:px-10 md:py-9">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><div className="mb-2 flex items-center gap-2 text-sm font-bold text-primary"><span className="size-2 rounded-full bg-primary" /> وضعیت فعلی محصول</div><h2 className="text-3xl font-bold tracking-tight text-pretty md:text-4xl">تمرکز این هفته</h2><p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">تیم روی پایدارسازی تجربه پرداخت و آماده‌سازی نسخه بعدی محصول تمرکز دارد.</p></div><button className="flex items-center gap-2 self-start rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-bold text-foreground shadow-sm hover:bg-muted md:self-auto"><CalendarDays className="size-4 text-primary" /> این هفته <ChevronDown className="size-3" /></button></div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[{ label: 'پیشرفت اسپرینت', value: '۶۸٪', note: '۴ روز تا پایان', icon: Zap, trend: '۱۲٪+' }, { label: 'آیتم‌های در جریان', value: '۲۴', note: 'از ۳۲ آیتم کل', icon: CircleDot, trend: '۸٪+' }, { label: 'بازخوردهای باز', value: '۱۸', note: '۳ مورد جدید', icon: Lightbulb, trend: '۵٪-' }, { label: 'سلامت محصول', value: 'خوب', note: 'بر اساس ۵ شاخص', icon: Activity, trend: 'پایدار' }].map((stat, i) => <div key={stat.label} className={`animate-rise delay-${i % 3} rounded-2xl border border-border bg-card p-5 shadow-[0_2px_12px_rgba(22,34,42,0.03)]`}><div className="mb-5 flex items-center justify-between"><div className="flex size-9 items-center justify-center rounded-xl bg-secondary text-primary"><stat.icon className="size-[18px]" /></div><span className={`flex items-center gap-1 text-[11px] font-bold ${stat.trend.includes('-') ? 'text-accent' : 'text-primary'}`}>{stat.trend.includes('-') ? <ArrowDownLeft className="size-3" /> : <ArrowUpLeft className="size-3" />}{stat.trend}</span></div><div className="text-2xl font-bold">{stat.value}</div><div className="mt-1 flex items-center justify-between text-xs text-muted-foreground"><span>{stat.label}</span><span>{stat.note}</span></div>{i === 0 && <div className="mt-4"><ProgressBar value={68} /></div>}</div>)}
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_.85fr]">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[0_2px_12px_rgba(22,34,42,0.03)]"><div className="mb-6 flex items-center justify-between"><div><h3 className="font-bold">اسپرینت فعلی</h3><p className="mt-1 text-xs text-muted-foreground">اسپرینت ۲۴ · ۱۲ تا ۲۳ فروردین</p></div><button className="text-xs font-bold text-primary hover:underline">مشاهده جزئیات</button></div><div className="mb-7 flex items-center gap-5"><div className="relative flex size-28 items-center justify-center rounded-full" style={{ background: 'conic-gradient(#166b68 0 68%, #e8f0eb 68% 100%)' }}><div className="flex size-20 flex-col items-center justify-center rounded-full bg-card"><span className="text-xl font-bold">۶۸٪</span><span className="text-[9px] text-muted-foreground">تکمیل</span></div></div><div className="flex-1"><div className="mb-4 flex items-center justify-between text-xs"><span className="text-muted-foreground">وضعیت تحویل</span><span className="font-bold">۲۲ از ۳۲ آیتم</span></div><ProgressBar value={68} /><div className="mt-4 grid grid-cols-3 gap-2 text-center"><div className="rounded-xl bg-secondary p-2.5"><div className="font-bold text-primary">۲۲</div><div className="mt-1 text-[10px] text-muted-foreground">تکمیل‌شده</div></div><div className="rounded-xl bg-muted p-2.5"><div className="font-bold">۷</div><div className="mt-1 text-[10px] text-muted-foreground">در جریان</div></div><div className="rounded-xl bg-muted p-2.5"><div className="font-bold">۳</div><div className="mt-1 text-[10px] text-muted-foreground">باقی‌مانده</div></div></div></div></div><div className="border-t border-border pt-5"><div className="mb-3 flex items-center justify-between"><span className="text-xs font-bold">تمرکزهای اصلی</span><span className="text-[10px] text-muted-foreground">این هفته</span></div><div className="flex flex-col gap-3">{['پایداری پرداخت و تسویه', 'تجربه ورود و فعال‌سازی', 'داشبورد گزارش‌دهی'].map((x, i) => <div key={x} className="flex items-center gap-3"><div className={`flex size-6 items-center justify-center rounded-lg text-[10px] font-bold ${i === 0 ? 'bg-[#f9e3dd] text-accent' : 'bg-secondary text-primary'}`}>{i + 1}</div><span className="flex-1 text-xs">{x}</span><span className="text-[10px] text-muted-foreground">{[78, 54, 31][i]}٪</span></div>)}</div></div></div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-[0_2px_12px_rgba(22,34,42,0.03)]"><div className="mb-6 flex items-start justify-between"><div><h3 className="font-bold">فعالیت‌های اخیر</h3><p className="mt-1 text-xs text-muted-foreground">آخرین تغییرات تیم</p></div><button className="rounded-lg p-1 text-muted-foreground hover:bg-muted"><ChevronDown className="size-4 rotate-90" /></button></div><div className="flex flex-col gap-6">{activities.map((activity) => <div key={activity.text} className="flex gap-3"><div className={`mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl bg-secondary ${activity.color}`}><activity.icon className="size-4" /></div><div><p className="text-xs leading-5">{activity.text}</p><p className="mt-1 text-[10px] text-muted-foreground">{activity.time}</p></div></div>)}</div><button className="mt-7 w-full rounded-xl border border-border py-2.5 text-xs font-bold text-primary hover:bg-muted">مشاهده همه فعالیت‌ها</button></div>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[.9fr_1.3fr]">
            <div className="rounded-2xl border border-[#ead5cf] bg-[#fffaf8] p-6"><div className="mb-5 flex items-start justify-between"><div><div className="mb-2 flex items-center gap-2 text-xs font-bold text-accent"><Flag className="size-4" /> نیاز به توجه</div><h3 className="font-bold">اولویت‌های بحرانی</h3></div><span className="rounded-full bg-[#f9e3dd] px-2.5 py-1 text-[10px] font-bold text-accent">۳ مورد</span></div><div className="flex flex-col gap-4">{priorities.map((item) => <div key={item.title} className="rounded-xl border border-[#f0ded9] bg-card p-3.5"><div className="flex items-start gap-3"><span className={`mt-0.5 rounded-md px-1.5 py-1 text-[10px] font-bold ${item.tone === 'critical' ? 'bg-accent text-accent-foreground' : 'bg-[#f9e3dd] text-accent'}`}>{item.id}</span><div className="min-w-0 flex-1"><div className="text-xs font-bold leading-5">{item.title}</div><div className="mt-1 flex items-center gap-2 text-[10px] text-muted-foreground"><span>{item.meta}</span><span>·</span><span>{item.owner}</span></div></div></div><div className="mt-3 flex items-center gap-2"><ProgressBar value={item.progress} tone="accent" /><span className="text-[10px] text-muted-foreground">{item.progress}٪</span></div></div>)}</div><button className="mt-5 flex w-full items-center justify-center gap-2 text-xs font-bold text-accent hover:underline">مدیریت بک‌لاگ <ArrowUpLeft className="size-3" /></button></div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-[0_2px_12px_rgba(22,34,42,0.03)]"><div className="mb-5 flex items-center justify-between"><div><h3 className="font-bold">گام‌های امروز</h3><p className="mt-1 text-xs text-muted-foreground">کارهای پیشنهادی برای حفظ تمرکز</p></div><span className="text-xs font-bold text-primary">{checked.length}/۳ انجام شد</span></div><div className="flex flex-col gap-2">{['مرور و اولویت‌بندی باگ‌های جدید', 'هم‌راستا شدن با تیم فنی درباره پرداخت', 'ثبت تصمیم‌های جلسه برنامه‌ریزی'].map((task, i) => <button key={task} onClick={() => toggleCheck(i)} className={`flex items-center gap-3 rounded-xl border p-3.5 text-right transition ${checked.includes(i) ? 'border-[#c5dfd6] bg-secondary' : 'border-border hover:bg-muted'}`}><span className={`flex size-5 shrink-0 items-center justify-center rounded-full border ${checked.includes(i) ? 'border-primary bg-primary text-primary-foreground' : 'border-[#b9c7c1]'}`}>{checked.includes(i) && <Check className="size-3" />}</span><span className={`flex-1 text-xs ${checked.includes(i) ? 'text-muted-foreground line-through' : ''}`}>{task}</span><span className="text-[10px] text-muted-foreground">{['۳۰ دقیقه', '۱ ساعت', '۲۰ دقیقه'][i]}</span></button>)}</div><div className="mt-5 flex items-center gap-3 rounded-xl bg-secondary p-3.5"><Sparkles className="size-4 shrink-0 text-primary" /><p className="text-[11px] leading-5 text-secondary-foreground">بر اساس وضعیت تیم، امروز بهترین زمان برای مرور باگ‌های پرداخت است.</p></div></div>
          </div>
        </div>
      </section>
      {showCommand && <div className="fixed inset-0 z-30 flex items-start justify-center bg-[#102f35]/30 px-5 pt-24 backdrop-blur-sm" onClick={() => setShowCommand(false)}><div className="w-full max-w-lg rounded-2xl border border-border bg-card p-3 shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="flex items-center gap-3 border-b border-border px-3 pb-3"><Command className="size-4 text-muted-foreground" /><input autoFocus placeholder="جستجو در محصول..." className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" /><button onClick={() => setShowCommand(false)}><X className="size-4 text-muted-foreground" /></button></div><div className="flex flex-col gap-1 p-2"><button className="flex items-center gap-3 rounded-xl px-3 py-3 text-right text-xs hover:bg-muted"><ClipboardList className="size-4 text-primary" />باز کردن بک‌لاگ محصول</button><button className="flex items-center gap-3 rounded-xl px-3 py-3 text-right text-xs hover:bg-muted"><Target className="size-4 text-primary" />رفتن به نقشه راه</button></div></div></div>}
    </main>
  )
}
