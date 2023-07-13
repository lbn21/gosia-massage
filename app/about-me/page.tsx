import { Metadata } from 'next';
import Image from 'next/image';

import { rgbDataURL } from '@app/app/utils/DataURL';
import gosiaImage from '@app/public/images/gosia_mobile_massage_therapist.webp';

export const metadata: Metadata = {
  title: 'Gosia - Mobile Massage Therapist in Wigan',
  description:
    'Meet Gosia, a mobile massage therapist specializing in customized treatments across Wigan. Book your house-visit session today.',
  keywords:
    'Gosia, Massage Therapist in Wigan, Personalized Massages, Wigan Mobile Massage, Relaxation, Rejuvenation, Relaxing Massage, Pregnancy Massage, Post-Injury Massage, Wellness, Health, Therapy',
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
        Hello and welcome! My name is Gosia, and I am your dedicated mobile
        massage therapist here at Gosia Massage. I specialize in providing
        personalized massages in the comfort of your own home in Wigan and
        surrounding areas. My journey into the field of massage therapy was
        driven by a passion for wellness and a belief in the transformative
        power of touch.
      </p>
      <h2>My Philosophy</h2>
      <p>
        I believe that every individual is unique, and so should be their
        massage therapy. That&apos;s why I tailor my mobile massage services to
        meet your specific needs and preferences. Whether you&apos;re seeking
        relaxation, relief from muscle discomfort, or a boost in overall
        rejuvenation, I&apos;m here to help you feel your absolute best.
      </p>
      <h2>My Specializations</h2>
      <h3>Relaxing Massage</h3>
      <p>
        Embark on a serene journey with my tailored mobile massage therapy.
        Experience a revitalizing blend of deep tissue techniques, gentle
        stretching, and acupressure stimulation, all designed to refresh and
        renew.
      </p>
      <h3>Pregnancy Massage</h3>
      <p>
        As an experienced mobile therapist, I offer specialized pregnancy
        massage therapy. Trust in my nurturing touch to address the unique needs
        of expectant mothers, promoting a sense of security and well-being.
      </p>
      <h3>Post-Injury Massage</h3>
      <p>
        Find relief and recovery with my professional post-injury mobile massage
        therapy. My techniques aim to alleviate muscle discomfort, enhance
        mobility, and boost overall rejuvenation.
      </p>
      <h2>Areas I Serve</h2>
      <p>
        I am proud to offer my mobile massage services across Wigan and the
        surrounding areas within a 20-mile radius. This includes major cities
        like Bolton, Leigh, and St Helens. If you are looking for a
        professional, personalized massage experience in the comfort of your own
        home, do not hesitate to reach out.
      </p>
      <p>
        Experience the personalized touch and expertise of Gosia Massage for a
        truly revitalizing and transformative mobile massage experience.
      </p>
    </div>
  );
}
