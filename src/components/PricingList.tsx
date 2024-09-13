import React from "react";
import imageSrc from "../../public/images/pricing-image.jpg";
import Image from "next/image";
import PricingTable from "./PricingTable";
function PricingList() {
  return (
    <div className="w-full md:w-11/12 mt-5">
      <section className=" rounded-3xl md:py-10 md:px-10 px-1">
        <div className="md:ml-9 container mx-auto flex flex-col md:flex-row items-center justify-center">
          {/* Right Side - Content */}
          <div className="md:-mr-28 md:-mt-0 z-20 rounded-lg shadow-lg shadow-neutral-100 bg-white p-4 md:w-1/2 md:pl-10 text-center md:text-left">
            <h3 className="text-yellow-500 text-sm uppercase font-bold mb-2">
              Our Pricing
            </h3>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Affordable and Clear Moving Prices
            </h2>
            <p className="text-gray-600 mb-6">
              At Hamdan Movers and Packers, we ensure transparency with no
              hidden fees, offering top-quality moving services at fair rates.
              Our team of trained professionals and efficient processes
              guarantee that every dollar spent brings you peace of mind and a
              seamless moving experience.
            </p>

            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <a
                href="#"
                className="bg-[#287094] text-white py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300"
              >
                Pricing List
              </a>
            </div>
          </div>

          {/* Left Side - Image */}
          <div className="md:w-1/2 flex  justify-center">
            <div className="md:w-96 w-[350px] h-[420px] relative ">
              <Image
                src={imageSrc}
                fill
                sizes="100"
                className="z-10 object-cover rounded-lg"
                placeholder="blur"
                alt="professional movers in dubai hamdan"
              />
            </div>
          </div>
        </div>
      </section>
      <div className=" mt-5  flex justify-center">
        <div className=" w-full md:w-10/12 rounded-3xl md:p-5 py-5 px-0">
          <div>
            <h2>How We Calculate Moving Costs</h2>
            <p className="my-4">
              We maintain open communication about all costs from the get-go,
              ensuring you won’t find any unexpected fees or charges on your
              final bill. It’s all about trust, and we aim to build that with
              every client.
            </p>
            <h5>How We Price Our Moving Services</h5>
            <ol className="custom-symbol mt-4 flex flex-col gap-y-2">
              <li>
                Distance of the Move: The length of the journey directly affects
                the cost.
              </li>
              <li>
                Volume and Weight of Items: Larger or heavier loads require more
                effort and resources.
              </li>
              <li>
                Special Handling Requirements: Items needing special care, like
                fragile or valuable goods, impact pricing.
              </li>
              <li>
                Logistical Considerations: Access challenges, transportation,
                and other operational aspects are factored in.
              </li>
              <li>
                How careful consideration of these factors ensures an accurate
                and fair estimate.
              </li>
              <li>
                Reinforce the idea that the price reflects the true effort and
                resources dedicated to the move.
              </li>
            </ol>
          </div>
          <div className="mt-10">
            <h2 className="text-center">Our Pricing List</h2>
            <div className="mt-8">
              <PricingTable />
            </div>
          </div>
          <div className="mt-10">
            <h2>
              Understanding Moving Prices and What Affects On Prices In UAE
            </h2>
            <p className="my-4">
              When planning a move in the UAE, understanding what influences the
              cost can help you make informed decisions. Various factors, such
              as the distance of your move, the size and weight of your
              belongings, and any special handling requirements, all contribute
              to the final price. Additionally, aspects like the number of
              movers needed, the type of vehicle required, and the complexity of
              the move (e.g., stairs, narrow streets) can impact the cost. By
              knowing these factors upfront, you can better budget for your move
              and avoid unexpected fees.
            </p>
            <h5>Factors Affecting the Cost</h5>
            <p className="mt-2">
              The cost of moving is far from a one-size-fits-all solution. It
              fluctuates based on several key factors, including the number of
              items, their weight, and whether any special handling is required.
              Even the date of your move can influence the price. Additionally,
              movers with a strong reputation, particularly in areas like
              Sharjah, may charge a premium, but this often reflects the
              high-quality service they provide.
            </p>
            <h5 className="mt-3">Additional Services and Their Charges</h5>
            <p className="mt-2">
              Beyond the basic moving service, there are additional options to
              consider, such as packing, storage, and furniture assembly, each
              of which comes with an extra cost. Specialized packing materials
              for fragile or valuable items can also increase the total. These
              add-ons provide convenience but should be factored into your
              overall budget.
            </p>
            <h5 className="mt-3">How Distance and Size of Move Impact Cost</h5>
            <p className="mt-2">
              In simple terms, the farther you move and the more belongings you
              have, the higher the cost. Relocating across Sharjah will
              typically be more expensive than a move within the same
              neighborhood. Likewise, moving a four-bedroom house will cost
              significantly more than shifting a studio apartment. The scale and
              distance of the move directly impact the overall price.
            </p>
            <h5 className="mt-3">Ways to Get the Best Value for Your Money</h5>
            <p className="mt-2">
              While price is important, value is what truly matters. To maximize
              your investment, it&apos;s wise to gather multiple quotes from
              different movers. Compare not only the prices but also the
              services they offer. Take the time to read reviews and see which
              company provides the best balance of cost and quality. Also,
              staying flexible with your moving dates can often help you secure
              a better deal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingList;
