import BookingBar from "../components/common/BookingBar";
import Faq from "../components/contact/Faq";
import Form from "../components/contact/Form";
import Hero from "../components/contact/Hero";
import Informations from "../components/contact/Informations";

export default function Contact() {
  return (
    <>
      <Hero />
      <BookingBar />
      <Informations />
      <Form />
      <Faq />
    </>
  )
}
