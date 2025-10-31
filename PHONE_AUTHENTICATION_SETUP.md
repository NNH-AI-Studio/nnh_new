# إعداد تسجيل الدخول برقم الهاتف (Phone Authentication)

## 📋 ما تم إضافته:

✅ **Migration تم إنشاؤه**: `supabase/migrations/20250131_add_phone_to_profiles.sql`
- إضافة `phone` column إلى جدول `profiles`
- تحديث trigger function `handle_new_user()` لحفظ رقم الهاتف تلقائياً
- إضافة index لتحسين البحث عن رقم الهاتف

✅ **الكود موجود**: في `app/auth/login/page.tsx`
- دعم كامل لتسجيل الدخول برقم الهاتف
- إرسال OTP code
- التحقق من الكود

## 🔧 خطوات تفعيل Phone Authentication في Supabase:

### 1. تفعيل Phone Authentication في Supabase Dashboard

1. اذهب إلى **Supabase Dashboard** → مشروعك
2. افتح **Authentication** من القائمة الجانبية
3. اضغط على **Providers**
4. ابحث عن **Phone** في قائمة المزودين
5. فعّل **Phone provider** (Toggle On)

### 2. إعداد SMS Provider

Supabase يحتاج إلى مزود SMS لإرسال رسائل التحقق. الخيارات:

#### **أ) استخدام Twilio (مُوصى به)**
1. سجّل في [Twilio](https://www.twilio.com/)
2. احصل على:
   - `Account SID`
   - `Auth Token`
   - `Phone Number` (للإرسال)
3. في Supabase Dashboard:
   - اذهب إلى **Settings** → **Auth**
   - في قسم **Phone Auth**
   - أدخل بيانات Twilio

#### **ب) استخدام MessageBird**
1. سجّل في [MessageBird](https://www.messagebird.com/)
2. احصل على API key
3. أضفها في Supabase Settings

#### **ج) استخدام Vonage (Nexmo)**
1. سجّل في [Vonage](https://www.vonage.com/)
2. احصل على API credentials
3. أضفها في Supabase Settings

### 3. تشغيل Migration في قاعدة البيانات

في Supabase Dashboard:
1. اذهب إلى **SQL Editor**
2. انسخ محتوى الملف: `supabase/migrations/20250131_add_phone_to_profiles.sql`
3. نفّذ الـ SQL script

أو عبر CLI:
```bash
cd ~/Desktop/NNH-AI-Studio
supabase migration up
```

### 4. إعدادات إضافية (اختياري)

#### تحديث Phone Format
يمكنك تحديث الكود في `app/auth/login/page.tsx` لإضافة تنسيق رقم الهاتف:

```typescript
// مثال: تنسيق +971501234567
const formatPhoneNumber = (phone: string) => {
  // إزالة المسافات والرموز
  const cleaned = phone.replace(/\D/g, '');
  // إضافة + في البداية إذا لم يكن موجوداً
  return cleaned.startsWith('+') ? cleaned : `+${cleaned}`;
};
```

#### تحديث UI في صفحة Login
الكود موجود في `app/auth/login/page.tsx` ويحتوي على:
- حقل إدخال رقم الهاتف
- زر "إرسال الكود"
- حقل إدخال OTP code
- زر "تحقق"

## ✅ اختبار تسجيل الدخول برقم الهاتف:

1. افتح صفحة Login: `/auth/login`
2. اختر tab "Phone Login" (إذا كان موجوداً)
3. أدخل رقم هاتفك بصيغة دولية (مثال: `+971501234567`)
4. اضغط "Send Code"
5. تحقق من رسالة SMS
6. أدخل الكود الذي استلمته
7. اضغط "Verify"

## 🔍 ملاحظات مهمة:

1. **رقم الهاتف يجب أن يكون بصيغة دولية**: `+[Country Code][Number]`
   - مثال: `+971501234567` (الإمارات)
   - مثال: `+966501234567` (السعودية)

2. **Supabase يحفظ رقم الهاتف في `auth.users.phone` تلقائياً**، لكننا أضفناه أيضاً في `profiles.phone` للوصول السريع.

3. **في بيئة التطوير**: يمكنك استخدام رقم اختبار من Twilio بدون تكلفة (محدود).

4. **التكلفة**: كل رسالة SMS تكلف حوالي $0.0075 - $0.01 حسب المزود.

## 🐛 استكشاف الأخطاء:

### المشكلة: "SMS provider not configured"
**الحل**: تأكد من إضافة بيانات مزود SMS في Supabase Settings.

### المشكلة: "Invalid phone number"
**الحل**: تأكد من تنسيق رقم الهاتف بصيغة دولية مع + في البداية.

### المشكلة: "OTP expired"
**الحل**: الكود صالح لـ 60 دقيقة فقط. اطلب كود جديد.

## 📚 مراجع:
- [Supabase Phone Auth Documentation](https://supabase.com/docs/guides/auth/phone-login)
- [Twilio Setup Guide](https://www.twilio.com/docs/sms)
- [Supabase Auth Configuration](https://supabase.com/docs/guides/auth)

