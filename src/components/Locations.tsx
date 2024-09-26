import Link from "next/link";
import ajmanImage from "../../public/images/ajman-image.jpg";
import dubaiImage from "../../public/images/dubai-image.jpg";
import sharjahImage from "../../public/images/sharjah-image.jpg";
import { Button } from "./ui/button";
import Image from "next/image";
function Locations() {
  return (
    <div className="w-full md:w-11/12 md:mt-5 mt-0">
      <div className="min-h-32">
        <ul className="mt-5 flex flex-col md:gap-y-0  gap-y-10 md:ml-20">
          <li className="grid md:grid-cols-2 grid-cols-1 items-center">
            <div>
              <Link href={"/services-locations/movers-and-packers-dubai"}>
                <h3>Moving Services In Dubai</h3>
              </Link>
              <p className="md:mt-5 mt-3">
                Looking for reliable moving services in Dubai? Our skilled team
                offers hassle-free residential and commercial relocations,
                including expert packing, furniture assembly, and secure
                transportation. Whether local or long-distance, we ensure a
                smooth, stress-free move.
              </p>
              <div className="flex gap-x-2 mt-5">
                <Link href={"tel:+971566651978"}>
                  <Button size={"sm"}>+971 56 665 1978</Button>
                </Link>
                <Link href={"/services-locations/movers-and-packers-dubai"}>
                  <Button size={"sm"} variant={"secondary"}>
                    see more
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:flex hidden justify-center">
              <div className="md:w-96 h-96 bg-gradient-to-t from-gray-100 to-gray-300 rounded-3xl drop-shadow-xl overflow-hidden">
                <Image
                  alt="Moving In Dubai | hamdan Mover"
                  aria-label="dubai image"
                  src={dubaiImage}
                  fill
                  placeholder="blur"
                  className="object-cover absolute"
                />
              </div>
            </div>
          </li>
          <li className="grid md:grid-cols-2 grid-cols-1 items-center md:-ml-32">
            <div className="md:flex hidden justify-center">
              <div className="md:w-96 h-96 bg-gradient-to-t from-gray-100 to-gray-300 rounded-3xl drop-shadow-xl overflow-hidden">
                <Image
                  alt="Moving In Dubai | hamdan Mover"
                  aria-label="dubai image"
                  src={sharjahImage}
                  fill
                  placeholder="blur"
                  className="object-cover absolute"
                />
              </div>
            </div>
            <div>
              <Link href={"/services-locations/movers-and-packers-sharjah"}>
                <h3>Moving Services In Sharjah</h3>
              </Link>
              <p className="md:mt-5 mt-3">
                Seeking dependable moving services in Sharjah? Our experienced
                team provides seamless residential and commercial relocations,
                featuring professional packing, furniture assembly, and safe
                transportation. Whether you&lsquo;re moving locally or
                long-distance, we guarantee a smooth, stress-free experience.
              </p>
              <div className="flex gap-x-2 mt-5">
                <Link href={"tel:+971566651978"}>
                  <Button size={"sm"}>+971 56 665 1978</Button>
                </Link>
                <Link href={"/services-locations/movers-and-packers-sharjah"}>
                  <Button size={"sm"} variant={"secondary"}>
                    see more
                  </Button>
                </Link>
              </div>
            </div>
          </li>
          <li className="grid md:grid-cols-2 grid-cols-1 items-center">
            <div>
              <Link href={"/services-locations/movers-and-packers-ajman"}>
                <h3>Moving Services In Ajman</h3>
              </Link>
              <p className="md:mt-5 mt-3">
                Find reliable moving services in Ajman! Our skilled team
                delivers hassle-free residential and commercial relocations with
                expert packing, efficient furniture assembly, and secure
                transportation. Whether local or long-distance, we guarantee a
                smooth, stress-free move.
              </p>
              <div className="flex gap-x-2 mt-5">
                <Link href={"tel:+971566651978"}>
                  <Button size={"sm"}>+971 56 665 1978</Button>
                </Link>
                <Link href={"/services-locations/movers-and-packers-ajman"}>
                  <Button size={"sm"} variant={"secondary"}>
                    see more
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:flex hidden justify-center">
              <div className="md:w-96 h-96 bg-gradient-to-t from-gray-100 to-gray-300 rounded-3xl drop-shadow-xl overflow-hidden">
                <Image
                  alt="Moving In Dubai | hamdan Mover"
                  aria-label="dubai image"
                  src={ajmanImage}
                  fill
                  placeholder="blur"
                  className="object-cover absolute"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Locations;
