import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqsImage from "../../public/images/FAQs.png";
import Image from "next/image";
import { faqs } from "@/app/[locale]/data";
export function FAQs() {
  return (
    <div className="w-full md:w-11/12 flex flex-col items-center justify-center">
      <div className="w-40 h-40 relative">
        <Image
          src={faqsImage}
          alt="FAQs"
          fill
          placeholder="blur"
          className="object-contain absolute"
        />
      </div>
      <h2 className="mt-5">Frequently Asked Questions</h2>
      <div className="mt-10 w-full md:w-11/12">
        <Accordion type="multiple" className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={faq.ques}>
              <AccordionTrigger>{faq.ques}</AccordionTrigger>
              <AccordionContent>{faq.ans}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQs;
