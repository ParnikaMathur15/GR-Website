import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <div className="flex justify-center items-center p-10 gap-28">
        <div className=" rounded-3xl p-5 shadow-[0px_0px_100px_0px_#3182ce]">
          <Image src={"/1.jpeg"} height={20} width={400} />
          <h1 className="text-white text-5xl mt-4">Amaani Arora</h1>
          <div className="flex justify-between mt-6">
            <div className="flex flex-col">
              <p className="text-gray-300 text-xl">President</p>
              <p className="text-gray-300 text-xl">Bca 2nd Year</p>
            </div>
            <div className="flex gap-10 px-5">
              <Instagram className="text-white" size={40} />
              <Linkedin className="text-white" size={40} />
            </div>
          </div>
        </div>
        <div className="shadow-[0px_0px_100px_0px_#3182ce] rounded-3xl p-5">
          <Image src={"/1.jpeg"} height={20} width={400} />
          <h1 className="text-white text-5xl mt-4">Chirag Jain</h1>
          <div className="flex justify-between mt-6">
            <div className="flex flex-col">
              <p className="text-gray-300 text-xl">Vice President</p>
              <p className="text-gray-300 text-xl">Bca 2nd Year</p>
            </div>
            <div className="flex gap-10 px-5">
              <Instagram className="text-white" size={40} />
              <Linkedin className="text-white" size={40} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-10 mt-20">
          <h1 className="text-6xl text-white text-center">Tech Department</h1>
        </div>
        <div className="flex justify-between">
          <div className="flex rounded-r-3xl w-[450px] h-[300px] p-5 justify-end bg-secondary">
            <Image src={"/1.jpeg"} height={20} width={300} />
          </div>
          <div className=" flex justify-between items-start w-[800px] py-16 px-10 rounded-l-3xl shadow-[0px_0px_50px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-6xl">Rohit</h1>
              <div className="flex flex-col mt-10">
                <p className="text-gray-300 text-xl">
                  Head of AI/Emerging Department
                </p>
                <p className="text-gray-300 text-xl">Bca 2nd Year</p>
              </div>
            </div>
            <div className="flex  gap-10 px-5">
              <Instagram className="text-white" size={50} />
              <Linkedin className="text-white" size={50} />
            </div>
          </div>
        </div>
        <div className="flex mt-20 justify-between">
          <div className=" flex flex-row-reverse justify-between items-start w-[800px] py-16 px-10 rounded-r-3xl shadow-[0px_0px_50px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-6xl text-right">Pratham</h1>
              <div className="flex flex-col mt-10">
                <p className="text-gray-300 text-xl text-right">
                  Head of AI/Emerging Department
                </p>
                <p className="text-gray-300 text-xl text-right">Bca 2nd Year</p>
              </div>
            </div>
            <div className="flex  gap-10 px-5">
              <Instagram className="text-white" size={50} />
              <Linkedin className="text-white" size={50} />
            </div>
          </div>
          <div className="flex rounded-l-3xl w-[450px] h-[300px] p-5 justify-start bg-secondary ">
            <Image src={"/1.jpeg"} height={20} width={300} />
          </div>
        </div>
        <div className="flex justify-between mt-20">
          <div className="flex rounded-r-3xl w-[450px] h-[300px] p-5 justify-end bg-secondary">
            <Image src={"/1.jpeg"} height={20} width={300} />
          </div>
          <div className=" flex justify-between items-start w-[800px] py-16 px-10 rounded-l-3xl shadow-[0px_0px_50px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-6xl">Vikas</h1>
              <div className="flex flex-col mt-10">
                <p className="text-gray-300 text-xl">Head of DSA Department</p>
                <p className="text-gray-300 text-xl">Bca 2nd Year</p>
              </div>
            </div>
            <div className="flex  gap-10 px-5">
              <Instagram className="text-white" size={50} />
              <Linkedin className="text-white" size={50} />
            </div>
          </div>
        </div>
        <div className="flex mt-20 justify-between">
          <div className=" flex flex-row-reverse justify-between items-start w-[800px] py-16 px-10 rounded-r-3xl shadow-[0px_0px_50px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-6xl text-right">Ayush Jaiswal</h1>
              <div className="flex flex-col mt-10">
                <p className="text-gray-300 text-xl text-right">
                  Head of DSA Department
                </p>
                <p className="text-gray-300 text-xl text-right">Bca 2nd Year</p>
              </div>
            </div>
            <div className="flex  gap-10 px-5">
              <Instagram className="text-white" size={50} />
              <Linkedin className="text-white" size={50} />
            </div>
          </div>
          <div className="flex rounded-l-3xl w-[450px] h-[300px] p-5 justify-start bg-secondary ">
            <Image src={"/1.jpeg"} height={20} width={300} />
          </div>
        </div>
        <div className="flex justify-between mt-20">
          <div className="flex rounded-r-3xl w-[450px] h-[300px] p-5 justify-end bg-secondary">
            <Image src={"/1.jpeg"} height={20} width={300} />
          </div>
          <div className=" flex justify-between items-start w-[800px] py-16 px-10 rounded-l-3xl shadow-[0px_0px_50px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-6xl">Tushar</h1>
              <div className="flex flex-col mt-10">
                <p className="text-gray-300 text-xl">
                  Head of Web Dev Department
                </p>
                <p className="text-gray-300 text-xl">Bca 2nd Year</p>
              </div>
            </div>
            <div className="flex  gap-10 px-5">
              <Instagram className="text-white" size={50} />
              <Linkedin className="text-white" size={50} />
            </div>
          </div>
        </div>
        <div className="flex mt-20 justify-between">
          <div className=" flex flex-row-reverse justify-between items-start w-[800px] py-16 px-10 rounded-r-3xl shadow-[0px_0px_50px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-6xl text-right">Parnika</h1>
              <div className="flex flex-col mt-10">
                <p className="text-gray-300 text-xl text-right">
                  Head of Web Dev Department
                </p>
                <p className="text-gray-300 text-xl text-right">Bca 2nd Year</p>
              </div>
            </div>
            <div className="flex  gap-10 px-5">
              <Instagram className="text-white" size={50} />
              <Linkedin className="text-white" size={50} />
            </div>
          </div>
          <div className="flex rounded-l-3xl w-[450px] h-[300px] p-5 justify-start bg-secondary ">
            <Image src={"/1.jpeg"} height={20} width={300} />
          </div>
        </div>
      </div>

      <div>
        <div className="mb-10 mt-20">
          <h1 className="text-6xl text-white text-center">Non Tech Department</h1>
        </div>
        <div className="flex justify-between">
          <div className="flex rounded-r-3xl w-[450px] h-[300px] p-5 justify-end bg-secondary">
            <Image src={"/1.jpeg"} height={20} width={300} />
          </div>
          <div className=" flex justify-between items-start w-[800px] py-16 px-10 rounded-l-3xl shadow-[0px_0px_50px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-6xl">Arjun Bhatia</h1>
              <div className="flex flex-col mt-10">
                <p className="text-gray-300 text-xl">
                  Head of PR Department
                </p>
                <p className="text-gray-300 text-xl">Bca 2nd Year</p>
              </div>
            </div>
            <div className="flex  gap-10 px-5">
              <Instagram className="text-white" size={50} />
              <Linkedin className="text-white" size={50} />
            </div>
          </div>
        </div>
        <div className="flex mt-20 justify-between">
          <div className=" flex flex-row-reverse justify-between items-start w-[800px] py-16 px-10 rounded-r-3xl shadow-[0px_0px_50px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-6xl text-right">Priyanshu Ghai</h1>
              <div className="flex flex-col mt-10">
                <p className="text-gray-300 text-xl text-right">
                  Head of PR Department
                </p>
                <p className="text-gray-300 text-xl text-right">Bca 2nd Year</p>
              </div>
            </div>
            <div className="flex  gap-10 px-5">
              <Instagram className="text-white" size={50} />
              <Linkedin className="text-white" size={50} />
            </div>
          </div>
          <div className="flex rounded-l-3xl w-[450px] h-[300px] p-5 justify-start bg-secondary ">
            <Image src={"/1.jpeg"} height={20} width={300} />
          </div>
        </div>
        <div className="flex justify-between mt-20">
          <div className="flex rounded-r-3xl w-[450px] h-[300px] p-5 justify-end bg-secondary">
            <Image src={"/1.jpeg"} height={20} width={300} />
          </div>
          <div className=" flex justify-between items-start w-[800px] py-16 px-10 rounded-l-3xl shadow-[0px_0px_50px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-6xl">Mayank</h1>
              <div className="flex flex-col mt-10">
                <p className="text-gray-300 text-xl">Head of Publicity Department</p>
                <p className="text-gray-300 text-xl">Bca 2nd Year</p>
              </div>
            </div>
            <div className="flex  gap-10 px-5">
              <Instagram className="text-white" size={50} />
              <Linkedin className="text-white" size={50} />
            </div>
          </div>
        </div>
        <div className="flex mt-20 justify-between">
          <div className=" flex flex-row-reverse justify-between items-start w-[800px] py-16 px-10 rounded-r-3xl shadow-[0px_0px_50px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-6xl text-right">Sakshi</h1>
              <div className="flex flex-col mt-10">
                <p className="text-gray-300 text-xl text-right">
                  Head of Publicity Department
                </p>
                <p className="text-gray-300 text-xl text-right">Bca 2nd Year</p>
              </div>
            </div>
            <div className="flex  gap-10 px-5">
              <Instagram className="text-white" size={50} />
              <Linkedin className="text-white" size={50} />
            </div>
          </div>
          <div className="flex rounded-l-3xl w-[450px] h-[300px] p-5 justify-start bg-secondary ">
            <Image src={"/1.jpeg"} height={20} width={300} />
          </div>
        </div>
        <div className="flex justify-between mt-20">
          <div className="flex rounded-r-3xl w-[450px] h-[300px] p-5 justify-end bg-secondary">
            <Image src={"/1.jpeg"} height={20} width={300} />
          </div>
          <div className=" flex justify-between items-start w-[800px] py-16 px-10 rounded-l-3xl shadow-[0px_0px_50px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-6xl">Tanya</h1>
              <div className="flex flex-col mt-10">
                <p className="text-gray-300 text-xl">
                  Head of Event Management Department
                </p>
                <p className="text-gray-300 text-xl">Bca 2nd Year</p>
              </div>
            </div>
            <div className="flex  gap-10 px-5">
              <Instagram className="text-white" size={50} />
              <Linkedin className="text-white" size={50} />
            </div>
          </div>
        </div>
        <div className="flex mt-20 justify-between">
          <div className=" flex flex-row-reverse justify-between items-start w-[800px] py-16 px-10 rounded-r-3xl shadow-[0px_0px_50px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-6xl text-right">Shaivi Dhuper</h1>
              <div className="flex flex-col mt-10">
                <p className="text-gray-300 text-xl text-right">
                  Head of Event Management Department
                </p>
                <p className="text-gray-300 text-xl text-right">Bca 2nd Year</p>
              </div>
            </div>
            <div className="flex  gap-10 px-5">
              <Instagram className="text-white" size={50} />
              <Linkedin className="text-white" size={50} />
            </div>
          </div>
          <div className="flex rounded-l-3xl w-[450px] h-[300px] p-5 justify-start bg-secondary ">
            <Image src={"/1.jpeg"} height={20} width={300} />
          </div>
        </div>
        <div className="flex justify-between mt-20">
          <div className="flex rounded-r-3xl w-[450px] h-[300px] p-5 justify-end bg-secondary">
            <Image src={"/1.jpeg"} height={20} width={300} />
          </div>
          <div className=" flex justify-between items-start w-[800px] py-16 px-10 rounded-l-3xl shadow-[0px_0px_50px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-6xl">Bhoomi Arora</h1>
              <div className="flex flex-col mt-10">
                <p className="text-gray-300 text-xl">
                  Head of Graphic Designing Department
                </p>
                <p className="text-gray-300 text-xl">Bca 2nd Year</p>
              </div>
            </div>
            <div className="flex  gap-10 px-5">
              <Instagram className="text-white" size={50} />
              <Linkedin className="text-white" size={50} />
            </div>
          </div>
        </div>
        <div className="flex mt-20 justify-between">
          <div className=" flex flex-row-reverse justify-between items-start w-[800px] py-16 px-10 rounded-r-3xl shadow-[0px_0px_50px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-6xl text-right">Harsh Gupta</h1>
              <div className="flex flex-col mt-10">
                <p className="text-gray-300 text-xl text-right">
                  Head of Graphic Designing Department
                </p>
                <p className="text-gray-300 text-xl text-right">Bca 2nd Year</p>
              </div>
            </div>
            <div className="flex  gap-10 px-5">
              <Instagram className="text-white" size={50} />
              <Linkedin className="text-white" size={50} />
            </div>
          </div>
          <div className="flex rounded-l-3xl w-[450px] h-[300px] p-5 justify-start bg-secondary ">
            <Image src={"/1.jpeg"} height={20} width={300} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
