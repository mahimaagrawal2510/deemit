"use client";
import Layout from "../Components/Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { use, useState } from "react";
import Link from "next/link"
import { faUser, faEnvelope, faComment, faPhone, faMobile, faLocationDot, faPaperPlane, faMessage, faXmark} from "@fortawesome/free-solid-svg-icons";
export default function Contactus(){

    const [status, setStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({});
    const handleFormData = (e) => {
        setFormData({
            ...formData,                
            [e.target.name]: e.target.value,  
          })
          console.log("formset");
         console.log("deemit");
         console.log("here");
         console.log("website live");
    }

    const sendMessage = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
              });
          
              const data = await res.json();
            if (res.ok) {
                setStatus("Message sent successfully!");
                
              } else {
                setStatus("Failed to send message. Please try again.");
              }
              setIsLoading(false)
        }catch(err){
            setStatus("An error occurred. Please try again.");
            setIsLoading(false)
        }
        
      };
       
      const popupupHendler = () => {
        setStatus("");
        setFormData({})
      }
  

    return (
        <Layout>
      <div>
<div>
  {status && <div className="fixed bg-black/10 w-full h-full z-20">
    <div className="px-8 py-4 flex flex-col gap-4 w-fit m-auto justify-center items-center h-full">
      <div className="bg-white px-10 py-12 rounded-md relative">
    <div onClick={popupupHendler} className="absolute top-[-12px] right-[-12px] font-bold text-2xl"><FontAwesomeIcon icon={faXmark} className="cursor-pointer" /></div>
      <div className="flex flex-col gap-6 text-2xl items-center">
      <FontAwesomeIcon icon={faMessage} className="text-5xl text-blue-800"/>
        <p>Message sent successfully. Thank you for contacting us.</p></div>
        </div>
        </div>
    </div>}
</div>
<div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-[1440px]">

<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
<div className="space-y-12">
<div className="space-y-4">
<h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">Get in Touch</h1>
<p className="text-xl text-gray-600">We're here to help. Reach out to us with any questions or inquiries. We'd love to hear from you.</p>
</div>
<form action="#" className="space-y-8" method="POST">
<div className="space-y-2 group">
<label className="text-xl font-medium text-gray-700" htmlFor="name">Full Name</label>
<div className="flex items-center relative">
<FontAwesomeIcon icon={faUser} className="h-[16px] absolute left-4"/>
<input className="outline-none form-input block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-primary focus:ring-primary text-xl py-3 pl-12 pr-4 transition" id="name" name="name" placeholder="John Doe" type="text" onChange={handleFormData}/>
</div>
</div>
<div className="space-y-2 group">
<label className="text-xl font-medium text-gray-700" htmlFor="email">Email Address</label>
<div className="flex items-center relative">
<FontAwesomeIcon icon={faEnvelope} className="h-[16px] absolute left-4"/>
<input className="outline-none form-input block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-primary focus:ring-primary text-xl py-3 pl-12 pr-4 transition" id="email" name="email" placeholder="you@example.com" type="email" onChange={handleFormData}/>
</div>
</div>
<div className="space-y-2 group">
<label className="text-xl font-medium text-gray-700" htmlFor="phone">Phone</label>
<div className="flex items-center relative">
<FontAwesomeIcon icon={faPhone} className="h-[16px] absolute left-4"/>
<input className="outline-none form-input block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-primary focus:ring-primary text-xl py-3 pl-12 pr-4 transition" id="phone" name="phone" placeholder="8888888888" type="phone" onChange={handleFormData}/>
</div>
</div>
<div className="space-y-2 group">
<label className="text-xl font-medium text-gray-700" htmlFor="formsubject">Subject</label>
<div className="flex items-center relative">
<FontAwesomeIcon icon={faMobile} className="h-[16px] absolute left-4"/>
<input className="outline-none form-input block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-primary focus:ring-primary sm:text-xl py-3 pl-12 pr-4 transition" id="formsubject" name="formsubject" placeholder="How can we help?" type="text" onChange={handleFormData}/>
</div>
</div>
<div className="space-y-2 group">
<label className="text-xl font-medium text-gray-700" htmlFor="message">Your Message</label>
<div className="flex items-start relative">
<FontAwesomeIcon icon={faComment} className="h-[16px] absolute left-4 top-3"/>
<textarea className="outline-none form-textarea block w-full rounded-lg border-gray-300bg-white shadow-sm focus:border-primary focus:ring-primary sm:text-xl py-3 pl-12 pr-4 transition" id="message" name="message" placeholder="Please describe your inquiry..." rows="5" onChange={handleFormData}></textarea>
</div>
</div>
<div>
<button  className={`cursor-pointer text-white py-3 px-4 rounded-lg w-full flex gap-4 justify-center items-center text-xl ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-800"}`} type="submit" 
onClick={sendMessage}
>
<FontAwesomeIcon icon={faPaperPlane} className="h-[16px]"/>
                                Send Message
                            </button>
</div>
</form>
</div>
<div className="space-y-12">
<div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 space-y-6">
<h2 className="text-3xl font-bold text-gray-900">Our Contact Information</h2>
<div className="space-y-4">
<div className="flex items-start gap-4 text-xl">
<FontAwesomeIcon icon={faPhone} className="h-[16px] mt-1"/>
<div>
<h3 className="font-semibold text-gray-800 ">Phone</h3>
<Link className="text-gray-600 hover:text-primary" href="tel:8439560393">+91-8439560393</Link>
</div>
</div>
<div className="flex items-start gap-4 text-xl">
<FontAwesomeIcon icon={faEnvelope} className="h-[16px] mt-1"/>
<div>
<h3 className="font-semibold text-gray-800">Email</h3>
<Link className="text-gray-600 hover:text-primary" href="mailto:info@wealthpath.com">deemitfundsmart@gmail.com</Link>
</div>
</div>
<div className="flex items-start gap-4 text-xl">
<FontAwesomeIcon icon={faLocationDot} className="h-[16px] mt-1"/>
<div>
<h3 className="font-semibold text-gray-800">Address</h3>
<p className="text-gray-600">F-14, First floor, Block no. 13<br/>
A-8, Narain tower, Sanjay Place<br/>Agra (282002)</p>
</div>
</div>
</div>
</div>
{/* <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
<div className="aspect-w-16 aspect-h-9">
<img alt="Map showing office location" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDppdRW_yNUCKFBQrMzrG3he67bvXWMQ_VhtdrCxnUo5CsEdxTo7XX1iNPMlshezIseENiyebpB08LBeQuuy3TyR28QQnomhWrcTLz8a3Q_Pl4jUQYvVmzDpskkGEE1I2TnNvQZ16POHx9H3trlGT0Ucgwdeoy-rdJnkFa3AHt0BYbW7VicsiuX4hNIGD_PBsPM0WrIEsVnnvuJlBXHEPP7MHZsfsyfKl-vInMwcSJdhNEj1bDI2bFsPyR7trhoXZ9LFkTqXSmsqFw"/>
</div>
</div> */}
</div>
</div>
</div>
</div>
        </Layout>
    )
}