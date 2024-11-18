import { Link } from "@inertiajs/react";
import StudiKasusCard from "../StudiKasusCard";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/Components/ui/button";
import { Portofolio } from "@/types";

export default function StudiKasus({
    portofolios,
}: {
    portofolios: Portofolio[];
}) {
    const { ref, isVisible } = useInView();
    const { ref: svgRef2, isVisible: isVisible2 } = useInView();

    return (
        <div className="relative" id="case">
            <img
                src="/assets/image/halfcircle_2.png"
                className="absolute -top-10 right-0 h-72"
                alt="half circle"
            />
            <div className="font-jakarta container px-5 relative space-y-14 py-20">
                <div className="relative space-y-5 text-center">
                    <svg
                        width="115"
                        height="153"
                        ref={svgRef2}
                        className={`${isVisible2 ? "draw" : ""} path absolute left-10 hidden w-24 md:block`}
                        viewBox="0 0 115 153"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M62.9915 55.4066C73.2127 63.2573 82.9665 74.5788 83.64 88.0815C84.0704 96.7106 78.4252 105.961 70.3266 109.044C62.6781 111.956 53.7113 111.687 48.4778 104.766C45.7499 101.158 44.953 96.812 48.1687 93.2051C53.0817 87.6945 63.4907 88.6923 69.558 91.2409C88.493 99.1944 103.912 119.48 105.61 140.041"
                            stroke="#DD0000"
                            strokeWidth="4"
                            strokeLinecap="round"
                        />
                        <path
                            d="M111.426 125.762C110.436 129.229 107.931 137.072 105.834 140.708"
                            stroke="#DD0000"
                            strokeWidth="4"
                            strokeLinecap="round"
                        />
                        <path
                            d="M105.834 140.708C103.241 138.203 97.1459 132.669 93.5099 130.572"
                            stroke="#DD0000"
                            strokeWidth="4"
                            strokeLinecap="round"
                        />
                        <path
                            d="M7.16695 47.0185L3.05237 33.6228L5.49778 32.8716L7.64067 39.8482L6.90358 39.8188L10.5324 31.3252L13.6072 30.3808L10.2109 38.3504L9.82455 36.58L17.8836 43.7269L15.0066 44.6106L9.59893 39.8174L8.45806 42.5094L9.61235 46.2674L7.16695 47.0185ZM19.3528 43.2756L15.172 29.664L17.5275 28.9405L21.7083 42.5521L19.3528 43.2756ZM24.063 41.8289L21.0585 32.0472L23.414 31.3237L26.4185 41.1054L24.063 41.8289ZM20.7216 30.9504L19.9484 28.4331L22.3039 27.7096L23.0771 30.2269L20.7216 30.9504ZM28.7731 40.3821L24.5923 26.7706L26.9478 26.0471L29.6872 34.9656L28.7053 34.972L31.8282 28.7393L34.7591 27.839L32.3545 32.887L37.8355 37.5986L35.1384 38.427L30.3803 34.3395L31.6945 33.621L29.7176 37.6914L30.013 36.0265L31.1286 39.6586L28.7731 40.3821ZM42.904 36.0418L38.7895 22.646L43.1588 21.3039C44.5733 20.8694 45.8904 20.7797 47.11 21.0348C48.3379 21.2742 49.3942 21.809 50.2789 22.6392C51.1599 23.4574 51.8029 24.5258 52.2079 25.8444C52.6093 27.151 52.6787 28.4021 52.4163 29.5978C52.1502 30.7814 51.5781 31.823 50.6999 32.7224C49.8301 33.6061 48.6879 34.2652 47.2734 34.6997L42.904 36.0418ZM44.6867 33.1329L46.6646 32.5254C47.5756 32.2456 48.3037 31.8186 48.8489 31.2445C49.4023 30.6547 49.7618 29.9671 49.9272 29.1817C50.0889 28.3843 50.028 27.524 49.7445 26.601C49.4573 25.666 49.0249 24.9199 48.4471 24.3628C47.8693 23.8056 47.1877 23.4444 46.4022 23.2789C45.6288 23.1098 44.7865 23.1652 43.8755 23.445L41.8976 24.0526L44.6867 33.1329ZM56.1961 31.959L53.1917 22.1774L55.5472 21.4539L58.5516 31.2355L56.1961 31.959ZM52.8548 21.0806L52.0816 18.5632L54.4371 17.8397L55.2103 20.3571L52.8548 21.0806ZM64.6946 29.5848C63.6517 29.9051 62.6652 29.9392 61.7351 29.6871C60.8133 29.4192 60.0778 28.904 59.5287 28.1412L61.0312 26.7549C61.4523 27.229 61.9325 27.5538 62.4718 27.7292C63.023 27.9009 63.5744 27.9021 64.1258 27.7328C64.5573 27.6002 64.8695 27.3994 65.0623 27.1303C65.2551 26.8612 65.3037 26.5708 65.208 26.2591C65.149 26.0673 65.0472 25.928 64.9025 25.8413C64.7661 25.7389 64.5951 25.6733 64.3896 25.6447C64.1923 25.6003 63.9825 25.5795 63.7603 25.5821L62.022 25.6241C61.1212 25.6384 60.3796 25.4661 59.7971 25.1072C59.2266 24.7446 58.8382 24.2276 58.632 23.5564C58.4479 22.957 58.4376 22.3895 58.6011 21.8539C58.7728 21.3027 59.0897 20.8184 59.5518 20.4009C60.0259 19.9798 60.6166 19.6607 61.3239 19.4434C62.2469 19.1599 63.1301 19.1313 63.9736 19.3576C64.8171 19.5839 65.512 20.0526 66.0584 20.7637L64.5199 22.1611C64.2158 21.7691 63.8255 21.502 63.3489 21.3598C62.8723 21.2176 62.3883 21.222 61.8968 21.3729C61.5013 21.4944 61.2172 21.6801 61.0447 21.9298C60.8721 22.1796 60.8301 22.4483 60.9184 22.736C60.9737 22.9158 61.0695 23.0569 61.2059 23.1593C61.3423 23.2617 61.5073 23.3291 61.7009 23.3615C61.9064 23.3902 62.1342 23.4055 62.384 23.4075L64.0919 23.3945C64.9687 23.3875 65.6965 23.5575 66.2754 23.9045C66.8662 24.2477 67.2683 24.767 67.4819 25.4623C67.6623 26.0496 67.6666 26.6189 67.4949 27.1702C67.3194 27.7094 66.9947 28.1896 66.5206 28.6107C66.0465 29.0318 65.4378 29.3565 64.6946 29.5848ZM70.3224 27.6201L67.3179 17.8385L69.6734 17.115L72.6779 26.8966L70.3224 27.6201ZM66.981 16.7416L66.2078 14.2243L68.5633 13.5008L69.3365 16.0181L66.981 16.7416ZM75.0326 26.1733L72.0281 16.3917L74.2398 15.7124L74.8307 17.6364L74.546 17.3499C74.5933 16.6926 74.8287 16.1349 75.2521 15.6769C75.6838 15.2033 76.2473 14.8596 76.9425 14.6461C77.6618 14.4252 78.345 14.3859 78.9921 14.5282C79.6512 14.6668 80.2232 14.9699 80.7079 15.4376C81.1889 15.8933 81.5418 16.4867 81.7664 17.218L83.6994 23.5113L81.3439 24.2348L79.5821 18.4989C79.4495 18.0673 79.2515 17.7215 78.9879 17.4614C78.7244 17.2013 78.417 17.0333 78.0657 16.9575C77.7228 16.8661 77.3536 16.8811 76.958 17.0026C76.5744 17.1205 76.2604 17.3153 76.0159 17.5871C75.7678 17.847 75.6077 18.1586 75.5356 18.5218C75.4635 18.885 75.4937 19.2824 75.6263 19.7139L77.3881 25.4498L75.0326 26.1733ZM85.871 22.8443L82.8665 13.0626L85.222 12.3391L88.2265 22.1208L85.871 22.8443ZM82.5296 11.9658L81.7564 9.44848L84.1119 8.72498L84.8851 11.2423L82.5296 11.9658ZM90.5377 16.9638L87.5095 7.68141L89.9009 6.94686L92.6055 16.3287L90.5377 16.9638ZM91.624 21.0772L90.8508 18.5599L93.2423 17.8253L94.0155 20.3426L91.624 21.0772Z"
                            fill="#DD0000"
                        />
                    </svg>
                    <h1 className="text-3xl font-bold leading-[120%] md:text-4xl lg:text-[42px]">
                        Studi Kasus
                    </h1>
                    <p className="font-semibold">
                        Kasus Nyata, Dampak Nyata: Solusi yang{" "}
                        <span className="relative">
                            Mengubah
                            <svg
                                ref={ref}
                                className={`${isVisible ? "draw" : ""} path absolute -bottom-2 right-0 w-20 lg:-bottom-2 lg:-right-1 lg:w-[88px]`}
                                width="122"
                                height="10"
                                viewBox="0 0 122 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 7C21.0315 4.61936 69.4756 0.808722 119 4.61124"
                                    stroke="#DD0000"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>{" "}
                        Industri
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {portofolios.length > 0 ? (
                        portofolios.map((portofolio, i) => (
                            <StudiKasusCard portofolio={portofolio} key={i} />
                        ))
                    ) : (
                        <p>Belum ada portofolio yang dibuat.</p>
                    )}
                </div>
                <div className="flex justify-center">
                    <Button
                        variant={"outline"}
                        asChild
                        className="border-2 border-black bg-transparent p-5 hover:bg-black hover:text-white"
                    >
                        <Link href="/case">Selengkapnya</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
