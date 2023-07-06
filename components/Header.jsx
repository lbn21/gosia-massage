import Link from 'next/link';

export default function Header() {
  const phone = `0${process.env.NEXT_PUBLIC_PHONE}`;

  return (
    <header className="bg-yellow-400 py-4">
      <div className="container flex items-center justify-between">
        <div className="aspect-[1157/441] h-16">
          <Link href={'/'} title={'Go to Home'}>
            <svg
              viewBox="0 0 1157 441"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M753 25.6573C735.405 25.6573 716.795 31.592 697.156 43.4547C668.313 60.6373 645.915 85.2893 629.957 117.403C639.571 124.767 650.671 129.983 663.251 133.053C675.831 136.12 685.904 137.653 693.473 137.653C736.633 137.653 769.263 126.1 791.356 102.98C802.4 91.1213 807.925 79.2546 807.925 67.3893C807.925 48.5693 797.385 35.8893 776.32 29.3387C768.544 26.884 760.773 25.6573 753 25.6573ZM578.408 359.498C578.408 365.221 583.317 369.108 593.137 371.157C596.408 371.973 599.988 372.384 603.877 372.384C618.4 372.384 636.809 367.169 659.107 356.734C687.337 343.848 709.737 325.54 726.307 301.812C704.827 302.425 686.004 304.06 669.848 306.72C646.528 310.196 624.329 318.688 603.264 332.188C586.695 342.824 578.408 351.927 578.408 359.498ZM625.971 125.379C616.151 146.657 611.243 165.683 611.243 182.453C611.243 217.024 623.103 238.196 646.833 245.967C653.787 247.808 660.896 248.729 668.16 248.729C675.42 248.729 682.735 247.808 690.099 245.967C704.827 242.084 718.021 236.256 729.681 228.477C741.341 220.705 748.705 213.241 751.773 206.079C759.952 187.053 768.751 177.544 778.161 177.544C782.867 177.544 786.035 180.204 787.672 185.521C788.488 187.568 788.695 189.817 788.288 192.272C786.24 208.227 781.843 224.028 775.092 239.677C768.343 255.327 758.831 273.275 746.557 293.528C771.104 293.729 793.503 296.389 813.755 301.505C818.051 302.525 820.199 303.96 820.199 305.801C820.199 308.051 817.229 308.457 811.3 307.028C797.184 303.347 776.828 301.505 750.239 301.505C747.784 301.505 745.123 301.505 742.26 301.505C729.781 319.503 713.159 335.41 692.4 349.217C671.636 363.027 651.436 372.487 631.8 377.601C620.956 380.463 611.751 381.898 604.184 381.898C596.615 381.898 590.271 380.976 585.16 379.133C570.231 373.611 562.76 366.348 562.76 357.351C562.76 354.689 563.48 351.827 564.909 348.759C570.431 336.484 584.953 325.132 608.481 314.699C626.276 306.72 645.04 301.299 664.785 298.439C684.524 295.568 706.669 293.936 731.216 293.528C746.352 267.953 756.683 242.799 762.205 218.045L763.433 212.829C753.615 222.241 742.515 230.577 730.141 237.836C717.761 245.1 706.976 250.163 697.769 253.024C683.041 257.732 670.921 260.081 661.409 260.081C651.897 260.081 643.56 258.755 636.403 256.095C623.311 251.597 612.669 242.592 604.491 229.093C595.693 214.776 591.297 197.693 591.297 177.851C591.297 158.011 596.513 136.733 606.945 114.028C593.445 100.119 586.695 85.3373 586.695 69.6893C586.695 54.04 593.032 39.1573 605.719 25.0453C608.175 22.3893 609.961 21.4147 611.089 22.128C612.209 22.848 611.751 24.6373 609.707 27.5C600.501 39.7733 595.9 52.152 595.9 64.6267C595.9 78.948 601.217 92.3466 611.855 104.823C613.084 102.165 615.329 98.176 618.605 92.856C634.56 66.6747 656.241 46.6293 683.655 32.716C705.135 21.668 725.892 16.1453 745.944 16.1453C751.467 16.1453 756.989 16.5573 762.512 17.3747C788.9 21.468 806.697 32.308 815.903 49.8987C819.584 56.856 821.425 64.3733 821.425 72.4506C821.425 80.5333 818.865 89.1747 813.755 98.3773C802.295 118.223 782.251 132.131 753.615 140.107C738.473 144.404 723.031 146.552 707.281 146.552C674.143 146.552 647.036 139.495 625.971 125.379Z"
                fill="black"
              />
              <path
                d="M868.367 169.257C862.844 169.257 856.295 172.94 848.728 180.304C841.159 187.669 834.408 197.693 828.479 210.375C821.316 225.103 817.74 237.175 817.74 246.583C817.74 255.995 821.316 260.695 828.479 260.695C833.589 260.695 839.316 257.935 845.66 252.411C842.387 247.708 840.752 242.697 840.752 237.377C841.159 228.583 844.741 224.183 851.489 224.183C854.147 224.183 856.347 225.103 858.088 226.944C859.824 228.783 860.696 230.472 860.696 232.007C860.696 233.54 860.489 235.127 860.083 236.764C863.557 231.653 867.547 224.388 872.049 214.977C877.16 204.545 879.72 194.317 879.72 184.292C879.72 174.272 875.931 169.257 868.367 169.257ZM864.992 159.745C879.923 159.745 887.391 169.157 887.391 187.976C887.391 196.565 885.137 205.772 880.64 215.591C874.912 228.891 866.319 240.956 854.867 251.797C857.523 256.913 862.331 259.469 869.288 259.469C874.811 259.469 880.027 256.708 884.936 251.185C891.072 244.845 895.469 239.271 898.129 234.461C900.785 229.659 902.732 226.128 903.961 223.875C905.187 221.628 906.769 218.404 908.716 214.211C910.656 210.02 911.832 207.46 912.245 206.539C912.651 205.619 913.367 205.159 914.392 205.159C916.435 204.957 917.46 205.671 917.46 207.307C917.46 207.92 917.255 208.637 916.848 209.455L915.005 213.748C913.78 216.617 912.857 218.659 912.245 219.887C911.632 221.113 910.556 223.315 909.024 226.483C907.488 229.659 906.155 232.161 905.035 234.001C903.908 235.841 902.372 238.296 900.431 241.367C898.483 244.435 896.751 246.888 895.215 248.729C893.68 250.569 891.788 252.616 889.539 254.867C887.285 257.119 885.137 258.856 883.093 260.081C877.98 263.149 873.171 264.684 868.673 264.684C860.284 264.684 853.739 262.029 849.036 256.708C839.624 263.664 830.932 267.14 822.956 267.14C808.021 267.14 800.556 257.732 800.556 238.911C800.556 230.319 802.803 221.113 807.305 211.295C813.443 196.98 822.081 184.807 833.235 174.78C844.379 164.76 854.968 159.745 864.992 159.745Z"
                fill="black"
              />
              <path
                d="M927.892 259.163C936.889 252.211 941.392 240.956 941.392 225.409C941.392 219.072 940.673 210.375 939.244 199.328C937.812 188.281 937.095 180.817 937.095 176.928C937.095 173.047 937.197 170.385 937.403 168.951C921.856 200.048 912.243 218.965 908.561 225.716C912.856 225.716 915.003 228.783 915.003 234.921C915.003 246.995 919.3 255.072 927.892 259.163ZM904.877 250.876C904.877 252.105 904.98 253.436 905.185 254.867C906.82 260.388 910.601 263.149 916.539 263.149C918.993 263.149 921.037 262.743 922.675 261.924C915.104 257.219 911.016 249.549 910.4 238.911C906.72 242.592 904.877 246.583 904.877 250.876ZM938.324 261.311C940.981 261.721 942.821 261.924 943.847 261.924C952.025 261.924 960.109 257.119 968.088 247.501C972.384 242.185 980.055 228.783 991.099 207.307C991.507 206.284 992.223 205.772 993.248 205.772C995.089 205.571 996.009 206.284 996.009 207.92C996.009 208.331 995.548 209.508 994.629 211.447C993.707 213.395 992.836 215.336 992.021 217.279C991.2 219.225 989.872 222.035 988.032 225.716C986.191 229.399 984.604 232.367 983.275 234.615C981.941 236.869 980.256 239.629 978.212 242.899C976.165 246.175 974.117 248.729 972.077 250.569L965.633 257.321C962.151 260.8 958.063 263.255 953.36 264.684C945.789 267.14 938.425 267.34 931.267 265.297C926.559 267.34 922.368 268.365 918.687 268.365C904.16 268.365 895.367 262.641 892.299 251.185C891.685 248.529 891.377 245.305 891.377 241.519C891.377 237.735 892.657 234.107 895.212 230.625C897.768 227.151 900.477 225.309 903.345 225.103C913.777 205.264 922.675 187.363 930.039 171.405C938.219 154.021 947.732 145.327 958.576 145.327C961.436 145.327 964.252 145.992 967.012 147.319C969.776 148.652 970.796 150.135 970.083 151.768C969.363 153.408 967.881 153.715 965.633 152.691C963.379 151.667 961.436 151.155 959.804 151.155C958.163 151.155 956.733 151.461 955.507 152.075C948.551 155.351 945.076 162.407 945.076 173.247C945.076 178.976 945.889 183.679 947.531 187.363C949.163 191.044 951.005 195.033 953.052 199.328C957.757 209.968 960.109 218.659 960.109 225.409C960.109 232.161 957.963 238.811 953.665 245.353C949.371 251.903 944.255 257.219 938.324 261.311Z"
                fill="black"
              />
              <path
                d="M1032.52 147.78C1029.65 150.236 1026.49 151.461 1023.01 151.461C1019.53 151.461 1016.77 150.236 1014.72 147.78C1012.68 145.327 1011.86 142.361 1012.27 138.881C1012.88 135.407 1014.62 132.436 1017.49 129.983C1020.35 127.527 1023.52 126.301 1027 126.301C1030.47 126.301 1033.29 127.527 1035.43 129.983C1037.58 132.436 1038.35 135.407 1037.74 138.881C1037.12 142.361 1035.38 145.327 1032.52 147.78ZM1002.45 260.388C1006.33 260.388 1010.43 258.448 1014.72 254.559C1022.29 246.995 1031.91 231.548 1043.57 208.227C1044.99 205.159 1046.43 204.237 1047.86 205.465C1048.27 205.877 1048.48 206.539 1048.48 207.46C1048.48 208.38 1047.66 210.633 1046.02 214.211C1044.38 217.791 1042.9 221.012 1041.57 223.875C1040.24 226.743 1037.68 231.391 1033.9 237.836C1030.11 244.28 1026.69 249.243 1023.62 252.717C1015.23 262.335 1007.31 267.14 999.843 267.14C992.373 267.14 987.004 264.889 983.733 260.388C980.46 255.891 978.823 250.876 978.823 245.353C978.823 239.831 980.152 233.8 982.813 227.251L1002.45 177.235C1002.86 176.008 1003.06 174.373 1003.06 172.325C1003.06 170.285 1001.84 167.624 999.383 164.348L1016.26 164.041C1020.96 164.041 1023.72 164.915 1024.54 166.649C1025.36 168.391 1024.75 171.099 1022.7 174.78L998.155 232.161C994.675 239.729 992.939 246.175 992.939 251.492C992.939 257.427 996.107 260.388 1002.45 260.388Z"
                fill="black"
              />
              <path
                d="M1121.5 208.993C1114.75 221.988 1110.71 231.701 1109.38 238.143C1108.05 244.587 1107.39 249.803 1107.39 253.792C1107.39 257.78 1108.92 259.775 1111.99 259.775C1115.87 259.775 1120.68 256.2 1126.41 249.037C1134.8 238.603 1143.08 225.001 1151.27 208.227C1152.08 206.384 1153 205.364 1154.03 205.159C1155.66 204.545 1156.48 205.159 1156.48 207C1156.48 208.025 1156.18 209.253 1155.56 210.681C1136.74 248.729 1120.89 267.752 1108 267.752C1102.07 267.752 1097.26 264.889 1093.58 259.163C1091.74 256.095 1090.82 252.004 1090.82 246.888C1090.82 241.777 1091.84 235.535 1093.89 228.171C1077.52 254.559 1063.41 267.752 1051.54 267.752C1048.27 267.752 1045.3 266.732 1042.65 264.684C1036.51 260.388 1033.44 253.024 1033.44 242.592C1033.44 222.548 1042.13 202.196 1059.52 181.531C1069.34 170.079 1081.41 162.613 1095.73 159.132C1099.61 158.112 1103.29 157.6 1106.77 157.6C1116.18 157.6 1124.16 160.873 1130.71 167.419C1132.75 169.669 1133.36 171.817 1132.55 173.86C1131.73 175.908 1129.99 176.727 1127.33 176.315C1125.08 168.951 1120.17 165.271 1112.6 165.271C1103.81 165.271 1092.97 172.224 1080.08 186.135C1072.71 194.317 1065.86 203.931 1059.52 214.977C1051.54 228.275 1047.55 238.911 1047.55 246.888C1047.55 254.867 1050.11 258.856 1055.23 258.856C1067.5 258.856 1083.55 240.037 1103.4 202.397C1107.28 194.832 1110.56 189.664 1113.22 186.9C1115.87 184.139 1119.25 182.76 1123.34 182.76C1124.16 182.76 1126.26 183.067 1129.63 183.679C1133.01 184.292 1135.51 184.397 1137.15 183.985C1133.47 187.669 1128.25 196.005 1121.5 208.993Z"
                fill="black"
              />
              <path
                d="M798.424 342.482C798.665 344.377 800.199 345.487 801.912 345.487H802.675V345.963H792.263V345.508H793.009C794.041 345.508 794.969 344.496 794.876 343.464L792.705 319.368L782.641 341.743C782.641 341.743 781.309 344.651 781 346.633H780.545L768.301 320.061L766.2 343.468C766.107 344.5 767.035 345.508 768.067 345.512H768.811V345.963H759.539V345.487H760.296C762.009 345.487 763.541 344.377 763.789 342.482L767.392 311.772H767.836L781.201 340.664L794.264 311.782H794.704L798.424 342.482Z"
                fill="black"
              />
              <path
                d="M855.629 332.891L849.857 317.52L843.835 332.891H855.629ZM863.168 342.47C864.139 344.601 865.911 345.487 867.376 345.487H867.777V345.963H856.992V345.491H857.412C858.648 345.491 859.929 344.4 859.233 342.482L856.168 334.328H843.269L840.061 342.513C839.388 344.412 840.663 345.491 841.895 345.491H842.315V345.963H832.677V345.487H833.104C834.564 345.487 836.331 344.601 837.301 342.47L848.163 316.704C848.163 316.704 849.933 312.823 849.933 311.772H850.367L863.168 342.47Z"
                fill="black"
              />
              <path
                d="M914.625 331.84C916.539 333.606 917.032 335.744 917.032 337.681C917.032 342.976 913.571 346.633 908.064 346.633C905.719 346.633 901.839 345.963 899.955 344.019C899.6 342.54 899.781 339.491 900.509 337.341H900.929C900.452 342.277 903.575 345.436 907.837 345.198C911.333 345.004 914.252 342.605 914.252 338.777C914.252 336.906 913.571 335.429 912.372 334.316L903.201 325.799C901.264 324.032 900.605 321.717 900.605 319.865C900.605 315.827 903.563 311.772 909.024 311.772C910.279 311.772 911.857 311.984 913.128 312.261H915.027V318.136H914.564C914.576 315.075 912.161 313.208 909.177 313.208C905.649 313.208 903.285 315.794 903.285 318.715C903.285 319.961 903.705 321.732 905.215 323.131L914.625 331.84Z"
                fill="black"
              />
              <path
                d="M967.119 331.84C969.036 333.606 969.525 335.744 969.525 337.681C969.525 342.976 966.063 346.633 960.557 346.633C958.212 346.633 954.331 345.963 952.448 344.019C952.093 342.54 952.275 339.491 953.003 337.341H953.427C952.941 342.277 956.068 345.436 960.329 345.198C963.825 345.004 966.749 342.605 966.749 338.777C966.749 336.906 966.063 335.429 964.867 334.316L955.695 325.799C953.757 324.032 953.099 321.717 953.099 319.865C953.099 315.827 956.056 311.772 961.516 311.772C962.771 311.772 964.349 311.984 965.62 312.261H967.519V318.136H967.056C967.068 315.075 964.653 313.208 961.669 313.208C958.144 313.208 955.779 315.794 955.779 318.715C955.779 319.961 956.199 321.732 957.707 323.131L967.119 331.84Z"
                fill="black"
              />
              <path
                d="M1024.48 332.891L1018.71 317.52L1012.68 332.891H1024.48ZM1032.02 342.47C1032.99 344.601 1034.76 345.487 1036.23 345.487H1036.63V345.963H1025.84V345.491H1026.26C1027.5 345.491 1028.78 344.4 1028.08 342.482L1025.02 334.328H1012.12L1008.91 342.513C1008.24 344.412 1009.51 345.491 1010.74 345.491H1011.16V345.963H1001.53V345.487H1001.95C1003.41 345.487 1005.18 344.601 1006.15 342.47L1017.01 316.704C1017.01 316.704 1018.78 312.823 1018.78 311.772H1019.21L1032.02 342.47Z"
                fill="black"
              />
              <path
                d="M1100.52 330.381C1098.97 330.381 1098.1 331.163 1098.12 332.549V340.469C1095.93 343.368 1091.46 346.637 1084.27 346.637C1074.09 346.587 1067.06 339.625 1067.06 329.203C1067.06 318.744 1074.09 311.772 1084.26 311.772C1089.52 311.772 1093.05 313.196 1095.87 315.005L1096.83 321.772H1096.43C1094.98 316.288 1090.59 313.208 1084.27 313.208C1076.15 313.208 1070.65 319.606 1070.65 329.206C1070.65 338.764 1076.15 345.161 1084.27 345.205C1088.43 345.205 1092.32 343.604 1095.08 341.051V332.564C1095.08 331.165 1094.16 330.381 1092.61 330.381H1091.86V329.903H1101.24V330.381H1100.52Z"
                fill="black"
              />
              <path
                d="M1153.69 345.963H1133.84L1133.85 345.487H1134.45C1136.13 345.487 1137.49 344.143 1137.52 342.475V315.661C1137.36 314.116 1136.06 312.915 1134.47 312.915H1133.87L1133.86 312.441H1147.85C1149.92 312.423 1152.67 311.944 1153.56 311.567V317.616L1153.08 317.608V316.755C1153.08 315.236 1151.89 313.996 1150.4 313.904H1140.63V328.71H1148.73C1150.01 328.687 1151.05 327.639 1151.05 326.353V325.645L1151.51 325.641V333.217L1151.05 333.215V332.505C1151.05 331.234 1150.04 330.2 1148.78 330.149H1140.63V344.5H1147.5C1152.58 344.5 1154.53 341.875 1156.01 338.227H1156.48L1153.69 345.963Z"
                fill="black"
              />
              <path
                d="M514.692 404.203H505.137V15.6146H514.692V404.203Z"
                fill="black"
              />
              <path
                d="M83.8921 204.749C83.8921 226.811 100.222 244.721 120.347 244.721C143 244.721 158.101 230.729 158.101 209.743C158.101 189.924 141.188 173.84 120.347 173.84C98.476 173.84 83.8921 186.205 83.8921 204.749ZM120.161 170.699C127.684 170.699 134.599 171.536 140.777 173.112C155.351 175.672 172.093 179.351 185.121 179.351C205.797 179.351 219.539 169.032 219.539 153.484C219.539 144.973 212.125 137.988 202.932 137.988C198.872 137.988 195.575 135.067 195.575 131.464H199.459C215.523 131.464 228.607 141.455 228.607 153.484C228.607 171.807 211.78 183.836 186.612 183.836C178.065 183.836 167.029 181.739 156.059 179.411C166.503 185.855 172.535 195.54 172.535 207.339C172.535 229.812 149.072 248.049 120.161 248.049C115.468 248.049 111.198 247.663 106.842 246.915V248.049C106.842 259.576 117.757 260.821 130.71 260.821H142.187C159.024 260.821 175.496 262.699 175.496 283.58C175.496 299.925 151.844 314.117 124.973 314.117C93.5531 314.117 70.7536 301.161 70.7536 284.508C70.7536 273.473 80.9516 264.52 93.5125 264.52H97.2161C97.2161 268.916 93.4869 272.48 88.8901 272.48C80.7151 272.48 74.0855 277.869 74.0855 284.508C74.0855 294.5 95.5495 301.717 124.973 301.717C150.001 301.717 172.163 293.797 172.163 283.58C172.163 275.476 160.983 275.289 147.643 275.26C127.93 275.209 103.509 275.095 103.509 248.049V246.232C82.7473 241.349 69.4584 226.976 69.4584 207.339C69.4584 187.113 92.1729 170.699 120.161 170.699Z"
                fill="black"
              />
              <path
                d="M179.985 283.324H186.459C195.343 283.324 196.271 282.4 196.271 273.517V206.48C196.271 203.173 193.816 200.524 190.143 200.524C189.907 200.524 189.667 200.533 189.42 200.559L178.505 201.483L178.319 200.373L192.567 197.412C199.969 195.932 205.52 191.48 205.52 183.903V183.16H207.005V207.404C207.005 210.365 206.82 222.58 206.635 224.432H208.3C208.852 220.543 209.967 215.177 211.261 211.66C216.812 197.227 225.88 188.9 240.499 188.9C259.885 188.9 265.111 199.631 265.111 213.327V224.432H265.853C266.224 218.324 269.672 208.759 270.48 207.217C276.423 195.852 284.356 188.9 297.867 188.9C313.78 188.9 325.443 197.412 325.443 213.512V248.901C324.233 251.516 323.716 254.115 323.716 256.384C323.716 272.66 335.881 283.509 354.124 283.509C375.167 283.509 392.245 267.093 392.245 246.869C392.245 232.565 380.225 220.959 365.411 220.959C360.819 220.959 357.085 217.395 357.085 213.004H360.788C379.995 213.004 395.577 228.175 395.577 246.869C395.577 270.053 376.677 288.875 353.387 288.875C327.957 288.875 311.005 272.96 311.005 249.087V215.177C311.005 200.188 304.716 192.043 296.2 192.043C279.363 192.043 268.071 209.071 268.071 234.795V273.517C268.071 282.4 269.185 283.324 278.068 283.324H282.876V284.991H242.903V283.324H255.304V282.952C254.009 281.657 253.637 281.105 253.637 278.144V215.177C253.637 200.188 247.344 192.043 238.833 192.043C221.991 192.043 210.704 209.071 210.704 234.795V273.517C210.704 282.4 211.813 283.324 220.696 283.324H227.175V284.991H179.985V283.324Z"
                fill="black"
              />
              <path
                d="M137.667 110.239C137.667 110.239 150.867 148.96 192.587 131.16C173.284 90.1133 137.667 110.239 137.667 110.239Z"
                fill="black"
              />
              <path
                d="M202.097 90.356C202.097 90.356 186.507 113.256 213.117 128.599C227.483 101.449 202.097 90.356 202.097 90.356Z"
                fill="black"
              />
              <path
                d="M178.855 166.456C178.855 166.456 205.611 173.64 211.339 143.464C180.975 138.835 178.855 166.456 178.855 166.456Z"
                fill="black"
              />
              <path
                d="M327.657 200.893C327.657 200.893 335.209 222.221 358.168 212.107C347.225 189.531 327.657 200.893 327.657 200.893Z"
                fill="black"
              />
              <path
                d="M367.927 184.543C367.927 184.543 355.107 198.505 371.605 211.524C384.017 194.564 367.927 184.543 367.927 184.543Z"
                fill="black"
              />
              <path
                d="M351.795 236.72C351.795 236.72 368.127 243.768 374.565 225.128C355.704 219.369 351.795 236.72 351.795 236.72Z"
                fill="black"
              />
              <path
                d="M215.165 7.70801C100.772 7.70801 7.70833 100.772 7.70833 215.165C7.70833 329.557 100.772 422.627 215.165 422.627C329.557 422.627 422.627 329.557 422.627 215.165C422.627 100.772 329.557 7.70801 215.165 7.70801ZM215.165 430.335C96.5219 430.335 0 333.808 0 215.165C0 96.5213 96.5219 0 215.165 0C333.808 0 430.335 96.5213 430.335 215.165C430.335 333.808 333.808 430.335 215.165 430.335Z"
                fill="black"
              />
              <path
                d="M234.963 5.912C119.577 5.912 25.7047 99.784 25.7047 215.165C25.7047 330.551 119.577 424.424 234.963 424.424C350.344 424.424 444.216 330.551 444.216 215.165C444.216 99.784 350.344 5.912 234.963 5.912ZM234.963 428.539C117.308 428.539 21.5901 332.82 21.5901 215.165C21.5901 97.5147 117.308 1.79599 234.963 1.79599C352.613 1.79599 448.332 97.5147 448.332 215.165C448.332 332.82 352.613 428.539 234.963 428.539Z"
                fill="black"
              />
              <path
                d="M226.597 17.5746C110.79 17.5746 16.5713 111.793 16.5713 227.601C16.5713 343.41 110.79 437.627 226.597 437.627C342.405 437.627 436.623 343.41 436.623 227.601C436.623 111.793 342.405 17.5746 226.597 17.5746ZM226.597 440.196C109.374 440.196 14.0016 344.824 14.0016 227.601C14.0016 110.377 109.374 15.0053 226.597 15.0053C343.82 15.0053 439.193 110.377 439.193 227.601C439.193 344.824 343.82 440.196 226.597 440.196Z"
                fill="black"
              />
            </svg>
            <span className="sr-only">Go to Home</span>
          </Link>
        </div>
        <a
          href={`tel:${phone}`}
          target="_blank"
          rel="noopener noreferrer"
          title={`Call Gosia Massage: ${phone}`}
        >
          {phone}
        </a>
      </div>
    </header>
  );
}
