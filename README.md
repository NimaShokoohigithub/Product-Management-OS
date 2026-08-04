# Product-Management-OS
The OS for Product managers!

یک سیستم عامل سبک برای مدیریت محصول شامل موارد زیر:

- [ریتم مشخص اسپرینت](sprint-rhythm.md) (Sprint Rhythm)
- [الگوی حداقلی مشخصات فنی](tech-spec-template.md) (Minimal Tech Spec / PRD)
- [درخت تصمیم اولویت‌بندی باگ‌ها](bug-prioritization.md) (Bug Prioritization Decision Tree)
- [گزارش هفتگی](weekly-report.md) (Weekly Report)
سیستم عامل سبک برای مدیریت محصول. این مخزن شامل اسناد و ابزارهایی است که به مدیران محصول و تیم‌های توسعه کمک می‌کند تا فرآیندهای خود را بهتر مدیریت کنند.

## مستندات

*   [ریتم اسپرینت دوهفته‌ای (Sprint Rhythm)](sprint_rhythm.md): راهنمای جلسات و جریان کار در طول یک اسپرینت.
*   [الگوی مشخصات فنی (Tech Spec / PRD)](tech_spec_template.md): یک قالب مینیمال برای نوشتن نیازمندی‌ها و مشخصات فنی فیچرها.
*   [درخت تصمیم اولویت‌بندی باگ‌ها (Bug Prioritization)](bug_prioritization.md): راهنمای تعیین اولویت (P0-P4) برای باگ‌های سیستم.

## ابزارها

*   **تولیدکننده گزارش هفتگی (Weekly Report Generator):**
    یک اسکریپت پایتون (`weekly_report.py`) که داده‌ها را از فایل `data.json` می‌خواند و یک گزارش مختصر و مفید با فرمت مارک‌داون تولید می‌کند.
    برای اجرای آن از دستور زیر استفاده کنید:
    ```bash
    python weekly_report.py
    ```
