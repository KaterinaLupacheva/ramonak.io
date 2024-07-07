import Image, { StaticImageData } from "next/image";
import bankImage from "./images/image_bank.png";
import programmingImage from "./images/programming.png";

type ContentItemProps = {
  imageSrc: StaticImageData;
  children: React.ReactNode;
  sectionTitle: string;
  isReverse?: boolean;
};

export default async function Content() {
  return (
    <>
      <ContentItem imageSrc={bankImage} sectionTitle="Banking Career">
        <p>
          After graduating from Belarussian State Economic University with a
          Bachelor&rsquo;s degree in finance and credit in 2004, I&rsquo;ve
          spent the next 14 years working as a bank clerk. I&rsquo;ve worked in
          two banks and changed 5 departments in the meantime. Retail and
          corporate lending, collateral evaluation, financial analysis, credit
          risk assessment, accounting reports are among the things that I was
          doing.
        </p>
        <p>
          But gradually my work became like a &ldquo;Groundhog Day&rdquo; -
          every day was the same as the previous one. I liked my work in general
          and my working team, the boss was great and the salary was good, but I
          wanted more. I wanted to learn every day, to move forward, and to have
          more freedom (as a bonus). To look forward to Mondays and not to drag
          my feet to the office every day.
        </p>
        <p>
          I always dreamed to have my own business someday, or at least be my
          own boss. At the same time, I was prone to the automation and
          optimization of all processes in my banking career. And besides, the
          tech industry is booming in Belarus for the last decade.
        </p>
      </ContentItem>
      <ContentItem
        imageSrc={programmingImage}
        sectionTitle="Switching to Programming"
        isReverse
      >
        <p>
          So, at 35, with no relevant degree, I&rsquo;ve decided to completely
          change my professional life and to become somebody like a programmer.
          At the time I didn&apos;t have a clear idea of what exactly I&apos;d
          like to do. I had no friends in the tech industry, nobody who could
          become my mentor in this journey. So my learning path was very curvy
          with lots of trials and errors.
        </p>
        <p>
          While still working at a bank, I&rsquo;ve decided to learn a
          programming language. Simply googling this topic, I&rsquo;ve found out
          that the most popular language at that time was Java (it was 2018).
          So, let&rsquo;s try to learn it! I&rsquo;ve started to do an online
          free course, but my progress was extremely slow. Working full-time and
          having a family with a small kid, I literally had a very small time
          and even less energy to study.
        </p>
        <p>
          So, together with my husband, we made a decision that I&rsquo;ll quit
          my banking job and will study full-time. My last working day in the
          bank was July 13th, 2018. Since then my long and heavy road in
          development began.
        </p>
      </ContentItem>
    </>
  );
}

function ContentItem({
  imageSrc,
  sectionTitle,
  children,
  isReverse = false,
}: ContentItemProps) {
  return (
    <div
      className={`h-full flex ${
        isReverse ? "flex-row-reverse" : "flex-row"
      } px-20 gap-4 bg-white pt-24`}
    >
      <div className="w-1/2 flex justify-center items-center p-20">
        <Image src={imageSrc} alt="image" />
      </div>
      <article className="prose">
        <h2>{sectionTitle}</h2>
        {children}
      </article>
    </div>
  );
}
