import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqsImage from "../../public/images/FAQs.png";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
export function FAQs() {
  const t = useTranslations("faqs");
  const locale = useLocale();
  const faqs = [
    {
      ques: t("one.ques"),
      ans: t("one.ans"),
    },
    {
      ques: t("two.ques"),
      ans: t("two.ans"),
    },
    {
      ques: t("three.ques"),
      ans: t("three.ans"),
    },
    {
      ques: t("four.ques"),
      ans: t("four.ans"),
    },
    {
      ques: t("five.ques"),
      ans: t("five.ans"),
    },
    {
      ques: t("six.ques"),
      ans: t("six.ans"),
    },
    {
      ques: t("seven.ques"),
      ans: t("seven.ans"),
    },
  ];
  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="w-full md:w-11/12 flex flex-col items-center justify-center font-poppins"
    >
      <div className="w-40 h-40 relative">
        <Image
          src={faqsImage}
          alt="FAQs"
          fill
          placeholder="blur"
          className="object-contain absolute"
        />
      </div>
      <h2 className={`mt-5 ${locale === "ar" ? "font-arabic font-bold" : ""}`}>
        {t("title")}
      </h2>
      <div className="mt-10 w-full md:w-11/12">
        <Accordion type="multiple" className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              className={locale === "ar" ? "font-arabic" : "font-poppins"}
              key={i}
              value={faq.ques}
            >
              <AccordionTrigger
                className={
                  locale === "ar" ? "font-bold font-arabic" : "font-medium"
                }
              >
                {faq.ques}
              </AccordionTrigger>
              <AccordionContent className={locale === "ar" ? "ar-p" : ""}>
                {faq.ans}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQs;
