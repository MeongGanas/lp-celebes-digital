import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";

export default function Home() {
    return (
        <div className="font-jakarta flex items-center justify-center bg-[url('/assets/image/home_background.png')] bg-cover bg-center px-5 py-36 sm:py-20 md:px-0">
            <div className="container relative space-y-10 text-center">
                <div className="space-y-5 sm:space-y-10">
                    <h1 className="text-[40px] font-extrabold leading-[60px] tracking-[2%] text-[#292929] md:text-[60px] md:leading-[80px] lg:text-[72px] lg:leading-[90px]">
                        <span className="relative">
                            Buat Bisnismu
                            <svg
                                width="372"
                                height="41"
                                viewBox="0 0 372 41"
                                fill="none"
                                className="absolute -bottom-5 right-2 w-40 md:w-60 lg:w-72"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    className="animate-path"
                                    d="M4.26846 10.2976C4.26846 10.2976 6.66102 9.55921 11.4461 8.08238C16.2398 6.61394 21.2026 5.75693 26.3345 5.51135C31.4672 5.25826 36.0602 5.16217 40.1133 5.22308C44.1664 5.28399 48.6845 5.29071 53.6676 5.24324C58.6506 5.19577 66.1697 5.19327 76.2248 5.23574C86.2884 5.28661 97.2801 5.24789 109.2 5.11957C121.11 4.99789 134.938 4.72197 150.686 4.29179C166.425 3.85322 181.186 3.44637 194.968 3.07124C208.751 2.68859 221.774 2.28649 234.038 1.86492C246.311 1.44423 259.274 1.18802 272.927 1.09629C286.57 1.0112 298.199 0.961287 307.814 0.946552C317.439 0.925178 325.63 1.03612 332.387 1.27937C339.145 1.51511 344.603 1.74429 348.761 1.96692C352.911 2.18867 356.223 2.47078 358.698 2.81326C361.174 3.14823 362.547 3.3552 362.818 3.43416C363.09 3.50562 363.58 3.63198 364.287 3.81324C364.995 3.98699 365.673 4.22618 366.322 4.5308C366.961 4.84206 367.553 5.20572 368.099 5.62179C368.643 6.04538 369.119 6.51541 369.524 7.03189C369.931 7.54086 370.26 8.08414 370.511 8.66171C370.763 9.23176 370.926 9.81601 370.999 10.4145C371.08 11.0213 371.07 11.6194 370.967 12.2086C370.873 12.7988 370.689 13.3688 370.413 13.9189C370.147 14.4698 369.801 14.9827 369.375 15.4577C368.948 15.9401 368.457 16.3672 367.901 16.7388C367.345 17.1104 366.74 17.4241 366.084 17.68C365.428 17.9283 364.742 18.1093 364.026 18.2228C363.309 18.3364 362.585 18.3773 361.854 18.3454C361.114 18.3127 357.999 18.6409 352.509 19.33C347.009 20.0258 341.807 20.5717 336.902 20.9679C331.998 21.3566 325.618 21.8811 317.762 22.5415C309.916 23.1953 302.221 23.9734 294.676 24.8758C287.131 25.7783 279.442 26.6404 271.608 27.4621C263.774 28.2838 255.294 29.1994 246.17 30.2089C237.045 31.2183 229.108 32.2918 222.358 33.4294C215.618 34.5679 209.746 35.6603 204.741 36.7068C199.737 37.7532 195.654 38.6448 192.49 39.3817C189.328 40.1111 186.157 40.3922 182.978 40.2252C179.799 40.0506 178.021 39.9984 177.643 40.0684C177.256 40.1301 176.869 40.1424 176.483 40.1055C176.087 40.0677 175.71 39.9787 175.352 39.8383C174.994 39.698 174.667 39.5189 174.372 39.3012C174.078 39.0759 173.837 38.8217 173.651 38.5384C173.456 38.2468 173.322 37.9421 173.25 37.6243C173.169 37.3057 173.158 36.9899 173.215 36.6769C173.265 36.3555 173.377 36.0554 173.552 35.7763C173.727 35.4973 173.956 35.2461 174.237 35.0228C174.509 34.806 174.823 34.6312 175.179 34.4984C175.526 34.3648 175.896 34.2825 176.289 34.2518C176.673 34.2202 177.056 34.2417 177.439 34.3161C177.832 34.3915 178.196 34.5135 178.533 34.6822C178.879 34.8517 179.18 35.0586 179.435 35.3029C179.7 35.5481 179.91 35.8222 180.067 36.1254C180.224 36.4285 180.32 36.7372 180.355 37.0514C180.38 37.3723 180.345 37.6875 180.251 37.997C180.156 38.3064 180.003 38.5952 179.792 38.8631C179.581 39.1236 179.323 39.3492 179.017 39.5399C178.71 39.7381 178.375 39.8843 178.013 39.9787C177.641 40.0797 177.261 40.1267 176.871 40.1199C176.481 40.1206 176.096 40.0686 175.716 39.9641C175.346 39.8529 174.998 39.6984 174.673 39.5006C174.358 39.3036 174.087 39.073 173.862 38.8088C173.628 38.5362 173.456 38.2468 173.346 37.9406C173.227 37.6259 173.174 37.3099 173.185 36.9925C173.198 36.6676 173.269 36.3597 173.399 36.0688C173.539 35.7713 173.732 35.5015 173.978 35.2596C174.224 35.0102 174.509 34.806 174.83 34.6471C175.162 34.4816 175.328 34.3989 175.328 34.3989C175.328 34.3989 176.373 33.4674 178.465 31.6045C180.555 29.749 183.332 28.1032 186.794 26.6669C190.257 25.223 194.641 23.8596 199.946 22.5765C205.252 21.2934 211.479 20.0377 218.627 18.8092C225.776 17.5808 233.931 16.4561 243.094 15.4352C252.248 14.4058 260.701 13.4763 268.453 12.6467C276.195 11.8162 283.964 10.9428 291.761 10.0265C299.558 9.10265 307.394 8.31517 315.267 7.66404C323.141 7.0129 329.436 6.49925 334.153 6.12307C338.871 5.74689 343.092 5.35751 346.818 4.95493C350.552 4.56075 354.22 4.22849 357.822 3.95814C361.425 3.68028 363.58 3.63198 364.287 3.81324C364.995 3.98699 365.673 4.22618 366.322 4.5308C366.961 4.84206 367.553 5.20572 368.099 5.62179C368.643 6.04538 369.119 6.51541 369.524 7.03189C369.931 7.54086 370.26 8.08414 370.511 8.66171C370.763 9.23176 370.926 9.81601 370.999 10.4145C371.081 11.0138 371.07 11.6118 370.967 12.2086C370.873 12.7988 370.689 13.3688 370.413 13.9189C370.147 14.4698 369.801 14.9827 369.375 15.4577C368.948 15.9401 368.457 16.3672 367.901 16.7388C367.345 17.1104 366.74 17.4241 366.084 17.68C365.428 17.9283 364.742 18.1093 364.026 18.2228C363.309 18.3364 362.585 18.3773 361.854 18.3454C361.114 18.3127 359.702 18.1247 357.617 17.7816C355.522 17.4451 352.47 17.165 348.46 16.9414C344.44 16.7245 339.191 16.5 332.711 16.2681C326.232 16.0287 318.199 15.9177 308.612 15.935C299.026 15.9449 287.513 15.9908 274.075 16.0726C260.627 16.1461 247.745 16.3873 235.427 16.796C223.108 17.2123 210.053 17.6039 196.262 17.9706C182.471 18.3373 167.643 18.7226 151.777 19.1263C135.902 19.5366 121.95 19.7894 109.922 19.8847C97.8852 19.9715 86.8503 19.9758 76.8172 19.8975C66.7763 19.8033 59.1869 19.7156 54.049 19.6346C48.911 19.5535 44.5092 19.4479 40.8435 19.3178C37.1778 19.1878 32.8197 19.1584 27.7694 19.2298C22.7099 19.3003 17.6418 18.8278 12.5652 17.8123C7.48935 16.7892 4.80342 16.2712 4.50745 16.2581C4.22068 16.2458 3.93678 16.2036 3.65575 16.1312C3.36552 16.058 3.09196 15.9561 2.83508 15.8254C2.57748 15.7022 2.3408 15.5545 2.12505 15.3822C1.90929 15.21 1.72293 15.0216 1.56599 14.817C1.40976 14.6049 1.28222 14.3842 1.18337 14.1549C1.08452 13.9255 1.01861 13.6917 0.985623 13.4535C0.962561 13.2086 0.971355 12.9706 1.01201 12.7394C1.05337 12.5007 1.13084 12.273 1.24441 12.0564C1.35798 11.8397 1.50304 11.6336 1.67961 11.4382C1.84625 11.2493 2.04331 11.0824 2.27079 10.9373C2.499 10.7846 2.7477 10.6605 3.0169 10.5649C3.27689 10.4684 3.55279 10.3999 3.84458 10.3595C4.12717 10.3183 4.26846 10.2976 4.26846 10.2976Z"
                                    fill="#E03131"
                                />
                            </svg>
                        </span>
                        <span className="flex items-center justify-center gap-4">
                            Mendunia
                            <span className="flex items-center">
                                <img
                                    src="/assets/image/bumi.png"
                                    alt="bumi"
                                    className="animate-spin-earth h-[50px] md:h-[60px] lg:h-[70px]"
                                />
                                .
                            </span>
                        </span>
                    </h1>

                    <p className="mx-auto max-w-screen-sm text-sm font-medium tracking-[0.5%] md:text-base lg:max-w-screen-md">
                        Kami merancang dan membuat situs web dan aplikasi kustom
                        untuk membantu mendigitalisasikan bisnis anda.
                        Percayakan kebutuhan pengembangan web dan aplikasi anda
                        kepada kami!
                    </p>
                </div>
                <svg
                    width="87"
                    height="71"
                    viewBox="0 0 87 71"
                    className="animate-bounce-x absolute bottom-5 left-2 w-16 sm:left-[20%] md:left-[25%] lg:left-[30%] xl:left-[36%]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="path"
                        d="M2.92843 21.6414C2.92843 21.6414 3.58221 21.7456 4.88976 21.954C6.19461 22.1538 7.48713 22.424 8.76732 22.7645C10.0475 23.1051 11.6231 23.4435 13.494 23.7797C15.3662 24.1202 17.3913 24.5436 19.5692 25.0498C21.7519 25.5546 24.0418 26.1231 26.4389 26.7556C28.8373 27.3923 31.2336 28.0726 33.6275 28.7963C36.0201 29.5156 38.3758 30.2014 40.6945 30.8536C43.0133 31.5058 45.5961 32.2251 48.4432 33.0113C51.295 33.796 54.2098 34.6299 57.1876 35.5129C60.1654 36.396 62.7736 37.2047 65.0123 37.939C67.2524 38.6776 69.4668 39.3174 71.6555 39.8582C73.8455 40.4034 75.614 40.8429 76.9608 41.1769C78.3015 41.508 78.6733 41.1588 78.0761 40.1293C77.4803 39.1041 76.8282 38.0679 76.1198 37.0209C75.4115 35.9739 74.6687 35.0113 73.8916 34.1331C73.1145 33.255 71.9045 31.9563 70.2615 30.2373C68.6185 28.5182 67.223 27.2349 66.0748 26.3873C64.9267 25.5397 63.9405 24.7199 63.1163 23.9277C62.2921 23.1355 61.2698 22.2509 60.0495 21.2739C58.8256 20.3027 57.9502 19.6929 57.423 19.4445C56.8946 19.1918 56.5264 18.9697 56.3184 18.7782C56.1104 18.5867 55.9328 18.3738 55.7855 18.1395C55.6368 17.901 55.5218 17.6519 55.4405 17.3922C55.3579 17.1282 55.3127 16.8572 55.305 16.5793C55.2973 16.3013 55.3267 16.0237 55.3931 15.7463C55.4548 15.4704 55.5538 15.2041 55.6903 14.9476C55.8267 14.691 55.9916 14.4494 56.1849 14.2225C56.3796 14 56.6023 13.7996 56.8531 13.6213C57.0991 13.4445 57.3618 13.2958 57.6412 13.1751C57.9254 13.0528 58.2167 12.9617 58.515 12.9015C58.8148 12.8457 59.1167 12.8225 59.421 12.8318C59.7252 12.8411 60.0214 12.8838 60.3096 12.9599C60.5977 13.036 60.8692 13.1435 61.1241 13.2823C61.3777 13.4167 61.8596 13.867 62.5699 14.6331C63.2788 15.3948 63.9183 16.1711 64.4884 16.962C65.0619 17.7471 65.6647 18.592 66.2967 19.4966C66.9226 20.3983 67.5569 21.4115 68.1997 22.536C68.8411 23.6563 69.4944 24.73 70.1596 25.7573C70.8248 26.7845 71.4953 27.7697 72.1711 28.7129C72.8484 29.6604 73.5104 30.5342 74.1574 31.3343C74.8008 32.1402 75.5546 32.9521 76.4185 33.7698C77.2837 34.5919 78.3188 35.703 79.5235 37.1031C80.7297 38.5074 81.6965 39.8988 82.424 41.2772C83.1529 42.66 83.4265 44.0236 83.2447 45.3683C83.0595 46.7188 82.505 47.7762 81.5813 48.5405C80.6575 49.3049 79.367 49.9108 77.7097 50.3583C76.0476 50.8073 74.5193 51.0338 73.125 51.0379C71.7258 51.0434 70.4325 51.0491 69.2448 51.055C68.0559 51.0565 66.7702 51.0954 65.3879 51.1717C64.007 51.2524 62.5663 51.404 61.0659 51.6265C59.5607 51.8506 58.023 52.1229 56.4528 52.4433C54.8874 52.7623 53.3047 53.127 51.7045 53.5376C50.1044 53.9482 48.3051 54.4235 46.3068 54.9636C44.3084 55.5036 42.8777 55.949 42.0149 56.2999C41.1582 56.6536 40.6263 56.8629 40.4193 56.9277C40.2171 56.991 40.0084 57.0254 39.7934 57.0309C39.5832 57.0349 39.3794 57.0085 39.1818 56.9515C38.9829 56.8902 38.7995 56.8027 38.6317 56.6889C38.4688 56.5736 38.3313 56.4384 38.2193 56.2834C38.1108 56.1225 38.0299 55.9483 37.9764 55.7607C37.9292 55.5759 37.9169 55.3849 37.9398 55.1877C37.9592 54.9963 38.0115 54.8089 38.0968 54.6254C38.1821 54.4418 38.2989 54.2746 38.4473 54.1236C38.5908 53.9742 38.7545 53.8469 38.9383 53.7418C39.1283 53.6396 39.3272 53.5655 39.5348 53.5195C39.7424 53.4735 39.9517 53.4579 40.1625 53.4727C40.3746 53.4918 40.575 53.5408 40.7635 53.6195C40.952 53.6983 41.1195 53.8027 41.2659 53.9327C41.4124 54.0627 41.5333 54.2125 41.6287 54.3822C41.7193 54.5535 41.7786 54.7345 41.8066 54.9253C41.8298 55.1176 41.8214 55.3103 41.7814 55.5034C41.7366 55.698 41.6616 55.8807 41.5564 56.0514C41.4478 56.2279 41.3142 56.3838 41.1557 56.519C40.9923 56.6556 40.8129 56.7664 40.6174 56.8514C40.422 56.9363 40.2171 56.991 40.0027 57.0153C39.7944 57.0425 39.5863 57.0363 39.3784 56.9969C39.1718 56.9618 38.9818 56.8953 38.8085 56.7975C38.629 56.6969 38.4743 56.5743 38.3444 56.4296C38.2097 56.2864 38.1084 56.1233 38.0405 55.9402C37.9692 55.763 37.9322 55.5773 37.9297 55.3833C37.9271 55.1893 37.9568 54.9971 38.0187 54.8066C38.0869 54.619 38.1828 54.444 38.3064 54.2818C38.4349 54.118 38.586 53.9757 38.7596 53.8548C38.9332 53.7339 39.02 53.6735 39.02 53.6735C39.02 53.6735 39.4198 53.4391 40.2193 52.9702C41.0188 52.5014 42.3695 51.5725 44.2713 50.1836C46.1779 48.7932 48.0187 47.7157 49.7934 46.9511C51.5717 46.1806 53.3747 45.5402 55.2027 45.0297C57.0244 44.5165 58.8343 44.1258 60.6323 43.8576C62.429 43.585 64.0998 43.4089 65.6449 43.3291C67.1852 43.2509 68.5736 43.2107 69.8099 43.2086C71.0449 43.2022 72.2885 43.1978 73.5407 43.1955C74.7915 43.1889 74.9188 42.5907 73.9225 41.4009C72.9263 40.2112 71.9129 39.11 70.8822 38.0973C69.8502 37.0804 68.9807 36.1266 68.2737 35.2359C67.5668 34.3453 66.848 33.3918 66.1175 32.3755C65.3905 31.3533 64.6644 30.2834 63.9392 29.1656C63.2201 28.0507 62.5849 27.0093 62.0335 26.0415C61.4821 25.0736 60.8899 24.1447 60.2571 23.2546C59.623 22.3602 58.8584 21.4377 57.9635 20.4871C57.0747 19.5393 56.5264 18.9697 56.3184 18.7782C56.1104 18.5867 55.9328 18.3738 55.7855 18.1395C55.6368 17.901 55.5218 17.6519 55.4405 17.3922C55.3579 17.1282 55.3127 16.8572 55.305 16.5793C55.2973 16.3013 55.3267 16.0237 55.3931 15.7463C55.4548 15.4704 55.5538 15.2041 55.6903 14.9476C55.8267 14.691 55.9916 14.4494 56.1849 14.2225C56.3796 14 56.5999 13.8004 56.8459 13.6236C57.0967 13.4453 57.3618 13.2958 57.6412 13.1751C57.9206 13.0543 58.2119 12.9632 58.515 12.9015C58.8148 12.8457 59.1167 12.8225 59.421 12.8318C59.7252 12.8411 60.0214 12.8838 60.3096 12.9599C60.5977 13.036 60.8692 13.1435 61.1241 13.2823C61.3777 13.4167 61.6252 13.5151 61.8667 13.5773C62.1034 13.641 62.6902 14.0632 63.6271 14.8438C64.5653 15.6288 65.4665 16.4135 66.3305 17.198C67.1946 17.9824 67.9646 18.8295 68.6406 19.7394C69.3118 20.6507 69.9515 21.6812 70.5599 22.8308C71.1668 23.9761 72.3026 25.4595 73.9671 27.2811C75.6316 29.1028 76.8988 30.5165 77.7687 31.5225C78.6401 32.5327 79.437 33.5757 80.1597 34.6515C80.8872 35.7258 81.5763 36.7789 82.227 37.8106C82.8777 38.8424 83.4552 39.8259 83.9594 40.761C84.4587 41.6976 84.4252 42.7559 83.8589 43.9358C83.2925 45.1157 82.1087 45.674 80.3073 45.6106C78.506 45.5472 76.9319 45.3486 75.585 45.0146C74.2382 44.6807 72.42 44.2258 70.1305 43.65C67.8457 43.0727 65.6019 42.4231 63.3988 41.7015C61.1958 40.9798 58.6202 40.1823 55.6719 39.309C52.7174 38.4328 49.8129 37.5981 46.9583 36.8047C44.1051 36.0157 41.5051 35.2924 39.1583 34.6347C36.8114 33.977 34.4667 33.2925 32.1242 32.5813C29.7817 31.87 27.4321 31.2036 25.0755 30.5823C22.7175 29.9566 20.4825 29.3946 18.3705 28.8963C16.2647 28.4008 14.2198 27.9646 12.2357 27.5877C10.253 27.2153 8.67168 26.8668 7.4917 26.5424C6.3179 26.2208 5.08977 25.9115 3.80733 25.6144C2.53106 25.3201 1.8192 25.1486 1.67174 25.0997C1.52563 25.0551 1.3899 24.9931 1.26456 24.9135C1.1344 24.8355 1.01838 24.7435 0.916501 24.6376C0.814624 24.5316 0.728244 24.4161 0.65736 24.291C0.586476 24.1659 0.535528 24.0369 0.504516 23.9041C0.470794 23.7626 0.455279 23.6201 0.457969 23.4767C0.46412 23.3275 0.487423 23.1824 0.527881 23.0414C0.568338 22.9005 0.629033 22.765 0.709966 22.6352C0.78473 22.5025 0.876273 22.3811 0.984593 22.2712C1.09156 22.1569 1.21116 22.0577 1.34341 21.9736C1.4743 21.8851 1.61543 21.8124 1.76679 21.7555C1.91333 21.7001 2.0653 21.6621 2.22268 21.6413C2.37871 21.6162 2.53534 21.61 2.69258 21.6225C2.84981 21.6351 2.92843 21.6414 2.92843 21.6414Z"
                        fill="#E03131"
                    />
                </svg>

                <Button
                    className="hover:bg-red bg-primary p-6 font-semibold transition hover:scale-105"
                    asChild
                >
                    <Link href="#about">Pelajari Lebih Lanjut</Link>
                </Button>
            </div>
        </div>
    );
}
