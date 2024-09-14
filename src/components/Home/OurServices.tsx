import React from "react";
import { Button } from "../ui/button";

function OurServices() {
  return (
    <div className="md:w-11/12 w-full md:mt-5">
      <h2 className="text-center">
        Our Top Class <span className="t-grd">Services</span>
      </h2>
      <p className="text-center mt-5 md:text-[17px] md:px-16">
        At Hamdan Movers and Packers, we offer a complete solution for all your
        moving needs. With over 10 years of experience, we provide reliable,
        efficient, and tailored services to meet every client’s unique
        requirements.
      </p>
      <div className="w-full mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {/* Local Moving */}
        <div className="shadow-xl shadow-neutral-200/50 border border-neutral-200 bg-white md:py-7 py-5 px-4 min-h-32 rounded-2xl">
          <div className="mb-1 flex w-full justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 64 64"
              className="w-20 h-20"
            >
              <g id="Captions"></g>
              <g id="Icons">
                <g>
                  <g>
                    <path
                      fill="#8FA8B9"
                      d="M34,12H6c-1.105,0-2,0.895-2,2v28c0,1.105,0.895,2,2,2h20V30c0-2.206,1.794-4,4-4h2.7 c0.678-1.908,1.822-3.592,3.3-4.919V14C36,12.895,35.105,12,34,12z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#6B889B"
                      d="M8,42V14c0-1.105,0.895-2,2-2H6c-1.105,0-2,0.895-2,2v28c0,1.105,0.895,2,2,2h4C8.895,44,8,43.105,8,42z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#A0C0D6"
                      d="M30,14c0-5.523-4.477-10-10-10S10,8.477,10,14c0,4.549,3.04,8.382,7.198,9.595L20,32l2.802-8.405 C26.96,22.382,30,18.549,30,14z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#4A7E88"
                      d="M21.198,23.595C17.04,22.382,14,18.549,14,14c0-4.838,3.436-8.872,8-9.799C21.354,4.07,20.685,4,20,4 c-5.523,0-10,4.477-10,10c0,4.549,3.04,8.382,7.198,9.595L20,32l2-6L21.198,23.595z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#F0F0F0"
                      d="M20,18L20,18c-2.209,0-4-1.791-4-4v0c0-2.209,1.791-4,4-4h0c2.209,0,4,1.791,4,4v0 C24,16.209,22.209,18,20,18z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#8FA8B9"
                      d="M58,28H30c-1.105,0-2,0.895-2,2v28c0,1.105,0.895,2,2,2h28c1.105,0,2-0.895,2-2V30 C60,28.895,59.105,28,58,28z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#A0C0D6"
                      d="M32,58V30c0-1.105,0.895-2,2-2h-4c-1.105,0-2,0.895-2,2v28c0,1.105,0.895,2,2,2h4 C32.895,60,32,59.105,32,58z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#A0C0D6"
                      d="M54,30c0-5.523-4.477-10-10-10s-10,4.477-10,10c0,4.549,3.04,8.382,7.198,9.595L44,48l2.802-8.405 C50.96,38.382,54,34.549,54,30z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#4A7E88"
                      d="M45.198,39.595C41.04,38.382,38,34.549,38,30c0-4.838,3.436-8.872,8-9.799C45.354,20.07,44.685,20,44,20 c-5.523,0-10,4.477-10,10c0,4.549,3.04,8.382,7.198,9.595L44,48l2-6L45.198,39.595z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#F0F0F0"
                      d="M44,34L44,34c-2.209,0-4-1.791-4-4v0c0-2.209,1.791-4,4-4h0c2.209,0,4,1.791,4,4v0 C48,32.209,46.209,34,44,34z"
                    ></path>
                  </g>
                  <g>
                    <rect
                      x="16"
                      y="32"
                      fill="#6B889B"
                      width="8"
                      height="2"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="40"
                      y="48"
                      fill="#8FA8B9"
                      width="8"
                      height="2"
                    ></rect>
                  </g>
                  <g>
                    <polygon
                      fill="#8FA8B9"
                      points="26,54 20,48 20,52 10,52 10,48 4,54 10,60 10,56 20,56 20,60"
                    ></polygon>
                  </g>
                  <g>
                    <polygon
                      fill="#6B889B"
                      points="6,54 10,50 10,48 4,54 10,60 10,58"
                    ></polygon>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <h4 className="text-center mt-2">Local Moving Services</h4>
          <p className="gr md:leading-5 mt-1 text-[15.3px] text-center">
            Our local moving services ensure a smooth, quick, and reliable
            transition within your city or town, using local expertise for a
            hassle-free move.
          </p>
          <div className="flex gap-x-3 w-full mt-5">
            <Button size={"sm"}>Book Now</Button>
            <Button size={"sm"} variant={"secondary"}>
              Service Details
            </Button>
          </div>
        </div>
        {/* Commerical Moving */}
        <div className="shadow-xl shadow-neutral-200/50 border border-neutral-200 bg-white md:py-7 py-5 px-4 min-h-32 rounded-2xl">
          <div className="mb-1 flex w-full justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 64 64"
              xmlSpace="preserve"
              className="w-20 h-20"
            >
              <g id="Captions"></g>
              <g id="Icons">
                <g>
                  <g>
                    <polygon
                      fill="#8FA8B9"
                      points="56,28 56,24 52.829,24 46,30.829 39.171,24 36,24 36,28 32,28 32,60 60,60 60,28"
                    ></polygon>
                  </g>
                  <g>
                    <polygon
                      fill="#E3E3E3"
                      points="30,26 34,26 34,22 36,22 36,12 32,12 32,8 8,8 8,12 4,12 4,60 30,60"
                    ></polygon>
                  </g>
                  <g>
                    <rect
                      x="4"
                      y="12"
                      fill="#C0C0C0"
                      width="4"
                      height="48"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="8"
                      y="8"
                      fill="#C0C0C0"
                      width="4"
                      height="4"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="16"
                      y="50"
                      fill="#6F6F6F"
                      width="8"
                      height="10"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="12"
                      y="16"
                      fill="#C89222"
                      width="6"
                      height="6"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="22"
                      y="16"
                      fill="#C89222"
                      width="6"
                      height="6"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="12"
                      y="26"
                      fill="#C89222"
                      width="6"
                      height="6"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="22"
                      y="26"
                      fill="#C89222"
                      width="6"
                      height="6"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="12"
                      y="36"
                      fill="#C89222"
                      width="6"
                      height="6"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="22"
                      y="36"
                      fill="#C89222"
                      width="6"
                      height="6"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="32"
                      y="28"
                      fill="#4A7E88"
                      width="4"
                      height="32"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="42"
                      y="50"
                      fill="#6F6F6F"
                      width="8"
                      height="10"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="38"
                      y="32"
                      fill="#3A6D76"
                      width="6"
                      height="6"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="48"
                      y="32"
                      fill="#3A6D76"
                      width="6"
                      height="6"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="38"
                      y="40"
                      fill="#3A6D76"
                      width="6"
                      height="6"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="48"
                      y="40"
                      fill="#3A6D76"
                      width="6"
                      height="6"
                    ></rect>
                  </g>
                  <g>
                    <polygon
                      fill="#4A7E88"
                      points="39.171,24 36,24 36,28 40,28 40,24.829"
                    ></polygon>
                  </g>
                  <g>
                    <polygon
                      fill="#D96B5A"
                      points="48,22 48,10 44,10 44,22 40,22 46,28 52,22"
                    ></polygon>
                  </g>
                  <g>
                    <rect
                      x="44"
                      y="10"
                      fill="#BD5448"
                      width="2"
                      height="12"
                    ></rect>
                  </g>
                  <g>
                    <polygon
                      fill="#BD5448"
                      points="42,22 40,22 46,28 47,27"
                    ></polygon>
                  </g>
                  <g>
                    <rect
                      x="44"
                      y="4"
                      fill="#D96B5A"
                      width="4"
                      height="4"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="44"
                      y="4"
                      fill="#BD5448"
                      width="2"
                      height="4"
                    ></rect>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <h4 className="text-center mt-2">Commerical Moving Services</h4>
          <p className="gr md:leading-5 mt-1 text-[15.3px] text-center">
            We handle every detail of your office relocation, minimizing
            downtime and ensuring a smooth, efficient commercial move.
          </p>
          <div className="flex gap-x-3 w-full mt-5">
            <Button size={"sm"}>Book Now</Button>
            <Button size={"sm"} variant={"secondary"}>
              Service Details
            </Button>
          </div>
        </div>
        {/* Packing and Unpacking */}
        <div className="shadow-xl shadow-neutral-200/50 border border-neutral-200 bg-white md:py-7 py-5 px-4 min-h-32 rounded-2xl">
          <div className="mb-1 flex w-full justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 64 64"
              xmlSpace="preserve"
              className="w-20 h-20"
            >
              <g id="Captions"></g>
              <g id="Icons">
                <g>
                  <g>
                    <path
                      fill="#023246"
                      d="M16,58v-4.838c3.53-1.544,6-5.063,6-9.162c0-5.523-4.477-10-10-10V24h40v36H15.445C15.789,59.41,16,58.732,16,58z"
                    ></path>
                  </g>
                  <g>
                    <polygon
                      fill="#69c5f4"
                      points="52,24 60,32 56,32 52,28"
                    ></polygon>
                  </g>
                  <g>
                    <rect
                      x="42"
                      y="50"
                      fill="#F5A623"
                      width="6"
                      height="2"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="42"
                      y="54"
                      fill="#F5A623"
                      width="6"
                      height="2"
                    ></rect>
                  </g>
                  <g>
                    <path
                      fill="rgba(2, 50, 70, 0.6)"
                      d="M16,24h-4v10c1.423,0,2.774,0.302,4,0.838V24z"
                    ></path>
                  </g>
                  <g>
                    <rect
                      x="28"
                      y="24"
                      fill="#D0021B"
                      width="8"
                      height="8"
                    ></rect>
                  </g>
                  <g>
                    <path
                      fill="#D0021B"
                      d="M20,44c0-4.945-4.487-8.842-9.611-7.843c-3.166,0.618-5.695,3.202-6.259,6.378c-0.686,3.868,1.411,7.339,4.621,8.767C9.492,51.632,10,52.33,10,53.14L10,56h4l0-2.861c0-0.81,0.508-1.507,1.248-1.836C18.047,50.058,20,47.261,20,44z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="rgba(2, 50, 70, 0.6)"
                      d="M10.751,51.302c-3.21-1.427-5.307-4.898-4.621-8.767c0.563-3.176,3.092-5.76,6.258-6.378c0.21-0.041,0.418-0.061,0.625-0.086c-0.842-0.107-1.723-0.09-2.625,0.086c-3.166,0.617-5.695,3.202-6.258,6.378c-0.686,3.868,1.411,7.339,4.621,8.767C9.492,51.632,10,52.33,10,53.141V56h2v-2.859C12,52.33,11.492,51.632,10.751,51.302z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#F8E71C"
                      d="M14,56h-4v2c0,1.105,0.895,2,2,2h0c1.105,0,2-0.895,2-2V56z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#F5A623"
                      d="M12,58v-2h-2v2c0,1.105,0.895,2,2,2c0.366,0,0.705-0.106,1-0.277C12.405,59.376,12,58.738,12,58z"
                    ></path>
                  </g>
                  <g>
                    <rect
                      x="10"
                      y="54"
                      fill="#023246"
                      width="4"
                      height="2"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="10"
                      y="54"
                      fill="rgba(2, 50, 70, 0.6)"
                      width="2"
                      height="2"
                    ></rect>
                  </g>
                  <g>
                    <path
                      fill="#F8E71C"
                      d="M16,44.8v-1.6h-0.905c-0.076-0.293-0.191-0.569-0.341-0.823l0.64-0.64l-1.131-1.131l-0.64,0.64c-0.254-0.15-0.53-0.265-0.823-0.341V40h-1.6v0.905c-0.293,0.076-0.569,0.191-0.823,0.341l-0.64-0.64l-1.131,1.131l0.64,0.64c-0.15,0.254-0.265,0.53-0.341,0.823H8v1.6h0.905c0.076,0.293,0.191,0.569,0.341,0.823l-0.64,0.64l1.131,1.131l0.64-0.64c0.254,0.15,0.53,0.265,0.823,0.341V48h1.6v-0.905c0.293-0.076,0.569-0.191,0.823-0.341l0.64,0.64l1.131-1.131l-0.64-0.64c0.15-0.254,0.265-0.53,0.341-0.823H16z M12,45.6c-0.882,0-1.6-0.718-1.6-1.6s0.718-1.6,1.6-1.6s1.6,0.718,1.6,1.6S12.882,45.6,12,45.6z"
                    ></path>
                  </g>
                  <g>
                    <polygon
                      fill="#69c5f4"
                      points="12,24 4,32 8,32 12,28"
                    ></polygon>
                  </g>
                  <g>
                    <polygon
                      fill="#9013FE"
                      points="22,4 22,16 18,16 24,22 30,16 26,16 26,4"
                    ></polygon>
                  </g>
                  <g>
                    <rect
                      x="22"
                      y="4"
                      fill="#8B572A"
                      width="2"
                      height="12"
                    ></rect>
                  </g>
                  <g>
                    <polygon
                      fill="#8B572A"
                      points="20,16 18,16 24,22 25,21"
                    ></polygon>
                  </g>
                  <g>
                    <polygon
                      fill="#9013FE"
                      points="38,4 38,16 34,16 40,22 46,16 42,16 42,4"
                    ></polygon>
                  </g>
                  <g>
                    <rect
                      x="38"
                      y="4"
                      fill="#8B572A"
                      width="2"
                      height="12"
                    ></rect>
                  </g>
                  <g>
                    <polygon
                      fill="#8B572A"
                      points="36,16 34,16 40,22 41,21"
                    ></polygon>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <h4 className="text-center mt-2">Packing and Unpacking</h4>
          <p className="gr md:leading-5 mt-1 text-[15.3px] text-center">
            Our expert team offers secure packing and careful unpacking,
            guaranteeing a stress-free moving experience for your belongings.
          </p>
          <div className="flex gap-x-3 w-full mt-5">
            <Button size={"sm"}>Book Now</Button>
            <Button size={"sm"} variant={"secondary"}>
              Service Details
            </Button>
          </div>
        </div>
        {/* Storage Soluations */}
        <div className="shadow-xl shadow-neutral-200/50 border border-neutral-200 bg-white md:py-7 py-5 px-4 min-h-32 rounded-2xl">
          <div className="mb-1 flex w-full justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 64 64"
              className="w-20 h-20"
              xmlSpace="preserve"
            >
              <g id="Captions"></g>
              <g id="Icons">
                <g>
                  <g>
                    <path
                      fill="#023246"
                      d="M41.992,11.851C41.993,11.901,42,11.95,42,12c0,5.514-4.486,10-10,10s-10-4.486-10-10 c0-0.058,0.008-0.114,0.009-0.171C13.967,18.151,4,26,4,26h56L41.992,11.851z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#69c5f4"
                      d="M16,46h24v2.36c0,1.382-0.714,2.63-1.82,3.352l12.448-1.556c0.126-0.016,0.25-0.023,0.374-0.023 c0.352,0,0.684,0.072,0.998,0.184V26H12v18h4V46z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="rgba(2, 50, 70, 0.6)"
                      d="M16,46h24v2.36c0,1.382-0.714,2.63-1.82,3.352L48,50.485V34H16v10h0V46z"
                    ></path>
                  </g>
                  <g>
                    <polygon
                      fill="rgba(2, 50, 70, 0.6)"
                      points="16,44 16,46 18,46 18,34 16,34 16,44 "
                    ></polygon>
                  </g>
                  <g>
                    <rect
                      x="16"
                      y="34"
                      fill="rgba(2, 50, 70, 0.6)"
                      width="32"
                      height="2"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="16"
                      y="38"
                      fill="rgba(2, 50, 70, 0.6)"
                      width="32"
                      height="2"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="16"
                      y="42"
                      fill="rgba(2, 50, 70, 0.6)"
                      width="32"
                      height="2"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="28"
                      y="30"
                      fill="#023246"
                      width="8"
                      height="2"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="8"
                      y="46"
                      fill="#023246"
                      width="6"
                      height="14"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="8"
                      y="46"
                      fill="rgba(2, 50, 70, 0.6)"
                      width="2"
                      height="14"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="40"
                      y="46"
                      fill="rgba(2, 50, 70, 0.6)"
                      width="8"
                      height="2"
                    ></rect>
                  </g>
                  <g>
                    <path
                      fill="rgba(2, 50, 70, 0.6)"
                      d="M38.181,51.712L48,50.485V50h-8.361C39.324,50.695,38.821,51.294,38.181,51.712z"
                    ></path>
                  </g>
                  <g>
                    <polygon
                      fill="#69c5f4"
                      points="16,44 16,46 16.045,46 16.045,26 12,26 12,44 "
                    ></polygon>
                  </g>
                  <g>
                    <path
                      fill="rgba(2, 50, 70, 0.6)"
                      d="M50.876,52.141l-14.505,1.813C36.124,53.985,35.876,54,35.627,54H30c-1.105,0-2-0.895-2-2l0,0 l8.392-1.678C37.327,50.135,38,49.314,38,48.361V48H14v8l15.964,3.547c1.335,0.297,2.724,0.246,4.034-0.147l17.289-5.187 C51.711,54.087,52,53.698,52,53.256v-0.123C52,52.531,51.473,52.066,50.876,52.141z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#69c5f4"
                      d="M22,12c0-0.058,0.008-0.114,0.009-0.171C13.967,18.151,4,26,4,26h4c0,0,7.254-5.713,14.377-11.315 C22.138,13.829,22,12.931,22,12z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#69c5f4"
                      d="M32,20L32,20c-4.418,0-8-3.582-8-8v0c0-4.418,3.582-8,8-8h0c4.418,0,8,3.582,8,8v0 C40,16.418,36.418,20,32,20z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="rgba(2, 50, 70, 0.6)"
                      d="M26,12c0-4.079,3.055-7.438,7-7.931C32.672,4.028,32.339,4,32,4c-4.418,0-8,3.582-8,8s3.582,8,8,8 c0.339,0,0.672-0.028,1-0.069C29.055,19.438,26,16.079,26,12z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#F0F0F0"
                      d="M36,12.8v-1.6h-0.905c-0.076-0.293-0.191-0.569-0.341-0.823l0.64-0.64l-1.131-1.131l-0.64,0.64 c-0.254-0.15-0.53-0.265-0.823-0.341V8h-1.6v0.905c-0.293,0.076-0.569,0.191-0.823,0.341l-0.64-0.64l-1.131,1.131l0.64,0.64 c-0.15,0.254-0.265,0.53-0.341,0.823H28v1.6h0.905c0.076,0.293,0.191,0.569,0.341,0.823l-0.64,0.64l1.131,1.131l0.64-0.64 c0.254,0.15,0.53,0.265,0.823,0.341V16h1.6v-0.905c0.293-0.076,0.569-0.191,0.823-0.341l0.64,0.64l1.131-1.131l-0.64-0.64 c0.15-0.254,0.265-0.53,0.341-0.823H36z M32,13.6c-0.882,0-1.6-0.718-1.6-1.6s0.718-1.6,1.6-1.6c0.882,0,1.6,0.718,1.6,1.6 S32.882,13.6,32,13.6z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <h4 className="text-center mt-2">Storage Solutions</h4>
          <p className="gr md:leading-5 mt-1 text-[15.3px] text-center">
            Our climate-controlled storage solutions for clients provide safe,
            flexible short-term or long-term storage during your transition and
            moving.
          </p>
          <div className="flex gap-x-3 w-full mt-5">
            <Button size={"sm"}>Book Now</Button>
            <Button size={"sm"} variant={"secondary"}>
              Service Details
            </Button>
          </div>
        </div>
        {/* Specialty moving */}
        <div className="shadow-xl shadow-neutral-200/50 border border-neutral-200 bg-white md:py-7 py-5 px-4 min-h-32 rounded-2xl">
          <div className="mb-1 flex w-full justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 64 64"
              xmlSpace="preserve"
              className="w-20 h-20"
            >
              <g id="Captions"></g>
              <g id="Icons">
                <g>
                  <g>
                    <path
                      fill="#023246"
                      d="M34,22v-2H10c-1.105,0-2,0.895-2,2v14h30V26C35.794,26,34,24.206,34,22z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#69c5f4"
                      d="M54,32H44v16H8v8h50c1.105,0,2-0.895,2-2V42L54,32z"
                    ></path>
                  </g>
                  <g>
                    <rect
                      x="4"
                      y="48"
                      fill="rgba(2, 50, 70, 0.6)"
                      width="4"
                      height="8"
                    ></rect>
                  </g>
                  <g>
                    <path
                      fill="rgba(2, 50, 70, 0.6)"
                      d="M54,32H44v-4h10c1.105,0,2,0.895,2,2v0C56,31.105,55.105,32,54,32z"
                    ></path>
                  </g>
                  <g>
                    <polygon
                      fill="#F0F0F0"
                      points="60,42 48,42 48,32 54,32"
                    ></polygon>
                  </g>
                  <g>
                    <path
                      fill="#F5A623"
                      d="M55,50h5v-4h-5c-0.552,0-1,0.448-1,1v2C54,49.552,54.448,50,55,50z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="rgba(2, 50, 70, 0.6)"
                      d="M51,60L51,60c-2.761,0-5-2.239-5-5v0c0-2.761,2.239-5,5-5h0c2.761,0,5,2.239,5,5v0C56,57.761,53.761,60,51,60z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="rgba(2, 50, 70, 0.6)"
                      d="M13,60L13,60c-2.761,0-5-2.239-5-5v0c0-2.761,2.239-5,5-5h0c2.761,0,5,2.239,5,5v0C18,57.761,15.761,60,13,60z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#F0F0F0"
                      d="M51,57L51,57c-1.105,0-2-0.895-2-2v0c0-1.105,0.895-2,2-2h0c1.105,0,2,0.895,2,2v0C53,56.105,52.105,57,51,57z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#F0F0F0"
                      d="M13,57L13,57c-1.105,0-2-0.895-2-2v0c0-1.105,0.895-2,2-2h0c1.105,0,2,0.895,2,2v0C15,56.105,14.105,57,13,57z"
                    ></path>
                  </g>
                  <g>
                    <rect
                      x="48"
                      y="32"
                      fill="#D2D2D2"
                      width="2"
                      height="10"
                    ></rect>
                  </g>
                  <g>
                    <path
                      fill="#023246"
                      d="M14,20h-4c-1.105,0-2,0.895-2,2v14h4V22C12,20.895,12.895,20,14,20z"
                    ></path>
                  </g>
                  <g>
                    <rect
                      x="10"
                      y="42"
                      fill="rgba(2, 50, 70, 0.6)"
                      width="4"
                      height="2"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="32"
                      y="42"
                      fill="rgba(2, 50, 70, 0.6)"
                      width="4"
                      height="2"
                    ></rect>
                  </g>
                  <g>
                    <path
                      fill="#023246"
                      d="M17,26L17,26c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v0C18,25.552,17.552,26,17,26z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#023246"
                      d="M29,26L29,26c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v0C30,25.552,29.552,26,29,26z"
                    ></path>
                  </g>
                  <g>
                    <rect
                      x="10"
                      y="32"
                      fill="#F5A623"
                      width="26"
                      height="2"
                    ></rect>
                  </g>
                  <g>
                    <path
                      fill="#023246"
                      d="M39,26c-1.657,0-3,1.343-3,3v5H10v-5c0-1.657-1.343-3-3-3s-3,1.343-3,3c0,1.304,0.837,2.403,2,2.816V40c0,1.104,0.895,2,2,2h30c1.105,0,2-0.896,2-2v-8.184c1.163-0.413,2-1.512,2-2.816C42,27.343,40.657,26,39,26z"
                    ></path>
                  </g>
                  <g>
                    <rect
                      x="4"
                      y="44"
                      fill="#F5A623"
                      width="40"
                      height="4"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      x="4"
                      y="44"
                      fill="#DC9600"
                      width="4"
                      height="4"
                    ></rect>
                  </g>
                  <g>
                    <path
                      fill="#023246"
                      d="M38,24h18l4,4V6c0-1.105-0.895-2-2-2H38c-1.105,0-2,0.895-2,2v16C36,23.105,36.895,24,38,24z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="rgba(2, 50, 70, 0.6)"
                      d="M38,22V6c0-1.105,0.895-2,2-2h-2c-1.105,0-2,0.895-2,2v16c0,1.105,0.895,2,2,2h2C38.895,24,38,23.105,38,22z"
                    ></path>
                  </g>
                  <g>
                    <polygon
                      fill="#F0F0F0"
                      points="40,10 44,14 44,12 56,12 56,8 44,8 44,6"
                    ></polygon>
                  </g>
                  <g>
                    <polygon
                      fill="#F0F0F0"
                      points="56,18 52,14 52,16 40,16 40,20 52,20 52,22"
                    ></polygon>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <h4 className="text-center mt-2">Specialty Moving Services</h4>
          <p className="gr md:leading-5 mt-1 text-[15.3px] text-center">
            We specialize in moving valuable items like pianos, antiques, and
            artwork, treating each piece with utmost care and professionalism.
          </p>
          <div className="flex gap-x-3 w-full mt-5">
            <Button size={"sm"}>Book Now</Button>
            <Button size={"sm"} variant={"secondary"}>
              Service Details
            </Button>
          </div>
        </div>
        {/* International Moving */}
        <div className="shadow-xl shadow-neutral-200/50 border border-neutral-200 bg-white md:py-7 py-5 px-4 min-h-32 rounded-2xl">
          <div className="mb-1 flex w-full justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 64 64"
              className="w-20 h-20"
              xmlSpace="preserve"
            >
              <g id="Captions"></g>
              <g id="Icons">
                <g>
                  <g>
                    <path
                      fill="#69c5f4"
                      d="M28,20H6c-1.105,0-2,0.895-2,2v22c0,1.105,0.895,2,2,2h22c1.105,0,2-0.895,2-2V22 C30,20.895,29.105,20,28,20z"
                    />
                  </g>
                  <g>
                    <path
                      fill="#023246"
                      d="M8,44V22c0-1.105,0.895-2,2-2H6c-1.105,0-2,0.895-2,2v22c0,1.105,0.895,2,2,2h4C8.895,46,8,45.105,8,44z"
                    />
                  </g>
                  <g>
                    <path
                      fill="#69c5f4"
                      d="M58,20H36c-1.105,0-2,0.895-2,2v22c0,1.105,0.895,2,2,2h22c1.105,0,2-0.895,2-2V22 C60,20.895,59.105,20,58,20z"
                    />
                  </g>
                  <g>
                    <path
                      fill="rgba(2, 50, 70, 0.6)"
                      d="M38,44V22c0-1.105,0.895-2,2-2h-4c-1.105,0-2,0.895-2,2v22c0,1.105,0.895,2,2,2h4 C38.895,46,38,45.105,38,44z"
                    />
                  </g>
                  <g>
                    <polygon
                      fill="#023246"
                      points="60,54 54,48 54,52 10,52 10,48 4,54 10,60 10,56 54,56 54,60"
                    />
                  </g>
                  <g>
                    <polygon
                      fill="rgba(2, 50, 70, 0.8)"
                      points="6,54 10,50 10,48 4,54 10,60 10,58"
                    />
                  </g>
                  <g>
                    <path
                      fill="#69c5f4"
                      d="M24,11c0-3.866-3.134-7-7-7s-7,3.134-7,7c0,3.016,1.912,5.58,4.586,6.564L17,24l2.414-6.436 C22.088,16.58,24,14.016,24,11z"
                    />
                  </g>
                  <g>
                    <path
                      fill="rgba(2, 50, 70, 0.6)"
                      d="M16.586,17.564C13.912,16.58,12,14.016,12,11c0-3.526,2.609-6.434,6-6.92 C17.673,4.033,17.34,4,17,4c-3.866,0-7,3.134-7,7c0,3.016,1.912,5.58,4.586,6.564L17,24l1-2.667L16.586,17.564z"
                    />
                  </g>
                  <g>
                    <circle fill="#F0F0F0" cx="17" cy="11" r="3" />
                  </g>
                  <g>
                    <path
                      fill="#69c5f4"
                      d="M54,11c0-3.866-3.134-7-7-7s-7,3.134-7,7c0,3.016,1.912,5.58,4.586,6.564L47,24l2.414-6.436 C52.088,16.58,54,14.016,54,11z"
                    />
                  </g>
                  <g>
                    <path
                      fill="rgba(2, 50, 70, 0.6)"
                      d="M46.586,17.564C43.912,16.58,42,14.016,42,11c0-3.526,2.609-6.434,6-6.92 C47.673,4.033,47.34,4,47,4c-3.866,0-7,3.134-7,7c0,3.016,1.912,5.58,4.586,6.564L47,24l1-2.667L46.586,17.564z"
                    />
                  </g>
                  <g>
                    <circle fill="#F0F0F0" cx="47" cy="11" r="3" />
                  </g>
                  <g>
                    <rect x="42" y="24" fill="#023246" width="10" height="2" />
                  </g>
                  <g>
                    <rect x="12" y="24" fill="#023246" width="10" height="2" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <h4 className="text-center mt-2">International Moving Services</h4>
          <p className="gr md:leading-5 mt-1 text-[15.3px] text-center">
            We make international moves to Gulf countries stress-free, handling
            packing and customs paperwork to ensure a seamless process.
          </p>
          <div className="flex gap-x-3 w-full mt-5">
            <Button size={"sm"}>Book Now</Button>
            <Button size={"sm"} variant={"secondary"}>
              Service Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
