import { useEffect, useState } from "react";
import Link from "next/link";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import type { CookieValueTypes } from "cookies-next";

export function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        if (!hasCookie('banner')) {
            setCookie('banner', 'true');
        }

        const bannerCookie: CookieValueTypes = getCookie('banner');
        if (bannerCookie === true) {
            setShowBanner(true);
        }

        if (bannerCookie === false) {
            setShowBanner(false);
        }
    }, []);

    const closeBanner = () => {
        setCookie('banner', 'false');
        setShowBanner(false);
    }

    return (
        <div className={`fixed bottom-0 left-0 lg:border p-4 flex flex-col items-center justify-center bg-daa-purple text-white lg:rounded-lg lg:drop-shadow-lg text-sm lg:max-w-[300px] lg:mb-4 lg:mx-4 ${!showBanner && 'hidden'}`}>
            <p className="mb-4 text-center">
                {`This website uses cookies and other tracking technologies. We share information about your use of our site with social media and analytics partners in accordance with our `}
                <Link href="/privacy-policy" className="underline">
                    {`Privacy Policy`}
                </Link>
            </p>
            <button
                type="button"
                className="border rounded-full px-2 py-1 mx-2"
                onClick={closeBanner}
            >{`Got It`}</button>
        </div>
    );
}
