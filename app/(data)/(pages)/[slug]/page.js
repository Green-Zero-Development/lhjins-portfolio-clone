import { apiUrl } from '../../../global-settings.js';
import { notFound } from 'next/navigation';
import ThankYou from "../../../templates/ThankYou.js";
import Faqs from "../../../templates/Faqs.js";
import CompaniesWeRepresent from "../../../templates/CompaniesWeRepresent.js";
import ContactUs from "../../../templates/ContactUs.js";
import OurCompany from "../../../templates/OurCompany.js";
import OurHistory from "../../../templates/OurHistory.js";
import OurTeam from "../../../templates/OurTeam.js";
import RequestAQuote from "../../../templates/RequestAQuote.js";

async function getAllPages() {
  const res = await fetch(apiUrl + `/pages/all`)
  if (!res.ok) {
    throw Error(res.statusText);
  } else {
    return res.json();
  }
}

async function getSinglePage(slug) {
  const res = await fetch(apiUrl + `/pages/all/${slug}`)
  if (!res.ok) {
    return notFound();
  } 
  else if (slug == "home" || slug == "404-2" || res == "404") {
    return notFound();
  } else {
    return res.json();
  }
}

export default async function Page({ params: { slug } }) {
  const _page = getSinglePage(slug);
  const page = await _page;

  if (!page.slug) return notFound();

  if (slug == "thank-you") {
    return (
      <>
        <ThankYou pageData={page} />
      </>
    );
  } else if (page.template == "templates/faqs.php") {
    return (
      <>
        <Faqs pageData={page} />
      </>
    );
  } else if (page.template == "templates/companies-we-represent.php") {
    return (
      <>
        <CompaniesWeRepresent pageData={page} />
      </>
    );
  } else if (page.template == "templates/contact-us.php") {
    return (
      <>
        <ContactUs pageData={page} />
      </>
    );
  } else if (page.template == "templates/our-company.php") {
    return (
      <>
        <OurCompany pageData={page} />
      </>
    );
  } else if (page.template == "templates/our-history.php") {
    return (
      <>
        <OurHistory pageData={page} />
      </>
    );
  } else if (page.template == "templates/our-team.php") {
    return (
      <>
        <OurTeam pageData={page} />
      </>
    );
  } else if (page.template == "templates/request-a-quote.php") {
    return (
      <>
        <RequestAQuote pageData={page} />
      </>
    );
  } else {
    return (null);
  }
}

export async function generateStaticParams() {
  const _pages = getAllPages();
  const pages = await _pages;
  return pages.map((pageSing) => ({ 
      slug: pageSing.slug 
  }));
}

export async function generateMetadata({ params: { slug } }) {
  const _page = getSinglePage(slug);
  const page = await _page;

  return {
    title: page.acf.seo.meta_title,
    description: page.acf.seo.meta_description,
    alternates: {
      canonical: page.acf.seo.canonical
    },
    openGraph: {
      title: page.acf.seo.og_title,
      description: page.acf.seo.og_description,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: page.acf.seo.social_image_url
        }
      ]
    },
    twitter: {
      title: page.acf.seo.twitter_title,
      description: page.acf.seo.twitter_description,
    }
  }
}