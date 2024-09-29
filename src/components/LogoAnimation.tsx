import React, { useEffect } from "react";

const LogoAnimation: React.FC = () => {
  useEffect(() => {
    const animatePaths = (selector: string): void => {
      const paths = document.querySelectorAll<SVGPathElement>(selector);
      paths.forEach((path, index) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length.toString();
        path.style.strokeDashoffset = length.toString();
        path.style.animationDelay = `${index * 0.1}s`;
      });
    };

    animatePaths(".logo path");
    animatePaths(".main-logo path");
  }, []);

  return (
    <div className="flex justify-center items-center ">
      <div className="relative w-[650px] z-10 h-[100px] overflow-y-hidden">
        <svg
          width="1344"
          height="148"
          viewBox="0 0 1344 148"
          fill="none"
          className="main-logo absolute top-0 w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="letter1"
            d="M28.3753 141.182C48.2347 141.182 64.0889 140.151 75.9378 138.078C87.7972 136.01 99.1253 132.114 109.917 126.39V144.369H0.416992V4.07764H106.917V22.0776C96.792 16.7495 85.9014 12.9474 74.2503 10.6818C62.5941 8.42139 47.3024 7.28597 28.3753 7.28597V63.8276H95.3337V67.036H28.3753V141.182Z"
            fill="#433730"
          />
          <path
            className="letter2"
            d="M125.309 144.369V4.07764H153.267V71.036L194.246 37.0568C200.632 31.6037 205.96 26.3068 210.225 21.1818C214.486 16.0464 217.548 10.3433 219.413 4.07764H237.413L170.059 60.4318C181.652 54.312 191.579 51.2443 199.829 51.2443C209.564 51.2443 216.09 55.3797 219.413 63.6401L252.184 144.369H224.225L192.038 67.4318C190.314 63.1714 186.918 61.036 181.85 61.036C178.251 61.036 174.189 62.0724 169.663 64.1401C165.132 66.1974 160.668 68.8953 156.267 72.2235L153.267 74.6193V144.369H125.309Z"
            fill="#433730"
          />
          <path
            className="letter3"
            d="M262.783 144.369L318.742 4.07764H346.7L402.658 144.369H389.679L389.283 140.182C388.21 130.854 387.007 122.656 385.679 115.598C384.346 108.531 382.143 101.135 379.075 93.411L374.887 82.8276H315.346L290.762 144.369H262.783ZM345.117 8.07764L316.533 79.6193H373.679L345.117 8.07764Z"
            fill="#433730"
          />
          <path
            className="letter4"
            d="M418.238 144.369C420.233 136.776 421.603 129.411 422.342 122.286C423.077 115.166 423.447 106.869 423.447 97.411V4.07764H443.03L532.947 132.369V48.2443C532.947 40.9266 532.514 33.3693 531.655 25.5776C530.79 17.7756 529.421 10.6089 527.551 4.07764H541.342C537.884 16.4683 536.155 31.1922 536.155 48.2443V144.369H512.759L426.447 21.0776L426.634 97.411C426.634 106.468 426.967 114.729 427.634 122.182C428.296 129.64 429.702 137.041 431.842 144.369H418.238Z"
            fill="#433730"
          />
          <path
            className="letter5"
            d="M599.692 7.28597C589.036 7.28597 580.411 8.42139 573.817 10.6818C567.218 12.9474 560.057 16.7495 552.338 22.0776V4.07764H675.234V22.0776C667.369 16.7495 660.14 12.9474 653.546 10.6818C646.947 8.42139 638.322 7.28597 627.671 7.28597V144.369H599.692V7.28597Z"
            fill="#433730"
          />
          <path
            className="letter6"
            d="M788.928 147.161C770.537 147.161 751.214 143.702 730.969 136.786L732.365 118.786C744.1 127.051 755.058 133.15 765.24 137.077C775.433 141.01 784.662 142.973 792.928 142.973C799.454 142.973 805.282 141.88 810.407 139.682C815.527 137.479 819.521 134.442 822.386 130.577C825.256 126.718 826.699 122.39 826.699 117.598C826.699 115.062 826.292 112.525 825.49 109.994C824.032 105.333 821.001 101.005 816.407 97.015C811.808 93.0202 806.579 89.4889 800.719 86.4316C794.855 83.3639 787.063 79.6296 777.344 75.2233C766.553 70.2962 757.985 66.0983 751.657 62.64C745.324 59.1712 739.985 55.14 735.657 50.5566C731.334 45.9629 729.178 40.8639 729.178 35.265C729.178 24.0723 735.001 15.5098 746.657 9.57747C758.318 3.65039 773.079 0.681641 790.928 0.681641C807.438 0.681641 825.021 3.35352 843.678 8.68164L842.074 26.6608C831.292 19.6087 820.771 14.2181 810.511 10.4941C800.245 6.75977 791.381 4.88997 783.928 4.88997C773.678 4.88997 765.454 6.52539 759.261 9.78581C753.063 13.0514 750.1 18.0098 750.365 24.6608C750.626 29.8587 754.12 34.6243 760.844 38.9525C767.579 43.2858 777.87 48.6504 791.719 55.0358C804.245 60.9004 814.37 65.9994 822.094 70.3275C829.829 74.6608 836.49 79.7962 842.074 85.7233C847.667 91.6556 850.605 98.2181 850.886 105.411C851.271 114.202 848.902 121.734 843.782 127.994C838.657 134.244 831.36 139.005 821.907 142.265C812.449 145.525 801.454 147.161 788.928 147.161Z"
            fill="#433730"
          />
          <path
            className="letter7"
            d="M902.218 144.369H874.26V4.07764H902.218V144.369Z"
            fill="#433730"
          />
          <path
            className="letter8"
            d="M925.998 144.369C927.993 136.775 929.363 129.41 930.102 122.285C930.837 115.166 931.206 106.869 931.206 97.4105V4.07715H950.79L1040.71 132.369V48.2438C1040.71 40.9261 1040.27 33.3688 1039.41 25.5771C1038.55 17.7751 1037.18 10.6084 1035.31 4.07715H1049.1C1045.64 16.4678 1043.91 31.1917 1043.91 48.2438V144.369H1020.52L934.206 21.0771L934.394 97.4105C934.394 106.468 934.727 114.728 935.394 122.181C936.055 129.64 937.462 137.041 939.602 144.369H925.998Z"
            fill="#433730"
          />
          <path
            className="letter9"
            d="M1146.62 147.369C1131.04 147.369 1117.05 144.4 1104.66 138.473C1092.27 132.546 1082.48 123.885 1075.29 112.494C1068.09 101.109 1064.49 87.5513 1064.49 71.8273C1064.49 57.1763 1068.15 44.5252 1075.47 33.869C1082.8 23.2075 1092.8 15.1086 1105.45 9.57731C1118.1 4.05127 1132.29 1.28564 1148.01 1.28564C1164.67 1.28564 1181.19 4.21794 1197.58 10.0773L1196.58 28.0565C1186.98 20.3377 1177.61 14.5461 1168.49 10.6815C1159.37 6.8221 1150.74 4.88981 1142.62 4.88981C1132.75 4.88981 1124.03 7.52523 1116.43 12.7856C1108.85 18.0513 1102.96 25.7127 1098.76 35.7648C1094.57 45.8221 1092.47 57.8429 1092.47 71.8273C1092.47 87.1502 1095.04 100.239 1100.16 111.098C1105.28 121.963 1112.24 130.124 1121.04 135.577C1129.82 141.036 1139.69 143.765 1150.62 143.765C1157.81 143.765 1165 142.301 1172.2 139.369V71.0356H1200.18V136.181C1181.65 143.64 1163.8 147.369 1146.62 147.369Z"
            fill="#433730"
          />
          <path
            className="letter10"
            d="M1315.07 63.4318V4.07764H1343.05V144.369H1315.07V66.6401H1252.71V144.369H1224.76V4.07764H1252.71V63.4318H1315.07Z"
            fill="#433730"
          />
        </svg>
        <svg
          width="997"
          height="209"
          viewBox="0 0 997 209"
          fill="none"
          className="logo absolute top-7 left-[15%] w-[450px] h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="letter1"
            d="M80.5518 38.4325C84.7289 32.3179 85.4737 28.1408 85.0258 26.6512C84.5779 24.7085 82.0414 34.4064 80.5518 38.4325ZM78.3122 44.245C66.682 74.8179 36.2601 148.641 24.1768 153.417C23.7289 153.563 23.1351 153.266 22.8383 152.818C22.6872 152.37 22.8383 151.771 23.2862 151.625C34.4685 147.302 59.2237 81.3804 71.4529 49.021C43.4164 72.5835 14.1872 47.9741 1.95806 97.3387C1.80702 97.7866 1.51014 98.3804 0.911184 98.0835C0.468476 97.9377 0.468476 97.4898 0.614309 97.0418C13.5883 45.7397 48.7862 69.7502 73.0935 44.8439C74.5831 40.8179 76.3747 36.1929 77.1195 33.9585C77.4164 33.0627 84.4268 18.896 86.3695 25.6043C86.8122 27.396 86.6664 33.9585 80.7029 41.5627C79.9529 42.4585 79.2081 43.3543 78.3122 44.245Z"
            fill="#FBFDFA"
          />
          <path
            className="letter2"
            d="M101.13 79.146C96.2084 84.2137 89.3438 95.6981 86.8126 99.2814C93.9688 93.1616 102.917 83.4689 105.302 92.7137C108.432 107.182 126.781 94.5054 132.745 88.9897C133.641 88.245 134.385 88.6877 133.787 89.4377C127.823 95.2502 107.99 108.823 103.214 93.1616C101.13 84.0679 83.2345 105.245 83.0834 105.245C81.7397 105.99 80.4011 105.839 79.9532 104.646C79.2032 104.646 85.3178 88.3908 97.4011 77.5054C99.0417 76.4637 101.276 77.8022 101.13 79.146Z"
            fill="#FBFDFA"
          />
          <path
            className="letter3"
            d="M145.416 87.495C140.349 94.2085 132.448 104.047 130.359 103.75C126.182 102.708 136.916 80.1877 143.781 84.8127C144.375 85.5575 144.974 86.1512 145.567 87.3491L145.416 87.495ZM213.125 21.7293C212.531 19.6408 210.89 18.4481 208.505 18.146C203.833 17.7762 199.104 18.9689 194.448 21.2762C194.812 21.9481 195.177 22.6252 195.479 23.3231C199.765 20.8387 204.057 19.5314 208.203 19.9377C209.995 20.0887 211.036 20.9793 211.338 22.3231C211.932 24.5627 210.739 28.4377 207.161 33.9585C196.719 49.9168 163.911 74.8179 151.385 83.9168C156.953 70.1095 174.531 37.7137 192.734 25.0574C192.573 24.6095 192.463 24.1408 192.291 23.6929C192.146 23.3699 191.979 23.0627 191.823 22.7502C191.812 22.7293 191.817 22.7085 191.807 22.6929C171.286 34.7606 152.515 67.5991 146.166 85.7085C136.323 69.7502 118.276 104.646 130.062 105.542C132.448 105.839 139.156 98.2345 144.375 91.8231C140.495 103.005 140.948 115.531 149.594 118.516C160.182 122.094 183.75 94.8022 190.01 87.495L189.265 86.9012C183.75 93.4637 159.437 119.563 150.338 116.427C142.286 113.297 146.166 95.1043 150.64 86.0054C161.229 78.4012 197.469 52.1512 208.651 35.0002C212.531 28.8856 213.875 24.5627 213.125 21.7293Z"
            fill="#FBFDFA"
          />
          <path
            className="letter4"
            d="M194.63 86.005C194.63 86.005 187.323 95.4009 189.115 96.5936C191.052 97.9373 197.016 90.328 198.959 88.2446C202.089 84.0675 204.026 83.7655 204.922 84.6613C206.266 86.005 206.709 90.63 214.318 95.4009C221.328 98.979 234.005 99.2811 246.979 88.5415C247.724 87.7967 248.172 88.0936 248.021 88.8384C238.625 96.2967 230.422 99.4269 223.266 98.979C209.99 98.2342 203.578 90.9269 202.834 87.6457C199.104 89.2863 192.396 100.62 187.177 98.979C182.849 95.6978 189.115 85.854 190.755 84.5155C192.396 83.0207 195.823 84.0675 194.63 86.005Z"
            fill="#FBFDFA"
          />
          <path
            className="letter5"
            d="M244.14 97.3384C238.474 97.0415 231.166 98.979 227.437 103.453C221.177 110.911 228.036 119.411 235.937 113.594C240.713 110.167 243.396 102.26 244.14 97.3384ZM254.432 85.4061C250.552 85.4061 248.021 95.9947 248.021 95.9947C260.844 96.2967 263.083 94.5051 274.562 88.3905C275.755 88.0936 276.208 88.6874 275.161 89.4374C263.677 96.1457 260.844 97.4894 247.87 97.1874C246.828 104.349 242.651 113.146 236.239 116.281C226.099 121.349 219.385 110.76 225.948 102.854C229.974 97.7863 238.328 95.9947 244.291 95.9947C245.338 91.3749 245.932 83.1717 250.104 80.7863C251.599 80.0415 253.838 79.5936 256.219 80.7863C258.307 82.7238 256.521 85.2603 254.432 85.4061Z"
            fill="#FBFDFA"
          />
          <path
            className="letter6"
            d="M350.36 4.51562C350.37 4.56771 350.386 4.61979 350.396 4.67188C350.438 4.91667 350.474 5.16667 350.49 5.41667C350.506 5.57292 350.5 5.72917 350.485 5.88021C369.615 13.0417 381.995 27.0156 373.886 39.9219C363.896 55.7292 331.084 55.2813 299.021 51.2552C300.657 48.8385 302.245 46.5469 303.771 44.3906C303.651 44.2552 303.532 44.125 303.412 43.974C303.032 43.4948 302.693 42.974 302.349 42.4688C301.839 41.7031 301.302 40.9531 300.797 40.1875C298.729 43.3385 296.469 46.8438 294.099 50.6615C276.506 48.2708 259.203 45.1406 246.974 42.6042C240.261 41.2656 235.641 39.9219 232.36 39.474C217.344 37.2604 208.995 42.8073 204.87 47.4219C205.021 47.6094 205.084 47.8125 205.115 48.0573C205.104 47.9844 205.094 47.9063 205.084 47.8333C205.11 48 205.162 48.1563 205.224 48.3125C205.391 48.6719 205.578 49.0208 205.729 49.3854C205.86 49.7188 205.943 50.0729 206.068 50.4115C206.203 50.1615 206.354 49.901 206.558 49.6146C209.542 45.2917 216.849 39.3229 230.417 41.2656C233.698 41.7135 238.922 42.7552 245.631 43.9479C258.157 46.4844 275.308 49.7656 293.203 52.151C281.422 71.2396 267.854 96.4427 265.318 114.193C263.677 125.526 264.573 134.323 267.104 140.74C268.75 144.766 270.985 147.896 273.521 149.984C276.203 152.219 279.188 153.563 282.469 154.01C285.896 154.458 289.625 154.01 293.203 152.667C294.698 152.073 294.396 149.688 292.459 150.578C287.839 153.266 285.896 153.714 282.62 153.266C279.485 152.818 276.651 151.474 274.266 149.385C271.729 147.297 269.792 144.167 268.297 140.292C265.766 134.026 266.063 125.974 267.703 114.786C270.24 97.1875 285.151 71.9844 297.974 52.75C330.938 56.625 364.938 56.625 374.933 40.5208C383.698 26.5521 370.563 11.75 350.36 4.51562Z"
            fill="#FBFDFA"
          />
          <path
            className="letter7"
            d="M347.199 3.60416C347.199 3.55208 347.219 3.51562 347.23 3.46875C321.225 -4.55209 285.433 -0.166669 268.449 32.9115C268.152 34.1042 270.24 35 270.985 33.2083C271.433 32.3177 271.433 30.6771 271.881 29.7812C288.641 0.130206 322.506 -3.17709 347.162 4.72916C347.157 4.35416 347.199 3.97916 347.199 3.60416Z"
            fill="#FBFDFA"
          />
          <path
            className="letter8"
            d="M300.807 78.547C302 77.3543 307.521 76.6095 305.281 80.9325C302.896 85.1095 298.422 89.8804 298.573 91.3752C306.026 83.62 310.354 83.3231 314.526 84.0679C324.521 86.1564 330.036 95.6981 345.547 88.8387C345.995 88.6929 346.594 88.5418 346.739 88.9897C347.042 89.4377 346.146 89.7345 345.698 90.0314C328.844 96.146 326.161 88.3908 313.338 85.2606C308.266 84.5158 302.302 88.6929 298.125 93.9116C293.948 99.1304 293.651 99.7241 291.411 104.646C290.37 107.031 289.771 107.781 288.578 107.63C288.13 107.328 286.937 107.328 288.13 103.75C291.562 94.9533 293.5 90.1825 300.807 78.547Z"
            fill="#FBFDFA"
          />
          <path
            className="letter9"
            d="M353.599 71.3906C354.495 71.3906 355.24 72.1354 355.088 73.1823C354.943 74.0729 354.047 74.9688 353.151 74.9688C352.109 74.9688 351.51 74.0729 351.51 73.1823C351.661 72.1354 352.557 71.3906 353.599 71.3906ZM346.588 83.3177C347.036 82.276 348.828 81.5313 350.62 82.4271C351.958 82.875 351.958 84.6615 351.661 85.1094C351.51 85.2604 339.432 100.771 347.786 101.516C356.135 102.26 371.349 91.5208 374.776 88.3906C375.224 88.0938 375.823 87.7969 376.12 88.2448C376.417 88.5417 376.12 88.9896 375.823 89.2865C372.687 92.1198 353.151 104.797 345.693 104.047C334.062 103.005 346.588 83.3177 346.588 83.3177Z"
            fill="#FBFDFA"
          />
          <path
            className="letter10"
            d="M387.152 87.7966C388.048 85.8539 386.704 83.9164 385.662 83.7654C378.652 83.0206 369.256 101.812 372.537 104.646C375.371 105.541 383.574 93.1612 387.152 87.7966ZM394.761 84.6612C394.011 84.9633 390.735 89.2862 388.647 93.6143C386.704 97.4893 385.511 101.067 387.454 102.557C393.714 107.63 413.85 90.63 417.277 88.0935L417.876 88.8383C412.355 93.4633 395.803 108.078 386.256 104.349C383.423 103.307 382.381 100.474 383.574 96.2966C379.397 101.812 374.475 107.333 371.938 106.734C361.652 103.75 373.433 80.4893 384.621 81.531C387.303 81.6821 388.792 83.7654 389.391 85.7081C390.735 83.9164 392.074 82.5779 392.371 82.4268C393.568 81.0831 395.506 82.2758 394.761 84.6612Z"
            fill="#FBFDFA"
          />
          <path
            className="letter11"
            d="M484.688 22.4742C484.24 20.2398 482.599 19.0419 480.063 18.8961C458.886 17.1044 428.761 57.0731 415.933 87.495C412.058 95.6981 402.959 117.771 409.969 127.912C412.058 131.49 416.828 130.448 421.302 128.063C426.818 124.927 433.828 118.219 441.438 111.063C449.49 103.453 457.99 95.2502 467.98 88.5419L467.089 87.1981C457.094 94.0575 448.297 102.261 440.245 109.87C432.787 117.026 425.776 123.589 420.558 126.573C416.98 128.511 414.292 128.808 412.802 126.271C408.48 118.37 415.933 99.4273 420.709 88.9898L421.599 88.3909C421.901 87.6461 422.198 87.0471 422.349 86.5992C425.099 84.6513 429.511 81.4742 434.73 77.5419H432.375C428.677 80.344 425.422 82.7346 422.943 84.5159C423.094 84.0679 423.24 83.62 423.542 83.1721C423.985 82.2763 424.136 81.8284 424.287 81.8284H424.136C432.636 62.4429 458.141 18.4481 479.912 20.6825C481.552 20.8336 482.599 21.5784 483.042 22.9221C483.641 25.1565 482.448 29.0367 478.719 34.7034C472.042 44.9638 455.875 59.0523 441.886 70.1669C441.891 70.2086 441.912 70.245 441.912 70.2815V72.0419C456.151 60.9325 473.136 46.4481 480.209 35.5992C484.24 29.6304 485.433 25.1565 484.688 22.4742Z"
            fill="#FBFDFA"
          />
          <path
            className="letter12"
            d="M582.959 82.125C584.897 82.125 584.006 82.125 586.089 82.2761C581.318 90.9271 565.657 124.932 561.485 128.656C561.631 126.87 569.688 110.76 582.959 82.125ZM652.574 15.3073C653.058 15.7813 653.532 16.2708 654.032 16.7292C678.454 11.5625 675.704 42.5365 671.693 58.5625C659.912 106.438 605.928 163.552 554.626 158.484C545.678 157.589 538.516 154.458 533.449 149.839C528.376 145.359 525.246 139.396 523.902 133.135C522.412 125.677 523.303 117.771 526.589 110.76C534.938 93.0156 558.053 82.4271 576.693 82.125C566.704 103.156 557.459 120.755 555.667 128.208C554.324 133.135 556.709 136.266 560.589 133.135C565.808 128.359 582.36 92.5677 587.881 82.5781C594.589 83.3229 601.152 85.1094 607.568 88.0938C614.574 91.375 621.433 95.6979 627.402 101.964C627.699 102.26 627.996 102.563 628.298 102.26C628.595 101.964 628.595 101.516 628.147 101.214C622.183 94.8073 615.47 89.8802 608.313 86.599C602.048 83.6198 595.485 81.8281 588.777 80.9323C599.542 61.9531 612.907 41.9896 629.459 29.0938C628.933 28.7761 628.433 28.4219 627.99 27.9948C611.152 41.1927 597.678 61.474 586.985 80.6354C584.897 80.4896 585.792 80.3386 583.704 80.3386C599.959 47.3802 618.006 15.1667 618.006 14.2708C620.095 10.8386 616.365 9.0521 615.917 8.90105C615.47 8.60418 613.829 8.60418 612.787 10.6927C612.636 10.9896 593.548 46.7813 577.589 80.3386C557.907 80.4896 533.746 91.375 525.095 110.016C521.662 117.323 520.621 125.677 522.261 133.432C523.605 140.141 527.032 146.406 532.402 151.177C537.772 155.948 545.079 159.229 554.475 160.276C608.61 165.495 663.938 113.594 677.511 60.5052C682.595 39.8698 679.886 8.4948 652.574 15.3073Z"
            fill="#FBFDFA"
          />
          <path
            className="letter13"
            d="M687.494 89.4374C690.478 89.1354 694.208 88.5416 695.4 85.5572C695.697 85.1093 695.697 84.6614 695.546 84.5156C692.713 83.4687 688.39 87.3489 687.494 89.4374ZM697.786 86.7499C695.848 91.2239 689.583 91.9687 686.749 92.2708C683.916 113.594 727.463 92.8645 733.28 88.5416C734.624 87.7968 735.072 88.8385 733.874 89.5833C725.973 94.9531 703.603 105.245 691.374 103.156C686.749 102.411 682.723 99.7239 682.275 94.6562C681.53 85.1093 692.864 77.3541 697.489 82.8749C698.234 83.9166 698.53 85.2604 697.786 86.7499Z"
            fill="#FBFDFA"
          />
          <path
            className="letter14"
            d="M730.442 97.3384C724.776 97.0415 717.468 98.979 713.739 103.453C707.479 110.911 714.338 119.411 722.239 113.594C727.015 110.167 729.697 102.26 730.442 97.3384ZM740.734 85.4061C736.859 85.4061 734.322 95.9947 734.322 95.9947C747.145 96.2967 749.385 94.5051 760.864 88.3905C762.062 88.0936 762.51 88.6874 761.463 89.4374C749.979 96.1457 747.145 97.4894 734.171 97.1874C733.13 104.349 728.953 113.146 722.541 116.281C712.401 121.349 705.687 110.76 712.249 102.854C716.276 97.7863 724.63 95.9947 730.593 95.9947C731.635 91.3749 732.234 83.1717 736.411 80.7863C737.901 80.0415 740.135 79.5936 742.526 80.7863C744.614 82.7238 742.822 85.2603 740.734 85.4061Z"
            fill="#FBFDFA"
          />
          <path
            className="letter15"
            d="M769.213 71.3906C770.109 71.3906 770.853 72.1354 770.708 73.1823C770.557 74.0729 769.661 74.9688 768.77 74.9688C767.723 74.9688 767.129 74.0729 767.129 73.1823C767.275 72.1354 768.171 71.3906 769.213 71.3906ZM762.208 83.3177C762.65 82.276 764.442 81.5313 766.234 82.4271C767.577 82.875 767.577 84.6615 767.275 85.1094C767.129 85.2604 755.046 100.771 763.4 101.516C771.749 102.26 786.963 91.5208 790.395 88.3906C790.843 88.0938 791.437 87.7969 791.734 88.2448C792.031 88.5417 791.734 88.9896 791.437 89.2865C788.307 92.1198 768.77 104.797 761.312 104.047C749.682 103.005 762.208 83.3177 762.208 83.3177Z"
            fill="#FBFDFA"
          />
          <path
            className="letter16"
            d="M817.385 82.427C817.682 76.9062 812.463 77.5051 808.734 79.2916C797.401 84.6614 781.145 105.838 785.468 109.271C787.109 110.312 793.526 104.198 800.682 97.1874C806.348 91.8228 812.312 86.0051 817.385 82.427ZM818.874 105.693C808.14 113.146 795.911 123.885 783.083 139.099C781.744 140.885 780.401 142.677 778.911 144.463C769.661 157.141 753.552 186.672 760.562 202.927C762.354 207.104 766.083 208.745 772.791 203.969C790.244 191.891 809.031 131.042 818.874 105.693ZM815.895 88.5416C816.338 87.1978 816.786 86.0051 817.083 84.8124C812.463 88.3905 806.947 93.6093 802.026 98.3801C794.27 105.989 787.26 113 784.427 111.208C775.624 103.604 792.781 80.3384 806.494 75.2655C811.567 73.4791 818.874 74.6718 819.171 81.2343C821.26 80.0416 823.197 79.2916 824.692 79.1457C828.572 78.6978 830.213 83.3176 829.614 87.3489C829.02 90.927 827.973 94.953 826.781 98.9791C838.411 92.1197 847.062 89.1353 850.64 87.9426C851.536 87.6457 851.984 87.4947 852.286 87.3489L852.88 88.3905C852.583 88.5416 851.984 88.8384 851.088 89.1353C847.359 90.328 838.265 93.3124 826.187 100.771C816.937 129.703 793.374 192.042 773.39 206.057C765.932 210.979 761.458 208.891 759.072 203.969C751.171 187.417 768.468 156.844 778.015 143.719C779.354 141.781 780.697 139.989 782.187 138.349C795.614 122.245 808.583 111.208 819.619 103.604C823.052 94.6562 826.031 84.8124 824.093 81.9791C822.901 81.2343 820.218 82.7239 819.171 83.4687C818.874 85.1093 818.427 87.0468 817.531 89.1353"
            fill="#FBFDFA"
          />
          <path
            className="letter17"
            d="M863.464 79.146C858.543 84.2137 851.683 95.6981 849.147 99.2814C856.308 93.1616 865.256 83.4689 867.642 92.7137C870.772 107.182 889.121 94.5054 895.084 88.9897C895.975 88.245 896.72 88.6877 896.126 89.4377C890.162 95.2502 870.324 108.823 865.553 93.1616C863.464 84.0679 845.569 105.245 845.418 105.245C844.079 105.99 842.735 105.839 842.287 104.646C841.543 104.646 847.657 88.3908 859.735 77.5054C861.376 76.4637 863.615 77.8022 863.464 79.146Z"
            fill="#FBFDFA"
          />
          <path
            className="letter18"
            d="M898.51 89.4374C901.494 89.1354 905.218 88.5416 906.411 85.5572C906.713 85.1093 906.713 84.6614 906.562 84.5156C903.729 83.4687 899.406 87.3489 898.51 89.4374ZM908.802 86.7499C906.859 91.2239 900.599 91.9687 897.765 92.2708C894.932 113.594 938.479 92.8645 944.297 88.5416C945.635 87.7968 946.083 88.8385 944.89 89.5833C936.984 94.9531 914.614 105.245 902.385 103.156C897.765 102.411 893.739 99.7239 893.291 94.6562C892.541 85.1093 903.88 77.3541 908.505 82.8749C909.244 83.9166 909.547 85.2604 908.802 86.7499Z"
            fill="#FBFDFA"
          />
          <path
            className="letter19"
            d="M950.704 78.547C951.896 77.3543 957.417 76.6095 955.178 80.9325C952.792 85.1095 948.318 89.8804 948.469 91.3752C955.922 83.62 960.251 83.3231 964.422 84.0679C974.417 86.1564 979.933 95.6981 995.443 88.8387C995.891 88.6929 996.49 88.5418 996.636 88.9897C996.933 89.4377 996.042 89.7345 995.594 90.0314C978.74 96.146 976.053 88.3908 963.23 85.2606C958.162 84.5158 952.193 88.6929 948.021 93.9116C943.844 99.1304 943.547 99.7241 941.308 104.646C940.266 107.031 939.667 107.781 938.475 107.63C938.027 107.328 936.834 107.328 938.027 103.75C941.459 94.9533 943.396 90.1825 950.704 78.547Z"
            fill="#FBFDFA"
          />
        </svg>
      </div>
      <style jsx>{`
        .main-logo path {
          fill-opacity: 0;
          stroke-width: 2;
          fill: #ff7600;
          stroke: #ff7600;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw1 1s ease forwards, fill1 1s ease-out forwards;
        }

        @keyframes draw1 {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fill1 {
          from {
            fill-opacity: 0;
          }
          to {
            fill-opacity: 1;
          }
        }

        .logo path {
          stroke: white;
          stroke-width: 2;
          fill: none;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 1s ease forwards;
        }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoAnimation;