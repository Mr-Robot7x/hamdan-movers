"use client";
import { IconHours24, IconLocationPin } from "@tabler/icons-react";
import { MailsIcon, PhoneForwardedIcon } from "lucide-react";
import { Button } from "./ui/button";
import { FormEvent, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
const ContactUs = ({ isPage = false }: { isPage?: boolean }) => {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [data, setData] = useState<{
    name: string;

    phone: string;
    location: string;
    service: string;
    description: string;
  }>({
    name: "",

    phone: "",
    location: "",
    service: "",
    description: "",
  });
  const handleContact = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Object.keys(data).forEach((field, i) => {
      if (!data[field as keyof typeof data]) {
        alert("Please fill all the fields");
        return;
      }

      e.currentTarget.reset();
    });
  };

  return (
    <div className="bg-white w-full md:w-11/12">
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-10 mx-auto">
        {/* Title */}
        {!isPage ? (
          <div
            dir={locale === "ar" ? "rtl" : "ltr"}
            className=" mb-10 lg:mb-14"
          >
            <h2 className={locale === "ar" ? "font-bold" : ""}>{t("title")}</h2>
            <p className={`${locale === "ar" ? "ar-p text-2xl" : ""} mt-3 gr`}>
              {t("desc")}
            </p>
          </div>
        ) : null}
        {/* End Title */}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 font-poppins ">
          <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
            <form onSubmit={(e) => handleContact(e)} className="">
              <div className="space-y-4">
                {/* Input */}
                <div className="relative">
                  <input
                    type="text"
                    id="hs-tac-input-name"
                    className="border border-neutral-200 peer p-4 block w-full focus:border-neutral-400 transition-all shadow-md shadow-neutral-50 rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    required
                    placeholder="Name"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                  />
                  <label
                    htmlFor="hs-tac-input-name"
                    className="absolute top-0 start-0 p-4 h-full gr text-sm truncate pointer-events-none transition-all border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-[12px] peer-focus:gr peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-[10px] peer-[:not(:placeholder-shown)]:gr"
                  >
                    Name
                  </label>
                </div>
                {/* End Input */}

                {/* Input */}

                {/* End Input */}

                {/* Input */}

                {/* End Input */}

                {/* Input */}
                <div className="relative">
                  <input
                    type="text"
                    id="hs-tac-input-phone"
                    className="border border-neutral-200 peer p-4 block w-full focus:border-neutral-400 transition-all shadow-md shadow-neutral-50 rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    required
                    value={data.phone}
                    onChange={(e) =>
                      setData({ ...data, phone: e.target.value })
                    }
                    placeholder="Phone No"
                  />
                  <label
                    htmlFor="hs-tac-input-phone"
                    className="absolute top-0 start-0 p-4 h-full gr text-sm truncate pointer-events-none transition-all border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-[12px] peer-focus:gr peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-[10px] peer-[:not(:placeholder-shown)]:gr"
                  >
                    Phone No
                  </label>
                </div>
                {/* End Input */}
                <div className="relative">
                  <input
                    type="text"
                    id="hs-tac-input-company"
                    className="border border-neutral-200 peer p-4 block w-full focus:border-neutral-400 transition-all shadow-md shadow-neutral-50 rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    required
                    value={data.location}
                    onChange={(e) =>
                      setData({ ...data, location: e.target.value })
                    }
                    placeholder="Location"
                  />
                  <label
                    htmlFor="hs-tac-input-company"
                    className="absolute top-0 start-0 p-4 h-full gr text-sm truncate pointer-events-none transition-all border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-[12px] peer-focus:gr peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-[10px] peer-[:not(:placeholder-shown)]:gr"
                  >
                    Your Location
                  </label>
                </div>
                {/* {service select} */}

                <div>
                  <Select
                    value={data.service}
                    onValueChange={(e) => setData({ ...data, service: e })}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Top Services</SelectLabel>
                        <SelectItem value="Local Moving Services">
                          Local Moving Services
                        </SelectItem>
                        <SelectItem value="Commercial  Moving Services">
                          Commercial Moving Services
                        </SelectItem>
                        <SelectItem value="Packing and Unpacking">
                          Packing and Unpacking
                        </SelectItem>
                        <SelectItem value="Storage Solutions">
                          Storage Solutions
                        </SelectItem>
                        <SelectItem value="Specialty Moving Services">
                          Specialty Moving Services
                        </SelectItem>
                        <SelectItem value="International Moving Services">
                          International Moving Services
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Other Services</SelectLabel>
                        <SelectItem value="Apartment Moving">
                          Apartment Moving
                        </SelectItem>
                        <SelectItem value="Villa Moving">
                          Villa Moving
                        </SelectItem>
                        <SelectItem value="Office Relocation">
                          Office Relocation
                        </SelectItem>
                        <SelectItem value="Home Cleaning">
                          Home Cleaning
                        </SelectItem>
                        <SelectItem value="Furniture Cleaning">
                          Furniture Cleaning
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                {/* Textarea */}
                <div className="relative">
                  <textarea
                    id="hs-tac-message"
                    className="border border-neutral-200 peer p-4 block w-full focus:border-neutral-400 transition-all shadow-md shadow-neutral-50 rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    required
                    value={data.description}
                    onChange={(e) =>
                      setData({ ...data, description: e.target.value })
                    }
                    placeholder="This is a textarea placeholder"
                  />
                  <label
                    htmlFor="hs-tac-message"
                    className="absolute top-0 start-0 p-4 h-full gr text-sm truncate pointer-events-none transition-all border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-[12px] peer-focus:gr peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-[10px] peer-[:not(:placeholder-shown)]:gr"
                  >
                    Tell us about your project
                  </label>
                </div>

                {/* End Textarea */}
              </div>

              <div className="mt-2">
                <p className="text-xs text-neutral-500">
                  All fields are required
                </p>

                <p className="mt-5">
                  <Button type="submit">Send Now</Button>
                </p>
              </div>
            </form>
          </div>
          {/* End Col */}

          <div className="space-y-14">
            {/* Item */}
            <div className="flex gap-x-5">
              <IconLocationPin className="text-[#FF5F00]" />
              <div>
                <h3
                  className={`text-black ${
                    locale === "ar"
                      ? "font-bold font-arabic text-2xl"
                      : "font-semibold text-lg font-poppins"
                  }`}
                >
                  {t("office")}
                </h3>
                <address
                  className={`mt-1 not-italic gr ${
                    locale === "ar" ? "ar-p" : ""
                  }`}
                >
                  {t("address")}
                </address>
              </div>
            </div>
            {/* End Item */}

            {/* Item */}
            <div className="flex gap-x-5">
              <PhoneForwardedIcon className="text-[#FF5F00]" />
              <div>
                <h3
                  className={`text-black ${
                    locale === "ar"
                      ? "font-bold font-arabic text-2xl"
                      : "font-semibold text-lg font-poppins"
                  }`}
                >
                  {t("phone")}
                </h3>
                <p className="mt-1 gr">
                  <Link href={"tel:+971566651978"}>+971 566651978</Link> <br />
                  <Link href={"tel:+971505626685"}>+971 505626685</Link>
                </p>
              </div>
            </div>
            {/* End Item */}

            {/* Item */}
            <div className="flex gap-x-5">
              <MailsIcon className="text-[#FF5F00]" />
              <div>
                <h3
                  className={`text-black ${
                    locale === "ar"
                      ? "font-bold font-arabic text-2xl"
                      : "font-semibold text-lg font-poppins"
                  }`}
                >
                  {t("email")}
                </h3>
                <p className="mt-1 gr">
                  <Link href={"mailto:hussain43ahmad@gmail.com"}>
                    hussain43ahmad@gmail.com
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex gap-x-5">
              <IconHours24 className="text-[#FF5F00]" />
              <div>
                <h3
                  className={`text-black ${
                    locale === "ar"
                      ? "font-bold font-arabic text-2xl"
                      : "font-semibold text-lg font-poppins"
                  }`}
                >
                  {t("openinghour")}
                </h3>
                <p className={`mt-1 gr ${locale === "ar" ? "ar-p" : ""}`}>
                  {" "}
                  {t("hours")}
                </p>
              </div>
            </div>
            {/* End Item */}
          </div>
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
};

export default ContactUs;
