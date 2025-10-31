# إعداد قوالب البريد الإلكتروني في Supabase

## 📧 القوالب المتوفرة:

تم إنشاء 6 قوالب احترافية جاهزة للإنتاج:

1. **✅ Confirm sign up** - `confirm-signup.html`
2. **✅ Magic link** - `magic-link.html`
3. **✅ Reset password** - `reset-password.html`
4. **✅ Change email address** - `change-email.html`
5. **✅ Invite user** - `invite-user.html`
6. **✅ Reauthentication** - `reauthentication.html`

## 🎨 المميزات:

### التصميم:
- ✨ تصميم عصري ومتجاوب (Responsive)
- 🌙 دعم Dark Mode الكامل
- 🎨 ألوان مختلفة لكل نوع من البريد
- 📱 متوافق مع جميع الأجهزة

### المحتوى:
- 🇬🇧 Content in English (LTR)
- 🔤 Google Fonts (Montserrat + Cairo)
- 🎯 Clear and professional messages
- 🔒 Appropriate security warnings

### البرمجة:
- ✅ متغيرات Supabase جاهزة: `{{ .Email }}`, `{{ .ConfirmationURL }}`
- ✅ روابط بديلة لكل template
- ✅ Footer موحد مع روابط الموقع
- ✅ Icons وأيقونات مناسبة

## 📋 كيفية الاستخدام:

### 1. في Supabase Dashboard:

1. اذهب إلى **Authentication** → **Emails** → **Templates**
2. اختر نوع البريد (مثلاً: "Confirm sign up")
3. اضغط على **"<> Source"** tab
4. انسخ محتوى الملف المناسب (مثلاً: `confirm-signup.html`)
5. الصق المحتوى في المحرر
6. اضغط **Save**

### 2. Subject Headings (العناوين):

#### Confirm sign up:
```
Confirm Your Signup - NNH AI Studio
```

#### Magic link:
```
Magic Login Link - NNH AI Studio
```

#### Reset password:
```
Reset Password - NNH AI Studio
```

#### Change email:
```
Change Email Address - NNH AI Studio
```

#### Invite user:
```
You're Invited to NNH AI Studio
```

#### Reauthentication:
```
Reauthentication Required - NNH AI Studio
```

## 🎨 الألوان المستخدمة:

| Template | لون Header | الاستخدام |
|----------|-----------|-----------|
| Confirm sign up | برتقالي (#ff9500) | تأكيدات والتسجيلات |
| Magic link | بنفسجي (#667eea) | روابط سحرية |
| Reset password | أحمر (#ef4444) | أمان وكلمات مرور |
| Change email | أزرق (#3b82f6) | تغييرات معلومات |
| Invite user | أخضر (#22c55e) | دعوات وترحيب |
| Reauthentication | بنفسجي غامق (#a855f7) | أمان إضافي |

## 📝 المتغيرات المتاحة:

### جميع القوالب:
- `{{ .Email }}` - البريد الإلكتروني للمستخدم
- `{{ .ConfirmationURL }}` - رابط التأكيد

### Invite user فقط:
- `{{ .Data.email }}` - بريد الشخص الذي أرسل الدعوة

### Change email:
- `{{ .NewEmail }}` - البريد الإلكتروني الجديد

## 🔧 التخصيص:

### تغيير الألوان:
ابحث في كل ملف عن:
```css
background: linear-gradient(135deg, #COLOR1 0%, #COLOR2 100%);
```
وغيّر الألوان حسب الحاجة.

### تغيير النصوص:
- جميع النصوص بالعربية ويمكن تغييرها بسهولة
- ابحث عن النص المطلوب وعدّله

### إضافة Logo:
يمكن إضافة logo في الـ header:
```html
<img src="https://nnh.ae/logo.png" alt="NNH AI Studio" style="max-width: 150px; height: auto;" />
```

## ✅ Checklist قبل الإنتاج:

- [ ] نسخ جميع القوالب إلى Supabase
- [ ] إضافة Subject Headings لكل template
- [ ] اختبار كل template بإرسال بريد تجريبي
- [ ] التأكد من أن الروابط تعمل بشكل صحيح
- [ ] التحقق من ظهور القوالب بشكل صحيح على Mobile
- [ ] اختبار Dark Mode
- [ ] التأكد من أن Footer links صحيحة

## 🎯 النتيجة:

بعد نسخ جميع القوالب، ستحصل على:
- ✨ بريد إلكتروني احترافي ومتسق
- 🎨 تصميم عصري وجذاب
- 🇸🇦 محتوى بالعربية واضح
- 📱 متوافق مع جميع الأجهزة
- 🔒 رسائل أمنية مناسبة

جميع القوالب جاهزة للإنتاج! 🚀

