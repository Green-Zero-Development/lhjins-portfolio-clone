import { apiUrl } from '../../../../global-settings.js';
import { notFound } from 'next/navigation';
import InsuranceSingle from "../../../../templates/InsuranceSingle.js";

async function getAll() {
    const res = await fetch(apiUrl + `/insurance-types/all`)
    if (!res.ok) {
      throw Error(res.statusText);
    } else {
      return res.json();
    }
  }

async function getSingle(slug) {
  const res = await fetch(apiUrl + `/insurance-types/all/${slug}`);
  if (!res.ok) {
    return notFound();
  } else {
    return res.json();
  }
}

export default async function Page({ params: { slug } }) {
  const _page = getSingle(slug);
  const page = await _page;

  const _pages = getAll();
  const pages = await _pages;
  
  if (!slug) return notFound();

  return (
    <>
      <InsuranceSingle pageData={page} allPages={pages} />
    </>
  );
}

export async function generateStaticParams() {
  const _pages = getAll();
  const pages = await _pages;
  return pages.map((pageSing) => ({ 
      slug: pageSing.slug 
    }));
}

export async function generateMetadata({ params: { slug } }) {
    const _page = getSingle(slug);
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