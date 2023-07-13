import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connect with Gosia: Mobile Massage Therapy, Wigan',
  description:
    'Contact Gosia, your mobile massage therapist in Wigan, for personalized home sessions. Answering your queries, scheduling appointments, and fostering wellness.',
  keywords:
    'Contact Gosia, Mobile Massage Wigan, Book a Massage, Home Visit Massage, Wigan Massage Therapist, Mobile Therapy, Wellness, Health, Contact Massage Therapist',
};

export default function ContactMe() {
  const phone = `${process.env.NEXT_PUBLIC_PHONE}`;
  return (
    <div className="prose balance-text mx-auto my-12 px-4">
      <h1 className="text-center">Get in Touch with Gosia</h1>
      <hr />
      <p>
        Ready to experience a personalised massage in the comfort of your home?
        I, Gosia, your dedicated mobile massage therapist, am here to answer
        your questions and arrange your session.
      </p>
      <h2>How to Contact Me</h2>
      <p>
        SMS:{' '}
        <a
          title="Book a Massage with Gosia via SMS"
          rel="noopener noreferrer"
          target="_blank"
          href={`sms:+44${phone}`}
        >
          {`+44 ${phone}`}
        </a>{' '}
        <br />
        WhatsApp: <a href={`https://wa.me/44${phone}`}>{`+44 ${phone}`}</a>
      </p>
      <h2>Areas I Serve</h2>
      <p>
        I offer services in Wigan and surrounding areas within a 20-mile radius,
        encompassing significant locales like Bolton, Leigh, and St Helens.
      </p>
      <h2>Scheduling an Appointment</h2>
      <p>
        To discuss your specific needs and set up a massage session, please
        reach out via SMS or WhatsApp. I&apos;m available for home visits
        throughout the week.
      </p>
      <h2>Questions and Feedback</h2>
      <p>
        I value your feedback and am available to clarify any queries you might
        have regarding my mobile massage services. Please don&apos;t hesitate to
        contact me. Your wellness journey begins here.
      </p>
    </div>
  );
}
