import { Metadata } from 'next';
import Image from 'next/image';

import gosiaImage from '@app/public/images/gosia_mobile_massage_therapist.webp';
import { rgbDataURL } from '@app/utils/DataURL';

export const metadata: Metadata = {
  title: 'About Gosia - Your Personal Mobile Massage Therapist',
  description:
    "Discover the passion behind Gosia Massage. I'm Gosia, a professional mobile massage therapist specializing in personalized treatments. Book a session now.",
  keywords:
    'Gosia, Massage Therapist, Personalized Massages, Relaxation, Rejuvenation, Relaxing Massage, Pregnancy Massage, Post-Injury Massage, Wellness, Health, Therapy',
};

export default function AboutMe() {
  return (
    <div className="prose balance-text mx-auto my-12 px-4">
      <Image
        src={gosiaImage}
        width={150}
        height={150}
        alt="Portrait of Gosia, professional mobile massage therapist"
        sizes="(min-width: 768px) 744px, 100vw"
        className="mx-auto aspect-square rounded-full object-cover"
        placeholder={'blur'}
        blurDataURL={rgbDataURL(229, 229, 229)}
      />
      <h1 className="text-center">About Gosia</h1>
      <hr />
      <p>
        Hello and welcome! My name is Gosia, and I am your dedicated massage
        therapist here at Gosia Massage. I specialize in delivering personalized
        massages designed to induce relaxation and rejuvenation. My journey into
        the field of massage therapy was driven by a passion for wellness and a
        belief in the transformative power of touch.
      </p>
      <h2>My Philosophy</h2>
      <p>
        I believe that every individual is unique, and so should be their
        massage therapy. That&apos;s why I tailor my services to meet your
        specific needs and preferences. Whether you&apos;re seeking relaxation,
        relief from muscle discomfort, or a boost in overall rejuvenation,
        I&apos;m here to help you feel your absolute best.
      </p>
      <h2>My Specializations</h2>
      <h3>Relaxing Massage</h3>
      <p>
        Embark on a serene journey with my tailored massage therapy. Experience
        a revitalizing blend of deep tissue techniques, gentle stretching, and
        acupressure stimulation, all designed to refresh and renew.
      </p>
      <h3>Pregnancy Massage</h3>
      <p>
        As an experienced therapist, I offer specialized pregnancy massage
        therapy. Trust in my nurturing touch to address the unique needs of
        expectant mothers, promoting a sense of security and well-being.
      </p>
      <h3>Post-Injury Massage</h3>
      <p>
        Find relief and recovery with my professional post-injury massage
        therapy. My techniques aim to alleviate muscle discomfort, enhance
        mobility, and boost overall rejuvenation.
      </p>
      <p>
        Experience the personalized touch and expertise of Gosia Massage for a
        truly revitalizing and transformative massage experience.
      </p>
    </div>
  );
}
