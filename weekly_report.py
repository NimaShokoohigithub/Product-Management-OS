import json
import datetime
import os

def load_data(filepath):
    """بارگذاری داده‌ها از فایل JSON"""
    if not os.path.exists(filepath):
        print(f"Error: {filepath} not found.")
        return None
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)

def generate_report(data):
    """تولید گزارش هفتگی بر اساس داده‌ها"""
    if not data:
        return "خطا در تولید گزارش: داده‌ای یافت نشد."

    today = datetime.date.today()
    week_number = today.isocalendar()[1]

    report = f"# گزارش هفتگی محصول - هفته {week_number}\n"
    report += f"**تاریخ:** {today}\n\n"

    report += "## ۱. وضعیت شاخص‌های کلیدی (KPIs)\n"
    kpis = data.get('kpis', {})
    report += f"*   **تعداد کاربران فعال روزانه (DAU):** {kpis.get('dau', 'N/A')}\n"
    report += f"*   **نرخ تبدیل (Conversion Rate):** {kpis.get('conversion_rate', 'N/A')}%\n"
    report += f"*   **تعداد ثبت‌نام جدید:** {kpis.get('new_signups', 'N/A')}\n\n"

    report += "## ۲. پیشرفت اسپرینت\n"
    sprint = data.get('sprint', {})
    report += f"*   **تسک‌های انجام شده:** {sprint.get('completed_tasks', 0)}\n"
    report += f"*   **تسک‌های باقی‌مانده:** {sprint.get('remaining_tasks', 0)}\n"
    report += f"*   **باگ‌های رفع شده (P0/P1):** {sprint.get('critical_bugs_fixed', 0)}\n\n"

    report += "## ۳. نکات مهم و بلاکرها\n"
    notes = data.get('notes', [])
    if notes:
        for note in notes:
            report += f"*   {note}\n"
    else:
        report += "*   نکته خاصی ثبت نشده است.\n"

    return report

def main():
    data_file = 'data.json'
    report_file = 'weekly_report_output.md'

    print("در حال خواندن داده‌ها...")
    data = load_data(data_file)

    if data:
        print("در حال تولید گزارش...")
        report_content = generate_report(data)

        with open(report_file, 'w', encoding='utf-8') as f:
            f.write(report_content)

        print(f"گزارش با موفقیت تولید شد و در {report_file} ذخیره گردید.")
        print("\n--- پیش‌نمایش گزارش ---\n")
        print(report_content)

if __name__ == "__main__":
    main()
