import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton, StandardButton } from "../../components/button";
import { Input } from "../../components/input";
import Layout from "../../layout/layout";

const HomePage = (props) => {
  const gradientStype = {
    background: "linear-gradient(to right, #9980FF 0%, #FDA599 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  };
  return (
    <Layout>
      <div className="mx-auto px-4">
        <div className="flex flex-col">
          <div className="flex flex-col container mx-auto items-start sm:items-center pt-16 md:pt-24">
            <div className="text-app-primary rounded-full p-1 flex bg-app-primary-50 text-xs sm:text-sm font-medium">
              <div className="bg-white rounded-full px-6 py-1">
                <p>We are hiring</p>
              </div>
              <Link to={"/team"} className="items-center flex">
                <div className="flex whitespace-nowrap items-center px-4 gap-1">
                  Join our team
                  <img
                    src="/assets/icon/ico_arrow_right.svg"
                    alt="arrow right"
                  />
                </div>
              </Link>
            </div>
            <p className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl w-3/4 text-app-gray-900 font-medium text-left sm:text-center mt-4">
              <span className="text-gradiend" style={gradientStype}>
                Unlimitedaccessnow
              </span>{" "}
              is a way for family and friends to communicate with their loved
              ones
            </p>
            <p className="mt-6 text-app-gray-500 text-lg md:text-xl max-w-md md:text-center">
              Communication is established through a relationship, this system
              allows family and friends to subscribe to Unlimitedaccessnow
              services.
            </p>
            <div className="flex items-center gap-3 mt-12 flex-col sm:flex-row w-full sm:w-max">
              <StandardButton className="text-lg sm:w-max w-full">
                <div className="flex items-center gap-2 w-full justify-center">
                  <img
                    src="/assets/icon/ico_play.svg"
                    alt="showreel"
                    className="w-5"
                  />
                  <p>Showreel</p>
                </div>
              </StandardButton>
              <PrimaryButton className="text-lg sm:w-max w-full">
                Contact us
              </PrimaryButton>
            </div>
            <img
              src="/assets/image/shape_home_xl.jpg"
              alt="home shape"
              className="mt-16 w-full hidden xl:block"
            />
            <img
              src="/assets/image/shape_home_lg.jpg"
              alt="home shape"
              className="mt-16 w-full hidden md:block xl:hidden"
            />
            <img
              src="/assets/image/shape_home_md.jpg"
              alt="home shape"
              className="mt-16 w-full hidden sm:block md:hidden"
            />
            <img
              src="/assets/image/shape_home_sm.svg"
              alt="home shape"
              className="mt-16 w-full sm:hidden"
            />
            <div className="w-full mt-24 py-16 relative border-b">
              <p className="text-app-gray-500 text-center absolute left-1/2 transform -translate-x-1/2 top-0 font-medium">
                We’ve built office spaces for
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 xl:justify-between w-full">
                <img src="/assets/image/company_1.png" alt="company" />
                <img src="/assets/image/company_2.png" alt="company" />
                <img src="/assets/image/company_3.png" alt="company" />
                <img src="/assets/image/company_4.png" alt="company" />
                <img src="/assets/image/company_5.png" alt="company" />
              </div>
            </div>
            <div className="py-24 flex flex-col lg:flex-row items-center w-full justify-between gap-12">
              <div className="lg:w-1/2 flex flex-col items-start justify-start px-4 lg:max-w-2xl">
                <div className="flex gap-1 ">
                  <img src="/assets/icon/ico_star.svg" alt="star" />
                  <img src="/assets/icon/ico_star.svg" alt="star" />
                  <img src="/assets/icon/ico_star.svg" alt="star" />
                  <img src="/assets/icon/ico_star.svg" alt="star" />
                  <img src="/assets/icon/ico_star.svg" alt="star" />
                </div>
                <p className="text-app-gray-900 font-medium text-3xl sm:text-5xl lg:max-w-lg my-12">UnlimitedAccessNow helped us at every step of communication.</p>
                <div className="flex justify-between items-start w-full flex-col sm:flex-row gap-6">
                  <div className="flex space-x-4">
                    <img src="/assets/image/avatar.png" alt="avatar" className="flex-shrink-0 flex"/>
                    <div className="space-y-1">
                      <p className="text-app-gray-900 font-medium text-lg">Katherine Moss</p>
                      <p className="text-app-gray-500">Lawyer</p>
                    </div>
                  </div>
                  <div className="space-x-8">
                    <button className="border rounded-full border-app-gray-200 p-5 hover:scale-105 active:scale-100 duration-75 transform hover:bg-app-primary-50">
                      <img src="/assets/icon/ico_arrow_left.svg" alt="arrow left" />
                    </button>
                    <button className="border rounded-full border-app-gray-200 p-5 hover:scale-105 active:scale-100 duration-75 transform hover:bg-app-primary-50">
                      <img src="/assets/icon/ico_arrow_right_default.svg" alt="arrow left" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center overflow-hidden">
                <div className="flex gap-4 items-end">
                  <img src="/assets/image/slider_1.jpg" alt="feedback slider" />
                  <img src="/assets/image/slider_2.jpg" alt="feedback slider" />
                </div>
                <div className="flex gap-4 items-start">
                  <img src="/assets/image/slider_3.jpg" alt="feedback slider" />
                  <img src="/assets/image/slider_4.jpg" alt="feedback slider" />
                  <img src="/assets/image/slider_5.jpg" alt="feedback slider" />
                </div>
              </div>
            </div>
            <div className="space-y-16 w-full md:py-24 py-16">
              <div>
                <p className="text-app-primary font-semibold">Our process</p>
                <p className="text-3xl sm:text-4xl text-app-gray-900 font-semibold mt-3">
                  Giving easy communication
                </p>
                <p className="text-xl text-app-gray-500 mt-5">
                  We create happy communication in the world.
                </p>
              </div>
              <div className="flex gap-24 flex-col lg:flex-row items-center">
                <div className="flex flex-col items-center justify-center gap-8 lg:gap-16 lg:px-12 lg:w-1/2">
                  <div className="text-center">
                    <p className="text-app-primary text-5xl md:text-6xl font-semibold">
                      400k+
                    </p>
                    <p className="text-app-gray-900 font-medium mt-3">Users</p>
                    <p className="text-app-gray-500 mt-2">
                      We’ve helped users over 400k to better communicate with
                      their mate.
                    </p>
                  </div>
                  <div className="flex gap-8 xl:flex-row flex-col">
                    <div className="text-center">
                      <p className="text-app-primary text-5xl md:text-6xl font-semibold">
                        10
                      </p>
                      <p className="text-app-gray-900 font-medium mt-3">
                        Industry awards
                      </p>
                      <p className="text-app-gray-500 mt-2">
                        We’ve received 10 industry awards for commercial design.
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-app-primary text-5xl md:text-6xl font-semibold">
                        200k+
                      </p>
                      <p className="text-app-gray-900 font-medium mt-3">
                        5-star reviews
                      </p>
                      <p className="text-app-gray-500 mt-2">
                        We’re proud of our 5-star rating with over 200 reviews.
                      </p>
                    </div>
                  </div>
                </div>
                <img src="/assets/image/process.jpg" alt="process" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-app-gray-50 w-full">
              <div className="container mx-auto pb-24 px-4">
                <div className="pb-16 pt-24 grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div>
                    <p className="text-app-primary font-semibold">Contact us</p>
                    <p className="text-3xl sm:text-4xl text-app-gray-900 font-semibold mt-3">
                      Chat to our friendly team
                    </p>
                    <p className="text-xl text-app-gray-500 mt-5">
                      We’d love to hear from you! Please get in touch.
                    </p>
                  </div>
                  <div className="flex flex-col gap-12">
                    <div className="flex items-start gap-5">
                      <img
                        src="/assets/icon/ico_location.svg"
                        alt="location mark"
                      />
                      <div className="space-y-2">
                        <p className="text-app-gray-900 font-medium text-xl">
                          Melbourne
                        </p>
                        <p className="text-app-gray-500">
                          100 Flinders Street, Melbourne VIC 3000 AU
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <img
                        src="/assets/icon/ico_location.svg"
                        alt="location mark"
                      />
                      <div className="space-y-2">
                        <p className="text-app-gray-900 font-medium text-xl">
                          Sydney
                        </p>
                        <p className="text-app-gray-500">
                          100 George Street, Sydney NSW 2000 AU
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/assets/image/contact_desktop.jpg"
              alt="contact"
              className="transform -translate-y-24 sm:block hidden"
            />
            <img
              src="/assets/image/contact_phone.jpg"
              alt="contact"
              className="transform -translate-y-24 sm:hidden w-full"
            />
          </div>
          <div className="sm:px-12 xl:px-28 w-full pb-16 sm:pb-24">
            <div className="bg-app-gray-50 py-16 text-center w-full flex flex-col items-center px-4">
              <p className="text-app-gray-900 text-3xl font-semibold">
                Still thinking about it?
              </p>
              <p className="text-app-gray-500 text-xl mt-5">
                Sign up for our newsletter and get 10% off your next purchase.
              </p>
              <div className="flex flex-col text-gray-500 text-sm w-full max-w-md">
                <div className="flex gap-4 mt-8 flex-col sm:flex-row">
                  <Input className="w-full" hint="Enter your email" />
                  <PrimaryButton>Subscribe</PrimaryButton>
                </div>
                <div className="mt-2 text-left">
                  We care about your data in our &nbsp;
                  <Link to={"/privacy"}>
                    <span className="underline">privacy policy</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
